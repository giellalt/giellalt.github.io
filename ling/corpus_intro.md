# Introduction to working on corpora at Giellalt

This document will teach the user how to convert files in the corpus
repositories to xml, and how to extract text from these documents.

## The GiellaLT corpus philosophy

The corpora at GiellaLT are 

1. The corpora must be usable for multiple purposes, and thus have
   metadata for each corpus file.
3. A central principle is that **the original files shall not be
   changed**. This makes it possible to do research om the original
   form of the files.
3. For each file *filename.ext* (where .ext = .doc, .docx, .pdf, .odt,
   .html, .epub, ...), there are **three files**:
   1. in the folder *corpus-xxx-orig*, there is for each
      *filename.doc* (or docx, ...), there is a *filename.doc.xsl*, 
	  containing metadata (title, author, year, ...)
   2. in the folder *corpus-xxx* there is (in the same subfolder) a 
      file *filename.doc.xml* containing the converted text
4. The corpus files are divided in two groups, **open** and **closed**
   files (for copyright reasons).

For a presentation of the mechanisms behind this, see:

Huhmarniemi, Saara, Sjur Moshagen and Trond Trosterud 2007: [Usage of XSL Stylesheets for the annotation of the Sámi language corpora](https://giellatekno.uit.no/publications/law_short.pdf). LAW '07: Proceedings of the Linguistic Annotation Workshop, p. 45–48. Morristown, NJ, USA: Association for Computational Linguistics. 

## Converting the corpus to xml

To be able to convert files in our repository, you have to [check out
our tools and do a basic setup](/infra/anonymous-svn.html#Preparation).

The corpus is stored using
[git](https://en.wikipedia.org/wiki/Git).

For each language, the corpus files are divided in a _free_ and a _restricted_ part. Each corpus has two directories, one for the original files (\*docx, pdf, html, ...) and one for the converted text files (xml). For a language with ISO code xxx, the four repositories are:

```
corpus-xxx
corpus-xxx-orig
corpus-xxx-x-private
corpus-xxx-orig-x-private
```

Access to the `private` repositories are restricted for copyright reasons, and are given only to project employees working on the corpora. The open ones are available for all, at [giithub.com/giellalt/](https://github.com/giellalt/) (search for `corpus-xxx`, xxx being the ISO code of your language) in the search field).

## Extract text from the corpus

The converted xml files are found in the `corpus-xxx/converted/` catalogue. To get
all North Saami text, issue the command `ccat -a -r -l sme corpus-sme/converted`.
The options available for `ccat` are listed with the
command `ccat -h`.

If you do not have `ccat` installed (part of our _corpustools_), you may use `cat` and get xml files.


## Divvun/Giellatekno corpus documentation

(this documentation may be obsolete)

- The tagged corpus files
  - [How to create an analyzed corpus](corpus_analyze.html)
  - [A plan for building our external corpus](corpus_plan.html)
  - [The &lt;Correct!&gt; corpora](correct-dir.html)
- The parallel corpus files
  - [ParallelCorpusConversion](ParallelCorpusConversion.html)

## Other corpora

- [How to use Wikipedia as a corpus](WikipediaAsCorpus.html)
- [How to build corpora from Wikipedia
  editions](wikipedia_as_corpus.html)

## Old links (kept for now)

[DTD -discussion](corpus_dtd.html)

[Conversion](corpus_conversion.html)
