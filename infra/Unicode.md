# Unicode considerations

Various notes relating to Unicode.

**TLDR;** make sure that the surfae side of fst's do not contain any multichars, only sequences of individual code points, also in the case of combining diacritics.

# Combining diacritics

Many minority and indigenous languages have orthographies that use various diacriiics to mark features like length, tone, nasalisation and more. But unlike the majority languages, quite often the combination of base character and diacritic(s) is not available in Unicode as a precomposed combo, and instead one has to use the fallback mechanism of combining diacriiics. While nice on paper, it leads to various issues that only arise for these languages.

## Tokenisationn and text analysis

The core issue is:

- what is a character in the input stream?



## Spellers

## Fonts and text rendering
