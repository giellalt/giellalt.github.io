Language Independent Tags In The Giella Infra
============

There are a number of classes of tags where the classes are language
independent, but the actual tags are language specific. Some examples of
such classes of tags are:


* **Error tags**:  tags describing parts of the language outside the established norm
* **Dialect tags**:  tags describing variation (in the written language) based on
             dialect
* **Derivation tags**:  tags describing derivational morphology


All such classes of tags are described below. New classes will probably be added
in the future, but we'll try to keep the document updated. See also the
[documentation for each language](/lang/index.html).


Each class is recognised by having a **tag prefix**, a short string starting
with "**+**" (for suffix tags; prefix tags for prefixing languages end with
**+** as their last character) and ending with "**/**". Examples of such tag
prefixes are: `+Err/`, `+Dial/` etc.


It is assumed — and required — that all tags described here (and all other tags,
for that matter) are declared as multichar symbols in the `root.lexc` file of
each language.


# Error tags


The error tag class is defined as follows:


* **Tag prefix**:  `+Err/`
* **Definition**:  tags describing parts of the language outside the established norm
* **FST implication**:  all strings containing one or more such tags are removed from
          all normative transducres


# Dialect tags


The dialect tag class is defined as follows:


* **Tag prefix**:  `+Dial/`
* **Definition**:  tags describing (written) variation based on dialect
* **FST implication**:  when the `DIALECTS` variable is set in `configure.ac`, one
            filter for each dialect defined there is built automatically. Each
            filter will remove all strings tagged with a dialect different from
            the one specific to the filter. Untagged strings will be left as is.
            The dialect tags are presently only made use of in Oahpa generators.


Other notes:
* The first character after the **/** *must* be one of `+` or `–`,
  denoting either inclusion (the entry/form is valid for the specified dialect)
  or exclusion (the entry/form is NOT valid for the specified dialect - but for
  all others)
* The string following **/** and **+/–** *must* be one of the strings
  specified in `configure.ac` for the variable `DIALECTS`.


# Area tags


The area/country tag class is defined as follows:


* **Tag prefix**:  `+Area/`
* **Definition**:  tags describing (written) variation based on country or another
            geographical unit, as per the
            [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) standard.
* **FST implication**:  not yet actively used, but will be used to build proofing
            tools and possibly other normative fst's where strings for other
            areas than the specified one will be removed. This will e.g. make
            the Lule Sámi speller for Sweden a better tool, as all strings
            with Norwegian *æ* (except for in names) will be removed: smaller
            and faster, and with less irrelevant suggestions.


Other notes:
* The tag prefix must be followed by an
  [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166) string.


# Semantic tags


The semantic tag class is defined as follows:


* **Tag prefix**:  `+Sem/`
* **Definition**:  tags describing semantic properties of the lexeme
* **FST implication**:  all semantic tags are automatically identified, and a couple
            of filters for manipulating them are built and applied, see further
            notes below.


Other notes:
* **the raw fst:** the semantic tags are moved relative to the POS tag, to
    ensure consistent tag ordering
* **all fst's except disambiguators and grammar checkers:**
    the semantic tags are removed.
* **disambiguators and grammar checkers:** the tags are kept (i.e. they are
    untouched)


# Derivation tags


The derivation tag class is defined as follows:


* **Tag prefix**:  `+Der/`
* **Definition**:  tags describing derivational morphology
* **FST implication**:  there is no language-independent processing of these tags ATM


# Originating language tags


The originating language tag class is defined as follows:


* **Tag prefix**:  `+OLang/`
* **Definition**:  tags describing originating language for loan words in cases where
            such information is required to get proper pronunciation in speech
            synthesis
* **FST implication**:  there is no language-independent processing of these tags ATM,
            and they are removed from all fst's; for North Sámi there is some
            language-specific processing to split the lexical fst into separate
            fst's for each defined `+OLang/` language, after which it is
            possible to apply OLang-specific phonetic rules


Other notes:


So far the only speech synthesis system we have built is for North Sámi. It was
furthermore built without using our text processing technology, and the features
being made possible with these tags (ie pronouncing «u» as /ʉː/ instead
of the default /uː/) has so far not been put to use. But we expect that to
change in the future, as the text processing is applied to open-source speech
synthesis systems such as [Festival](http://www.cstr.ed.ac.uk/projects/festival/)
and [Simple4All](http://simple4all.org).
