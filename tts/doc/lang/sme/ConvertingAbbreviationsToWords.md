Abbreviations have three types of expansions:


#EXPN: abbreviations that expand to words, such as kap., b.,  
#LSEQ: abbreviations in which each letter is pronounced separately, like NSR
#ASWD:abbreviations which are read as words, such as FeFo and NATO




The solution for English looks like this:


* if all-lowercase letters, then EXPN
* if short (2-4), all-capital letters, then LSEQ
* if all-capital letters and multiple vowels, then ASWD


We need:
* an abbreviation-to-word converter
* a letter-to-word converter (including also foreign letters like x)


ASWD expansions group with foreign name pronunciations, and some adjustments must be made to avoid strange pronunciations. For example that final t's must be pronounced, and maybe the round vowels need to have a "scandinavian" pronunciation, adjacent vowels are not necessarily diphthongs, c is not necessarily /ts/:


Examples:
* Norut: we want /nu:rʉt/ and not /no.ru:h/, which would be the pronunciation if it were a sami word (like gorut).
* Seat: we want /se:.at/ and not /seah/
