# Meänkieli adaptions in our infrastructure.


Requirements:
* separate Subversion repository
** heller berre passord på deira katalog?


* structured roughly as our main repository (but without the less optimal parts:) )
* limited access to the closed repo, in the sense that one language group should not be able to see the work of another language group (exception for administrators) - otherwise it isn't really secret/closed. That is, the FIT gang should only see FIT files, and a hypothetical e.g. Estonian gang should only see the Estonian files, not the FIT files, etc. But to the extent that there are (links to) shared resources the (e.g. links to infrastructure things in another place), they should be visible to all groups
* all tools, dtd's, configs work as in and from the main Subverison, such that we don't end up with multiple copies. That is, only content files and no infrastructure files should be in the closed repo - all the rest should stay in the main repo
* we should have scripts that move a full language dir from one repo to the other, in both directions, keeping svn history etc.
* the amount of work for setting this up should be minimal, or we have to ask them for money


Tentative task list
* figure out the svn dir structure in the closed lang repo, set it up
* figure out how to make the infrastructure in the open/main repo available for work in the closed repo (we want to have only one dtd, one XXE config, one makefile, etc.)
* when we have an idea of the amount of work, decide whether we just do it, or whether we bill them
* implement the previous point
* transfer the language files, preferably using a script for automatic transfer and deletion in the open repo
* inform them about the changes




# Admin på gtsvn:


**Cip:** Felles kjeldekodekatalog utanfor brukarkatalogane


**Børre:** Dokument som inneheld alt oppsett, og alle endringar.


**Sjur:** begge delar:


```
/usr/local/share/ext-tools-src/README.txt -> sjå README-admin.txt i gtpriv/
                           vislcg/
                           apertium/
                           omorfi/ (kanskje, helst som del av $GTMAIN)
                           hfst/
                           xfst/
                           giza/
                           moses/
                           cwb/
                           ...
```


**TODO:**
* laga $GTPRIV/sysadmin/README-admin.txt - DONE
* inventera:
** flytta alle installerte pakker til felles katalog
** endra gruppa for alle pakkene slik at alle i admin kan oppdatera og installera
** dokumentera i README-admin-fila
** ev oppdatera annan dokumentasjon
** pakker vi kjenner til:
*** vislcg3: Børre
*** apertium: Trond
*** omorfi: Sjur (men som ekstern definisjon) - DONE
*** hfst: Sjur - DONE
*** xfst: Trond
*** giza: Ciprian
*** moses: Ciprian
*** cwb: Ciprian




fin på heimesida:
* `kt/fin/bin/fin.fst`


Omorfi:
* `$GTMAIN/kt/fin/omorfi`
