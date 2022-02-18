

# Online analyser functionality

This page reports on functionality of our online analser. It measures alpha quality only (works? yes/no), and not quality or update date.


# Functionality testing of the front page


The first column contains the programs our pages contain (and therefore claim that should work). The goal is to have all of them working.


## sme				    
|   Prog    | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst      | ok		    | ok
|  dis      | ok		    | ok
|  distrans | NOTWORK    | NOTWORK
|  hyph     | ok		    | ok
|  trans    | ok		    | ok

					    
## smj				    
|   Prog | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst  | ok			    | ok
|  dis | NOTSUPP		    | ok
|  dep | NOTSUPP		    | NOTSUPP
|  hyph | ok			    | ok


Note: dep not working even though the fsie is there.

					    
## sma				    
|   Prog | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst   | ok		    | ok
|  dis   | ok		    | ok
|  dep   | NOTSUPP	    | NOTSUPP
|  hyph  | ok		    | ok
|  trans | ok		    | ok

					    
Note: The sma-dep.bin is in /opt/smi/sma, but it still does not work.

					    
## smn				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok



					    
## sje				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## sjd				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## sms				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    

					    
## myv				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## fin				    
|   Prog      | fst | dis | hyph
| --- | --- | --- | --- 
|  22.11.13.   | ok  |   ok | ok
|  23.11.13.   | ok  |   ok | ok

					    
## mrj				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | NOT
|  23.11.13.   | ok

					    
## izh				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## kca				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## fkv				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## kom			
|   Prog      | fst | dis | hyph
| --- | --- | --- | --- 
|  22.11.13.   | NOT  | NOT | NOT
|  23.11.13.   | ok  |   ok | NOT

	    


* 22.11.13: Note: Text he |ading says Buriat analyser, directs to kom.fst (**fixed**)
* 23.11.13: Note: No Cyrillic hyph works.					    

					    
## liv				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## mhr				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## mdf				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## yrk				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## nio				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## olo				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## udm				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## vep				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok

					    
## bxr				    
|   Prog      | fst
| --- | --- 
|  22.11.13.   | ok
|  23.11.13.   | ok


## cor				    
|   Prog      | fst | dis | hyph
| --- | --- | --- | --- 
|  22.11.13.   | NOT  | NOT | NOT
|  23.11.13.   | NOT  | NOT | NOT


This is a non-trivial error: the fst works on the server:
`lookup /opt/smi/cor/bin/cor.fst`					    

					    
## fao				    
|   Prog      | fst | dis | dep
| --- | --- | --- | --- 
|  22.11.13.   | ok  | ok | NOT
|  23.11.13.   | ok  | ok | NOT



					    
dep error is non-trivial, the fao-dep.bin works on gtweb.

					    
## kal				    
|   Prog    | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst 	   | ok		    | ok
|  dis 	   | ok		    | ok
|  distrans | NOTWORK    | NOTWORK
|  dep	   | NOTWORK    | NOTWORK
|  hyph 	   | NOTWORK    | NOTWORK
|  convert  | NOTWORK    | NOTWORK
|  transcr  | NOTWORK    | ok

					    
* Note: the fst is **very** slow
* Note: Makefile to convert (transcription) must be fixed

					    
## ipk				    
|   Prog | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst   | ok  		    | ok
|  convert | NOTWORK	    | NOTWORK


* Note: Makefile to convert (transcription) must be fixed

					    
## hdn				    
|   Prog | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst   | ok 		    | ok

					    
## ciw				    
|   Prog | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst   | NOTWORK 	    | NOTWORK


Note: Works on server

					    
## rus				    
|   Prog | 22.11.13.    | 23.11.13. 
| --- | --- | --- 
|  fst   | ok 		    | ok




# Numra


## clock




### fkv
|   numra | clock
| --- | --- 
|  2.4.14 |  NOT




