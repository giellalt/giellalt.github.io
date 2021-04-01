Error Tags
=======

Divvun og Giellatekno nyttar feiltaggane nedanfor, med dei definisjonane som
står oppførte. Filtrering som gjeld alle feiltaggar:


- alle taggar med prefikset `+Err/` blir automatisk plukka ut og brukt som
  grunnlag for automatisk genererte regulære uttrykk (xerox-typen).
- automatisk genererte filter:
	- fjern alle `+Err/`-taggar (sjølve taggen blir fjerna, ingen lingvistiske
   endringar) - i deskriptive fst-ar som ikkje treng desse taggane
	- fjern alle strengar/ordformer tagga med `+Err/`  - alle normative fst-ar




## +Err/Orth (tidlegare +Err/Sub)


Ikke-normativ ortografisk variant av et normativt lemma, for ord som har en
normativ skrivemåte.
=> normativt lemma til venstre, den normative varianten står til venstre for kolon




## +Err/Lex (tidlegare +Err/LexSub)


* Ord som ikke har en normert form, oftest lånord:
  *fløypartiija*, *spesiála–*, *husmor*, *Amazonsletta* 
* Ord som har samiske alternativer: *brievva*, *komuvnna*, *byddja*
  (helst ikkje, sjå lengst ned under **Andre taggar**)
* ikkje noko normativt lemma til venstre for stammen.


Kategorien er vanskeleg definerbar, bruk taggen forsiktig.


## +Err/Hyph
Ikkje-normativ manglande bindestrek, t.d. ved
akronym + ord -> må bruke bindestrek (*CD-spiller*, ikkje *CDspiller*)


## +Err/Der
Ord som bryter med vanlige derivasjonsregler (vanligvis analogier)
Både morfologiske og semantiske brot blir dekte av denne taggen.
Akseptable unnatak må leksikaliserast.


Døme:
- sme:
	- *alkoholakeahttá* (=> alkoholahis) (morfologiske årsaker)
	- *falásteaddji* (analog derivasjon på ikkje-eksisterande stamme)
-	 *falásteaddji* (=> falástalli) (morfologiske årsaker)
	- *dáhpáhuvvot* (=> dáhpáhuvvat) ??
- smj:
	- *nuorttaviesun* (-n vs -ár) (semantiske årsaker)
- sma:
	- bryter med derivasjonsreglene. (smalemma fra gïelegaaltije)
	- *guektiengïelen/guektiengïeleldh* => *guektiengïeleh*
	- passive verb






## +Err/Cmp 
(ikkje bruk denne - sjå konklusjonen)


### Diskusjon


For ord som er utafor vanlig sammensetning,
f.eks. `davásguovlu` - `davveguovlu:davásguovlu`, `masseprodusierit`
(masse kan brukes som førsteledd bare for subst), `sesongdebutierit`.
For ordformer som `iisápmelaš` istf `ii-sápmelaš` bør lexc-oppføringa vera
`ii-+Err/Hyph:ii`.


**Eller:**
Sammensetninga følger ikke normative sammensetningsregler. Døme frå sma:
- laahkoeterm+ laahkoeterm= muahra+ aahka=>  muahrh-aahka
- eh-ege
- PlGenCmp
- SgNomCmp
- SgGenCmp
- attr


Maja: -> gå igjennom alle lemma som står til R -leksikon! gå gjennom data, legge
til tagger! Gå gjennom alle deksriviptive sammensetningstaggene og sjekk om de
er lagt til.


Det er endel åpne sp.mål om dette i sma, vanskelig å vite hva som er
sammensettingsreglene i sma i noen tilfeller. Nom, Gen eller attr. 
Deskriptive sammensettingstagger aktuelle for sma.
   SgGenCmp SgNomCmp PlGenCmp


Andre døme frå `sme`:

```
  viesuviessu	viessu+N+SgGenCmp+Cmp#viessu+N+Sg+Nom
  viessoviessu	viessu+N+SgNomCmp+Cmp#viessu+N+Sg+Nom
  viesuidviessu viessu+N+Err/Sub+PlGenCmp+Cmp#viessu+N+Sg+Nom
```


### Konklusjon
Kategorien er for vanskeleg definerbar, vi bruker ikkje taggen **+Err/Cmp**.
Men vi bør sjekka at alle samansetjingar får deskriptive samansetjingstaggar,
slik at vi kan ta fram datagrunnlag for ei ev. normering av samansetjingar.








## Andre taggar
Korleis taggar vi *kommuna*, dvs ikkje-tilpassa låneord som har samiske
alternativ? Til bruk i grammatikkontrollen for å fanga opp ord og uttrykk der
vi kan gje forslag til samiske alternativ. Vi treng ein tagg for slike. Forslag:

* `+Style/Foreign` (også: `+Style/Blog`, `+Style/Sms`, osb.)
