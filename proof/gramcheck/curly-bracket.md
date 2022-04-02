# Simple script to insert curly brackets

Writing curly brackets for {errror}${error} markup 
can be a hassle. The idea here is to have the computer
insert the brackets and let the annotator get away woth
writing only *errror$error*.

There are many ways of doing it, here is one.

```
#!/bin/bash

while read i
do
	sed 's/ \([\$€£]\) /\1/g;' |\
	sed 's/ \([^ £]*\)£\([^ ,.?$"]*\)\([ .,?"]\)/ {\1}£{\2}\3/g;' |\
	sed 's/ \([^ €]*\)€\([^ ,.?$"]*\)\([ ,.?"]\)/ {\1}€{\2}\3/g;' |\
	sed 's/ \([^ $]*\)$\([^ ,.?$"]*\)\([ ,.?"]\)/ {\1}${\2}\3/g;' |\
	sed 's/^\([^ £]*\)£\([^ ,.?$"]*\)\([ .,?"]\)/{\1}£{\2}\3/g;'  |\
	sed 's/^\([^ €]*\)€\([^ ,.?$"]*\)\([ ,.?"]\)/{\1}€{\2}\3/g;'  |\
	sed 's/^\([^ $]*\)$\([^ ,.?$"]*\)\([ ,.?]"\)/{\1}${\2}\3/g;'  |\
	sed 's/"\([^ £]*\)£\([^ ,.?$"]*\)\([ .,?"]\)/ {\1}£{\2}\3/g;' |\
	sed 's/"\([^ €]*\)€\([^ ,.?$"]*\)\([ ,.?"]\)/ {\1}€{\2}\3/g;' |\
	sed 's/"\([^ $]*\)$\([^ ,.?$"]*\)\([ ,.?]"\)/{\1}${\2}\3/g;'
    
done 
```
