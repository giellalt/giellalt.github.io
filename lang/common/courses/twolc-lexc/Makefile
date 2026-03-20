# ****************************************************************** #
# This is a makefile that builds the morphological parser for German #
# ****************************************************************** #

# The file builds a DEU parser based upon twolc.

# This is the ultimate goal (for the initial goal, read from the bottom of the file).


XFST = xfst #-utf8
LEXC = lexc #-utf8
TWOLC = twolc #-utf8

if.fst: f.fst
	@echo
	@echo "*** Building the inverse f.fst ***" ;
	@echo
	printf "load f.fst \n\
	invert net \n\
	save stack if.fst \n\
	quit \n" > if-fst-script
	$(XFST) < if-fst-script
	rm -f if-fst-script


f.fst: f.lexc f.bin
	@echo
	@echo "*** Building f.fst ***" ;
	@echo
	printf "compile-source f.lexc \n\
	read-rules f.bin \n\
	compose-result \n\
	save-result f.fst \n\
	quit \n" > f-fst-script
	$(LEXC) < f-fst-script
	rm -f f-fst-script

f.bin: f.twolc
	@echo
	@echo "*** Building f.bin ***" ;
	@echo
	@printf "read-grammar f.twolc \n\
	compile \n\
	save-binary f.bin \n\
	quit \n" > f-bin-script
	$(TWOLC) < f-bin-script
	@rm -f f-bin-script


clean:
	@rm -f *.bin *.fst


