# GFM Test Document

This document contains examples of all GitHub Flavored Markdown (GFM), both code
snippets and as rendered, and additional data structures (code blocks) rendered
in various ways.

It serves both as a test on what is supported in the various places, and as a
reference for how to write GFM.

[This is how it renders](https://github.com/giellalt/giellalt.github.io/blob/main/infra/MarkdownTestReference.md)
by GitHub's own processor. There are differences compared to GitHub pages.

## Headers

Start line with 1-6 `#` characters, then a space, then the header text:

```md
## foo 1

### foo 2

#### foo 3

##### foo 4

###### foo 5

####### foo 6
```

The above will be rendered as:

## foo 1

### foo 2

#### foo 3

##### foo 4

###### foo 5

####### foo 6

It is also ok with `#` symbols after the header text, like this:

```md
## foo 1a

### foo 2a

#### foo 3a

##### foo 4a

###### foo 5a

####### foo 6a
```

These will look like the following:

## foo 1a

### foo 2a

#### foo 3a

##### foo 4a

###### foo 5a

####### foo 6a

One can also specify the two first header levels using underlines.

```md
## Header text
```

will show up as:

## Header text

and:

```md
### Another header text
```

comes out as:

### Another header text

In these cases the header text can span multiple lines, as in:

```md
Header with a
lot of text
=============
```

Header with _a
lot_ of text
=============

## Horisontal lines

One can use one of `*`, `-` or `_`. It must be at least three of them, and there
can be spaces between. There can be nothing else that whitespace and one of the
mentioned characters.

```md
---
```

renders like:

---

and:

```md
---
```

also renders like:

---

and even (at most three initial spaces)

```md
---
```

renders like:

---

Enough with horisontal lines.

## Emoji

[GFM emoji](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) rendering has been enabled! :+1:

## HTML elements

Most elements are passed through and will render as such. The following HTML
elements **will be encoded using &lt;**, and thus be inactivated in the final html code:

- `<title>    `
- `<textarea> `
- `<style>    `
- `<xmp>      `
- `<iframe>   `
- `<noembed>  `
- `<noframes> `
- `<script>   `
- `<plaintext>`

All other html and xml tag lookalikes will be passed through, and either rendered
as usual, or be available for targeted CSS styling.

### Useful HTML elements

#### The `<ruby>` element

```xml
<ruby>tekst<rt>ja</rt></ruby>
```

will render as:

<ruby>tekst<rt>ja</rt></ruby>

This can be used to show pronunciation:

```xml
<ruby><strong>cromulent</strong> <rp>(</rp><rt>crôm-yü-lənt</rt><rp>)</rp></ruby>
```

<ruby><strong>cromulent</strong> <rp>(</rp><rt>crôm-yü-lənt</rt><rp>)</rp></ruby>

Traditional use is for east asian scripts:

<ruby>한자<rp>(</rp><rt>漢字</rt><rp>)</rp></ruby>

Ruby elements can even be nested:

<ruby><ruby>世<rp>（</rp><rt>ㄕ ˋ</rt><rp>）</rp>上<rp>（</rp><rt>ㄕㄤ ˋ</rt><rp>）</rp>無<rp>（</rp><rt>ㄨ ˊ</rt><rp>）</rp>難<rp>（</rp><rt>ㄋㄢ ˊ</rt><rp>）</rp>事<rp>（</rp><rt>ㄕ ˋ</rt><rp>）</rp>只<rp>（</rp><rt>ㄓ ˇ</rt><rp>）</rp>怕<rp>（</rp><rt>ㄆㄚ ˋ</rt><rp>）</rp>有<rp>（</rp><rt>ㄧㄡ ˇ</rt><rp>）</rp>心<rp>（</rp><rt>ㄒㄧㄣ</rt><rp>）</rp>人<rp>（</rp><rt>ㄖㄣ ˊ</rt><rp>）</rp></ruby><rp> （</rp><rt>Anything can be done with enough perseverance</rt><rp>）</rp></ruby>

In our context it can be used for simple glossing/text annotation:

<ruby>1800-lågon<rt>1800+Num+Cmp/Hyph+Cmp#låhko+N+Sg+Ine</rt></ruby>
<ruby>hieredimbargon<rt>hieredit+V+TV+Der/NomAct+N+Cmp/SgNom+Cmp#barggo+N+Sg+Ine</rt></ruby>

```xml
<kbd>ᛌᛁᚢᚱ</kbd>
```

**<kbd>ᛌᛁᚢᚱ</kbd>**

<kbd><kbd>ᛌᛁᚢᚱ</kbd></kbd>

## Simple graphs

```mermaid
pie showData
    title Formal languages used in GiellaLT
    "LexC" : 3129
    "Xfst regex" : 2374
    "Xfst script" : 856
    "TwolC" : 125
    "YAML" : 4451
```

Based on counts of all files of the various types in all repositories in the
GiellaLT infra.

Another Mermaid test, this one includes configuration data:

```mermaid
%%{init: {"pie": {"textPosition": 0.5}, 'theme':'forest', "themeVariables": {"pieOuterStrokeWidth": "5px"}} }%%
pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
```
