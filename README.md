# Caesar cipher CLI tool

## Install

1. Clone repository.
2. Install packages
```
npm i
```

CLI tool should accept 4 options (short alias and full name):

**-s, --shift**: a shift

**-i, --input:** an input file

**-o, --output:** an output file

**-a, --action:** an action encode/decode


## self-rating

1. Manual *<5>*
2. Application read from input file and write to output file in append mode (without overriding)  *<10>*
3. Following test are passed. *<10>*

```
node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt" (passed)
node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt (passed)
node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt (passed)
node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt (passed)
```

4. Test for mandatory parameters. All are passed. *<10>*
```
node my_caesar_cli -a encode -i "./input.txt" -o "./output.txt" (passed)
```
> Result: Command-line argument <shift> is missed.
```
node my_caesar_cli -a encode -s 0 -i "./input.txt" -o "./output.txt" (passed)
```
> Result: Command-line argument <shift> is not integer or zero.
```
node my_caesar_cli -a encode -s 7.5 -i "./input.txt" -o "./output.txt" (passed)
```
> Result: Command-line argument <shift> is not integer or zero.
```
node my_caesar_cli -s 7 -i "./input.txt" -o "./output.txt" (passed)
```
> Result: Command-line argument <action> is missed.
```
node my_caesar_cli -a -s 7 -i "./input.txt" -o "./output.txt" (passed)
```
> Result: Command-line argument <shift> is missed.
```
node my_caesar_cli -a something -s 7 -i "./input.txt" -o "./output.txt" (passed)
```
> Result: Command-line argument <action> has incorrect value. Correct value is decode or encode.

5. File access tests. All passed. 
I am not familiar with custom error handling into NodeJS yet, so error messages I got from message property. *<5>*
```
node my_caesar_cli -a encode -s 7 -i "./input3.txt" -o "./output.txt"
```
> Result: ENOENT: no such file or directory, open 'C:\Projects\rss\rss-nodejs-1\input3.txt'
```
node my_caesar_cli -a encode -s 7 -i "./somedir/input.txt" -o "./output.txt"
```
> Result: ENOENT: no such file or directory, open 'C:\Projects\rss\rss-nodejs-1\somedir\input.txt'

6. Reading from stdin working as expected. *<10>*
```
node my_caesar_cli -a encode -s 7 -o "./output.txt" (passed)
```
7. Writing to stdout working as expected. *<10>*
```
node my_caesar_cli -a encode -s 7 -i "./input.txt" (passed)
```
8. Decoded only ```[A-Z]``` and ```[a-z]``` *<10>*
9. Reading from stdin don't stop until ```Ctrl+C``` pressed. *<10>*
10. Codes situated into separate files. *<10>*
11. Processing long shift (more than 26). *<10>*
12. Processing negative shift too. *<10>*

### Total 110
