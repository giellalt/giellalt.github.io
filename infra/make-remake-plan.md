# make remake


Brief overview of present make-redo solution: Børre


```
gt/Makefile - main entrance
gt/analyser.mk - main entrance for analyzers and for tts phon-$lang.txt
gt/mk-files/ - main entrance for whatever field they cover
           /aspell.mk     => sinclude = -include ../$TARGET/aspell.mk
           /disamb.mk     =>
           /hunspell.mk   =>
           /hyph.mk       =>
           /phonrules.mk  => morphophonology, twolc or xfst
           /polderland.mk =>
           /speller.mk    =>
gt/$LANG/Makefile - variables that are lang specific, esp. SRCS, also
```


Sjur: What happens when we insert e.g. Greenlandic?
Børre: Let us insert Greenlandic into the tree, see what works and what don't, and from that find a solution.




`gt/kal/phonrules.mk` - specify xfst processing instead of twolc


move kal and kom from st/ & kt/ to gt/ in the make-redo branch


Trond: How about sfst? We have one lg with sfst now, fin.
Sjur: That is a different thing. Sfst is a complete replacement for the xerox tools.
Trond: fin is not in our vcs
Børre: What we are discussing are xerox tools and in the future, be able to insert hfst into our tool chain, which read our xerox files fine.


```
make all TARGET=sme tool=[xerox|sfst](whatever) (reasonable default)
```


reasons for having parallel tool chains:
* future flexibility
* open source chain from full source to final binaries
* maintainability


Development goal:
* All procedures on global level
* On language-specific level only file specifications & linguistics




COMPILER = twolc #-utf8


either:
if kal then XFST


or
COMPILER


gt/kal/Makefile
COMPILER=xfst
gt/sme/Makefile
COMPILER=twolc


Børre: Perhaps we don't need the mk-files/phonrules.mk, only $LANG/phonrules.mk ?


in sme/Makefile
POLDERLAND=supported


kal/Makefile
PREFERRED_TWOLC=xfst






if xfst, do a-b-c
if twolc, do x-y-z




make binary phonrules (name!! mphonrules)


phon-$lang.xfst  tts rule files  sme kal in txt out ipa orth2phon -> phon2ipa/phon2sampa/whatever
phon-$lang.bin
orth-kal.txt  Kleinschmidt 2 modern
ipa2sampa.pl   <==== totally lg-independent
ipa2sampa.fst  <==== totally lg-independent


```
twol: $(RULEBIN)
$(RULEBIN): $(RULESRC)
	@echo
	@echo "*** Building $(RULEBIN) ***" ;
	@echo
	$(M4) $(M4FLAGS) $< > tmp/twol-$(TARGET)-tmp.txt
	@printf "read-grammar tmp/twol-$(TARGET)-tmp.txt \n\
	compile \n\
	save-binary $@ \n\
	quit \n" > tmp/twol-$(TARGET)-script
	$(COMPILER) < tmp/twol-$(TARGET)-script
	@rm -f tmp/twol-$(TARGET)-script
```


# Here we build xfst-kal.bin, the morphophonological component.
# This goal depends on xfst-kal.txt


```
xfst-kal.bin: ../bin/xfst-kal.bin
../bin/xfst-kal.bin: xfst-kal.txt
	@echo
	@echo "*** Building xfst-kal.bin ***" ;
	@echo
	@printf "source xfst-kal.txt \n\
	save stack ../bin/xfst-kal.bin \n\
	quit \n" > ../tmp/xfst-kal-script
	$(XFST) < ../tmp/xfst-kal-script
	@rm -f ../tmp/xfst-kal-script




	@printf "read regex [[@\"../bin/kal-lex.save\"] .o. \
	[@\"../bin/xfst-kal.bin\"]] ; \n\


	printf "compile-source $(LEX)  \n\
	read-rules ../bin/twol-fao.bin \n\
```


