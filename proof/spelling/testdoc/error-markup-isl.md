# Error markup for ISL - Icelandic

We want to extend (some of) the corpus files with markup for spelling
and other errors, to use them as gold standards for testing our spellers
(and in the future other tools as well). The markup is done manually,
and needs to follow certain rules.

Description of _the error classification_ for ISL:

## 1. Unclassified errors

- `{wrong}§{correct}`

These are errors of an unknown type.

## 2. Orthographic errors, non-words

- `{wrong}${error classification\|correct}`

These are traditional misspellings confined to single (error) strings, that is,
errors that don't need an analysis of the surrounding words to be
detected and corrected. In the resulting xml, the element is named
&lt;errorort&gt;. These errors do always lead to non-words in the text,
such that a speller should be able to detect them.

- \***\*Position - used when describing error types vow, con, typo, cap
  and meta.**:\*\*
  - stem - stem
  - suff - suffix
  - der - derivation
  - punct - punctuation

<!-- -->

- \***\*Word classes - used when describing compounded words that should
  not be compounded (cmp).**:\*\*
  - noun - noun
  - verb - verb
  - adv - adverb
  - adj - adjective
  - num - number

<!-- -->

- \***\*Compound type - used when describing incorrectly compounded
  words (cmp).**:\*\*
  - st - stem
  - gensg - genitive singular
  - genpl - genitive plural

## Error types

### vow - {error}${vow,position,subtype\|correct}

Errors involving an incorrect vowel.

- a-á Letter should have accent. Example:
  _{hátiðin}${vow,a-á\|hátíðin}_
- á-a Letter should not have accent. Example:
  _{áfmælishátíð}${vow,stem,á-a\|afmælishátíð};
    {andlít}${vow,stem,á-a\|andlit}_
- i-y Letter i should be y. Example:
  _{þrjúleitið}${vow,stem,i-y\|þrjúleytið}_
- y-i Letter y should be i. Example:
  _{berjatýnsluvélar${vow,stem,y-i\|berjatínsluvélar}_
- Letter x should be z. Symbols x and z represent any letter that
  stands for a vowel. Example: _{Tælands}${vow,stem,æ-aí\|Taílands}_

### con - {error}${con,position,subtype\|correct}

Errors involving an incorrect consonant.

- x-z Letter x should be z. Symbols x and z represent any letter that
  stands for a consonant. Example: _{æfinnar}${con,stem,f-v\|ævinnar};
    {pragt}${con,stem,g-k\|prakt}; {Viktaðar}${con,stem,k-g\|Vigtaðar};
    {huxast}${con,stem,x-gs\|hugsast}_
- com Consonant omission. Closely tied to phonology. The middle
  consonant in a consonant cluster is not represented in
  pronounciation and so the writing represents the pronounciation,
  with the middle consonant missing. Can also apply to one of two
  adjacent consonants. Example: _{fræsluna}${con,stem,com\|fræðsluna};
    {sjálboðaliða}${con,stem,com\|sjálfboðaliða};
  {stærfræðikennara}${con,stem,com\|stærðfræðikennara};
    {stærfræðikennaranum}${con,stem,com\|stærðfræðikennaranum};
  {únliðnum}${con,stem,com\|úlnliðnum};
    {víðfemt}${con,stem,com\|víðfeðmt};
  {þarnast}${con,stem,com\|þarfnast}_

### typo - {error}${typo,position,subtype\|correct}

Typographical error. Slips of the hand or fingers. Not the same as
spelling errors.

- x-z Symbol x should be z. Symbols x and z represent any letter and
  punctuation. Example: _{afurður}${typo,suff,u-i\|afurðir};
    {verkiþ}${typo,punct,þ-.\|verki.}; {æðutur}${typo,stem,u-s\|æðstur}_
- 0-z z letters should be added. Symbol z represent any number.
  Example: _{almennig}${typo,der,0-1\|almenning}_
- z-0 z letters should be deleted. Symbol z represent any number.
  Example: _{aðafangadagskvöld}${typo,stem,1-0\|aðfangadagskvöld};
    {há´tíðlega}${typo,stem,1-0\|hátíðlega}_

### cap - {error}${cap,position,subtype\|correct}

An error in capitalization.

- X-x Capital letter X should be lower case letter x. Symbols X and x
  represent any letter. Example:
  _{Islam}${vow,stem,a-á;cap,stem,Í-í\|íslam}._
- x-X Lower case letter x should be capital letter X. Symbols X and x
  represent any letter. Example: _{englandi}${cap,stem,e-E\|Englandi}_

### meta - {error}${meta,position,subtype\|correct}

The metathesis of letters. Can be 2 or more, though 3 is the most seen.

- xy-yx Order x of letters should be arranged to y. Symbol x represent
  any order of any number of letters and y represents a reordering of
  order x. Example: _{aðiens}${meta,stem,ie-ei\|aðeins}_

### abp - {error}${abp,subtype\|correct}

An error in punctuation in abbreviations, resulting in an error.

- x-z X punctuation marks should be z punctuation marks. Symbols x and
  z represent any number. Example: _{a.m.k}${abp,2-3\|a.m.k.};
    {bls${abp,0-1\|bls.}; {hand}${abp,0-1\|hand-}_

### cmp type 1 - {error}${cmp,subtype\|correct}

Errors in compounding words. The wrong form of the former word is used,
resulting in an error.

- x-z Compound type x should be z. Symbols x and z represent any
  compound type. Example: _{Björgvinson}${cmp,st-gensg\|Björgvinsson}_

### cmp type 2 - {error}${cmp,wordclasses,subtype\|correct}

Errors in compounding words. Two or more words are written together as
one word, resulting in an error.

- x-z X words should be z words. Symbols x and z represent any number.
  Example: _{æðiáhrifagjarnt}${cmp,adv+adj,1-2\|æði áhrifagjarnt};
    {atvinnu-og}${cmp,noun+conj,1-2\|atvinnu- og};
  {dr.Braga}${cmp,abbr+noun,1-2\|dr. Braga}_

### cmp type 3 - {error}${cmp,slash,subtype\|correct}

Errors in compounding words. A slash is used to compound words that
should be separate words, resulting in an error.

- x-z X words should be z words. Symbols x and z represent any
  number._{vinstri/græn}${cmp,slash,1-2\|vinstri græn}_
