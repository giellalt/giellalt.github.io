We want to extend (some of) the corpus files with markup for spelling
and other errors, to use them as gold standards for testing our spellers
(and in the future other tools as well). The markup is done manually,
and needs to follow certain rules.

SMJ
===

-   **Posisjon: a-kt-i-j-v-uo-d-a-jn:**  
    -   a - vokalsentrum - *vowc*
    -   kt - konsonantsentrum - *conc*
    -   i - latus - *vowlat*
    -   j - finis - *fin*
    -   v - initium - *coninit*
    -   uo - vokalsentrum - *vowc*
    -   d - konsonantsentrum - *conc*
    -   a - latus - *vowlat*
    -   jn - finis - *fin*

-   **Posisjon::**  
    -   b - initium - *coninit*
    -   e - vokalsentrum - *vowc*
    -   dn - konsonantsentrum - *conc*
    -   a - latus - *vowlat*
    -   g - konsonantmargo - *conm*
    -   a - vokalmargo - *vowm*
    -   v - finis - *fin*

-   **Posisjon::**  
    -   m - initium - *coninit*
    -   a - vokalsentrum - *vowc*
    -   sk - initium - *coninit*
    -   i - vokalsentrum - *vowc*
    -   jn - konsonantsentrum - *conc*
    -   a - latus - *vowlat*
    -   v - finis - *fin*

-   **Feiltyper $ – eksempler::**  
    -   typo = tastefeil, eks.
        -   {behi}${typo\|vehi}
        -   {dábábalsj}${typo\|dábálasj}
    -   ascii=ikke samisk bokstav, n-ŋ, ñ-ŋ eks.
        -   {Mañemus}${ascii\|Maŋemus}
    -   a-á = skrevet a istedenfor á, eks.
        -   {radio}${loan,vowc,a-á\|rádio}
        -   {dáhpádusa}${vowlat,a-á\|dáhpádusá}
        -   {dahpadusá}${vowc,a-á,vowlat,a-á\|dáhpádusá}
    -   á-a = skrevet á istedenfor a, eks.
        -   {báhtaj}${vowc,á-a\|bahtaj}
        -   {dáhkap}${vowc,á-a\|dahkap}
        -   {boarraseamos}${vowlat,a-á\|boarráseamos}
    -   diftongfeil, eks.
        -   {muodda}${vowc,uo-oa\|moadda}
        -   {biehttám}${vowc,ie-æ\|bæhttám}
    -   vokalfeil = skrevet i istedenfor á, eks.
        -   {Guovdesj}${vowlat,e-á\|Guovdásj}
        -   {dåbddåmerkajt}${vowlat,å-o\|dåbddomerkajt}
    -   stammekonsonantfeil, eks.
        -   {gahtját}${conc,htj-tj\|gatját}
        -   {subtsasa}${conc,bts-btts\|subttsasa}
    -   mangler konsonant i slutten av ordet/stammen
        -   {miehtá}${fin,0-j\|miehtáj}
        -   {aktivuodav}${fin,0-j\|aktijvuodav}
    -   ekstra konsonant i slutten av ordet
        -   {gåhttsåjijn}${fin,jn-n\|gåhttsåjin}
        -   {gålmmij}${fin,j-0\|gålmmi}
    -   feil konsonant i slutten av ord
        -   {láhppán}${fin,n-m\|láhppám}
    -   feil konsonant i morfemgrense
        -   {åtsåtallá}${coninit,t-d\|åtsådallá}
    -   feil konsonant i grense for sammensatteord
        -   {giládumsuormas}${fin,m-s\|giládussuormas}
    -   feil konsonant ved bøying
        -   {luhtáka}${conm,k-g\|luhtága}
        -   {riehpiji}${conm,j-h;fin,0-j\|riehpihij}
    -   feil bøying av ord, eks. kontrakt som likestavelses
        -   {oassás}${infl\|oases}
        -   {riebija}${infl\|riehpiha}
        -   {ietjasijda}${infl\|allasisá}
    -   feil derivasjon, eks.
        -   {dáhpádime}${der,ime-usá\|dáhpádusá}
    -   1-2 = samskriving istedenfor to ord, eks (1-X er også brukt).
        -   {ienemusoasse}${cmp,1-2\|ienemus oasse}
    -   hyph-0 = skrevet som bindestrek istedenfor samskriving, eks.
        -   {Duodje-tiemá}${cmp,hyhp-0\|Duodjetiemá}
    -   gen-nom = første del av sammensatt ord er skrevet som genitiv
        istedenfor nominativ, eks.
        -   {asstoájgedåjma}¢{cmp,gen-nom\|asstoájggedåjma}
    -   suf = kasus merket på feil måte (for num, acro og prop), eks
        -   {NRKas}${acro,suf\|NRK:as}
        -   {1992:j}${num,suf\|1992:aj}
        -   {Asker:is}${prop,suf\|Askeris}
        -   {mánáj-TVijn}${suf\|mánáj-TV:an}
    -   px =feil possesivsuffix, eks.
        -   {iehtjasij}${px\|iehtjasa}
    -   cap = skal være stor bokstav, eks.
        -   {magga}${cap\|Magga}
    -   abbr = punktmarkeringen er feil i forkortelser eks.
        -   {dr}${abbr,0-punct\|dr.}

