Møte om Termwiki og ordbøker 7.6.2017




# TermWiki slik han er organisert no


```
Semantikk:         Konsept
                 /    |   \
Uttrykk       sme    smj    nob ...
```


# Termwiki-strukturen brukt for ordbøker


Lister over ord på kvart språk (=lemmaliste):


```
sme     smj     sma     nob
ord-i    ...     ...    ord-a
ord-j    ...     ...    ord-b
ord-k
```


der ord-i, ... er eit sett av (lemma, stamme, POS, ...), dvs. ord-i = representasjonen av ord-i i lexc.


Ordbøker kan då representerast som ei samling med lenker frå ord-i i språk A til
ord-a i språk B, så sme-ord-k kan t.d. bli lenka til nob-ord-c, nob-ord-d,
nob-ord-e.


Skal vi ha éi lemmaliste per språk, eller mange?


Når du dreg ut -- når programmeraren dreg ut
... og för det må lingvisten skilne mellom sme-nob og sme-nob*
