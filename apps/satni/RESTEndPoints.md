# REST API
REST points are called in file at $GTHOME/apps/risten2/frontend/assets/js/components/satni/satni.rest.js


## Dictionaries
[https://satni.uit.no/satnibackend/dictionaries] returns list of dictionaries and terminilogies in satni database. It also returns localized names for diciotnaries and terminologies in north sami, julev sami, south sami, swedish and norwegian. Below is the response given today:
```
[
  {
    "id": "smnsme",
    "name": {
      "xml:lang": "no",
      "#text": "Enaresamisk-nordsamisk ordbok"
    },
    "description": {
      "xml:lang": "no",
      "#text": [
        "\n    ",
        "\n  "
      ],
      "p": "Ordboka er utvikla av Giellatekno, som del av\n    prosjektet maskinoversetting mellom samiske språk. Grunnlaget for ordboka\n    var Giellateknos Nordsamisk-finske ordbok (som bygger bla. på ordsamlinga\n    Álgu) og Marja-Liisa Olthuis og Taarna Valtonens finsk-enaresamiske ordbok\n    (finansiert av det finske Sametinget)."
    },
    "copyright": "Uspesifisert"
  },
  {
    "id": "smesmn",
    "name": {
      "xml:lang": "no",
      "#text": "Nordsamisk-enaresamisk ordbok"
    },
    "description": {
      "xml:lang": "no",
      "#text": [
        "\n    ",
        "\n  "
      ],
      "p": "Ordboka er utvikla av Giellatekno, som del av\n    prosjektet maskinoversetting mellom samiske språk. Grunnlaget for ordboka\n    var Giellateknos Nordsamisk-finske ordbok (som bygger bla. på ordsamlinga\n    Álgu) og Marja-Liisa Olthuis og Taarna Valtonens finsk-enaresamiske ordbok\n    (finansiert av det finske Sametinget)."
    },
    "copyright": "Uspesifisert"
  },
  {
    "id": "smanob",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Sørsamisk-norsk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Máttasámi-dáru sátnegirji"
      },
      {
        "xml:lang": "sma",
        "#text": "Åarjelsaemien-daaaroen baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Oarjjelsáme-dárro báhkogirjje"
      },
      {
        "xml:lang": "sv",
        "#text": "Sydsamisk-norsk ordbok"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": {
          "#text": [
            "Ordboka byggjer på ordlistematerialet utarbeida av Albert Jåma og Tove\n    Brustad som finst på ",
            " sine nettsider. I tillegg er dei vanlegaste orda frå sørsamiske\n    tekstar lagt til, og om lag 1250 sørsamiske stadnamn er henta frå Statens\n    Kartverk og det svenske Sametingets internettsider. Alle verba i Verbh! er\n    lagt inn, med svensk omsetjing. I alt inneheld ordboka omtrent 9750\n    lemma."
          ],
          "a": {
            "href": "http://www.ruovatsijte.no/",
            "#text": "Hemnes Samiske\n    Forening"
          }
        }
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": {
          "#text": [
            "Sátnegirjji vuođđun lea Albert Jåma ja Tove Brustad sátnelistui, guđe lea\n    gávdnomis ",
            " neahttasiidduin. Dasa lassin leat lasihan dábáleamos sániid\n    máttasámi teavsttain ja sullii 1250 máttasámi báikenama leat vižžon Stáhta\n    Gártadoaimmahagas ja Ruoŧa Sámedikki neahttasiidduin. Visot vearbbat, mat gávdnojit\n    Verbh! -girjjis leat lasihuvvon Ruoŧagielat jorgalusaiguin. Sátnegirji sisttisdoallá\n    sullii 9750 dárugiela vuođđohámi."
          ],
          "a": {
            "href": "http://www.ruovatsijte.no/",
            "#text": "Hemnes Samiske\n    Forening"
          }
        }
      },
      {
        "xml:lang": "sma",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": {
          "#text": [
            "Dan baakoegærjan sïsvege båata Albert Jåman jïh Tove\n    Brustaden baakoelæstojste, mah leah ",
            " nedtesæjrosne. Lissine leah baakoeh mah jeenemes åtneme saemien tekstine, jïh 1250 åarjelsaemien sijjienommh mah Statens Kartverkeste jïh Sveerjen Saemiedigkien nedtesæjroste leah veedtjesovveme. Gaajhkh dah veerbh Verb!-gærjesne leah aaj mealtan, mejtie lea svïenskegïelese jorkesovveme.Dan baakoegærjan leah medtie 9750 lemma.\n    lemma."
          ],
          "a": {
            "href": "http://www.ruovatsijte.no/",
            "#text": "Hemnes Samiske\n    Forening"
          }
        }
      },
      {
        "xml:lang": "smj",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": {
          "#text": [
            "Albert Jåma ja Tove Brustada báhkolistatjoakkáldahka l vuodon dán báhkogirjjáj. Báhkolistatjoakkáldahka l sadjihin  ",
            " næhttasijdon. Duodden de li dábálamos bágo oarjjelsáme tevstajs duoddidum, ja birrusin 1250 oarjjelsáme bájkkenamá li viettjadum Statens Kartverka ja Svieriga Sámedikke næhttabielijs. \n     Divna verba ma li girjen Verbh! li duoddiduvvam svierigadárogielak jårggålusájn. Tjoahkkáj li báhkogirjen birrusin 9750 liemmá."
          ],
          "a": {
            "href": "http://www.ruovatsijte.no/",
            "#text": "Hemnes Samiske\n    Foreninga"
          }
        }
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "smefin",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Nordsamisk-finsk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Davvisámi-suoma sátnegirji"
      },
      {
        "xml:lang": "sv",
        "#text": "Nordsamisk-finsk ordbok"
      },
      {
        "xml:lang": "sma",
        "#text": "Noerhtesaemien-suomi baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Nuorttasáme-suomi báhkogirjje"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n\n    ",
          "\n  "
        ],
        "p": [
          {
            "#text": [
              "Ordbøkene mellom nordsamisk og finsk er basert på leksikalsk materiale\n    fra ",
              ", og fra Giellateknos arbeid med nordsamisk\n    ",
              ". I tillegg har vi lagt til vanlige ord\n    både fra nordsamisk og spesielt fra finsk."
            ],
            "a": [
              {
                "href": "http://kotus.fi/",
                "#text": "Intitutionen för de inhemska språken i\n    Finland"
              },
              {
                "href": "http://oahpa.no/",
                "#text": "Oahpa"
              }
            ]
          },
          "Hver av ordbøkene inneholder omtrent 11.000 lemmaer."
        ]
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n\n    ",
          "\n  "
        ],
        "p": [
          {
            "#text": [
              "Davvisámi-suoma-davvisámi sátnegirjjit vuođđoduvvojit Giellatekno\n    ",
              "-bargui ja sátnelisttuide maid leat\n    ožžon dán ásahusas: ",
              ". Mii leat maid lasihan dábálaš davvisámegiela\n    ja erenoamážit suomagiela sániid."
            ],
            "a": [
              {
                "href": "http://oahpa.no/",
                "#text": "Oahpa"
              },
              {
                "href": "http://kotus.fi/",
                "#text": "Forskingscentralen för de\n    inhemska språken i Finland"
              }
            ]
          },
          "Juohke sátnegirjjis leat su. 11000 vuođđosáni."
        ]
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "finsme",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Finsk-nordsamisk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Suoma-davvisámi sátnegirji"
      },
      {
        "xml:lang": "sv",
        "#text": "Finsk-nordsamisk ordbok"
      },
      {
        "xml:lang": "sma",
        "#text": "Suomi-noerhtesaemien baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Suomi-nuorttasáme báhkogirjje"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n\n    ",
          "\n  "
        ],
        "p": [
          {
            "#text": [
              "Ordbøkene mellom nordsamisk og finsk er basert på leksikalsk materiale\n    fra ",
              ", og fra Giellateknos arbeid med nordsamisk\n    ",
              ". I tillegg har vi lagt til vanlige ord\n    både fra nordsamisk og spesielt fra finsk."
            ],
            "a": [
              {
                "href": "http://kotus.fi/",
                "#text": "Intitutionen för de inhemska språken i\n    Finland"
              },
              {
                "href": "http://oahpa.no/",
                "#text": "Oahpa"
              }
            ]
          },
          "Hver av ordbøkene inneholder omtrent 11.000 lemmaer."
        ]
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n\n    ",
          "\n  "
        ],
        "p": [
          {
            "#text": [
              "Davvisámi-suoma-davvisámi sátnegirjjit vuođđoduvvojit Giellatekno\n    ",
              "-bargui ja sátnelisttuide maid leat\n    ožžon dán ásahusas: ",
              ". Mii leat maid lasihan dábálaš davvisámegiela\n    ja erenoamážit suomagiela sániid."
            ],
            "a": [
              {
                "href": "http://oahpa.no/",
                "#text": "Oahpa"
              },
              {
                "href": "http://kotus.fi/",
                "#text": "Forskingscentralen för de\n    inhemska språken i Finland"
              }
            ]
          },
          "Juohke sátnegirjjis leat su. 11000 vuođđosáni."
        ]
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "nobsma",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Norsk-sørsamisk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Dáru-máttasámi sátnegirji"
      },
      {
        "xml:lang": "sma",
        "#text": "Daaroen-åarjelsaemien baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Dárro-oarjjelsáme báhkogirjje"
      },
      {
        "xml:lang": "sv",
        "#text": "Norsk-sydsamisk ordbok"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Ordboka byggjer på ordlistematerialet utarbeida av Albert Jåma og Tove\n    Brustad som finst på  sine nettsider. I tillegg er dei vanlegaste orda frå sørsamiske\n    tekstar lagt til, og om lag 1250 sørsamiske stadnamn er henta frå Statens\n    Kartverk og det svenske Sametingets internettsider. Alle verba i Verbh! er\n    lagt inn, med svensk omsetjing. I alt inneheld ordboka omtrent 8750 norske\n    lemma. Vær obs på at ordboka er blitt til ved å snu sørsamisk-norsk\n    ordbok, og at ordboka dermed vil mangle en del vanlige norske ord."
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": {
          "#text": [
            "Sátnegirjji vuođđun lea Albert Jåma ja Tove Brustad sátnelistui, guđe lea\n    gávdnomis ",
            " neahttasiidduin. Dasa lassin leat lasihan dábáleamos sániid\n    máttasámi teavsttain ja sullii 1250 máttasámi báikenama leat vižžon Stáhta\n    Gártadoaimmahagas ja Ruoŧa Sámedikki neahttasiidduin. Visot vearbbat, mat gávdnojit\n    Verbh! -girjjis leat lasihuvvon Ruoŧagielat jorgalusaiguin. Sátnegirji sisttisdoallá\n    sullii 8750 dárugiela vuođđohámi. Sátnegirji lea jorgaluvvon máttasámi-dáru sátnegirjjis,\n    de lea vejolaš ahte oalle máŋga dábálaš dárusáni váilot."
          ],
          "a": {
            "href": "http://www.ruovatsijte.no/",
            "#text": "Hemnes Samiske\n    Forening"
          }
        }
      },
      {
        "xml:lang": "sma",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": {
          "#text": [
            "Dan baakoegærjan sisvege båata Albert Jåman jïh Tove Brustaden baakoelæstojste, mah leah",
            " nedtesæjrosne. Lissine leah baakoeh mah jeenemes åtneme saemien tekstine, jïh 1250 åarjelsaemien sijjienommh mah Statens Kartverkeste jïh Sveerjen Saemiedigkien nedtesæjroste leah veedtjesovveme.Gaajhkh dah veerbh Verb!-gærjesne leah aaj mealtan, mejtie lea svïenskegïelese jorkesovveme.Dan baakoegærjan leah medtie 8750 daaroen lemma.Vuep!Dam åarjelsaemien-daaroen baakoegærjam libie jårrehtamme, dannasinie naan sïejhme daaroen baakoeh fååtesieh daennie Daaroen-åarjelsaemien baakoegærjesne."
          ],
          "a": {
            "href": "http://www.ruovatsijte.no/",
            "#text": "Hemnes Samiske\n    Forening"
          }
        }
      },
      {
        "xml:lang": "smj",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": {
          "#text": [
            " Albert Jåma ja Tove Brustada báhkolistatjoakkáldahka l vuodon dán báhkogirjjáj. Báhkolistatjoakkáldahka l sadjihin  ",
            " næhttasijdon. Duodden de li dábálamos bágo oarjjelsáme tevstajs duoddidum, ja birrusin 1250 oarjjelsáme bájkkenamá li viettjadum Statens Kartverka ja Svieriga Sámedikke næhttabielijs. \n     Divna verba ma li girjen Verbh! li duoddiduvvam svierigadárogielak jårggålusájn. Tjoahkkáj li báhkogirjen birrusin 8750 dároliemmá. Gå dagájma dáv báhkogirjev de jårggålijma ber oarjjelsáme-dárro báhkogirjev, ja dajnas de vájlluji muhtem dábálasj dárogielbágo."
          ],
          "a": {
            "href": "http://www.ruovatsijte.no/",
            "#text": "Hemnes Samiske\n    Foreninga"
          }
        }
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "finsmn",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Finsk-enaresamisk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Suoma-anársámi sátnegirji"
      },
      {
        "xml:lang": "sv",
        "#text": "Finsk-enaresamisk ordbok"
      },
      {
        "xml:lang": "sma",
        "#text": "Suomi-enaresamisk baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Suomi-enaresamisk báhkogirjje"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Enaresamisk → finsk og Finsk → Enaresamisk ordbok bygger på Valtonen og\n    Olthuis si Inarinsaame-suomi-inarinsaame-ordbok (ca 20000 ordpar).\n    Materialet blir kontinuerlig utvida av Giellatekno-gruppa ved UiT."
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Enaresamisk → finsk og Finsk → Enaresamisk ordbok bygger på Valtonen og\n    Olthuis si Inarinsaame-suomi-inarinsaame-ordbok (ca 20000 ordpar).\n    Materialet blir kontinuerlig utvida av Giellatekno-gruppa ved UiT."
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "smnfin",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Enaresamisk-finsk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Anársámi-suoma sátnegirji"
      },
      {
        "xml:lang": "sv",
        "#text": "Enaresamisk-finsk ordbok"
      },
      {
        "xml:lang": "sma",
        "#text": "Enaresamisk-suomi baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Enaresamisk-suomi báhkogirjje"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Enaresamisk → finsk og Finsk → Enaresamisk ordbok bygger på Valtonen og\n    Olthuis si Inarinsaame-suomi-inarinsaame-ordbok (ca 20000 ordpar).\n    Materialet blir kontinuerlig utvida av Giellatekno-gruppa ved UiT."
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Enaresamisk → finsk og Finsk → Enaresamisk ordbok bygger på Valtonen og\n    Olthuis si Inarinsaame-suomi-inarinsaame-ordbok (ca 20000 ordpar).\n    Materialet blir kontinuerlig utvida av Giellatekno-gruppa ved UiT."
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "nobsme",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Norsk-nordsamisk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Dáru-davvisámi sátnegirji"
      },
      {
        "xml:lang": "sma",
        "#text": "Daaroen-Noerhtesaemien baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Dárro-nuorttasáme báhkogirjje"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Ordboka er utvikla av Giellatekno og Divvun ved UiT Norges arktiske\n    universitet, og er basert på Nordsamisk-norsk ordbok."
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Sátnegirjji leat Giellatekno ja Divvun buvttadan UiT Norgga árktalaš\n    universitehtas ja dat vuođđuduvva Davvisámi-dáru sátnegirjái."
      },
      {
        "xml:lang": "sma",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Giellatekno jïh Divvun Norgga árktalaš univeristehtesne lea dam baakoegærjam dorjeme! Noerhtesaemien-daaroen baakoegærja lij jarngense daeenie barkosne."
      },
      {
        "xml:lang": "smj",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Báhkogirjje l åvddånahtedum Giellateknos ja Divvunis Vuona arktalasj Universitehtan, Nuorttasáme-dárro báhkogirjje l vuodon dán bargguj."
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "smenob",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Nordsamisk-norsk ordbok"
      },
      {
        "xml:lang": "se",
        "#text": "Davvisámi-dáru sátnegirji"
      },
      {
        "xml:lang": "sv",
        "#text": "Nordsamisk-norsk ordbok"
      },
      {
        "xml:lang": "sma",
        "#text": "Noerhtesaemien-daaroen baakoegærja"
      },
      {
        "xml:lang": "smj",
        "#text": "Nuorttasáme-dárro báhkogirjje"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Ordboka er utvikla av Giellatekno og Divvun ved UiT Norges arktiske\n    universitet, med utgangspunkt i Nils Jernslettens ordbok (med forfatterens\n    tillatelse). Den er senere blitt utvidet gjennom flere prosjekter."
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Sátnegirjji leat Giellatekno ja Divvun buvttadan UiT Norgga árktalaš\n    universitehtas ja dat vuođđuduvva Nils Jernsletten sátnegirjái (čálli lobiin). Dan leat\n    maŋŋelot viiddidan eará prošeavttain."
      },
      {
        "xml:lang": "sma",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Giellatekno jïh Divvun UIT Norgga árktalaš univeristehtesne leah dam baakoegærjam dorjeme. Baakoegærjan aalkoe lij Nils Jernsletten baakoegærja (Tjaelije lea jïjtje luhpiem vadteme). Dan mænngan lea baakoegærjam ovmessie prosjeekti tjïrrh vijriedovveme ."
      },
      {
        "xml:lang": "smj",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Báhkogirjje åvddånahtedum Giellateknos ja Divvunis Vuona arktalasj universitehtan, vuodon dán bargguj la Nils Jernslettena báhkogirjje (tjálle dåhkkidimijn). Dán maŋŋela la báhkogirjje vijdeduvvam ietjá prosjevtaj baktu."
      }
    ],
    "copyright": "Uspesifisert"
  },
  {
    "id": "termwiki",
    "name": [
      {
        "xml:lang": "no",
        "#text": "Termwiki"
      },
      {
        "xml:lang": "se",
        "#text": "Tearbmawiki"
      },
      {
        "xml:lang": "sma",
        "#text": "Termwiki"
      },
      {
        "xml:lang": "smj",
        "#text": "Termwiki"
      }
    ],
    "description": [
      {
        "xml:lang": "no",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Innholdet i Termwikien er basert på Sametingets termsamling. Sametingets\n    termsamling ble overført til Termwikien høsten 2013, og det har blitt lagt\n    inn noe ny terminologi etter det. Sátni.org vil regelmessig bli oppdatert\n    med det nyeste innholdet på Termwikien."
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Tearbmawiki vuođđun lea Sámadikki tearbmačoakkáldat. Sámedikki tearbmačoakkáldat\n      sirdojuvvui Tearbmawikii čakčat 2013 ja dasa lea lasihuvvon tearpmat dan maŋŋá.\n      Lasihuvvon tearpmat ihtet Sátni.org siidduide jeavddalaččat."
      },
      {
        "xml:lang": "sma",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Termwikijen sïsvegisnie leah Saemiedigkien teermelæstoeh. Saemiedigkien teermelæstoeh tjaktjen 2013 Termwikijasse sirtesovvin, jïh dan mænngan leah vielie teermh læssanamme. Daamhtetje sijhtieh orre baakoeh jïh teermh Sátni.org:ese lissiehtidh"
      },
      {
        "xml:lang": "smj",
        "#text": [
          "\n    ",
          "\n  "
        ],
        "p": "Sámedikke tærmmatjoakkáldahka l vuodon Tærmmawikijij. Sámedikke tærmmatjoakkáldahka sirdeduváj Tærmmawikijij tjavtjan 2013, ja ådå terminologija l laseduvvam dan maŋŋela. Báhko.org sjaddá juovnnát ådåstuhteduvvat ådåsamos sisanojn Tærmmawikijis."
      }
    ],
    "copyright": "Sametinget, Giellagáldu, UiT Norgga árktalaš universitehta",
    "editors": {
      "#text": [
        "\n    ",
        "\n  "
      ],
      "editor": {
        "#text": [
          "\n      ",
          "\n      ",
          "\n      ",
          "\n    "
        ],
        "name": "Giellagáldu",
        "url": "http://www.giella.org",
        "email": "info@giella.org"
      }
    }
  }
]
```


## Search
https://satni.uit.no/satnibackend/search returns search result for queries that are three character long or longer.
There are two query parameters for search:
*query= Query string sent to the database, which compiles a regex "^<query>*"
*dict= Optional parameter to specify which dictionary or terminiology to query. If no dictionary is specified, all dictionaries are queried.


*Example:
[https://satni.uit.no/satnibackend/search?query=muna]
```
[
  {
    "term": "munakoiso",
    "dict": "termwiki"
  },
  {
    "term": "munakoiso",
    "dict": "termwiki"
  },
  {
    "term": "munakreemi",
    "dict": "termwiki"
  },
  {
    "term": "munakuppi",
    "dict": "termwiki"
  },
  {
    "term": "munankeitin",
    "dict": "termwiki"
  },
  {
    "term": "munankeltuainen",
    "dict": "termwiki"
  },
  {
    "term": "munanleikkuri",
    "dict": "termwiki"
  },
  {
    "term": "munanvalkuainen",
    "dict": "termwiki"
  },
  {
    "term": "munasarja",
    "dict": "termwiki"
  },
  {
    "term": "munasjohdin",
    "dict": "termwiki"
  }
]
```


*Example with dictionaries specified
[https://satni.uit.no/satnibackend/search?query=lin&dict=smanob]
```
{
  {
    "term": "lin",
    "dict": "smanob",
    "lang": "sma",
    "langs": [
      "nob",
      "swe"
    ]
  }
}
```


[https://satni.uit.no/satnibackend/search?query=lin&dict=nobsma]
```
[
  {
    "term": "Lindsetdalen",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "Lindsetdalen",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "Lindsetvatnet",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "Lindsetvatnet",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "Lintjørna",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "Lintjørna",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "Linvasselva",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "Linvasselva",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "lindre noe",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "lindre smerte",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "linerle",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "lingvistikk",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "lingvistisk",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "linjal",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  }
]
```


[https://satni.uit.no/satnibackend/search?query=lin&dict=smenob]
```
[
  {
    "term": "Lina",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Linda",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Lindesnes",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Lindis",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Line",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Linea",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Linjárčohkka",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Linköping",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Linn",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Linnea",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Linnjavárri",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Liná",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "lingvista",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "lingvistihkka",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "linis",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "linjá",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "linjála",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "linnjá",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "linnjábiila",
    "dict": "smenob",
    "lang": "sme",
    "langs": [
      "nob",
      "nob"
    ]
  },
  {
    "term": "linnjáhuksen",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "linnjájohtolat",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "linsa",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  }
]
```


[https://satni.uit.no/satnibackend/search?query=lin&dict=nobsme]
```
[
  {
    "term": "lin",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "lind",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "line",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "lineagn",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "lineangel",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linebøyel",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linerle",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linestamp",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linfrø",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "lingvistikk",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "lingvistisk",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linjal",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linje",
    "dict": "nobsme",
    "lang": "nob",
    "langs": [
      "sme",
      "sme"
    ]
  },
  {
    "term": "linjebygging",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linjeinndeling",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linjestruktur",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linjetrafikk",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "link",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "linse",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "lintøylager",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  }
]
```


[https://satni.uit.no/satnibackend/search?query=linj&dict=termwiki]
```
[
  {
    "term": "linja",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv",
      "fi"
    ]
  },
  {
    "term": "linja-auto",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sma",
      "smj",
      "sv",
      "smn",
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linja-auto ja taksikaista",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linja-autokaista",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linja-autokatu",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linja-autopysäkin levennys",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linja-autopysäkki",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjal",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv",
      "fi",
      "fi",
      "en",
      "smn"
    ]
  },
  {
    "term": "linjal",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv",
      "fi",
      "fi",
      "en",
      "smn",
      "se",
      "fi",
      "nb"
    ]
  },
  {
    "term": "linjanjako",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjatuomari",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "smj",
      "sv",
      "fi",
      "se"
    ]
  },
  {
    "term": "linjaverkko",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjašauto",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sma",
      "smj",
      "sv",
      "smn"
    ]
  },
  {
    "term": "linje",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv",
      "fi"
    ]
  },
  {
    "term": "linje",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv",
      "fi"
    ]
  },
  {
    "term": "linjedeling",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjedelning",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjediagram",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "nb",
      "se",
      "fi"
    ]
  },
  {
    "term": "linjedomare",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "smj",
      "sv",
      "fi",
      "se"
    ]
  },
  {
    "term": "linjedommer",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "smj",
      "sv",
      "fi",
      "se"
    ]
  },
  {
    "term": "linjenett",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjenät",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjeskriver",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "nb",
      "se"
    ]
  },
  {
    "term": "linjetrafik",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv",
      "fi",
      "nb",
      "se",
      "sv",
      "sv"
    ]
  },
  {
    "term": "linjetrafikk",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv"
    ]
  },
  {
    "term": "linjáduopmár",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "smj",
      "sv",
      "fi",
      "se"
    ]
  },
  {
    "term": "linjála",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "fi",
      "nb",
      "se",
      "sv",
      "fi",
      "fi",
      "en",
      "smn",
      "se",
      "fi",
      "nb"
    ]
  },
  {
    "term": "linjärmetod",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "nb",
      "se",
      "sv"
    ]
  }
]
```




*Example with all dictionaries
[https://satni.uit.no/satnibackend/search?query=hele&dict=all]
```
[
  {
    "term": "Helena",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "Helene",
    "dict": "smenob",
    "lang": "sme",
    "langs": "nob"
  },
  {
    "term": "hele",
    "dict": "nobsma",
    "lang": "nob",
    "langs": "sma"
  },
  {
    "term": "hele og fulle sannhet",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "nb",
      "se"
    ]
  },
  {
    "term": "hele tiden",
    "dict": "nobsme",
    "lang": "nob",
    "langs": "sme"
  },
  {
    "term": "heler",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "smj",
      "nb",
      "sv"
    ]
  },
  {
    "term": "heleri",
    "dict": "termwiki",
    "lang": null,
    "langs": [
      "smj",
      "nb",
      "sv"
    ]
  },
  {
    "term": "heleys",
    "dict": "finsmn",
    "lang": "fin",
    "langs": "smn"
  },
  {
    "term": "heleä",
    "dict": "finsmn",
    "lang": "fin",
    "langs": "smn"
  }
]
```


## Article search
https://satni.uit.no/satnibackend/article/<article> returns article or articles.


*Example
[https://satni.uit.no/satnibackend/article/munanleikkuri]
```
{
  {
    "term": "munanleikkuri",
    "pos": "N",
    "dict": "termwiki",
    "status": null,
    "category": "Servodatdieđa",
    "termwikiref": "Servodatdieđa:monnečuohpan",
    "def": null,
    "expl": null,
    "tg": [
      {
        "xml:lang": "fi",
        "#text": [
          "\n      ",
          "\n    "
        ],
        "t": {
          "pos": "N",
          "#text": "munanleikkuri"
        }
      },
      {
        "xml:lang": "nb",
        "#text": [
          "\n      ",
          "\n    "
        ],
        "t": {
          "pos": "N",
          "#text": "eggedeler"
        }
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n      ",
          "\n    "
        ],
        "t": {
          "pos": "N",
          "#text": "monnečuohpan"
        }
      },
      {
        "xml:lang": "sv",
        "#text": [
          "\n      ",
          "\n    "
        ],
        "t": {
          "pos": "N",
          "#text": "äggskärare"
        }
      },
      {
        "xml:lang": "se",
        "#text": [
          "\n      ",
          "\n    "
        ],
        "t": {
          "pos": "N",
          "#text": "mannečuohpan"
        }
      }
    ]
  }
}
```




## Dictionary metadata
Fourth REST point returns metadata information about a dictionary or terminology. Difference is that this REST address returns an XML fragment.


*Example
[https://satni.uit.no/satnibackend/dictionary/termwiki]
```
<dictionary>
    <meta id="termwiki" name="Termwiki">
        <license>Uspesifisert</license>
        <copyright>Sametinget, Giellagáldu, UiT Norgga árktalaš universitehta</copyright>
        <description xml:lang="no">
            <p>Innholdet i Termwikien er basert på Sametingets termsamling. Sametingets
    termsamling ble overført til Termwikien høsten 2013, og det har blitt lagt
    inn noe ny terminologi etter det. Sátni.org vil regelmessig bli oppdatert
    med det nyeste innholdet på Termwikien.</p>
        </description>
        <langs>
            <lang>sma</lang>
            <lang>sme</lang>
            <lang>smj</lang>
            <lang>smn</lang>
            <lang>sms</lang>
            <lang>nor</lang>
            <lang>swe</lang>
            <lang>fin</lang>
            <lang>eng</lang>
            <lang>lat</lang>
        </langs>
    </meta>
</dictionary>
```
