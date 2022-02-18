Foma
====

Foma is a compiler for .lexc and .xfst files, written by Måns Hulden.


* [Foma homepage (wiki)](https://code.google.com/p/foma/)
* [Download foma](https://code.google.com/p/foma/)


Foma basic documentation: Write `help` on the foma command line.


# Graphical presentation of transducers


Install graphviz:


```
sudo port install graphviz
```


Compile the transducer with foma, and save it as a .dot file:


```
foma[0] load stack exemplefile.fst
foma[1] print dot > examplefile.dot
foma[1] quit
```


On the command line


```
dot -T png -O examplefile.dot
```


This command creates a .png file, which can be opened:


`open examplefile.dot.png`



[https://rudifa.wordpress.com/2010/01/10/how-to-run-graphviz-on-the-mac/]
