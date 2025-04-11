Find unlexicalised compounds in the dictionaries
================================================
 
We have made a python script that goes through all compound nouns in the dictionary
and check whether they are found as lexicalised compounds in the analyser. The script
is `find-unlexicalized-compounds.py` , and it can be found in `giella-core/scripts`.
The script should be in your path. To use The script: Stand in dict-xxx-yyy 
(here: dict-smn-fin) and collect the unlexicalised smn compounds, as follows:
 
`find-unlexicalized-compounds.py -i src/N_smnfin.xml -l smn -o missing.txt`
 
 
The resulting nouns in missing.txt may be made into candidates for
addition to nouns.lexc with another script `missing.py` as follows:
 
`cat missing.txt | missing.py -l smn > missing.lexc`
 
