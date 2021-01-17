using System;
using System.Net;

namespace cs
{
    class Program
    {
        static void Main(string[] args)
        {
            string part1;
            string extension;
            int number;
            int padding;
            int exampleNumber = 1;

            Console.WriteLine("Welecome to Shitty-Wget-Alternative, cs edition \n The format of dowloaded files is as follows: \n 'part1' + 'number' + 'extension'");
            Console.WriteLine("Please provide part1: ");
                part1 = Console.ReadLine();
            Console.WriteLine("Please provide the number of files you wish to dowload: ");
                number = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Please provide the number of zeros before first number (padding). \n eg. '001' is padding of 2.");
                padding = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Please Provde the extension of the files you wish to download");
                extension = Console.ReadLine();
            ++padding;
            Console.WriteLine("The full url of first file is: \n" + part1 + exampleNumber.ToString().PadLeft(padding, '0') + extension + "\n Downloading.");                              

            for(int i = 1; i <= number; i++){
                Console.WriteLine("Dowloading File no. " + i);
                string filename;
                if (i < 10){
                    filename = i.ToString().PadLeft(padding, '0');
                }else {
                    // filename = "0" + i;
                    filename = i.ToString().PadLeft(padding - 1, '0');
                }
                using (var client = new WebClient()) {
                client.DownloadFile(part1 + filename + extension, "./files/" + i + extension);
                Console.WriteLine("Download Complete!");
                };
            }
            Console.WriteLine("All downloads are complete. Press any key to exit.");
            Console.ReadLine();
        }
    }
}