-   **Feiltyper ¢ – eksempler::**  

    -   ¢ merkes på samme måte som $ pluss disse:
    -   min = skal være liten bokstav, eks.
        -   {Julevsámegielav}¢{min\|julevsámegielav}
    -   2-1 = skrevet som to ord istedenfor samskriving, eks (X-1 er
        også brukt).
        -   {fabrihkka bivtas}¢{cmp,2-1\|fabrihkkabivtas}
    -   2-hyph = skrevet som to ord istedenfor med bindestrek, eks
        (X-hyph).
        -   {Siggá muohtá}¢{cmp,2-hyph\|Siggá-muohtá}

    Mange ¢ feil kan også være markert som £ feil, og omvendt. Hvis man
    har skrevet en substantiv med feil grad, kan de ha blitt essiv i
    stede for inessiv, det er vanskelig å vite om dette da er £ eller ¢.

-   **Feiltyper € – eksempler::**  
    -   der = feil deivasjon, eks.
        -   {hiervvidam}€{der,aktiv-pass\|hiervvidum}
        -   {unnaoabbáj}€{der\|unnaoappátjij}
    -   skulle vært supinum i stede for infinitiv eks.
        -   {hárjjidallat}€{infl,inf-sup\|hárjjidalátjit}
    -   w = feil ord, eks.
        -   {Nav}€{w\|Dát}
        -   {aj}€{w\|duodden}
        -   {konkrehtalasj}€{w,adj-adv\|konkrehtalattjat}
        -   {muv}€{w,pers-refl\|ietjam}
    -   foreign = ikke lulesamisk ord, eks.
        -   {minsstarijt}€{foreign\|girjajt}
        -   {sentrálla}€{foreign\|guovdásj}
    -   phr = fraser som burde bli skrevet med et ord, tyder på
        norwagisme , eks.
        -   {álgijma bårråt}€{phr\|bårrågådijma}
        -   {ienep låhpaladtjan}}€{phr\|låhpalabbon}

-   **Feiltyper £ – eksempler::**  
    -   skulle ha vært kondisjonalis, eks.
        -   {gåktu lij sjaddat jus}£{infl,ind-cond\|gåktu luluj sjaddat
            jus}
        -   {lidjin máhttet}£{infl,ind-cond\|lulun}
    -   skulle ha vært potensialis, eks.
        -   {vuordedahtte sjaddá}£{infl,ind-pot\|Sjattasj dávk}
    -   kongr
        -   {Nav}€{w\|Dát}
        -   {ma tjielggi}£{kongr\|ma tjielggiji}
        -   {vuogij milta mij guosská}£{kongr\|vuogij milta ma guosski}
        -   {sujttára vásedij}£{kongr\|sujttára vásedi}
    -   feil kasus, eks.
        -   {báhpas Olaf Holmas}£{case,ela-nom\|báhpas Olaf Holm}
        -   {lijkkuv dajt}£{case\|lijkkuv dajda}
    -   x = ukategorisert feil, eks.
        -   {iv dádjadum}£{x\|ittjiv dádjada}
        -   {iv la nav ålojt dahkam}£{x\|iv la nav ålov dahkam}

-   **Feiltyper ¥ – eksempler::**  
    -   missing = det mangler et ord eks.
        -   {åvddål}¥{missing\|åvddål gå}
        -   {Riebij álu sluogas}¥{missing\|Riebij la álu sluogas}
    -   redun = unødvendige ord, eks.
        -   {biedji iemeálmmugij dárbojt ja guovdátjij}¥{redun\|biedji
            iemeálmmugij dárbojt guovdátjij}
        -   {guoradallat ietjá ulmutjij ja kultuvraj
            birra}¥{redun\|guoradallat ietjá ulmutjijt ja kultuvrajt}
        -   {dagu symbåvllån}¥{redun\|symbåvllån}
    -   wo = feil rekkefølge på ordene, eks.
        -   {ådå rássjojáhkka Haglöfs}¥{wo\|ådå Haglöfs rássjojáhkka}
        -   {de e girde háleda}¥{wo\|de girde e háleda}
    -   der = derivasjonsfeil som gjør at argumentstrukturen blir feil,
        eks.
        -   {suv gievkanij viegaj}¥{der\|suv gievkanij viegadij}
    -   attr-pred eller pred-attr = feil adjektivform, eks.
        -   {párradisstávval værbba}¥{pred-attr\|párradisstávvalis
            værbba}
    -   x = andre feil, eks.
        -   {Stuorsebrudak viertti}¥{x\|Stuorsebrudahka viertti}

-   **Feiltyper ∞ – eksempler::**  
    -   ord eller setning på annet språk, slang, webadresse, eller
        samisk suffiks som står alene som eksempel i tekst eks.
        -   {Red Matter, Native American Studies}∞{eng}
        -   {Ivnnit}∞{sme}
        -   {Wups}∞{sla}
        -   {goahtet}∞{suf}
        -   {ll-l}∞{abbr}
        -   {www.an.no}∞{url}

-   **Comments to some *pos* values:**  
    -   typo = typical typo — as a POS value?
    -   ; = typical typo — as a POS value?
    -   mix = lots of errors.

By following these guidelines the resulting files should be readily
useable for (speller) testing, as soon as they are converted to xml.
