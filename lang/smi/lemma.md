# Prinsipp for lemmatisering av samiske språk

## Lemma som ikkje skal inn i stavekontrollen - Err/Lex

Bakgrunnen for dette er ord i leksikon som ikkje er skal inn i stavekontrollen, men som likevel skal bli generert. Døme på slike ord er på sørsamisk _cubanske, juni_, og det kan være behov for det i nordsamisk også.

Desse blir merka med _+Err/Lex_ i leksikon. Dei kjem med i genereringsfilene, men ikkje i den normative fila.

## Leksikalsk homonymi: identifisere riktig lemma

Lemmaene er homonyme, men det er samantisk forskjell og forskjellige bøyningsparadigmer. I nordsamisk skiller vi de fleste med G3- og NomAg-tagger, fordi det er systematikk for store grupper av lemmaer.

| Nom    | Gen    | norsk | norm-fst-analyse      |
| ------ | ------ | ----- | --------------------- |
| lohkki | lohki  | lokk  | lohkki+N+Sg+Nom       |
| lohkki | lohkki | lesar | lohkki+N+NomAg+Sg+Nom |
| beassi | beasi  | reir  | beassi+N+Sg+Nom       |
| beassi | beassi | never | beassi+G3+N+Sg+Nom    |

Når det er snakk om enkelttilfeller, gir vi disse arbitrære taggar `+Hom1, +Hom2, …` (nummerert oppover ad lib).
Taggane blir lagt inn i leksikon før POS, men burde flyttast til etter POS
i kompileringa.

- Eksempler fra sørsamisk:
  - govledh+Hom1 - kl. IV å høre
    0 govledh+Hom2 - kl. V å høres

## Varianter under samme lemma: sortere bøyningsformer til riktig grunnform - v1, v2 osv

Ortografiske varianter av samme lemma, dvs. grunnform og ihvertfall deler av bøyingsparadigmet, bør i fst sorteres under samme lemma. Men vi legger til en tag for å kunne sortere bøyningsparadigmene til riktig grunnform.

Vi brukar taggane `+v1, +v2, …` (nummerert oppover ad lib) for å skilje mellom
dei ulike paradigmene.

- Eksempler:
  - sihkar+v1:sihkar
  - sihkar+v2:sihkkar

Hvis grunnformen er den samme, men det er to mulige bøyningsparadigmer, bruker vi ikke denne merkinga.
