# gitignore

`.gitignore`:

- er ei tekstfil, med full versjonskontroll
- kan finnast i kvar einaste katalog

# Køyrereglar

- rotnivåfila er templat-driven, og skal berre oppdaterast via gut-template-merge
- ein kan leggja til språkspesifikke `.gitignore` i underkatalogar

Då får vi:
- ingen flettekonfliktar
- nok fleksibilitet for alle

Bør vi ha ei sperre av noko slag på rotnivåfila? Korleis?

**NB!** Om ein legg til filer i templatet, må dei spesifiserast i `.gut/delta.toml`!

# Førebuingar

- installer [gut](https://github.com/divvun/gut)
- sjekk ut alle `lang`-repoar med kommandoen [her](https://github.com/divvun/giellalt-svn2git/blob/master/doc/GutUsageExamples.md) (Task 12)

# Sjølve ignore-redigeringa

- identifiser felles filer som ikkje blir ignorerte
- fylg instruksjonane i [Task 9](https://github.com/divvun/giellalt-svn2git/blob/master/doc/GutUsageExamples.md)

**NB!** Merk at når slike massive endringar blir dytta ut til GitHub, så set det i gong bygging av så godt som alle repoar. Ein må rekna med over 1000 meldingar i Zulip.





----

# Kladd

    6469 total
      95 lang-sme/.gitignore
      68 lang-fkv/.gitignore
      66 lang-fao/.gitignore
      65 lang-yrk/.gitignore <== korrekt i høve til templatet


      

fao:
> tools/grammarcheckers/filters/make-desktopspeller-CG-tags.regex

fkv:
> /src/filters/remove-all_dialects_but_Jok-strings.regex
> /src/filters/remove-all_dialects_but_Por-strings.regex
> /src/filters/remove-all_dialects_but_Var-strings.regex

# Documentation for .gitignore updates

gut show repositories -o giellalt -r lang-sq

gut show repositories -o giellalt -r template

time gut status -o giellalt -r ^lang-

gut template apply -o giellalt -r ^lang- -t /Users/smo036/langtech/gut/giellalt/template-lang-und

The argument of -t shall be absolute, and hence user specific.

The gut directory could be replaced with an environment variable, like we have e.g. $GTHOME and $GTCORE

The check how it went:

time gut status -o giellalt -r ^lang-
time gut status --verbose -o giellalt -r ^lang-

gut commit  -o giellalt -r ^lang- -m "Some commit message"`

gut template apply --continue -o giellalt -r ^lang- -t /Users/smo036/langtech/gut/giellalt/template-lang-und



-----




