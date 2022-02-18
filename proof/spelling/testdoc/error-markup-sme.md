Error markup for sme
====================

We want to extend (some of) the corpus files with markup for spelling
and other errors, to use them as gold standards for testing our spellers
(and in the future other tools as well). The markup is done manually,
and needs to follow certain rules.

SME
===

-   **Ordklasse (ikke obligatorisk, ikke for Nordplus)::**  
    loan \| prop \| num \| acro  
    (dette fordi noen typer ord har mer feilskriving enn andre typer)
-   **Spesielle forhold ved ordet (ikke obligatorisk)::**  
    cmp \| nomag \| px \| der \| infl \| foc  
    Feilen er relatert til dette. Eks.
    -   *cmp*: sammensetningsfeil - largo istedenfor allegro, eller
        motsatt, eller samskriving der det skulle vært to ord, eller
        motsatt. For Nordplus endast samskriving der det skulle vært to
        ord, eller motsatt.
    -   *nomag*: vanligvis er det snakk om manglende diftongforenkling
        ved NomAg. Nordplus har ikke brukt NomAg.
    -   *px*: feilen er knytta til bøyninga i et ord med genitiv
        suffiks. Nordplus har ikke brukt px
    -   *der*: derivasjonsfeil - f.eks. deriv. følger ikke normen. Ikke
        brukt for Nordplus.
    -   *infl*: feil knyttet til bøyingsmorfologi - ordet er bøyd som
        ulikestavelsesstamme når normen er kontrakt stamme. Nordplus
        dessuten: oblikt kasus brukt isteden for attributt, komparativ
        brukt isteden for positiv, sammenblandinger i verbbøying og
        verbmodus etc
    -   *foc*: skrivefeil knytta til enklitisering
-   **Posisjon: b-ea-tn-a-g-i-in:**  
    -   b - initium - *coninit*
    -   ea - vokalsentrum - *vowc*
    -   tn - konsonantsentrum - *conc*
    -   a - latus - *vowlat*
    -   g - konsonantmargo - *conm*
    -   i - vokalmargo - *vowm*
    -   in - finis - *fin*
-   **Posisjon i sammensatte hvor første ord ender på konsonant:
    b-a-j-á-sš-a-dd-a-n:**  
    -   b - initium - *coninit*
    -   a - vokalsentrum - *vowc*
    -   j - konsonantsentrum - *conc*
    -   á - latus - *vowlat*
    -   sš - konsonantgruppe i ordgrense - *conwb*
    -   a - vokalsentrum - *vowc*
    -   dd - konsonantsentrum - *conc*
    -   a - latus - *vowlat*
    -   n - finis - *fin*
-   **Feiltyper – eksempler::**  
    -   typo = tastefeil, eks.
        -   {laet}${typo\|leat}
    -   a-á = skrevet a istedenfor á, eks.
        -   {radio}${loan,vowc,a-á\|rádio}, Nordplus:
            {radio}${vowc,a-á\|rádio}
        -   {Asias${prop,vowc,a-á\|Ásias}, Nordplus:
            {Asias}${vowc,a-á\|Ásias}
        -   {boarraseamos}${vowlat,a-á\|boarráseamos}
    -   ht-htt = skrevet ht istedenfor htt, eks.
        -   {gievkkanláhtis}${conc,ht-htt\|gievkkanláhttis}
    -   i-e = skrevet i istedenfor e, eks.
        -   {sámidikkis}${cmp,vowlat,i-e\|sámedikkis}, Nordplus:
            {sámidikkis}${vowlat,i-e\|sámedikkis}
    -   i-á = skrevet i istedenfor á, eks.
        -   {beaividuvvon}${der,i-á\|beaiváduvvon}, Nordplus:
            {beaividuvvon}${vowlat,i-á\|beaiváduvvon}
    -   1-2 = samskriving istedenfor to ord, eks.
        -   {ovddosguvlui}${cmp,1-2\|ovddos guvlui}
    -   2-1 = skrevet som to ord istedenfor samskriving, eks.
        -   nuppi {máilmmi soađi}${cmp,2-1\|máilmmisoađi}
    -   hyph-0 = skrevet som bindestrek istedenfor samskriving, eks.
        -   {dálkkádat-rievdan}${cmp,hyph-0\|dálkkádatrievdan}
    -   0-hyph = samskriving istedenfor bindestrek, eks.
        -   {epoastta}${loan,cmp,0-hyph\|e-poastta}, Nordplus:
            {epoastta}${cmp,0-hyph\|e-poastta}
    -   suf = kasus merket på feil måte (for num, acro og prop), eks
        -   {NRKas}${acro,suf\|NRK:s}, Nordplus: {NRKas}${suf\|NRK:s}
        -   {1992:ii}${num,suf\|1992:i}, Nordplus:
            {1992:ii}${suf\|1992:i}
        -   {Asker:is}${prop,suf\|Askeris}, Nordplus:
            {Asker:is}${suf\|Askeris}
    -   gen-nom = første del av sammensatt ord er skrevet som genitiv
        istedenfor nominativ, eks.
        -   {astoáiggibagadalli}${cmp,gen-nom\|astoáigebagadalli},
            Nordplus: {Meahciráđđehusa}${case,gen-nom\|Meahcceráđđehusa}
    -   mono = skulle vært diftongforenkling, eks.
        -   {oahpaheaddjiid}${nomag,mono\|oahpaheddjiid}, Nordplus:
            {oahpaheaddjiid}${vowc,mono\|oahpaheddjiid}
    -   diph = skulle vært diftong, eks.
        -   {Olgoriikadepartementtas}${loan,vowc,diph\|Olgoriikadepartemeanttas},
            Nordplus:
            {Olgoriikadepartementtas}${vowc,diph\|Olgoriikadepartemeanttas}
    -   cond = annet bøyningsmønster ved kondisjonalis, eks.
        -   {čuovošii}${infl,cond,mono\|čuvošii}
        -   {lágidivčče}${infl,cond\|lágidivččii}
    -   verb = annet bøyningsmønster ved verbbøyning, eks.
        -   {oaččuiba}${infl,verb\|oaččuiga}, ikke for Nordplus
    -   ill = knyttet til illativsuffikset (ikke for Nordplus), eks.
        -   {Størei}${prop,infl,ill,ei-ii\|Størii}
        -   {kursi}${infl,ill,i-ii\|kursii}
    -   com = knyttet til komitativsuffikset (ikke for Nordplus). Her
        har jeg merka av posisjon også fordi det er snakk om
        assimilasjon. Eks.
        -   {áššin}${infl,com,fin,n-in\|áššiin}
-   **Flere feil i samme ord skilles med ( ; ), eks.:**  
    -   {Filkamánne}${loan,vowc,i-y;conc,lk-lkk;vowlat,e-i\|Fylkkamánni},
        Nordplus:
        {Filkamánne}${vowc,i-y;conc,lk-lkk;vowlat,e-i\|Fylkkamánni}
    -   {eváhkomátkálaččat}$(conc,hk-hkk;conc,tk-tkk\|eváhkkomátkkálaččat}

By following these guidelines the resulting files should be readily
useable for (speller) testing, as soon as they are converted to xml.
