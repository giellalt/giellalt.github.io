How to use the hfst-tokenise pipeline to tokenise-as-you-analyse, using
giella-sme on Mac as an example:


# Prerequisites for Mac


First off, update your HFST+vislcg3 by running


```
  wget http://apertium.projectjj.com/osx/install-nightly.sh
  sudo bash install-nightly.sh
```


This should give you the most recent SVN versions (as of last night) of HFST
and vislcg3. 


(Packages exist for pretty much all Unix operating systems; the Prequisites
links under
http://wiki.apertium.org/wiki/Installation#If_you_want_to_add_language_data_.2F_do_more_advanced_stuff
should give the right URL's.)




For now, you'll also need to get the program cg-mwesplit (which will
later be included in vislcg3). To compile cg-mwesplit, first ensure
you have a recent version of Xcode with the Command Line Tools (e.g.
7.3, available from
https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_7.3/Xcode_7.3.dmg
). Then do


```
  export CXX=clang++
  export CC=clang
  git clone https://github.com/unhammer/cg-mwesplit
  ./autogen.sh
  ./configure
  make
  sudo make install
```


# Build sme


Now, `svn up` in `giella-core` and `langs/sme`, and run `./configure` in
`langs/sme` with the option --enable-tokenisers; e.g. if you want both the
CG rules and the tokenisers, you would do


```
  ./configure --enable-tokenisers --enable-syntax
```


(If you use Apertium, you'd also want --enable-apertium --with-hfst,
etc.)


Finally, run "make" (currently, this requires >8GB of RAM).


# Test


To run just the raw tokenisation+morphological analysis:


```
echo 'sánit, jna. Leago' \
|  hfst-tokenise --giella-cg $GTHOME/langs/sme/tools/tokenisers/tokeniser-gramcheck-gt-desc
```


To include disambiguation of ambiguous multiwords:


```
echo 'sánit, jna. Leago' \
|  hfst-tokenise --giella-cg $GTHOME/langs/sme/tools/tokenisers/tokeniser-gramcheck-gt-desc.pmhfst \
|  vislcg3 -g $GTHOME/langs/sme/tools/tokenisers/mwe-dis.cg3
```


To include splitting disambiguated multiwords into their own cohorts:


```
echo 'sánit, jna. Leago' \
|  hfst-tokenise --giella-cg $GTHOME/langs/sme/tools/tokenisers/tokeniser-gramcheck-gt-desc.pmhfst \
|  vislcg3 -g $GTHOME/langs/sme/tools/tokenisers/mwe-dis.cg3 \
|  cg-mwesplit
```


To include regular morphological disambiguation:


```
echo 'sánit, jna. Leago' \
|  hfst-tokenise --giella-cg $GTHOME/langs/sme/tools/tokenisers/tokeniser-gramcheck-gt-desc.pmhfst \
|  vislcg3 -g $GTHOME/langs/sme/tools/tokenisers/mwe-dis.cg3 \
|  cg-mwesplit \
|  vislcg3 -g $GTHOME/langs/sme/src/syntax/disambiguation.cg3
```


To include regular syntax tagging:


```
echo 'sánit, jna. Leago' \
|  hfst-tokenise --giella-cg $GTHOME/langs/sme/tools/tokenisers/tokeniser-gramcheck-gt-desc.pmhfst \
|  vislcg3 -g $GTHOME/langs/sme/tools/tokenisers/mwe-dis.cg3 \
|  cg-mwesplit \
|  vislcg3 -g $GTHOME/langs/sme/src/syntax/disambiguation.cg3 \
|  vislcg3 -g $GTHOME/giella-core/giella-shared/smi/src/syntax/functions.cg3
```


etc.






If you use these steps often, you'll probably want to make an alias. Open
~/.bashrc in your editor and enter for example


```
alias hsme='hfst-tokenise --giella-cg $GTHOME/langs/sme/tools/tokenisers/tokeniser-gramcheck-gt-desc.pmhfst'
alias hsmemwe='hsme | vislcg3 -g $GTHOME/langs/sme/tools/tokenisers/mwe-dis.cg3 --trace'
alias hsmesplit='hsmemwe | cg-mwesplit'
```


