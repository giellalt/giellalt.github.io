# heading = large heading with text "heading"


Source:
```
# heading = large heading with text "heading"
```


Headers can't contain formatting markup - if it
does, the text from the start of the formatting and onwards will be placed in a
paragraph following the header.


## heading = medium heading with text "heading"


Source:
```
## heading = medium heading with text "heading"
```


### heading = small heading with text "heading"


Source:
```
### heading = small heading with text "heading"
```


# Links


The source for the above is:


```
[link]     = create a hyperlink to an internal WikiPage called 'Link'.
[this is also a link] = create a hyperlink to an internal WikiPage called 
                        'ThisIsAlsoALink' but show the link as typed with spaces.
[a sample](link) = create a hyperlink to an internal WikiPage called
                    'Link', but display the text 'a sample' to the
                    user instead of 'Link'.
~NoLink    = disable link creation for the word in CamelCase.
[1]        = make a reference to a footnote numbered 1.
[#1]       = mark the footnote number 1.
[[link]    = create text '[link]'.
```


# Formatting


* *text*   = print "text" in italic.
* **text**   = print "text" in bold.
* `text`   = print "text" in monospaced font.


Source for the above list:
```
* *text*   = print "text" in italic.
* **text**   = print "text" in bold.
* `text`   = print "text" in monospaced font.
```


Here's a horizontal ruler:


----


And it's source:
```


----


```


Horizontal rulers require an empty line on each side.\\Otherwise one will get a
syntax/parsing error.


The previous paragraph contained a forced line break. The source looks like the
following:


```
Horizontal rulers require an empty line on each side.\\Otherwise one will get a
syntax/parsing error.
```


Forced line breaks require at least one printing character following it on the
same line (i.e. it can't be the last thing on the line, and just a space after it
isn't enough), otherwise one will get a parsing error.


# Lists


Lists can be nested up to three levels:


* 1 - text     = make a bulleted list item with *1 - text*
* 2 - first level, second item
** 2.1 - next level, first item
** 2.2 - next level - use the numbering to track the level and item nesting
** 2.3 - test
** 2.4 - test
* 3 - test
* 4 - test
** 4.1 - test
** 4.2 - test
*** 4.2.1 - third and final level, first item
*** 4.2.2 - test
*** 4.2.3 - test
*** 4.2.4 - test
** 4.3 - test
* 5 - test


The source code for the bulleted list:


```
* 1 - text     = make a bulleted list item with *1 - text*
* 2 - first level, second item
** 2.1 - next level, first item
** 2.2 - next level - use the numbering to track the level and item nesting
** 2.3 - test
** 2.4 - test
* 3 - test
* 4 - test
** 4.1 - test
** 4.2 - test
*** 4.2.1 - third and final level, first item
*** 4.2.2 - test
*** 4.2.3 - test
*** 4.2.4 - test
** 4.3 - test
* 5 - test
```


The same goes for numbered lists:
# 1 - text     = make a numbered list item with *1 - text*
# 2 - first level, second item
## 2.1 - next level, first item
## 2.2 - next level - use the numbering to track the level and item nesting
## 2.3 - test
## 2.4 - test
# 3 - test
# 4 - test
## 4.1 - test
## 4.2 - test
### 4.2.1 - third and final level, first item
### 4.2.2 - test
### 4.2.3 - test
### 4.2.4 - test
## 4.3 - test
# 5 - test


Source:
```
# 1 - text     = make a numbered list item with *1 - text*
# 2 - first level, second item
## 2.1 - next level, first item
## 2.2 - next level - use the numbering to track the level and item nesting
## 2.3 - test
## 2.4 - test
# 3 - test
# 4 - test
## 4.1 - test
## 4.2 - test
### 4.2.1 - third and final level, first item
### 4.2.2 - test
### 4.2.3 - test
### 4.2.4 - test
## 4.3 - test
# 5 - test
```


It is **NOT** possible to mix numbered and bulleted lists.


Definition lists do not work:


* **term**: ex   = make a definition for *term* with the explanation *ex*


Source:
```
* **term**: ex   = make a definition for *term* with the explanation *ex*
```


# Tables


The following code:


```
|   table | header
| --- | --- 
|   normal | cell
```


gives this table:


|   table | header
| --- | --- 
|   normal | cell
