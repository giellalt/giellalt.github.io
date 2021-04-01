



This page explains how to fetch whole Wikipedias as raw text


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
1. When downloaded, open the .bz2 file.
1. Extract it with the script *WikiExtractor.py* (which is in your
  path, in $GTHOME/gt/script/corpus/. The script has a --help option explaining
  usage.
1. The output is xml. If you want clean text, you may strip the tags with some command, e.g. this one:
  ```
     ... | sed 's/<[^>]*>//g;' | ...
  ```

 


For convenience, we often store the last version in biggies, e.g. `biggies/langs/vep/corp/vepwiki.txt`. For larger wikipedias, please store only a part of it (e.g. only the files with names with an initial A (see output)).
