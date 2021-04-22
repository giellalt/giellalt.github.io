# Fikse lus i egennavn (propernouns)


Bellingmo dukker opp som en feil i propernouns-testinga


Eksisterer den i analysatoren?

```
$ lookup -q src/analyser-gt-desc.xfst 
Bellingmo
Bellingmo	Bellingmo	+?
```


Hva skjer når vi genererer grunnform av Bellingmo?

```
$ lookup -q src/generator-gt-desc.xfst 
Bellingmo+N+Prop+Sg+Nom
Bellingmo+N+Prop+Sg+Nom	Bellinkmo
```


Generatoren lager Bellinkmo, testen venter Bellingmo. Testen er korrekt og vi
har en feil en eller annen plass i .lexc-filene eller i skriptet som overfører
lemma fra $GTCORE/gtdshared/smi/src/morphology/stems/smi-propernouns.lexc til
$GTCORE/gtdshared/smi/src/morphology/stems/smi-propernouns.lexc


Siden dette er en norsk navn, åpner vi filen som inneholder felles egennavn for alle samiske språk.


$ see $GTCORE/gtdshared/smi/src/morphology/stems/smi-propernouns.lexc


Bellingmo i $GTCORE/gtdshared/smi/src/morphology/stems/smi-propernouns.lexc:

```
Bellingmo+OLang/NOB:Belling9#mo9 NYSTØ ;
```


Bellingmo i smj/src/morphology/generated_files/smi-smj-propernouns.lex:

```
Bellingmo+OLang/NOB:Belling9#mo NYSTØ ;
```


g9# blir ikkje g#. Det betyr at det er ein feil i skriptet som transformerer
smi-fila til smj-format: `src/scripts/smi-smj-conversion.pl`. 


Vi endra skriptet ved å endra frå:

```
	s/9 / /g ;
```

til:

```
	s/9 / /g ;
	s/9#/#/g ;
```
