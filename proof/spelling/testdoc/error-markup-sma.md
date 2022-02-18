Error markup for SMA - South Sámi
================
We want to extend (some of) the corpus files with markup for spelling
and other errors, to use them as gold standards for testing our spellers
(and in the future other tools as well). The markup is done manually,
and needs to follow certain rules.


-   **Possible values for *errtype*::**  
    ( ??? )
-   **Comments to each *errtype* value:**  
    -   ???
-   **Comments to some *pos* values:**  
    -   typo = typical typo — as a POS value?
    -   mix = used with errtype=ncmp, since the correct form is made of
        several words/POS's. Problem: there is no such *errtype* value,
        only *wcmp* and *cmp*.

By following these guidelines the resulting files should be readily
useable for (speller) testing, as soon as they are converted to xml.
