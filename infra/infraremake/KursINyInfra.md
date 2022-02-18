# Ny infra - opplæring del 2


Mål for dagen: byggja ut Oahpa-kompileringa med ein ny transducer


Vi gjer dette for berre eitt språk, slik at vi trener lokale tilpassingar.


|   fst-namn         | obligatoriske                                             |  valgfrie
| --- | --- | --- 
|  dict-norm-sme     | NomAg, G3, v1, v2, v3, v4, v5, Use/NGminip, Allegro       | G7, sem-tagger, IV, TV
|  dict-norm-sma     | Hom1, Hom2, v1, v2, v3, v4, v5, Use/NGminip               | IV, TV
|  sme-norm          |  -                                                        | NomAg, G3, G7, v1, v2, v3, v4, v5, Use/NGminip, Allegro, sem-tagger,  IV, TV
|  sma-norm          |  -                                                        | Hom1, Hom2,  IV, TV, v1, v2, v3, v4, v5, Use/NGminip    
|  oahpa-norm-sme    | NomAg, G3                                                 | v1, v2, v3, v4, v5, Use/NGminip, Allegro, G7, sem-tagger,  IV, TV
|  isme-GG.restr.fst | = oahpa-norm-sme, men Use/NG og Dial/-GG skal ikke være med  i kompileringa | -
|  isme-KJ.restr.fst | = oahpa-norm-sme, men Use/NG og Dial/-KJ skal ikke være med  i kompileringa | -
|  oahpa-norm-sma    | Hom1, Hom2                                                |  IV, TV, v1, v2, v3, v4, v5, Use/NGminip
|  isma-SH.restr.fst | = oahpa-norm-sma, men Use/NG og Dial/-SH skal ikke være med i kompileringa | -
|  isma-L.restr.fst  | = oahpa-norm-sma, men Use/NG og Dial/-L skal ikke være med  i kompileringa | -






Her er eit oversyn over fst-ane som skal bli kompilerte og eigenskapane deira


Nord:


|         FST            | obligatoriske                                           |  valgfrie
| --- | --- | --- 
|  analyser-dict-gt-norm  | NomAg, G3, v1, v2, v3, v4, v5, Use/NGminip, Allegro     | G7, sem-tagger, IV, TV
|  analyser-gt-norm       |                          -                              | NomAg, G3, G7, v1, v2, v3, v4, v5, Use/NGminip, Allegro, sem-tagger,  IV, TV
|  analyser-oahpa-gt-norm | NomAg, G3                                               | v1, v2, v3, v4, v5, Use/NGminip, Allegro, G7, sem-tagger,  IV, TV
|  generator-SH.restr-gt-norm | = analyser-oahpa-gt-norm,  men \\ Use/NG og Dial/-SH skal ikke med i kompileringa | -
|  generator-L.restr-gt-norm  | = analyser-oahpa-gt-norm,  men \\ Use/NG og Dial/-L skal ikke med  i kompileringa | -


Sør:


|         FST                 | obligatoriske                                           |  valgfrie
| --- | --- | --- 
|  analyser-dict-gt-norm      | Hom1, Hom2, v1, v2, v3, v4, v5, Use/NGminip              | IV, TV
|  analyser-gt-norm           |                        -                                 | Hom1, Hom2,  IV, TV, v1, v2, v3, v4, v5,Use/NGminip    
|  analyser-oahpa-gt-norm     | Hom1, Hom2                                               |  IV, TV, v1, v2, v3, v4, v5, Use/NGminip
|  generator-SH.restr-gt-norm | = analyser-oahpa-gt-norm,  men \\ Use/NG og Dial/-SH skal ikke med i kompileringa | -  
|  generator-L.restr-gt-norm  | = analyser-oahpa-gt-norm,  men \\ Use/NG og Dial/-L skal ikke med  i kompileringa | -  


Vi treng nye, språkspesifikke filter:


Filnamnkonvensjon for regex-filter:
* verb-mål_for_operasjonen-type.regex
* der type =
** tags: Vi fjernar taggen
** strings: Vi fjernar stien i nettet (dvs. ord + tag ) som taggen står i


Så langt har vi to verb:
* remove = fjern (obligatorisk)
* make-optional = nettopp


T.d.:
* `remove-lang_hom-tags.regex`
* `make-optional-lang_hom-tags.regex`
