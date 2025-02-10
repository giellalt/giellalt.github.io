# REST and GraphQL API's

There's an api server for various services at:

```
https://api-giellalt.uit.no/
```

The API's can be accessed both using REST and GraphQL, more info behind the links at the bottom.

To get an overview over available services, run the following command:

```sh
curl -X GET -H 'Content-Type: application/json' \
               'https://api-giellalt.uit.no/languages'
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
      "smj": "julevsámegiella"
      "smn": "anarâškielâ",
      "sms": "nuõrttsääʹmǩiõll",
    },
    "speller": {
      "se": "davvisámegiella",
      "sma": "Åarjelsaemien gïele",
      "smj": "julevsámegiella"
      "smn": "anarâškielâ",
      "sms": "nuõrttsääʹmǩiõll",
    },
    "hyphenation": {
      "hyphenator-gt-desc": "hyphenator-gt-desc"
    }
  }
}
```

More services will be added over time.

More info about the usage of existing services can be found at
<https://divvun.github.io/divvun-api/redoc-static.html> and
<https://divvun.github.io/divvun-api/>.
Usage examples for the hyphenator can be found [here](/proof/hyph/API-hyphenation.html).
