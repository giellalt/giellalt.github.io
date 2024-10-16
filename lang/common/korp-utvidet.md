# Søk med søkeboksen _Utvidet_ i Korp

Gå til et av Korp-grensesnitta, f.eks. [det samiske](http://gtweb.uit.no/korp/). Trykk på fliken **Utvidet** rett under **KORP**-kogoen.

## Selve søkeboksen

![Alt text](korp-utvidet.png?raw=true "Søkeboksen *Utvidet*")

### Enkel bruk av søkeboksen

Boksen har 9 ulike sækemodi, _ord, ordklasse, grunnform, dependensrelasjon, domain, tittel, translated from, tidsintervall_. Vi går gjennom dem en etter enn:

#### ord

Her skriver du inn _ordform_. Merk alternativa til høyre, f.eks. _er, er ikke, ..._ Alternativet _er ikke_ gir bare mening med bruk av flere søkebokser.

#### msd (morphosyntactic description)

Her skriver du inn grammatisk tagg. Menyen til venstre står på **inneholder**, fordi taggen bare er en del av _ordform + analyse_. Viss målet t.d. er lokativ entall, skriv **Sg.Loc** i søkefeltet.

#### ordklasse

Her er det ferdigdefinerte alternativ, et for hver ordklasse.

#### grunnform

Her kan du søke på leksemet. Å velge _sátni_ her gir _sátni, sáni, sániid, ..._

#### dependensrelasjon

Her kan du søke på tagger for syntaktisk funksjon, f.eks. **deprel_←OBJ** (i u*korp står det bare \*\*deprel*←OBJ\*\*). Nedfallsmenyen gir ei liste over tilgjengelig funksjonstagger. Her er ei [forklaring av taggene for syntaktisk funksjon](https://giellalt.uit.no/lang/sme/docu-sme-syntaxtags.html).

#### domain

Dette er korpusdomena **administration, bible, facts, ficti, news, ...** Det ser ikke ut til at dette er implementert til å fungere i søk. Derimot er det mulig å sortere treff etter domene under søk på **Statistikk**.

#### tittel

Dette er **tittelen** til dokumentet. Det ser ikke ut til at dette er implementert til å fungere i søk. Derimot er det mulig å sortere treff etter domene under søk på **Statistikk**.

#### translated from

Her er metadata svært dårlig, og det ser heller ikke ut til at dette er implementert i søk.

### Kombinere flere viklår i samme søkeboks

Det er mulig å kopiere søk med operatorene **OG** og **ELLER**. Trykk på **eller** nederst i boksen for å få søke etter unionen av to eller flere krav (f.eks. søk etter _substantiv eller pronomen_). Trykk på **og** for å få en ny del av samme søkeboks, for å søke etter et snitt av to krav (f.eks. søk etter et ord som er _plural og objekt_).

## Kombinere flere søkebokser

![Alt text](korp-treboksar.png?raw=true "Kombinasjon av fleire boksar")

Med å trykke på **⨁** til høyre for søkeboksen får du en søkeboks til, slik at du kan du søke på ordkombinasjoner. Her kan det også væerre en god idé å søke på **ordklasse er ikke**.

## Søk på flere ord og vis statistikk

Søk ett er to ord (merk den tomme boksen mellom verb ob objekt), og velg **Statistikk**. Resultatet blir en frekvenssortert statistikk over _verb + objekt_.

![Alt text](korp-treboks-obj.png?raw=true "Uspesifisert ord mellom verbet og objektet")
