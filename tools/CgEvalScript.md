

How to use the script


[https://svn.code.sf.net/p/apertium/svn/languages/apertium-rus/scripts/evaluate-tagger.py]


sentence_line_vaalit2012.dis


```
cat sentence_line_vaalit2012.dis | tr '/' '_' | cg-conv -A | gsed 's/\$\W*\^/$\n^/g' > file.ref
cat sentence_line_vaalit2012.dis | grep '^"<' | cut -f2 -d'<' | cut -f1 -d'>' | ufin | lookup2cg | tr '/' '_' | cg-conv -A | gsed 's/\$\W*\^/$\n^/g' > file.src
cat fin.src | cg-proc -t /Users/ttr000/main/langs/fin/src/syntax/disambiguation.bin  > file.tst


python3.2 /Users/ttr000/apertium/languages/apertium-rus/scripts/evaluate-tagger.py file.src file.ref file.tst 
```
