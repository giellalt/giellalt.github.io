Normative fst-ar og stavekontrollar
=======

Notatar frå eit møte 18.3.2015


Tema: skal dei normative fst-ane oppføra seg identisk med stavekontrollane?


Alternativ: ha separate stavekontroll-fst-ar.


Problem: det er ei lus i Xerox-verktya som gjer at det er uråd å byggja Xerox-fst-ar som er identiske med stavekontrollane (kommandoen `twosided flag-diacritics` kræsjar `xfst` totalt).


Konklusjon på møtet:


Vi vil at norm-fst-ane skal vera så like som mogleg:
* Hfst = identisk
* Xerox = så lik som mogleg utan flaggavhengig samansetjingsfilter som krev
  kommandoen `twosided flag-diacritics`.


Endringar som skal inn i norm-fst-ane:
* del `+Use/-Spell` i to:
** `+Use/-Spell`
** `+Use/-PLX` (ordformer som ikkje skal med i PLX-konverteringa pga
   storleiksproblem og overgenerering, men som er ok i fst-baserte
   stavekontrollar)
* fjern `+Use/-Spell`-ordformer


Handskrivne notatar frå møtet:


[../../images/motenotatar_18.3.15.jpg]
