# Evaluation of alternative build systems


GNU make and its siblings are not suitable for what we want to achieve in our build system, with language-independent build infrastructure, but per-language overrides when needed.


It is probably possible to implement what we want, but the current attempts are not clean enough, too much is moved into the language-specific build files.


We thus need to look for alternatives. Identified alternatives are:


* [SCons](http://www.scons.org/)
* [makepp](http://makepp.sourceforge.net/)
* [Maven](http://maven.apache.org/) (for java-projects)
* [CMake](http://www.cmake.org/)


The main drawback to replacing GNU make is that we become dependent of yet another piece of software we can't assume is readily available on people's computers. This increases the barrier-to-entry for external newcomers and volunteers (not that we yet have any, but there has been expressed interest in the `sma` community to participate in the linguistic work).


# Requirements


* can easily compile many different types of source files; presently we have source files in at least the following programming (compilable) languages:
    * lexc
    * twolc
    * xfst
    * java
    * c/c++
    * plx (Polderland lexicon format)
    * other?
        * (The usually non-compiled languages perl, python, XQuery, XSLT (2.0), etc is outside of the scope of this list)
* should easily facilitate abstraction of:
    * natural language
    * compiler for programming language (xerox vs hfst for lexc, etc)
    * product (build whatever tool/product we request, given source files and lang)
* easily integrate packaging/distribution/deployment
* support unit testing and other types of testing
* support documentation building (hm, we can do this using Forrest)
    * we should start building javadoc-inspired lexcdoc - ie systematized comments
* every file should be defined only once


Question to Saara:
Can we override 


# The alternatives


## SCons


Strengths:


Weaknesses:


Conclusion:


## makepp


Strengths:
* more or less backwards compatible


Weaknesses:


Conclusion:


## Maven


Strengths:
* release management
* scm software integration
* dependency management for external libraries and executables
* integrates with Forrest through documentation builds
* by using plugins, we can build in support for any type of project
* built-in support for unit testing and other types of testing


Weaknesses:
* java biased
* complex
* increases the load on the infra developers
* a lot of work to make non-java compilers properly integrated (but NMaven should help)


Conclusion:
Although Maven looks nice, the total looks quite heavy and complex


## CMake


Strengths:
* Platform independent
* using native build tools


Weaknesses:
* using native build tools: "CMake is designed to be used in conjunction with the native build environment. Simple configuration files placed in each source directory (called CMakeLists.txt files) are used to generate standard build files (e.g., makefiles on Unix and projects/workspaces in Windows MSVC) which are used in the usual way."


Conclusion:
This is not what we want. We want a replacement of make, not something on top of it (although that could of course be an alternative in itself).
