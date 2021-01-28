





To run text with the Oslo-Bergen tagger within this project, here is
the pipeline (with paths as of standing in `$GTHOME/st/nob/obt`:


```
cat textfile |./bin/mtag-osx64 | vislcg3 -g src/nob_morf-prestat.cg3 | OBT-Stat/bin/run_obt_stat.rb 
```


The tagger is stored in git, and documented in a 
[readme file](https://github.com/noklesta/The-Oslo-Bergen-Tagger/blob/master/README.md)


Note that there is 
[a shellscript](https://github.com/noklesta/The-Oslo-Bergen-Tagger/blob/master/tag-bm.sh)
with a command slightly different from the one presented here.


In order to run it, we need to change it a bit:


* bin/mtag must be bin/mtag-osx64
* cg/bm_morf-prestat.cg must be src/nob_morf-prestat.cg3


