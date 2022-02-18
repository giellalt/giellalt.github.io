
# Wikipedia as a Corpus


This page explains how to fetch whole Wikipedia editions as raw text


# Do the following:




1. Find the language code for the language you want: It is the two-letter ISO code (**se**, etc.). If the language has no two-letter code, use the 3-letter code. 
1. Go to the download page. The URL is [http://dumps.wikimedia.org/sewiki/](http://dumps.wikimedia.org/sewiki/) will give you North Sámi, exchange the **se** in *sewiki* with the language code you want.
1. In the list that follows, choose the last one **before** *latest/*. The
  latest one is the same as the one with the last dates (it is just a stable url), the download headers are more nicely formatted in the last dated link.
1. Download the .bz2 file found under the header 
  **Articles, templates, image descriptions, and primary meta-pages.**
  This will give you the articles. \\
  If you want revision history (e.g. for spellchecker testing), you need 
  *All pages with complete edit history* (this use is not documented).
1. When downloaded, open the .bz2 file. (On Mac and Linux, just doubleclick on the file.)

You now want to convert the xml files to text. Use e.g. the script [https://pypi.org/project/wikiextractor/](WikiExtractor.py). If you have downloaded the svn giellalt file tree from Tromsø, you already have this script, in ``$GTHOME/gt/script/corpus/``. If not, look at the documentation on the script's homepage. The script has a --help option explaining
  usage. Let us say you call the folder for output `outf`.
1. The output is xml. If you want clean text, you may strip the tags.

Here are two ways of stripping xml tags. First, just with sed:

  ```
     cat outf/* | sed 's/<[^>]*>//g;' | ...
  ```

For Tromsø users we have made a script to somewhat refine this command, also that in $GTHOME/gt/script/corpus/. It is called `rydd_i_wikipedia.sh`

  ```
     cat outf/* | sh $GTHOME/gt/script/corpus/rydd_i_wikipedia.sh | ...
  ```
