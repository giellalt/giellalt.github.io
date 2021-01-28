# Requirements


* HFST (at least svn r2160)
* VISLCG3 (a recent svn version)
* Apertium (one tool only)


The pipeline is not yet fully functional. This document is both a guide to help us get where we want, and documentation for the present status and planned functionality.


# Command pipeline


Here is a test command illustrating the whole processing pipeline from plain text in until IPA out (not all components are in place yet, and those components are substituted with alternatives to get something running):


```
$ echo "Iđđes dii. 9 mun doapmalan čoaggit alitnásttiid álbmotmeahcis." | \
apertium-destxt | \
hfst-proc -C -w -e -q -r sme/bin/sme.hfstol | \
vislcg3 -g sme/src/sme-dis.rle | \
grep -v '^"' | cut -d '"' -f3 | cut -d ' ' -f2 | \
hfst-optimized-lookup -q sme/bin/isme.hfstol | \
cut -f2 | grep -v '^$'
```


The output produced with the above pipeline is:


```
Iđđes+Adv+?
dii.
9
+?
doapmalan
čoaggit
alitnásttiid
álbmotmeahcin
álbmotmeahcis
..
+?
```


The target is to produce IPA, one output token for each input token.


The text output option illustrated above can be used to ensure 1:1 roundtrip correctnes for the disambiguation and generation - we should be able to produce the same output as we put into the pipeline.


## Commented commands


Below is each command commented:


* `echo "Iđđes dii. 9 mun doapmalan čoaggit alitnásttiid álbmotmeahcis."`
  - the input data piped to the next step
* `apertium-destxt`
  - the tool `hfst-proc` requires that certain characters are escaped, and
  this tool does the job
* `hfst-proc -C -w -e -q -r sme/bin/sme.hfstol`
  - tokenise and analyse the text, removing superfluous compound analyses
  (`-e`) and producing VISLCG3-formatted output (`-C`) adding the raw
  analysis string as a subreading (`-r`); the lemma is returned in dictionary
  case (`-w`) which is needed if generation is going to work
* `vislcg3 -g sme/src/sme-dis.rle`
  - disambiguate
* `grep + cut + cut`
  - temporary manual postprocessing to get only the disambiguated raw analysis
  string (hopefully to be replaced with some VISLCG3 output option), which is
  then given to:
* `hfst-optimized-lookup -q sme/bin/isme.hfstol`
  - generate IPA strings from the input (the exemplified transducer generates
  regular orthographic forms for now)
* `cut + grep`
  - do some simple postprocessing to only get the generated wordforms (this
  should be added as an output option to `hfst-lookup`)


# Further work


* replace the analysing transducer with a tailored speech synthesis transducer; the most important diff against the regular transducer is that most (all?) tags are included, to ensure round-trip stability
* tune the disambiguation
* replace the generating transducer with a real IPA transducer
