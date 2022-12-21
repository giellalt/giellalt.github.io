# The Machine Translation Page

These pages documents how to build translation programs using
*giellalt* language models and the *Apertium* MT infrastructure. The
focus is on translation from North, Lule and South Saami to Norwegian,
between North Saami and Finnish, and between Saami languages, but the
documentation is relevant for any language pair. Giellatekno and
Divvun cooperates with [Apertium](http://wiki.apertium.org) on machine
translation.

## Linguistic documentation

### Installing and tutorials

- [Installing Apertium on your machine](DailyCompilingOfApertiumFiles.html)
- Apertium tutorials
  - [The apertium documentation page](https://wiki.apertium.org/wiki/Documentation) (on the Apertium wiki)
  - Cf. especially [Apertium New Language Pair HOWTO](https://wiki.apertium.org/wiki/Apertium_New_Language_Pair_HOWTO)
  - Sourcefiles are found in [the Giellatekno coursed folder](https://gtsvn.uit.no/langtech/trunk/courses/apertium-for-dummies/)

### Linguistic work

#### Commands

- [Apertium commands (in North Saami)](infra/ApertiumCommands.html)
- [Regression test ja pending test](infra/Testing.html)
- [python scripts: Comparing MT and manual translation (in North
    Saami)](infra/Paralleltexts.html)

#### Bidix work and lexical selection

- [Bidix-work (in North Saami)](infra/BidixWork.html)
- [Bidix-sanity (Improving bidix)](infra/bidixsanity.html)
- [Missinglists](infra/MissingList.html)
- [Work with missinglists and bidix, without analysers on local
    computer](infra/StWorkers.html)
- [Hash-list](infra/HashList.html)
- [Lexical selection (in North Saami)](infra/LexicalSelection.html)

#### Transfer rules

- [Transfer-rules – kvasicode (in North
    Saami)](infra/TransferRules.html)
- [Transfer-rules – code: relevant
    examples](infra/TransferRules_examples.html)

#### Harmonising tags

- [Documenting tag transfer from Giellatekno to
    Apertium](http://wiki.apertium.org/wiki/Integration_and_tagset_conversion_with_Giellatekno)
- [Derivation overview](infra/DerivationOverview.html)

### Evaluation

- [WER Word Error Rate – Comparing MT version and corrected version
    (in North Saami)](infra/WordErrorRateTesting.html)
- [Classification of corrections (in Lule
    Saami)](infra/ErrorClassification.html)
- [Coverage April 2016](courses/sjangertest.html)
- [Coverage June 2016](courses/sjangertest2.html)

## Technical documentation

### Apertium

- [Updating the MT versions on
    gtweb](infra/UpdatingApertiumOnGtweb.html)
- [Maintaining jorgal and mt-testing (the web
    services)](ConfiguringUpdatingMTServer.html)

### OmegaT

- [OmegaT](omegat/OmegaT.html)
- [Using Apertium in OmegaT](infra/ApertiumOmegaT.html)
- [OmegaT Developer Info](omegat/OmegaTTDeveloperInfo.html)

## Former courses

- [December 2015](courses/courseDecember2015.html)
- [Februar 2016](courses/courseFebruar2016.html)
- [April 2016](courses/courseApril2016.html)
- [December 2022:](courses/courseDecember2022.html) Theme:
  [Apertium recursive](https://wiki.apertium.org/wiki/Apertium-recursive)

## Links to online MT programs

- [North Saami to Norwegian Bokmål](http://jorgal.uit.no/)
- [MT between North Saami and Lule and Inari
    Saami](http://gtweb.uit.no/mt/)
- [Our experimental MT programs, also between North Saami and South
    Saami](http://gtweb.uit.no/mt-testing/)

## Work on language pairs

- [North Saami - Norwegian
    Bokmål](smenob/NorthSaamiNorwegianMachineTranslation.html)
- [North Saami - South
    Saami](smesma/NorthSaamiSouthSaamiMachineTranslation.html)
- [North Saami - Inari
    Saami](smesmn/NorthSaamiInariSaamiMachineTranslation.html)
- [Finnish - North Saami](smefin/smefin.html)
- [North Saami - Lule
    Saami](smesmj/NorthSaamiLuleSaamiMachineTranslation.html)
- [North Saami - German](smedeu/NorthSaamiGermanMachineTranslation.html)

## Meetings 2016

- [12.01.2016: project planning](meetings/160112.html)
- [14.01.2016: transfer rules](meetings/160114.html)
- [03.11.2016: e.g. evaluation, articles](meetings/161103.html)
- [16.11.2016: harmonising of transfer rules](meetings/161116.html)
- [24.11.2016: smesma and smesmj empiri](meetings/161124.html)
