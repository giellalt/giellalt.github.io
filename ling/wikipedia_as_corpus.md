# Wikipedia as a corpus




For some of our languages we use Wikipedia as a corpus. This may be 
done in several ways, here is a documentation of how to make a 
text-only version of a wikipedia edition. 


# Procedure


We use Moksha Mordvin (ISO code mdf) as an example, replace mdf 
with the language of your choice.


Download the wikipedia from `http://dumps.wikimedia.org/mdfGwiki/latest/`, 
see [Moksha Mordvin](http://dumps.wikimedia.org/mdfwiki/latest/) for
an example. The version relevant to plain-text corpus is called
`$LANGwiki-latest-pages-articles.xml.bz2`. 


Unzip the .bz2 file, and save the resulting .xml file somewhere.


The text will be split in smaller files, so make a directory, say
mdfwiki for the output.


Extract the xml with the WikiExtractor.py script:


```
cat mdfwiki-latest-pages-articles.xml | WikiExtractor.py -o mdfwiki
```


The result is stored in directories AA, AB, etc. with 100 files in
each directory. You may bundle the whope Wikipedia into one file by
a command like the following:


```
cat mdfwiki/*/wiki*|sed 's/<[^>]*>//g;' > mdfwikicorp.txt
```




# Wikipedia as a source for investigating corrections


Other versions of Wikipedia on the download site
include all corrections of all articles (just go for the biggest
file). This makes the Wikipedia an interesting source for spellchecker
development and other types of research on text production.


A paper describing this in some detail is the following:


* [Mining Naturally-occurring Corrections and Paraphrases from Wikipedia’s Revision History](http://www.lrec-conf.org/proceedings/lrec2010/pdf/827_Paper.pdf)


