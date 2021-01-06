const readline = require('readline');
var request = require('request');
const fs = require('fs');

const Data = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function delay (){
    return new Promise(resolve => setTimeout(resolve, 500));
}

Data.question("Podaj numer mangi ", (Hnumber) => {
    console.log("Numer podanej mangi to " + Hnumber)
        Data.question("Podaj ilość stron ", (pages) => {
            console.log("Pobieranie " + pages + " Stron. \n")
            async function Downloading(){
                for (let i = 1; i < pages; i++){
                    console.log("Pobieranie pliku numer " + i)
                    let url = "https://i.nhentai.net/galleries/" + Hnumber + "/" + i + ".jpg";
                    let path = "./files/" + Hnumber + "/00" + i + ".jpg";
                    request.get(url)
                    .on("response", function(response) {
                        console.log(response.statusCode)
                        console.log(response.headers['content-type'])
                    })
                    .pipe(fs.createWriteStream(path));
                    await delay();
                    console.log("Plik numer " + i + " został pobrany. \n");
                }

                console.log("Operacja zakończona.")
            }
            Downloading();
        })
})

