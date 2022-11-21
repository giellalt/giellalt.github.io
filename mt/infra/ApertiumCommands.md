# Apertium commands

# Gohččumat maid dárbbašat dávjjimusat:


Jorgalit:

- Jorgalit cealkaga: ```echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma```
- Jorgalit olles fiilla: ```cat texts/tarina.sme.txt | apertium -d. sme-sma | less```
- Jorgalit olles fiilla hash ja nástti haga (omd. evaluerejeddjiide): ```cat texts/tarina.sme.txt | apertium -d. -u sme-sma```
- Jorgalit nu ahte oainnát maid prográmma ii máhte genereret, omd: ```#pyeri<adj><comp><der_avt><adv> ```
 \\```cat texts/tarina.sme.txt | apertium -d. sme-sma-dgen | less``` 

## Debuggen:

- Boađus ovdal transfernjuolggadusaid: \\
```echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-biltrans | tr ' ' '\n'```
- Boađus maŋŋel t1x-fiilla: \\
```echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-chunker```
- Davvisámi disambiguerema disambigueren: \\
```echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-disam | tr ' ' '\n'```




## Iskat MT-vuogádaga analysahtor-output:
MT-vuogádaga analysáhtoriin leat dušše sánit mat leat mielde dix-fiillas.


```
echo "lohkan" | hfst-lookup sme-smn.automorf.hfst
echo "baakoem" | hfst-lookup sma-sme.automorf.hfst
```


## Analysahtor-output buot sániiguin, eai dušše bidix-sánit:
```
echo "lohkan" | hfst-lookup .deps/sme.automorf.hfst
echo "baakoem" | hfst-lookup .deps/sma.automorf.hfst
```


## Iskat MT-systema genererema:
MT-vuogádaga genereráhtoriin leat dušše sánit mat leat mielde dix-fiillas, ja seamma PoS:in mii lea dix-fiillas.
```
echo "sátni<n><sg><acc>" | hfst-lookup sma-sme.autogen.hfst
echo "baakoe<n><sg><acc>" | hfst-lookup sme-sma.autogen.hfst
```


## Jorgalanteasta:
Iskka dáid gohččumiid, ja de oainnát mo Apertium bargá cehkiid mielde. Lonut sma = smn jnv.

```
echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-morph
echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-disam
echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-biltrans   # sme-analysa
echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-chunker
echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-interchunk3
echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma-postchunk
echo "Don galggat boahtit skuvlii." | apertium -d. sme-sma
```


## Hukset parallealla jorgalusaid (python-jorgalusa -- tmx-fiillaide)


Input: tmx-máhppa.

- (text-máhpa sisdoallu)
	- `python check_mt-otpt.py -d tmx_data` 
- (sámedikki siiddut)
	- `python check_mt-otpt.py -d fi.samediggi`
- časkit buot output-fiillaid oktii ja rahpat daid fierbmelohkkis:
	- `cat otpt-dir/* > testenfiillat.html`
	- `open testenfiillat.html`




## Hukset parallealla jorgalusaid (tmx haga)


Input: sme- ja smj-fiillat parallelliserejuvvon nu, ahte juohke cealkka lea seammá linnjás.


```
cat -n texts/samediggidiedadus_samegiela_birra_2012.sme.txt |sed 's/	/a	/g;' > xdiedahusa
cat -n texts/samediggidiedadus_samegiela_birra_2012.smj.txt |sed 's/	/b	/g;' > xdiedahusa
cat texts/samediggidiedadus_samegiela_birra_2012.sme.txt |apertium -d. sme-smj|cat -n|sed 's/	/c	/g;' > xdiedahusc
yes|head -1217|cat -n|sed 's/	y/d	/g;' > xdiedahusd
sort -n xdiedahus*|l
```


## Generating modes:
Dás oainnát buot vejolaš gohččumiid:
```
apertium-gen-modes modes.xml
```


## Missing lists


Leago missing list up to date?  (ovdamearka = smn)


```
cat listanamma | hfst-proc sme-smn.automorf.hfst
cat dev/sme_FI.N.nocmp.missing |hfst-proc sme-smn.automorf.hfst |grep -v '/\*'|see
```




