# About GiellaLT

This site contains the technical documentation of the GiellaLT
infrastructure, developed and used by [Divvun](http://divvun.no) and [Giellatekno](http://giellatekno.uit.no).
It is an open source website providing analysers and tools for
[a wide range of languages](LanguageModels.html), as well as
[a ready-made setup](infra/HowToAddANewLanguage.md) for adding more languages.

## The possibility to make computer tools for your language

Computer tools supported by our infrastructure include:

- linguistic analysers (morphology, syntax)
- spell checkers and grammar checkers
- morphologically enabeled e-dictionaries
- machine translation

## ... by using the following linguistic technology

We write our morphologies as [finite state transducers](https://en.wikipedia.org/wiki/Finite_state_transducer)
in the formalisms _lexc_, _twolc_ and _xfst rewrite rules_, and compile them into computer programs for language analysis with the compilers [xfst](http://fsmbook.com),
[hfst](http://www.ling.helsinki.fi/kieliteknologia/tutkimus/hfst/) or [foma](https://github.com/mhulden/foma).
Our syntaxes we write in [constraint grammar](https://en.wikipedia.org/wiki/Constraint_grammar),
and we compile our constraint grammars with [vislcg3](http://beta.visl.sdu.dk/cg3.html).
The installation of these compilers is documented on the [Getting Started](infra/GettingStarted.html) page.

## Source code, licensing and cooperation

All our resources, infrastructure and linguistic content alike, are available under dual licenses, CC-by-SA and GPL. You may thus take whatever resource you find useful with you and go, as long as you refer to us when you use it.

The linguistic source code is found in the present git repository ([giellalt](https://github.com/giellalt)). In addition to that, we maintain the following git repositories (all on github), mostly with more technical content: [borealium](https://github.com/borealium), [divvun](https://github.com/divvun), [divvungiellatekno](https://github.com/divvungiellatekno), [giellatekno](https://github.com/giellatekno). Another relevant git repository (also on github) is [apertium](https://github.com/apertium).

You may also cooperate with us, e.g. use our servers for your language, embark on a shared project, etc. In order to do that, please [contact us](https://divvungiellatekno.github.io/giellalt.uit.no/admin/people.html).