# This target removes all !SUB-marked entries
```
%.norm: $(TARGET)/int/%.norm
$(TARGET)/int/%.norm: %.txt
        @echo
        @echo "*** Removing non-orthographic entries - norm ***" ;
	@echo
	@egrep -v '(SUB|\^NG\^)' $< > $@






VPATH = $(TARGET)/src:$(TARGET)/bin:$(TARGET)/tmp


$(TARGET)/bin/$(TARGET).save: twol-$(TARGET)-descriptive.bin \
		$(SRCS)
	@echo
	@echo "*** Building $(TARGET).save ***" ;
	@echo
	printf "compile-source $(SRCS) \n\
	read-rules $< \n\
	compose-result \n\
	save-result $@ \n\
	quit \n" > tmp/save-script
```


Problem: name clashes
Solution: More explicit names, clear file naming conventions


# Make dependencies


* all targets available to all languages
* every target checks for the existence of the required source files
* if the resources do not exist, print an error message, listing the missing files
* we need to visualise the depenedencies - the makefiles are too complex
** [http://search.cpan.org/~srezic/GraphViz-Makefile-1.15/Makefile.pm] - a perl
   module to produce Graph Viz output files diagramming Makefiles


Make is not utilised
the lang makefiles are not utilised
implicit rules can be overriden by more specific rules
q: how were the variable specified
The idea should be having a default rule set and more specific rules in the other files


Instead of having the whole system working, set up a small testbench, try out the dependencies
We have so many things there going on that we should have a stable prototype before changing it
1. make a toy testbench in order to understand the dependency system
2. make a testbench doing real stuf, but only part of our system
3.
For the testbench we




Börre: Calls for a new naming convention
Trond: it is not uniform now.
hyph: kal has hyph-kal.fst as a target, the big file seems to have hyph-fes






Changing from make to other programs?


Sjur:
If we replace make with something else, it makes the job bigger
We wll then have another learning curve
The risks are larger as well
If Saara is correct in that we have not made the best out of make yet, we shoul do that first




Saara:
What was actually the problem with the new make setup?


Sjur:
We couldn't get the depenencies working without listing the deps for every lg


Børre
There are different files for the different languages. For kal there were files with a different naming scheme and different build rules, there is xml for kom and xfst for kal.


Trond:
We may get lgs more uniform, but there will always be differences, thus we would need this flexibility


Børre:
We don't have implicit rules for going rom .txt to .fst




$(TARGET)/bin/%.fst: %.lex
    commands


$(TARGET)/bin/hyph-%.fst: %.lex
    and the same commands?


.c:.o


*-lex.txt:.fst






hyph-%.fst: %.lex






make TARGET=sme TOOL=hu speller
isme.fst


make hyph TARGET=sme  # but this is the thing saara asks for


I think Saara meant something like:


make TOOL=hyph TARGET=sme


We should also be able to ask for any binary file as a target, right?


But what should the binary file be named?


eventually so that
you can ask for any final binary file
and all binary final files are given a TOOL definition


1 Languages are different
  (adjs or not...)
2 Level of development and integration is different
  (xml or not, xfst/twolc, dialect and normativity, orth, hyph, phon, hyph+orth
  now we make a ped-adjusted fst for sme (accepting helsinki+Err pro Helsinki)
3 Then some nonstandard conventions here and there make it more messy than neccessary.


3 can be fixed (so, Per must relearn habits)




The newer lgs are the well-behaving ones:
ipk, fao, sjd


The older languages are the idiosyncratic ones
sme, kal, kom
sme has all morph in sme-lex
sjd and ipk has it nicely distributed in noun-sjd-morph etc.




first attempt
split make-file and make everything working
"chop the cake that we have"


second attempt
start with a simple makefile, building stone by stone
"demolish what we have into lego pieces and build a new castle"
... and the build




So, we need a build analysis document.


Ken Beesley (quote):


"The structure of the makefile should be drawn with arrows on the wall, and kept in synch at all time"


(Trond: or do this in a file, in a drawing program)




Conclusion:


Cip to install the GraphViz-Makefile module
Saara to review code
All to read Cips beautiful drawings
The cake pieces from Børres party should be put on hold (and perhaps be more manageable as they dry up a bit)
New meeting, issues:
- make lgs as identical as there is ground forM.
  - naming conventions
Renaming must be **discussed**. This goes especially for the production line lgs (sme, smj, sma, kal, fit)
Topics: new suffixes: noun-sme-lex.txt => noun-sme.lexc, sme-dis.rle _> sme-dis.cg3
names like ateq- away.
Start tagging revisions -- the current revision as the baseline version
