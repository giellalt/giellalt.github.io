# Error markup for KAL - Greenlandic

We want to extend (some of) the corpus files with markup for spelling
and other errors, to use them as gold standards for testing our spellers
(and in the future other tools as well). The markup is done manually,
and needs to follow certain rules.

- **Ordklasse (ikke obligatorisk)::**  
  loan \| prop \| pron \| num \| acro \| abbr  
  (dette fordi nogle typer ord har mere fejlskrivning end andre typer)
- **Specielle forhold ved ordet (ikke obligatorisk):**  
  infl \| der \| cmp
  - _infl_: fejlen er tilknyttet bøjningen i ordet
    - _plurtant_: pluralis tantum
    - _0-suff_: manglende suffiks
    - _poss_: fejlen ligger i possessormarkeringen
  - _der_: derivationsfejl, fx manglende derivativ (tilhæng) eller
    fejl ved affingering
    - _htr_: halvtransitiv
  - _foc_: fejlen er tilknyttet enklitisering
  - _cmp_: sammensætningsfejl
- **Fejltyper - eksempler:**  
  phon \| orto \| punct \| ord \| dial \| hypcorr \| typo  
  _Note_: Når der i opmærkningen står en bindestreg med mindst et
  bogstav på hver side, eks. a-i: Venstre side af bindestregen angiver
  aktuelle forhold i ordet, medens højre side angiver rettelsen.
  - _phon_: fejlen er tilknyttet fonetik/fonologi.
    - {atoraai}${phon,ai\|atorai}
    - {ingerlarnga}${phon,rng-rn\|ingerlarna}
    - {erngup}${phon,rng-rm\|ermup}
  - _orto_: fejlen er tilknyttet retskrivningens konventioner.
    Herunder _old_ = gammel retskrivning; og _glides_ = halvvokaler
    - {Arkaluk}${prop,orto,old,rk-qq\|Aqqaluk}
    - {allanngujuitsuviit}${orto,glides\|allanngujuitsuiit}
  - _punct_: fejlen er tilknyttet interpunktion
    - {Pisunili.}${punct,dot-0\|Pisunili}
  - _ord_: fejlen er tilknyttet ordenstal
    - {14-anut}${num,ord,0-dot\|14.-anut}
  - _dial_: dialektal fejl.
    - {aninguissaqqaartoq}${dial,g,ng-g\|aniguissaqqaartoq}
    - {Erseqqissaatigissuara}${dial,ssa\|Erseqqissaatigissavara}
    - {Paasiuminaattut}${dial,tt-ts\|Paasiuminaatsut}
    - {igalaavinnaat}${dial,v-g\|igalaaginnaat}
    - {oqaaseqatigiileeriaasiisa}${dial,i-dial\|oqaaseqatigiilioriaasiisa}
    - {aaqqissuusaanngitsumik}${dial,con,s,1-2\|aaqqissuussaanngitsumik}
    - {S-O-V-uginnarani}${dial,phon,i-dial\|S-O-V-uinnarani}
    - {oqaluinnarniutaagani}${infl,dial,ga-na\|oqaluinnarniutaanani}
    - {Ass.36:”Neriartoqusingami}${der,dial,qu-qqu;dial,ng-g;cmp,1-3\|Ass.
      36: "Neriartoqqusigami}
  - _sub_: substandard, afviger fra det standardiserede sprog.
    - {Akileraartigani}${sub,infl,ga-nna\|Akileraartinnani}
    - {Namminersornerulernitsinniik}${infl,sub\|Namminersornerulernitsinniit}
    - {akissuteqapalluttarneri}${sub,u-a\|akissuteqapallattarneri}
  - _hypcorr_: hyperkorrektion
    - {inornartigaaramiuk}${dial,hypcorr,g-ng\|inornartingaaramiuk}
    - {atoraangasigik}${hypcorr,s-t\|atoraangatigik}
  - _sandhi_: affingeringsfejl
    - {Tulluutissorinassanngikkaluarpoq}${der,sandhi,ti-0\|Tulluussorinassanngikkaluarpoq}
  - _metathesis_: ombytning
    - {Uunnammarmiullu}${typo,metathesis,nn-mm\|Uummannarmiullu}
    - {uupakaatiillugu}${phon,con,metathesis\|uukapaatiillugu}
  - _min-cap_: skrevet lille begyndelsesbogstav, skal være stort
    begyndelsesbogstav
    - {nuummi}${prop,min-cap\|Nuummi}
  - _typo_: tastefejl
    - {akissutissarsisineqarsinnaapput}${typo,der,si-0\|akissutissarsineqarsinnaapput}
    - {atorneqrtut}${typo,0-a\|atorneqartut}
    - {Pallullorni}${typo,llullor-llorlu\|Pallorluni}
- **Flere fejl i samme ord holdes adskilt med ( ; ), eks.:**
  - {Ass.36:”Neriartoqusingami}${der,dial,qu-qqu;dial,ng-g;cmp,1-3\|Ass.
    36: "Neriartoqqusigami}

By following these guidelines the resulting files should be readily
usable for (speller) testing, as soon as they are converted to xml.
