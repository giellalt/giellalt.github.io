# Text processing / normalisation

Using rule-based technologies **(Sjur writes this)**

Some examples can be found [here](/speech-smj/TextProcessing.html).

The actual text processing pipeline is always specified in `tools/tts/pipeline.xml.in`.

## The procedure does the following:

- normalising acronyms and abbreviations
- normalising digits of various kinds
- exceptional pronunciation
- do you need fonemic / non-orthographic text?

## The fsts needed

The fsts needed are in `src/fst/transcriptors/` 

## Analysing text

Tthe tools tu run the fsts are in `tools/tts/`.

To compile, stand in `lang-xxx` (xxx your iso code) and write

`./configure --enable-tts` 

Thereafter compile (make).

In order to test the fst:s, run a string like the following:

```
echo "Odne lea 25.6" | divvun-checker -a $GTLANGS/lang-sme/tools/tts/se-tts.zpipe
```

The result should be along the lines of


```
"<Odne>"
    "odne" Adv Sem/Time <W:0.0> #1->2 @ADVL> "odne"phon
:
"<lea>"
    "leat" <mv> V <TH-Nom-Any> <mielde> <OR-Loc-HumGroup> <OR-eret-Plc> <dušše><TH-Inf> <árvvus> <LO-Loc-johtu><DE-Ill-Plc> <AT-Loc-Mat> <AT-Abe-Any> <AT-Nom-Any> <AT-Nom-Adj><EX-Ill-Ani> <PO-Loc-Hum> <PO-Gen-Hum> <MA-mielde-Any> <MA-Adv-Manner> <XT-Gen-Measr> <LO-maŋŋil-Time> <LO-Acc-Time> <LO-Loc-Time> <CO-Com-Ani> <ID-Nom-Any> <TH-Nom-Any><RO-Ess-Any><EX-Ill-Any> <EX-Ill-Ani><TH-Nom-Adj> <EX-Ill-Ani> <TH-Nom-Obj><RE-Ill-Ani> <LO-Loc-Any> <AktioEss> <BE-Ill-Ani><PU-Ess-Any> <RO-Ess-Any><PU-Ill-Act> <RO-Ess-Any> <Inf> IV Ind Prs Sg3 <W:0.0> #2->0 @FMV "lea"phon
:
"<25.6>"
    "geassemánu guoktelogiviđát beaivve" Num Arab Sem/ID <W:0.0> #3->2  "geassemánu guoktelogiviđát beaivve"phon
    "guoktelogivihtta čuokkis guhtta" Num Arab Sem/ID <W:0.0> #3->2  "guoktelogivihtta čuokkis guhtta"phon
    "guoktelogivihtta čuokkis guđát" Num Arab Sem/ID <W:0.0> #3->2
	"guoktelogivihtta čuokkis guđát"phon
```	
