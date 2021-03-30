



When compiling your language, the compiler tells you there is an **Error**
in the compilation of documentation. Now what? This document shows the 
most common errors and how to avoid them.






# Common errors
The most common errors in the generated documentation are the following:


1. You go directly from header level 3 (`!!!`) to header level 1 (`!`). 


2. You include square brackets, e.g. from a twolc rule, say: \\
```   a:0 <=> _ b [ c](d ) ;  ```
  , and
  jspwiki thinks it is an url link with illegal form 

  
3. You have unbalanced marking, say you intend 
```   **word**``` \\
but write   ```   __word_  ``` \\
  The former is correct and gives boldface, the latter
  will break the complation.




# How to find errors




# How to write documentation


The jspwiki rules are treated elsewhere, here we look at debugging.


In langs/LANG/doc, do:


```
make -B
forrest
```


Forrest will tell what file is broken.


Here some advices


* Plan your documentation
** Don't include text if you do not mean it
** The double exclamation mark `!!` does not mean "very important", 
   it means "will be included in a document"
* Read the resulting documentation and see whether it makes any sense.
