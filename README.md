# Bash for Beginners

[By Microsoft](https://www.youtube.com/watch?v=nrfwcbYJZfc&list=PLlrxD0HtieHh9ZhrnEbZKhzk0cetzuX7l)

## Helpful command in Bash

`man` - used to show the developers manual of specific command in bash

`—help` - display you the code that you can use in a specific command.

`pwd` - is Print working directory Used to display the working directory that you working on.

`cd` - is changed working directory

`ls` - returns the content in your current working directory, there might be some hidden files that are hidden in using `ls`, you can add addtional parameter to show all the parameter in ls by adding `-a` (e.g. `ls -a` )

`whereis` - The whereis utility checks the standard binary, and manual page directories for the specified programs, printing out the
paths of any it finds.

`find` - walk a file hierarchy.

`mkdir` - Stands for Make directory

`touch` - creating a file

`mv`- moving files

`rm, unlink` - remove directory entries

## Viewing File Contents in the Terminal with Bash

`cat` - concatenate and print files

`head` - display first lines of a file. The default will return 10 lines or you can override it by passing `-n` flag to see the number of lines.

`tail` - display the last part of the file.

`grep` - file pattern searcher, look specific information in the file.

## Environment Variables

`env` – set environment and execute command, or print environment

`export` - create an environment variable in your current session. (You can persist an environment variable by using the startup files to load the global variables)

## Redirection and Pipelines

You can get the output of the file by using the `>` greater than sign. To avoid overwriting the file you can use the double `>>` to append the contents of the file.

`2>` The 2 value is to get the standard output error in your command and the `>` greater than sign is used to redirect the value to specific file, when combined this will get the error and will redirect the error to a file.

Example

```bash
ls -l ./dir 2> error.txt

# Will create error.txt with the contents of
gls: cannot access './dir': No such file or directory
```

pipe command `|` - is used to pass the output to the command instead of displaying them into standard output.

## Modify file permissions

`ls -l` - to see the list of permissions in the current working directory. (-l option will include the permissions)

The owner the and owner group can do the same thing base on the permission is specified

`chown` – change file owner and group

```bash
# Changing the owner or group of a file or directory
sudo chown root newFile.txt
```

`chmod` - change the permission of a user to a file. You can use the letter to modify the permission to a file.

Example

```bash
chmod +x ./script.sh

# This will set the required permission to execute the file.
```

Octal command you can set specific permission to owner group and others by summing up the total values that permissions that you wanted.

```bash
owner       group        others
r   w   x    r  w  x      r   w   x
(4)(2)(1)   (4)(2)(1)    (4)(2)(1)

example: chmod 664 script.sh
```

## What is a Bash Script

A Bash Script that contains one more commands that is executed in bash shell.

You can execute the bash script in your present working directory and make sure that you have a specified persmission.

If you want to move your bash script executable globally you can move it to `/usr/local/bin` to the `$PATH` so that bash script can enable to recognized it.

## Variables

Variables cannot start with underscore, and in convention you if your variable contains multiple world you can use underscore to separte the word.

Using single quote gives you the literal value but by using double quote it executes the variables to its actual value.

If you want to execute special commands / expression in the variable you can enclosed them into `$()` and it will make the commands or expression executable.

`readonly` - will make you variable unchangeable or not reassignable.

## Conditional Statements

Compound `$(())` command in bash script is meant to execute the expression of the number that is everything inside the double parenthesis example `$((1 + 1))`  will give you an output of `2`

Ending if statement should be written in word `if` backward `fi`
