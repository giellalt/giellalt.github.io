# REST and GraphQL API's

There's an api server for various services at:

```
https://api-giellalt.uit.no/
```

The API's can be accessed both using REST and GraphQL, more info behind the links at the bottom.

To get an overview over available services, run the following command:

```sh
curl -s -X GET -H 'Content-Type: application/json' \
     'https://api-giellalt.uit.no/languages/' | jq
```

That should return something like:

```json
{
  "available": {
    "grammar": {
      "fo": "føroyskt",
      "ga": "Gaeilge",
      "kl": "kalaallisut",
      "nb": "norsk bokmål",
      "se": "davvisámegiella",
      "sma": "Åarjelsaemien gïele",
      "smj": "julevsámegiella",
      "smn": "anarâškielâ",
      "sms": "nuõrttsääʹmǩiõll"
    },
    "hyphenation": {
      "se": "davvisámegiella"
    },
    "speller": {
      "se": "davvisámegiella",
      "sma": "Åarjelsaemien gïele",
      "smj": "julevsámegiella",
      "smn": "anarâškielâ",
      "sms": "nuõrttsääʹmǩiõll"
    },
    "tts": {
      "se": {
        "name": "davvisámegiella",
        "voices": {
          "biret": {
            "name": "Biret",
            "gender": "female",
            "speaker": null
          },
          "mahtte": {
            "name": "Máhtte",
            "gender": "male",
            "speaker": null
          }
        }
      },
      "sma": {
        "name": "Åarjelsaemien gïele",
        "voices": {
          "aanna": {
            "name": "Aanna",
            "gender": "female",
            "speaker": 1
          }
        }
      },
      "smj": {
        "name": "julevsámegiella",
        "voices": {
          "abmut": {
            "name": "Ábmut",
            "gender": "male",
            "speaker": 1
          },
          "nihkol": {
            "name": "Nihkol",
            "gender": "male",
            "speaker": null
          },
          "sigga": {
            "name": "Siggá",
            "gender": "female",
            "speaker": null
          }
        }
      }
    }
  }
}
```

More services will be added over time.

API documentation is available directly at [api-giellalt.uit.no](https://api-giellalt.uit.no).
More info about the usage of existing services can be found at
<https://divvun.github.io/divvun-api/redoc-static.html> and
<https://divvun.github.io/divvun-api/>.

## Some examples

### Grammar

Command:

```sh
curl -s -X POST -H 'Content-Type: application/json' \
     'https://api-giellalt.uit.no/grammar/se' \
     --data '{"text": "mun hálat davvvisámegiela"}' | jq
```

Output:

```json
{
  "text": "mun hálat davvvisámegiela",
  "errs": [
    {
      "error_text": "hálat",
      "start_index": 4,
      "end_index": 9,
      "error_code": "syn-number_congruence-subj-verb",
      "description": "Kongrueansa subjeavtta ja vearbba gaskkas",
      "suggestions": [
        "hálan"
      ],
      "title": "Boasttuhápmi"
    },
    {
      "error_text": "davvvisámegiela",
      "start_index": 10,
      "end_index": 25,
      "error_code": "typo",
      "description": "Ii leat sátnelisttus",
      "suggestions": [
        "davvisámegiela",
        "davvisámegiella",
        "davvesámegiela",
        "davvisámegeali",
        "davvisámegeale",
        "davvisámegealo",
        "davvisámegielu",
        "davvisámegealu"
      ],
      "title": "Čállinmeattáhus"
    }
  ]
}
```

### Speller

Command:

```sh
curl -s -X POST -H 'Content-Type: application/json' \
     'https://api-giellalt.uit.no/speller/se' \    
     --data '{"text": "mun hálan davvvisámegiela"}' | jq
```

Output:

```json
{
  "text": "mun hálan davvvisámegiela",
  "results": [
    {
      "word": "mun",
      "is_correct": true,
      "suggestions": [
        {
          "value": "mun",
          "weight": 9.547852
        },
        {
          "value": "mon",
          "weight": 9.609375
        },
        ...
      ]
    },
    {
      "word": "hálan",
      "is_correct": true,
      "suggestions": [
        {
          "value": "hálan",
          "weight": 13.608398
        },
        {
          "value": "hállan",
          "weight": 21.047852
        },
        ...
      ]
    },
    {
      "word": "davvvisámegiela",
      "is_correct": false,
      "suggestions": [
        {
          "value": "davvisámegiela",
          "weight": 30.3018
        },
        {
          "value": "davvisámegiella",
          "weight": 38.3018
        },
        ...
      ]
    }
  ]
}
```

### Hyphenator

Usage examples for the hyphenator can be found [here](/proof/hyph/API-hyphenation.html).

## API web access

All end points can be opened in a web browser for easy testing. As the list of languages and services will expand over time, the list of links below may not be complete. Run the `language` query to get an updated list of languages and services.

__NB!__ Note that these web pages are _only_ intended for testing by developers, not for real usage. They are completely bare-bones, and not meant for actual use.

These are links directly to some pages:

### Languages and services

- [JSON list of tools/services and languages](https://api-giellalt.uit.no/languages)

### Grammar

- [Faroese/føroyskt](https://api-giellalt.uit.no/grammar/fo)
- [Irish/gaeilge](https://api-giellalt.uit.no/grammar/ga)
- [Greenlandic//kalaallisut](https://api-giellalt.uit.no/grammar/kl)
- [Norwegian bokmål](https://api-giellalt.uit.no/grammar/nb)
- [North Sámi/Davvisámigiella](https://api-giellalt.uit.no/grammar/se)
- [South Sámi/Åarjelsaemien gïele](https://api-giellalt.uit.no/grammar/sma)
- [Lule Sámi/Julevsámegiella](https://api-giellalt.uit.no/grammar/smj)
- [Inari Sámi/Anarâškielâ](https://api-giellalt.uit.no/grammar/smn)
- [Skolt Sámi/Nuõrttsääʹmǩiõll](https://api-giellalt.uit.no/grammar/sms)

### Speller

- [North Sámi/Davvisámigiella](https://api-giellalt.uit.no/speller/se)
- [South Sámi/Åarjelsaemien gïele](https://api-giellalt.uit.no/speller/sma)
- [Lule Sámi/Julevsámegiella](https://api-giellalt.uit.no/speller/smj)
- [Inari Sámi/Anarâškielâ](https://api-giellalt.uit.no/speller/smn)
- [Skolt Sámi/Nuõrttsääʹmǩiõll](https://api-giellalt.uit.no/speller/sms)

### TTS / Speech synthesis

- North Sámi/Davvisámigiella:
    - [Biret ♀](https://api-giellalt.uit.no/tts/se/biret)
    - [Máhtte ♂](https://api-giellalt.uit.no/tts/se/mahtte)
- South Sámi/Åarjelsaemien gïele:
    - [Aanna ♀](https://api-giellalt.uit.no/tts/sma/aanna)
- Lule Sámi/Julevsámegiella:
    - [Ábmut ♂](https://api-giellalt.uit.no/tts/smj/abmut)
    - [Nihkol ♂](https://api-giellalt.uit.no/tts/smj/nihkol)
    - [Siggá ♀](https://api-giellalt.uit.no/tts/smj/sigga)

<!--
### Hyphenator

- [North Sámi/Davvisámigiella](https://api-giellalt.uit.no/hyphenation/se)
-->
