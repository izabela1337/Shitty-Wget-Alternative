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

Data.question("The format of dowloaded files will be \n 'part1' + 'number' + 'extension' \n Please type part1: ", (part1) => {
    console.log("Part1= " + part1)
        Data.question("Type the number ", (number) => {
            console.log("selected " + number + " Pages. \n")
            Data.question("Type the extension of the file you wish to download: ", (extension) => {
                console.log("Downloading files with " + extension + " extension")
                console.log("Current link is " + part1 + number + extension)
                console.log("Downloading")
                async function Downloading(){
                    for (let i = 1; i < number; i++){
                        console.log("Pobieranie pliku numer " + i)
                        let url = part1 + "00" + i + extension;
                        let path = "./files/00" + i + ".jpg";
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
                    process.exit(1)
                }
                Downloading();
            })
        })
})

