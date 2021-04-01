Pre analysis
============

Building tokenisers
-------------------

Tokenisers are built once a week on gtlab. The comments in
[$GTHOME/tools/stallo-analysis/build-tokenisers.sh](https://gtsvn.uit.no/langtech/trunk/tools/stallo-analysis/build-tokenisers.sh)
details what is being done.

The tokeniser build jobs are kicked off by this cronjob
`45 19 * * sat source $HOME/.bash_profile && svn up $GTHOME/tools/stallo-analysis/build-tokenisers.sh             && $GTHOME/tools/stallo-analysis/build-tokenisers.sh`

The hfst tools on this machine are updated at least once a week from the
nightly apertium repo.

Fetch converted corpus and kick off analysis
--------------------------------------------

The analysis is kicked off by this cronjob on gtlab:
`00 03 * * sun ssh stallo.uit.no ". $HOME/.bash_profile && ls -lR $HOME/.local/share/giella             && svn up $HOME/svnrepos/langtech/tools && $HOME/svnrepos/langtech/tools/stallo-analysis/pre-analysis.sh"`

The script
[$GTHOME/tools/stallo-analysis/pre-analysis.sh](https://gtsvn.uit.no/langtech/trunk/tools/stallo-analysis/pre-analysis.sh)
fetches the converted corpus files and dispatches separate analysis jobs
for each corpus, language and type (type being xfst and hfst).

Analysis
========

The analysis is done on the `boerre` account on `stallo`. The comments
in
[$GTHOME/tools/stallo-analysis/analyse.sh](https://gtsvn.uit.no/langtech/trunk/tools/stallo-analysis/analyse.sh)
details what is being done. The grunt work is done by the program
[analyse\_corpus](https://giellalt.uit.no/ling/CorpusTools.html#analyse_corpus)
.

Post analysis
=============

Analysed files are sent to gtweb by this cron job.
`00 08 * * sun ssh stallo.uit.no ". $HOME/.bash_profile && $HOME/svnrepos/langtech/tools/stallo-analysis/post-analysis.sh"`

The script
[$GTHOME/tools/stallo-analysis/post-analysis.sh](https://gtsvn.uit.no/langtech/trunk/tools/stallo-analysis/post-analysis.sh)
details what is being done.

Files and compilers
===================

These are the repositeries found on stallo:

-   The langtech repo: `~boerre/svnrepos/main/`
-   The freecorpus repo: `~boerre/svnrepos/freecorpus/`
-   The boundcorpus repo: `~boerre/svnrepos/boundcorpus/`
-   The rusbound repo: `~boerre/svnrepos/rusbound/`

The xfst, hfst, vislcg3 and CorpusTools tools are installed in
`~boerre/bin` on stallo.

hfst: Build commands
--------------------

    cd ~/hfst/
    git pull
    module load autoconf/2.69
    module load automake/1.13.1
    module load gcc/4.9.1
    ./autogen.sh
    ./configure --enable-all-tools --with-unicode-handler=glib --prefix=/home/boerre --with-readline
    make
    make install

vislcg3: Build commands
-----------------------

    module load CMake/3.6.2-foss-2016b
    module load Boost/1.61.0-foss-2016b
    module load ICU
    cd ~/svnrepos/vislcg3/
    svn up
    cmake \
        -DCMAKE_INCLUDE_PATH=/global/hds/software/cpu/eb3/ICU/61.1-iomkl-2018a/include/ \
        -DCMAKE_LIBRARY_PATH=/global/hds/software/cpu/eb3/ICU/61.1-iomkl-2018a/lib/ \
        -DCMAKE_EXE_LINKER_FLAGS=-L/global/hds/software/cpu/eb3/ICU/61.1-iomkl-2018a/lib \
        .
    make
    make install

CorpusTools: Install commands
-----------------------------

    cd ~/svnrepos/main/tools/CorpusTools/
    svn up
    python setup.py develop --user

Environment variables on stallo
-------------------------------

These environment variables are set on stallo to make hfst and vislcg3
work as expected:

    export PATH=$HOME/bin:$PATH
    export LD_LIBRARY_PATH=$HOME/lib:$LD_LIBRARY_PATH
