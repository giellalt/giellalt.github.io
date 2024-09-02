# Neahttadigisánit language pairs

This is an overview of the Neahttadigisánit dictionary sites and language pairs.

For adding new language pairs, see the [documentation on starting new language pairs](StartingNewLanguagePairs.html).

To move language pairs between projects, see the [documentation on moving language pairs](NDSMovingLanguagePairs.html).

# Dictionary sites (URLs)

- [baakoeh.oahpa.no](http://baakoeh.oahpa.no) = South Saami (sma)
- [kyv.oahpa.no](http://kyv.oahpa.no) = Komi (kpv)
- [muter.oahpa.no](http://muter.oahpa.no) = Mari (mrj, mrh)
- [saan.oahpa.no](http://saan.oahpa.no) = Skolt Saami (sms)
- [saanih.oahpa.no](http://saanih.oahpa.no) = Inari Saami (smn)
- [sanat.oahpa.no](http://sanat.oahpa.no) = Baltic Finnic languages (fkv, izh, liv, olo)
- [sanit.oahpa.no](http://sanit.oahpa.no) = North Saami (sme)
- [sanj.oahpa.no](http://sanj.oahpa.no) = Kildin Saami (sjd)
- [sonad.oahpa.no](http://sonad.oahpa.no) = Votic, Võru, Ingrian (vot, vro, izh)
- [vada.oahpa.no](http://vada.oahpa.no) = Nenets (yrk)
- [valks.oahpa.no](http://valks.oahpa.no) = Erzya and Moksha (mdf, myv)
- [bahkogirrje.oahpa.no](http://bahkogirrje.oahpa.no) = Pite Saami (sje)

On the server, this information can also be queried by the `nds` management
script. This will read the active configuration files:

```bash
(neahtta_env) [neahtta@gtdict git-neahttadigisanit]$ nds ls --include-dicts
```

# Language pairs

- South Saami: _baakoeh_:
  - language pairs: sma-nob, nob-sma
  - metalanguages: sma, nob
- Komi: _kyv_
  - language pairs: kpv-fin, kpv-eng, kpv-rus,
  - metalanguages kpv, fin, eng, rus
- Mari: _muter_
  - language pairs: mrj-fin, mrh-fin
  - metalanguages: fin, mrh, mrj, rus
- Northern Balto-Finnic: _sanat_
  - language pairs: olo-fin, izh-fin, fkv-nob, nob-fkv, fit-swe, swe-fit
  - metalanguages: fin, nob, rus, eng
- Southern Balto-Finnic: _sonad_
  - language pairs: liv-fin, liv-lat, vot-est, vot-fin
  - metalanguages: fin, nob, lat, rus, eng
- Inari Saami: _saanih_
  - language pairs: smn-sme, sme-smn, smn-fin, fin-smn, smnSoMe-fin
  - metalanguages: smn, sme, fin, eng
- North Saami: _sanit_
  - language pairs: sme-nob, nob-sme, sme-fin, fin-sme, smeSoMe-nob, spa-sme
  - metalanguages: sme, nob, fin, eng
- Kildin Saami: _sanj_
  - language pairs: sjd-rus, rus-sjd
  - metalanguages: sjd, rus, eng
- Mordva: _valks_
  - language pairs: mdf-fin, myv-fin,
  - metalanguages: myv, fin, rus
- Nenets, Mansi: _vada_
  - yrk-fin
  - mns-rus
  - metalanguages: fin, rus
- Pite Saami: _bahkogirrje_
  - language pairs: sje-eng, sje-nob, sje-swe
  - metalanguages: nob, swe, eng

# Incoming language pairs

- Swedish, Russian and English as target languages in some of the language pairs.

# Language code names

If some of the 3-letter language codes are unknown, you may look them up at [Wikipedia](https://en.wikipedia.org/wiki/ISO_639-3)
