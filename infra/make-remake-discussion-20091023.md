# Remaking make using GNU autotools?


[http://sources.redhat.com/automake/automake.html]


Remake principles:
* split and divide - smaller units are easier to manage
* separation of concerns - applications and basic language tools are separate beasts
* reuse others knowledge and experience


My observations & conclusions so far:
* the autotools try to solve exactly the same problem, only for a different domain
* the autotools are actually used to compile the HFST transducers (se, fi, fr, ...)
* there's a whole body of experience out there
* so why not use these tools?


Implications:
* one makefile for each dir
* nested buildling
* template for populating


After some discussion, with pointers to alternatives and to discussions on the about problems with the autotools set, we settled on [CMake](http://www.cmake.org) as our first attempt at creating a more sane build infrastructure.


Download:
http://cmake.org/cmake/resources/software.html


An example of a CMake dependency + build instruction:
```
PROJECT(Document)
IF(LATEX_COMPILE)
  ADD_CUSTOM_COMMAND(
    OUTPUT    ${Document_BINARY_DIR}/TDocument.dvi
    DEPENDS   ${Document_BINARY_DIR}/TDocument.tex
    COMMAND   ${LATEX_COMPILE}  
    ARGS      ${Document_SOURCE_DIR}/TDocument.tex 
    )
ENDIF(LATEX_COMPILE)


IF(DVIPDF_COMPILE)
  ADD_CUSTOM_COMMAND(
    OUTPUT    ${Document_BINARY_DIR}/TDocument.pdf
    DEPENDS   ${Document_BINARY_DIR}/TDocument.dvi 
    COMMAND   ${DVIPDF_COMPILE}
    ARGS      ${Document_SOURCE_DIR}/TDocument.dvi
    )
ENDIF(DVIPDF_COMPILE)
```


So, we could try to do something concrete, e.g. build some part of `sme` using cmake.
