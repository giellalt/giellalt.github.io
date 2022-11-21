Word error rate (WER) testing
=============================

Buohtastahtte MT-bohtosa ja divvojuvvon veršuvnna na:




!#  Gráfalaččat


1. Jorgalit davvisámegiel teavstta du gillii (julev, anár, lulli..)
1. Kopiere bohtosa, ja divo dan
1. Lime daid teavsttaid siidui [http://xixona.dlsi.ua.es/~fran/eval/]
1. Dedde *Calculate*


Don oainnát sihke WER (Word Error Rate -- galle sáni leat rievdaduvvon) ja teavsttaid erohusaid.


!#  Ii -gráfalaččat


Boares kommando:

```
perl ~/apertium/trunk/apertium-eval-translator/apertium-eval-translator-line.pl -r MTOUTPUT.txt -t DIVVOJUVVON_MTOUTPUT.txt 
```

Fiila lea odne githubas. [apertium-eval-translator)](https://github.com/apertium/apertium-eval-translator)


Boađus lea sihke WER (Word Error Rate) ja PER (Position-indepentend Word Error Rate) .


