# REST and GraphQL API's

To get an overview over available services, run the following command:

```sh
curl -X GET -H 'Content-Type: application/json' \
            -i 'https://api-giellalt.uit.no/languages'  |\
  grep '{' | jq .
```

That should return something like:

```json
{
  "available": {
    "grammar": {
      "fo": "føroyskt",
      "se": "davvisámegiella",
      "smj": "julevsámegiella",
      "sms": "nuõrttsääʹmǩiõll",
      "sma": "Åarjelsaemien gïele",
      "ga": "Gaeilge",
      "smn": "anarâškielâ",
      "nb": "norsk bokmål"
    },
    "speller": {
      "sms": "nuõrttsääʹmǩiõll",
      "sma": "Åarjelsaemien gïele",
      "smj": "julevsámegiella",
      "smn": "anarâškielâ",
      "se": "davvisámegiella"
    },
    "hyphenation": {
      "hyphenator-gt-desc": "hyphenator-gt-desc"
    }
  }
}
```

More info at <https://divvun.github.io/divvun-api/redoc-static.html> and
<https://divvun.github.io/divvun-api/>.
