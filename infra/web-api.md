# REST and GraphQL API's

There's an api server for various services at:

```
https://api-giellalt.uit.no/
```

The API's can be accessed both using REST and GraphQL, more info behind the links at the bottom.

To get an overview over available services, run the following command:

```sh
curl -s -X GET -H 'Content-Type: application/json' \
     'https://api-giellalt.uit.no/languages' | jq
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
    }
  }
}
```

More services will be added over time.

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
