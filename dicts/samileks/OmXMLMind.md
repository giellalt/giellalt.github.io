# TEKNISK for leksikograf

# xml-strukturen og terminologien vi bruker 

&lt;e&gt; : **entry** (hovedelementet med all informasjon til hvert lemma. 
Vi skiller mellom lemmaer som har forskjellig etymologi f.eks. vuovdi (skog) -- vuovdi (selger) og  busse (buss) -- busse (pose))

&lt;lg&gt; : **lemma group** 
- &lt;l&gt; : lemma, med informasjon om **pos** (Part of Speech). Vi legger til attributt for å skille mellom homonyme lemmaer, med NomAg, f.eks. vuovdi (skog) og vuovdi NomAg (selger), eller G3, f.eks. vuorri (omgang) og vuorri G3 (fisk). Hvis homonymene har samme morfologi, bruker vi id=1, id=2, f.eks. busse (buss) og busse (pose)). H

- &lt;algu&gt; : informasjon til algu-databasen (legges til av programmerer)



&lt;mg&gt; : **meaning group** (denne inneholder all informasjon til en betydning av lemmaet). Det kan være flere mg etter hverandre. mg er for betydningsforskjeller (som begrunnes i kildespråket??). Ved flere meninggroups kan man vurdere å skrive en

&lt;re&gt; : **restriction**, begrensning av betydninga, på norsk

&lt;dg&gt;: **definition group** (ikke obligatorisk), som inneholder:
- &lt;d&gt; : definition
- &lt;dt&gt;: definition translation (Hvis det er flere mg med samme norske oversettelse, må det også legges til dt) 


&lt;sg&gt;: **synonym group** (ikke obligatorisk), som inneholder en eller flere:
- &lt;s&gt; : synonym

&lt;antg&gt;: **antonym group** (ikke obligatorisk), som inneholder en eller flere:
- &lt;ant&gt; : synonym


&lt;tg&gt; : **translation group**, innafor mg (denne kan inneholde flere beslektede oversettinger). Denne må inneholde **xml:lang** Det kan være flere tg etter hverandre
- &lt;re&gt; : **restriction**, begrensning av betydninga (hvis nødvending), på norsk
- &lt;t&gt; : **translation**, Legg til **pos**, men den kan også være 
--  t_type="expl" - explanation
--  t_type="phrase" - flere enn ett ord. Synonymer legges som flere &lt;t&gt; i samme &lt;tg&gt;

&lt;xg&gt; : **example group** (hver xg inneholder bare ett eksempel)
- &lt;x&gt; : eksempel på kildespråk
- &lt;xt&gt; : eksempel translation

Etter siste &lt;mg&gt;, kan det legges til

&lt;ig&gt; : **idiom group**, som inneholder
- &lt;i&gt; : idiom eller fast uttrykk
- &lt;id&gt; : forklaring på kildespråk
- &lt;it&gt; : forklaring på målspråk
  

 

# Redigering i XMLmind

Navigering i "treet":
| Funksjon | Mac | Windows | Lenes huskeregler |
|---|---|---|---|
| Opp i hierarkiet | cmd+↑ | ctrl+↑ | - |
| Ned i hierarkiet | cmd+↓ | ctrl+↓ | - |
| Legg til etter | cmd+J | ctrl+J | Jälkeen |
| Legg til før | cmd+B | ctrl+H | Before/Høyere |
| Legg til attributt | cmd+E | ctrl+E | Ekspander |
| Kopier | cmd+C | ctrl+C | Copy |
| Lim inn | cmd+V | ctrl+V | Vlim inn :-) |
| Angre | cmd+Z | ctrl+Z | - |
| Lagre | cmd+S | ctrl+S | Save |
| Finn ord | cmd+F | ctrl+F | Finn dette  |
| Søk | cmd+G | ctrl+G | Gå for å finne det |



***
***

