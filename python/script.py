import requests

r = requests.get(part1, allow_redirects=True)

print('Welecome tho Shitty-Wget-Alternative, this time, Python edition');
part1 = input("The format of dowloaded files is as follows: \n 'part1' + 'number' + 'extension' \n Please provide part1: ");
print("part 1 is: " + part1);

open('./files/n.jpg', 'wb').write(r.content)