# Hyphenating texts using the API server

For the time being, only North Sámi can be hyphenated as shown below. For other languages than North Sámi, see [this document](how-to-hyphenate-without-hyphenator.md). We hope to add support for more languages soon.

## Basic command

```sh
curl -s -X POST -H 'Content-Type: application/json' \
     -i 'https://api-giellalt.uit.no/hyphenation/hyphenator-gt-desc' \
     --data '{"text": "mun hálan davvisámegiela"}' |\
     grep '{' |\
     jq '.' 
```

Comments:

- we use `curl` to access the REST API, with the `-s` parameter to silence it.
- `--data` contains the actual text to be hyphenated. It can be long, but should preferably be restricted to single paragraphs for execution time reasons.
- `grep` is just to get rid of `curl` metadata from the processing
- `jq .` to pretty print the output

Output:

```json
{
  "text": "mun hálan davvisámegiela",
  "results": [
    {
      "word": "mun",
      "hyphenations": [
        {
          "value": "mun",
          "weight": 0.0
        },
        {
          "value": "mun",
          "weight": 5000.0
        }
      ]
    },
    {
      "word": "hálan",
      "hyphenations": [
        {
          "value": "há^lan",
          "weight": 0.0
        },
        {
          "value": "há^lan",
          "weight": 5000.0
        }
      ]
    },
    {
      "word": "davvisámegiela",
      "hyphenations": [
        {
          "value": "dav^vi#sá^me#gie^la",
          "weight": 0.0
        },
        {
          "value": "dav^vi^sá^me^gie^la",
          "weight": 5000.0
        }
      ]
    }
  ]
}
```

This is the raw output from the API server. Comments on the output:

- both input text and output data is listed
- hyphenation points are indicated with two symbols:
    - `#`: primary hyphenation point (usually a word boundary)
    - `^`: secondary hyphenation point
- for each input word, all hyphenation patterns are listed, from best to worst
- the weight is a very rough indication of priority, with `0.0` being the best
- there will most often be at least two hyphenation patterns, one from the lexical lookup (those with weight `0.0`), and one from the pattern-based fallback (weight `5000.0` or higher). For unrecognised misspellings or unknown words, only the pattern-based fallback is provided.

## Filtered examples

```sh
curl -s -X POST -H 'Content-Type: application/json' \
    -i 'https://api-giellalt.uit.no/hyphenation/hyphenator-gt-desc' \
    --data '{"text": "mun hálan davvisámegiela"}' |\
    grep '{' |\
    jq '.results[].hyphenations | map(select(.value)) | first'
```

Comment:

- we use `jq` filtering to only retain the most likely hyphenation pattern, with weights

Output:

```json
{
  "value": "mun",
  "weight": 0.0
}
{
  "value": "há^lan",
  "weight": 0.0
}
{
  "value": "dav^vi#sá^me#gie^la",
  "weight": 0.0
}
```

The same example, but now with a misspelling; notice the change in weight for the last word:

```sh
curl -s -X POST -H 'Content-Type: application/json' \
    -i 'https://api-giellalt.uit.no/hyphenation/hyphenator-gt-desc' \
    --data '{"text": "mun hálan davvisámegiellla"}' |\
    grep '{' |\
    jq '.results[].hyphenations | map(select(.value)) | first'
```

Output:

```json
{
  "value": "mun",
  "weight": 0.0
}
{
  "value": "há^lan",
  "weight": 0.0
}
{
  "value": "dav^vi^sá^me^giell^la",
  "weight": 5000.0
}
```

If you only want the hyphenated input text, and not the `json` stuff, use the following `jq` filtering:

```sh
curl -s -X POST -H 'Content-Type: application/json' \
    -i 'https://api-giellalt.uit.no/hyphenation/hyphenator-gt-desc' \
    --data '{"text": "mun hálan davvisámegiela"}' |\
    grep '{' |\
    jq '.results[].hyphenations | map(select(.value).value) | first'
```

Output:

```
"mun"
"há^lan"
"dav^vi#sá^me#gie^la"
```

Add `-r`/`--raw-output` to `jq` if you want to get rid of the quotes:

```sh
curl -s -X POST -H 'Content-Type: application/json' \
    -i 'https://api-giellalt.uit.no/hyphenation/hyphenator-gt-desc' \
    --data '{"text": "mun hálan davvisámegiela"}' |\
    grep '{' |\
    jq -r '.results[].hyphenations | map(select(.value).value) | first'
```

Output:

```
mun
há^lan
dav^vi#sá^me#gie^la
```

If you have a text file that you would like to have hyphenated, do as follows:

```sh
cat textfile.txt |\
    (printf '{"text": "' && cat && printf '"}') |\
    curl -s -X POST -H 'Content-Type: application/json' \
    -i 'https://api-giellalt.uit.no/hyphenation/hyphenator-gt-desc' \
    --data @- |\                                    
    grep '{' |\
    jq '.results[].hyphenations | map(select(.value).value) | first'
```

Comment:
- the `printf` stuff after the initial `cat` is there to wrap the file content in a simple `json` structure, as that is what is expected on the other end.

Output (assuming the `textfile.txt` file has the same content as the example sentence used above):

```
"mun"
"há^lan"
"dav^vi#sá^me#gie^la"
```
