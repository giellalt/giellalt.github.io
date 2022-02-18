# Dir structure


```
/doc/proof/spelling/testing/
                            sme/ - index: list sme engines
                                pl/ - index: list pl test types, total number of tests
                                    goldstandard/
                                        link: default last test result
                                        index: list number of tests, list all test results
                                                (link to actual test result pages,
                                                decending order according to date)
                                        test results: formatted according to Martin
                                                Reynaert's 5-step gradation and
                                                quality measures, link to typos page
                                    typos/
                                    regression/
                                    paradigm/
                                    baseform/
                                    wordtype/

                                    
20100507-Markansluska.correct.doc.summary.html
```


# M. Reynaert's 5-level tests


Reynaert, Martin (2008): *All, and only, the errors: more complete and consistent spelling and OCR-error correction evaluation*:


1. Core-correction mechanism: how well is the algorithm capable of handling all
  the types of errors the system is said to be able to tackle? This amounts to
  measuring the numbers of TPs and FNs.
1. Error detection: how well is the algorithm capable of distinguishing between
  what is erroneous and what is not? How many true and how many false alarms are
  raised? This amounts to measuring the numbers of TPs, FNs and FPs.
1. Suggesting correction candidates: how often is the correct CC among the set of
  CCs? This amounts to measuring the number of TPs in the set of CCs, those not
  present being FNs. The number of FPs is as determined on Level 2.
1. N-best ranking: how often is the correct CC among the n-best ranked CCs? This
  gives the (in comparison to the previous level: likely smaller) number of TPs,
  the rest are the FNs. The number of FPs is as determined on Level 2.
1. First-best ranking: how often is the correct CC among the first-best ranked
  CC's? or: how often is the only CC returned the correct one? This gives the
  (in compari- son to the previous levels:  likely even smaller) number of TPs,
  the rest are the FNs. The number of FPs is as determined on Level 2.
