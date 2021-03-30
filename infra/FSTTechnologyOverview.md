# Status and future of Xerox and other FST tools


Presently the Giella infrastructure supports three fst technologies in parallel:
* Xerox
* Hfst
* Foma


Each of them have their strengths and weaknesses, summarised as follows:


## Xerox


**The** standard in all FST work.


Strengths:
* fast in lookup
* fast in compiling source code


Weaknesses:
* no support for weights
* closed source
* abandoned by its main developer Lauri Karttunen (he is retired, and his
  effort to open-source it was blocked by Xerox lawyers)


### Source code access


Even though the source code is not released, it is possible to get a license to
the source code of the c-fsm library
([documented here](http://web.stanford.edu/~laurik/publications/cfsm_api.pdf))
by requesting a license for the XLE page. Information and relevant links can be
found at the bottom of the
[project page](http://ling.uni-konstanz.de/pages/xle/).


## Hfst


A source-code compatible clone of the Xerox tools, based on OpenFST, but with
multiple backends (Foma, SFST, OpenFST).


Strengths:
* replicates 99% of the functionality of the Xerox tools
* is actively maintained
* is almost as fast in lookup as Xerox when using the optimised lookup format
* supports weighted fst's
* open source


Weaknesses:
* is slow in compiling fst's compared to Xerox


## Foma


A source-code and command interface compatible clone of the Xerox xfst tool,
developed and maintained by Måns Huldén. Is open source.


Strengths:
* fast in lookup
* fast in compiling source code
* actively maintained


Weaknesses:
* no support for twolc
* limited support for weighted fst's




# How to cope with this...


... ie the lack of future for Xerox, the lack of twolc in Foma and the lack of
speed in Hfst.


## Today's dual strategy


* use the fast xfst for developing and for some applications
* use the slow hfst for all applications demanding open source and/or weighting


## The future


... is dependent upon


* whether hfst will become faster
* whether foma will include support for twolc
* whether it will be possible to license some version of c-fst that will
  produce the command line tools we need


In the short run, we can continue as we do now.
