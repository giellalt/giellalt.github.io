# How to update the time graph

This steps are valid for korp, u_korp and f_korp and need to be repeated for each genre of each language.

Make sure you have the [CorpusTools](https://giellalt.github.io/ling/CorpusTools.html#) installed.

## Step 1 - Prepare data

Copy the *vrt files obtained after updating the monolingual content ([see](https://giellalt.github.io/infra/korp/MonolingualContent.html)) in a folder named ```vrt_<ISO>_<DATE>```

## Step 2 - Extract all years from the vrt file and generate .sql

Change cLang, cDomain, date in extract_time_stamp.xsl

Run the following:
```
java -Xmx2048m -cp ~/main/tools/TermWikiExporter/lib/saxon9.jar -Dfile.encoding=UTF8 net.sf.saxon.Transform -it:main extract_time_stamp.xsl
cd timestamp_<ISO>_<DATE>
awk '{print $2}' metacheck_<ISO>_<GENRE>_<DATE>.txt |sort|uniq > all_years_<ISO>_<GENRE>.txt
cd ..
```

Change lang, date, domain in generate_tables.sh and run the following:
```
sh generate_tables.sh
```

## Step 3 - Import .sql in mysql

Run the following:
```
cat timespan_<ISO>_<GENRE>_<DATE>.sql | mysql -u korp -p korp_DB
```
