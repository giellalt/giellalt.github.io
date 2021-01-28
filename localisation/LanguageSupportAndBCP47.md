#  BCP-47


BCP-47 defines the available language identification space on the net, and in practice also on systems such as Windows, macOS, Linux, iOS and more. It builds on several independent standards and registries, which are put together as follows (simplified):


```
nn-OOOO-PP-qqqqqq-x-abcd-efgh
```


where:


* **nn**:  ISO 639 language codes (two-letter if availablel, three-letter 639-3 codes otherwise)
* **OOOO**:  ISO 15924 Script codes
* **PP**:  ISO 3166-1 country or area code (two letters), OR UN M.49 code (three digits)
* **qqqqq**:  IANA registered variant codes (5-8 letters, or digit + 3 alphanums)
* **x-**:  separator in front of private use tags
* **abcd, efgh**:  private use tags, 1-8 letters or digits each


The relevant standards and registries are:


* [BCP-47](https://tools.ietf.org/html/bcp47)
* [ISO 15924 Scriopt codes, Wikipedia](https://en.wikipedia.org/wiki/ISO_15924)
* [ISO 15924 Scriopt codes, Unicode](https://unicode.org/iso15924/codelists.html)
* [ISO 3166-1 country codes, Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)
* [UN M49 area codes](https://unstats.un.org/unsd/methodology/m49/)
* [UN M49 codes in Wikipedia](https://en.wikipedia.org/wiki/UN_M49)
* [IANA variant registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)


#  CLDR language support


* [List of registered languages with statistical data](https://github.com/unicode-org/cldr/blob/master/common/supplemental/supplementalData.xml)


#  Windows language support


* [Available language packs and interface languages](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/available-language-packs-for-windows) (114 unique languages)
* [full list of recognised BCP-47 codes](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/70feba9f-294e-491e-b6eb-56532684c37f) (frequently revised and updated):
** 140 unique languages with an LCID (for at least one locale) as of spring 2020
** an additional 96 unique languages without an LCID (in any locale)


This means that MS Windows recognises about 3 % of the languages of the world,
many of them for several areas, and some also for multiple scripts.


#  macOS language support


TBW.


#  iOS language support


TBW.


#  Android language support


TBW.
