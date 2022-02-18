Flag diacritics
===============

Introduction
------------

The use of flag diacritics is documented in chapter 8 of the Xerox book.
The present page documents the flag diacritics format, and the use of
them in the parser.

Flag diacritics are used in the Saami morphological parser in order to
remove illegal compounds, and in order to handle automatic downcasing of
proper names when they are converted to e.g. adjectives. See the
documentation for each language for an overview.

Flag diacritics format
----------------------

There are four types of flag diacritics, all of them with the format
@operator.feature.value@ or @operator.feature@:

-   **U or Unification flags, @U.feature.value@:**  
    U is the unification operator, and the form is accepted if, for the
    relevant feature, the two flags in the derivation string have the
    same value.
-   **P or Positive (Re)Setting, @P.feature.value@:**  
    Sets or resets the feature to the given value.
-   **N or Negative (Re)Setting, @N.feature.value@:**  
    Sets or resets the feature to the negation of the given value.
-   **R or Require Test, @R.feature.value@:**  
    For this diacritic, a test is performed, and it succeeds iff feature
    is currently set to value, otherwise the path is blocked.
-   **D or Disallow Test, @D.feature.value@:**  
    A test is performed that succeds if feature is neutral or set to a
    value that is incompatible with value.
-   **C or Clear Feature, @C.feature@:**  
    For this flag, the value of feature is reset to neutral.
-   **U or Unification Test, @U.feature.value@:**  
    If feature is currently neutra, this diacritic causes feature to be
    set to value. Else if feature is currently set, then the test
    succeeds iff value is compatible with the current value of feature.
