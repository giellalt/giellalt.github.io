# List of defined automake conditionals

This is a list of presently defined Automake conditionals in our infrastructure.
They can be used to enable / disable build steps such as testing and enabling or
disabling build targets depending on the user's configuration.


* **WANT_MORPHOLOGY**:  `--enable-analysers`, default=yes\\
                    Used to enable the default set of analysers, which is:
                    `analyser-gt-desc.xfst`, `analyser-gt-norm.xfst` and
                    `analyser-disamb-gt-desc.hfst`
* **WANT_GENERATION**:  `--enable-generators`, default=yes\\
                    Used to enable the default set of generators, which is:
                    `generator-gt-desc.xfst` and `generator-gt-norm.xfst`
* **WANT_TRANSCRIPTORS**:  `--enable-transcriptors, default`=yes\\
                    Used to enable compilation of transcriptors, that is,
                    converters between different types of textual
                    representations, such as dates expressed as text or digits.
* **WANT_SPELLERS**:    `--enable-spellers`, default=no\\
                    Used to enable building of spellers in general
* **WANT_SPELLERAUTOMAT**:  `--enable-spellerautomat`, default=no\\
                    Used to enable building of the hfst speller automat
* **WANT_VOIKKO**:      `--enable-voikko`, default=no\\
                    Used to enable building of the voikko speller = zhfst file
* **WANT_HUNSPELL**:    `--enable-hunspell`, default=no\\
                    Used to enable building of Hunspell dic and aff files. Not
                    yet functional since this build is not implemented.
* **WANT_FST_HYPHENATOR**:  `--enable-fst_hyphenator`, default=no\\
                    Used to enable building of hyphenating tools. Not functional
                    because it is not implemented yet.
* **WANT_GRAMCHECK**:   `--enable-grammarchecker`, default=no\\
                    Used to enable building of grammar checkers. Is only usable
                    in sme, the only language with a grammar checker at the
                    moment.
* **WANT_DICTIONARIES**:  `--enable-dicts`, default=no\\
                    Used to enable building of transducers targeted at
                    electronic dictionaries
* **WANT_OAHPA**:       `--enable-oahpa`, default=no\\
                    Used to enable building of transducers targeted at Oahpa
* **WANT_PHONETIC**:    `--enable-phonetic`, default=no\\
                    Used to enable building of transducers for conversion from
                    text to IPA
* **WANT_APERTIUM**:    `--enable-apertium`, default=no\\
                    Used to enable building of transducers and constraint
                    grammar files used for machine translation in Apertium


Example of how to use them:


```
if WANT_MORPHOLOGY
GT_ANALYSERS_HFST+=analyser-gt-desc.hfst \
				   analyser-gt-norm.hfst \
				   analyser-disamb-gt-desc.hfst
endif # WANT_MORPHOLOGY
```


This ensures that we build Hfst analysers only if the user has enabled
analysers. Analysers are enabled by default, so the usefulness of this is rather
the oposite: the user can explicitly *disable* analysers, e.g. to speed up
compilation time when building spellers. In that case, the conditional will
make sure that the analysers are *not* built.
