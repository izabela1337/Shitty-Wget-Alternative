import requests

print('Welecome tho Shitty-Wget-Alternative, this time, Python edition');
part1 = input("The format of dowloaded files is as follows: \n 'part1' + 'number' + 'extension' \n Please provide part1: ");
print("part 1 is: " + part1);
number = int(input("Please provide the number of files you wish to download: "));
padding = int(input("Please provide the number of zeros before first number (padding). \n eg. '001' is padding of 2."));
padding += 1
extension = input("Please provide the extension of files you wish to dowlnoad: ");
print("The full link of the first file is " + part1 + "001" + extension);
print("Downloading...");

for x in range(1, number + 1):
    x = str(x)
    x = x.zfill(padding)
    print('Downloading file no. ' + x)

    r = requests.get(part1 + x + extension, allow_redirects=True)
    open('./files/' + x + '.jpg', 'wb').write(r.content)
    print('Download of file no. ' + x + " complete!")

print("All downloads complete!")

