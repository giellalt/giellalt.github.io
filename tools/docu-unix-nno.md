# Unix for Lingvistar

Lingvistar treng Unix fordi Unix kan manipulere tekst for oss. For å bli
i stand til å bruke Unix må vi kunne bruke Unix sitt
kommandolinegrensesnitt. Dette dokumentet går gjennom sentrale kommandoar og arbeidsmåtar. Etter kvart avsnitt kjem det ei lita
oppsummering av kva som er gjennomgått.

Unix finst på Linuxmaskiner og på Mac. På Windows 10 (oktober 2018) og nyare kan du [installere Linux](infra/GettingStartedOnWindows.html). Vi bruker Unix via **terminalprogrammet**. På Mac ligg det i mappa for hjelpeprogram og på Linux ligg det i mappa for programmeringsverkty. På Windows er det ikonet for Linux-versjonen du nett installerte.

## Kommandolinje og kommandoar

Unix er ikkje eit program, men eit operativsystem. Det skil seg frå moderne operativsystem ved at det ikkje har
noko grafiske brukargrensesnitt. I staden har Unix noko vi kallar ei
**kommandolinje**, dvs. at cursoren står og ventar på at du skal skrive
inn ein kommando. Rett etter at du har opna terminalprogrammet står du i heimekatalogen. I `victorio` (Linuxmaskina til Samisk
språkteknologi-prosjektet) fortel _prompten_ til kommandolina (dvs. den
teksten som står til venstre for cursoren) deg kva katalog du er i
akkurat no.

Du skal no lære mange **kommandoar**. For at unix skal forstå kommandoane
dine må dei bli skrive på ein bestemt måte. Ein unix-kommando har to
obligatoriske delar: Kommandoen må starte med namnet på eit program, og
han må slutte med at du trykkar på lineskifttasten. ("Trykk ENTER").

- Vi prøver ein enkel kommando:

  - Skriv `date` og trykk ENTER.
  - Som svar bør du få opp dagens dato og klokkeslett.

- Ein til:
  - Skriv `cal` og trykk ENTER.
  - Svaret bør bli ein liten kalender.

Alle kommandoar blir avslutta med ENTER, og frå og med no vil vi gå ut frå at du avsluttar kommandoen med å trykke på ENTER-tasten. "Skriv `ls`" tyder altså "skriv `ls` og trykk ENTER", og
tilsvarande for dei andre kommandoane.

Dei fleste kommandoar tar eitt eller fleire argument. Ein slik kommando
er _mkdir_, som tyder "make directory", eller "lag ein katalog". Skriv
`mkdir`, trykk ENTER, og du vil få eit logisk svar. (For å lage ein ny
katalog treng unix eit argument, eit katalognamn. Skriv t.d. `mkdir
tullkatalog`. For å sjå kva som har skjedd skriv du `ls` (list opp
innhaldet i den katalogen du står i akkurat no). Katalogen du nett laga
tar du bort att med å skrive `rmdir tullkatalog`. Prøv det, og prøv
det deretter ein gong til. (_rmdir_-kommandoen fungerer berre på tomme
katalogar.)

Frå eit lingvistisk synspunkt kan vi sjå på kommandoane som verb. I og
med at alle kommandoane representerer våre oppfordringar til
datamaskina, kan vi betrakte dei som verb i imperativ. Som andre verb er
også Unix-verba transitive eller intransitive. Ein kommando som _date_
kan bli sett på som eit intransitivt verb: Du skriv _date_, og maskina
fortel deg kva dato det er. Kommandoen _mkdir_ er derimot eit transitivt
verb, det må ha eit objekt, nemleg namnet til den nye katalogen du vil
lage.

På same måten som vanlege verb opererer også unix-kommandoar med
underforståtte objekt, med tolking avhengig av konteksten det står i.
Viss vi seier "et!" meiner vi som regel "Et maten som står foran deg!".
Unix-kommandoen _ls_ har og eit slikt kontekst-avhengig, underforstått
objekt. Det du eigentleg seier er "list innhaldet i den katalogen eg
står i no". Vil du liste opp innehaldet i ein bestemt katalog, må du
seie namnet på katalogen (jf. neste kapittel). Det same gjeld _cal_.
Skriv du berre _cal_, får du årets kalender. Viss du vil vite kva
vekedag grunnlova vart underteikna på, skriv du _cal 1814_. Vi skal
seinare sjå på kommandoar med to objekt, unix-verda sin parallell til
ditransitive verb.

Kommandoar kan også modifiserast, dei har adverb. Kva adverb
(programmerarar kallar dei **options** eller **flagg**) kommandoane tar
varierer frå kommando til kommando. Kommandoen _cal_ har t.d. flagga -m
(la måndag vere første dag i veka) og -3 (vis månaden før og månaden
etter). Kommandoen _cal -m 2000_ gjev t.d. kalendaren for år 2000, med
måndag som første dag i veka. Oppsummering:

- Kommando-syntaks: _kommandonamn_ eller _kommandonamn argument ENTER_
- Kommandoar: `date`, `cal`, `mkdir`
- Kommandoar kan bli sett på som verb i imperativ, dei kan vere
  intransitive eller transitive (ha ingen, eitt eller fleire
  argument), og dei kan ta modifiserande adverb (flagg)

## Unix-landskapet

Heimekatalogen din ligg i ein annan katalog,
og har (eller vil få) andre katalogar under seg att. Men ein stad
stoppar det opp. Alle katalogars mor er **rotkatalogen**. Den har eit
eige symbol i Unix, nemleg `/`. For å sjå kva som er i rotkatalogen
din kan du skrive `ls /`, dvs. "list opp innhaldet i rotkatalogen".
Hugs å avslutte med linjeskifttast. Der vil du sjå ein del kryptiske
namn, alle er namna på ulike katalogar.

Ein av katalogane på Linux-system heiter gjerne _home_, og det er heimen
til alle brukarane på systemet. Kommandoen `ls /home` listar opp
innhaldet i katalogen home, og du ser dermed kven som er brukarar på
gtlab. Eitt av dei brukernamna er ditt. Skriv du derimot `ls` får du
lista opp alle filene og katalogane du har i din eigen heimekatalog,
eller meir generelt den katalogen du står i akkurat no. På Mac heiter
den tilsvarande katalogen ofte _Users_.

Kommandoen _ls_ har ein dele viktige flagg: `ls -l` (langt format), `ls -lt` (sortert etter alder) og `ls -lS` (sortert etter storleik).

**Oppsummering:**

- heimekatalog, rotkatalog (/)
- Katalogstruktur:
  - Katalogar ligg inni kvarandre (som mapper i
    grafiske brukargrensesnitt)
- Kommandoar: `ls`, `ls /`, `ls /home`, `ls /Users`
- Flagg for `ls`: `-l` (langt format) `-lt` (tid), `-lS` (storleik)

## Lage katalogar, flytte rundt

Lag ein katalog for dette kurset. Du skriv altså `mkdir kurs`. Skriv
`ls`. Viss du så skriv `ls kurs` finn du ut kva som er inni den nye
katalogen (ja, ganske riktig, ingen ting).

Prøv så å flytte inn i katalogen. Skriv `cd kurs` (_cd_ tyder "change
directory"). Sjekk om prompten endrar seg. Viss du no skriv `ls kurs`
ein gong til får du eit heilt anna svar enn sist. Korfor det?

Grunnen til at du no får svaret "Ingen slik fil eller filkatalog" (eller
tilsvarande) er at katalogen _kurs_ ikkje sjølv inneheld nokon katalog
som heiter "kurs". Lag no ein ny katalog, i _kurs_, med å skrive t.d.
`mkdir tullkatalog`. Du kan så gå tilbake til heimekatalogen din med å
skrive `cd ..` (cd mellomrom punktum punktum) To punktum tyder
"morkatalogen til den katalogen eg no står i". Så kan du skrive ls kurs,
og t.d. få svaret "tullkatalog"). Du kan bruke symbola `..` i alle
samanhengar, t.d. vil kommandoen `ls ..` bety "list innhaldet i
morkatalogen til den katalogen eg no står i". Viss du står i katalogen
_kurs_, og heimekatalogen din inneheld katalogane kurs og gt, kan du
liste innhaldet i gt med å skrive `ls ../gt`. `..` tyder "eitt nivå
opp, og `/` tyder "eitt nivå ned. `gt` fortel kva katalog systemet
skal liste innhaldet i.

Det er ein katalog som er viktigare enn alle andre katalogar, og det er
heimekatalogen din. Viss du er i kurs og vil heim, kan du sjølvsagt
skrive `cd ..`, men viss du ikkje er sikker på kor du er, eller viss
du vil fort heim, kan du skrive berre `cd`. Den kommandoen flyttar deg
rett heim til heimekatalogen din.

Viss du lurer på kor du er kan du forresten skrive `pwd`, "print
working directory". Då får du som svar stien frå rotkatalogen til
katalogen du sjølv står i akkurat no.

**Oppsummering:**

- Katalogstruktur: morkatalog, dotterkatalog, notasjonen `..`
- `mkdir`
- Kommandoar: `cd` (flytt meg heim), `cd ..` (flytt meg ein
  katalog opp), `pwd` (print working directory)

## Relativ og absolutt referanse

Det er to måtar å referere til filer og katalogar på i Unix. Den eine er
absolutt, og den andre er relativ. Den måten vi til no har brukt er
relativ. Når vi bruker relativ referanse er resultatet av kommandoen vår
som regel avhengig av kor vi står. Sett at du står i heimekatalogen din,
og at du der har ein katalog som heiter kurs. Då er det mogleg å skrive
`ls kurs`. Står du derimot i ein søsterkatalog, t.d. _Documents_, er det ikkje mogleg,
då må du skrive `ls ../kurs` for å få vite innhaldet. Relativ
referanse er altså relativ til kor i systemet du sjølv står. For å samanlikne med den verkelege verda kan vi seie at 'høgre' og 'venstre' er døme på relativ
referanse, mens 'nord' og 'sør' er døme på absolutt referanse.

Når du bruker absolutt referanse speler det ikkje nokon rolle kor du
sjølv står, for då viser du kor fila eller katalogen ligg ved å referere
til rotkatalogen, som heiter /. Viss brukarnamnet ditt er trond, kan du
skrive `ls /home/trond/kurs/`, uansett kva katalog du sjølv står i.
Referansen til katalogen kurs er ikkje lenger relativ, men absolutt, han
er forankra i rotkatalogen.

**Oppsummering:**

- Relativ referanse, avhengig av kor du sjølv står i systemet
- Absolutt referanse, refererer via rotkatalogen

## Vise innhaldet i filer

Gå til katalogen kurs, som du nettopp har laga (viss du ikkje veit kor
du er gjev du først kommandoen `cd`, og deretter `cd kurs`. Så kan
du lage eit par filer. Vi skal seinare lage filer med ein eitor, no
lagar vi dei på ein litt meir lettvint måte, med kommandoen _cat_. Skriv
`cat &gt; n-liste`. Som svar får du ikkje den vanlege prompten, men ei
blank line. Skriv inn eit ord, t.d. Kari. Trykk ENTER. Skriv inn eit
namn til, t.d. Per, og ENTER. Ta eit par namn til, Lars, Anne, Lena, med
ENTER etter kvar. Til slutt avsluttar du med `Ctrl-d` (hald
Ctrl-tasten nede og trykk på D-tasten). Dermed bør du få attende
prompten. Viss du no skriv `ls`, ser du at du har fått ei fil, nemleg
"n-liste". Viss du lurer på kva som står i fila kan du skrive `less
n-liste`. Då får du lista opp innhaldet i fila. Til slutt står det END
i invers video. For å kome seg ut av less og attende til kommandolina
trykker du på q-tasten.

**Oppsummering:**

- Kommandoar: `cat`, `cat &gt; filnamn`, `less`
- Kome seg ut av less-funksjonen og attende til kommandolina: skriv
  `q`

# Manipulere innhaldet i filer

## sort

Innhaldet i fila _n-liste_ i forrige avsnitt kan vi bruke som
dømemateriale for å lære ein del _heilt sentrale kommandoar_ for oss. Vi
vil gjerne sortere tekst. Skriv `sort n-liste`, og du får fila
alfabetisert, kvar line i alfabetisk rekkefølgje. (ein lettare måte er å
skrive `sort n` og deretter trykke tabulatortasten, viss _n-liste_ er
den einaste fila i katalogen kurs som har n som første bokstav vil Unix
fylle ut resten sjølv).

Denne kommandoen kan vi modifisere med det som blir kalla _flagg_. Eit
flagg er ein måte å modifisere in unix-kommando på. Flagg blir skrive
med ein bindestrek (-) først, og dei blir plassert mellom kommandoordet
og argumentet. I staden for `sort n-liste` kan de skrive `sort -r
n-liste`. Flagget -r tyder "reversert", og fila blir altså sortert i
omvend rekkjefølgje.

**Oppsummering:**

- Flagget `-r`
- Kommando: `sort`

## grep

Ein annan sentral kommando er _grep_. Det står for "get regular
expression", og hentar ut alle linene som er av den typen du har
spesifisert. Skriv `grep L n-liste`, og du får Lars og Lena som svar.
Skriv `grep a n-liste`, og du får Kari, Lars og Lena (men ikkje Anne!)
som svar.

Viss du vil søke etter meir avanserte uttrykk må du bruke apostrof.
Kommandoen `grep mii filnamn` i ein samisk tekst gjev tilslag både på
'mii' og 'huksemiid'. Viss du vil søke berre på mii i starten av ord kan
du skrive `grep ' mii' filnamn`. Viss du vil søke på ordet 'mii' kan
du skrive `grep -w mii filnamn`

## rev

Kommandoen _rev_ reverserer linene. Skriv `rev n-liste` og prøv og sjå
kva som har skjedd.

Såg du det? Alle namna er no skrive baklengs. Det i seg sjølv er ikkje
så spennande, kanskje, men når det blir kombinert med andre kommandoar
blir det svært nyttig for oss.

**Oppsummering:**

- Kommando: `rev`, reverser line ('far' blir 'raf')

## Pipe: teiknet |

Teiknet \|, eller pipe (utt. paip), er eit av dei viktigaste symbola vi
har. Pipe finn du på Macintosh på opsjon-7 (opsjon er tasten med eit
symbol som ser ut som eit skiftespor), på dei fleste PC-tastatur står
pipe-tasten til venstre for eittalet, øvst til venstre på tastaturet.
Med \| kombinerer vi fleire kommandoar, eller rettare: Vi sender output
frå den første kommandoen til den neste. Vi skal no kombinere
kommandoane `rev` og `sort`, og det gjer vi slik: `rev n-liste \|
sort \| rev`. Kva har skjedd? Vi har reversert namna i fila vår,
sortert den reverserte lista, og reversert attende til vanleg
venstre-til-høgre-tekst. Resultatet er ei _baklengssortert liste_ over
dei namna vi starta ut med.

**Oppsummering:**

- Kommando: `rev`, reverser line ('far' blir 'raf')

## wc

La oss no utvide fila vår med litt fleire namn. Skriv `cat &gt;&gt;
n-liste` og trykk lineskifttast. Du fåt opp ei blank line. Skriv inn
namna Per, Ole, Anne og Anne, alle med lineskifttast mellom. Avslutt med
lineskifttast, og trykk `Ctrl-d`. Skilnaden på `&gt;` og
`&gt;&gt;` er at i det første tilfellet lagar du ei ny fil, og i det
andre tilfellet føyer du nytt innhald til ei allereie eksisterande fil.
Dette er ein **SVÆRT VIKTIG** skilnad. Viss du har jobba i lang tid med
ei fil, og skrive inn hundrevis av liner med tekst, og berre vil legge
til eit ord eller to på slutten, kan du bruke `&gt;&gt;`. Men viss du
gløymer deg og skriv `&gt;` i staden, har alle dei hundrevis av linene
forsvunne, og alt som står att er dei to stakkars orda du ville legge
til. Unix kjenner ingen nåde. Dei hundrevis av linene du hadde får du
ikkje att. Så ver forsiktig.

La oss no seie at det går bra, og du har ei fil som inneheld til saman 9
namn. Korleis veit du at det er 9? Med wc-kommandoen (word count). Skriv
`wc n-liste`, og du ser kor mange liner, ord og teikn fila inneheld.
Viss du berre vil sjå eitt av dei tre svara, kan du gjere det med flagga
-l, -w og -c, slik: wc -l. Flagga kan og kombinerast: `wc -lw` fortel
kor mange liner og ord fila inneheld.

**Oppsummering:**

- Kommando: `wc`, tel kor mange liner, ord og teikn ei fil har
- Flagg: wc-kommandoen har flagga `-l, -w` og `-c` (liner, ord og teikn)
- Teiknet `&gt;&gt;`: Legg innhaldet til på slutten av fila du
  sender det til

## uniq

I n-liste er no fleire av linene identiske. Skriv `sort n-liste`, så
ser du det. Viss du er interessert berre i kor mange ulike liner du har,
og ikkje i oppattakingar, kan du skrive `sort n-liste \| uniq`. Viss
du er interessert i kor mange det er av kvart namn, kan du legge til
teiknet -c, som står for "count", slik: `sort n-liste \| uniq -c`.
Litt meir avansert blir det med `sort n-liste \| uniq -c \| sort -n`
(sorter etter nummer), og riktig sving over det får vi med `sort
n-liste \| uniq -c \| sort -nr`. Med denne kommandoen får vi ei liste
som gjev dei mest vanlege orda (eig. linene) først, og som sorterer
nedover etter frekvens. Ord med same frekvens blir sortert alfabetisk.

## tr

Kommandoen `tr` endrar eit teikn til eit anna. Denne kommandoen skil
seg frå andre kommandoar ved at han ikkje tar filnamn som argument, men
må få dei servert på eit fat. Viss du vil endre alle bokstavar "e" til
"x" i fila n-liste, skriv du `cat n-liste \| tr 'e' 'x' \| less`. Då
får du resultatet på skjermen. Vil du lagre resultatet til ei ny fil
skriv du i staden `cat n-liste \| tr 'e' 'x' &gt; nyliste`, og dermed
er den nye fila lagra som "nyliste". Merk at du ikkje kan bruke same
namn på kjeldefil og målfil.

Ein svært nyttig tr-kommando er den som gjer ein tekst om til ei liste
med eitt ord per line. For å få til det skal vil erstatte alle mellomrom
med linesluttsteikn. Linesluttsteikn skriv vi '\\n'. '\\n' tyder
"newline". Det første du kan gjere er å gjere om n-liste til ein tekst,
slik: `cat n-liste \| tr '\\n' ' ' &gt; n-tekst`. Viss du no skriv
`less n-tekst`, ser du at namna i namnelista har hamna på same line.
Du kan kome attende til listeformatet med å snu på kommandoen, slik
`cat n-tekst \| tr ' ' '\\n' \| less`.

## Kreativ latskap:

Etter kvart kan kommandoane bli mange og lange. I staden for å skrive
same kommando ein gong til kan du bruke _piltastene_. Pil opp gjev deg
forrige kommando (for å utføre kommandoen må du sjølvsagt trykke
lineskifttast). Pil opp ein gong til gjev kommandoen før der att.

Viss du så skriv `history`, får du ei liste over alle kommandoane du
har gjort. Kvar kommando har eit nummer. Viss du t.d. gjerne vil gjere
kommando nummer 55 om att, skriv du `!55`, og same kommando blir
utført ein gong til.

Lange kommandoar kan du også redigere. Viss du har skrive `grep e
n-liste \| rev \| sort \| rev` (for å få ei baklengssortert liste over
alle namna som inneheld e), kan du etterpå trykke på **pil opp**, få
kommandoen på nytt, trykke på **pil venstre** til du kjem til e-en,
setje cursoren oppå e-en, trykke `Ctrl-d` (for delete), og deretter
skrive `a` og enter. Vips har du ei baklengssortert ordliste over alle
namna som inneheld vokalen _a_.

**Oppsummering:**

- ctrl-a, ctrl-e, ctrl-p, ctrl-n.
- `history` viser tidlegare kommandoar
- `!nummer` gjev same kommando på nytt.

## Kopiere og flytte filer, gje nytt namn

Filer blir kopiert med kommandoen `cp` (for "copy"). Viss du skal
kopiere fila _n-liste_ til ei ny fil, som du vil kalle _kopiliste_,
skriv du `cp n-liste kopiliste`. Rekkefølgja er altså "cp frå til".
Viss du vil gje ei fil eit nytt namn bruker du kommandoen `mv` (move).
Syntaksen er den same: `mv gammaltnamn nyttnamn`. Namnet "mv" er ikkje
tilfeldig, viss du ikkje gjer opp eit nytt namn, men i staden ein ny
katalog, blir fila flytta dit: `mv n-liste tullkatalog/` flyttar fila
"n-liste" til katalogen "tullkatalog".

**Oppsummering:**

- `cp` = kopiere filer
- `mv` = flytte filer eller for å gje dei nytt namn

# Regulære uttrykk

Vi bruker **regulære uttrykk** for å søke etter klasser av teikn. For å
finne strengen 'lea' i ein tekst som heiter _liste_ skriv vi `grep lea
liste`.

- Regexautomat på nett: [regex101.com](https://regex101.com/)

## Ein kort tekst

Som døme kan vi ta desse to setningane (viss du vil øve deg kan
du kopiere dei til eit eige dokument, som du kan kalle t.d liste).:

    Bargojoavku
    galgá
    čielggadit
    ja
    mearridit
    mii
    Finnmárkku
    fylkka
    eatnamiid
    ja
    čáziid
    eaiggáduššan-
    ja
    geavahanvuoigatvuođaide
    dál
    fertešii
    leat
    gustojeaddji
    riekti.
    Bargojoavku
    galgá
    dán
    oktavuođas
    bidjat
    vuođđun
    lávdegotti
    mandáhtii
    addon
    njuolggadusaid.

Her kjem ein del nyttige kodar. Symbolet ^ tyder "starten av lina", og
symbolet $ (dollar) tyder "slutten av lina". For å liste alle ord som
har d som første og som siste bokstav i lina ovafor gjer vi altså slik:

    grep '^d' liste
    dál
    dán
    grep 'd$' liste
    eatnamiid
    čáziid

Symbolet . (punktum) tyder "kva symbol som helst". Med kommandoen
nedanfor får du tre svar, dei tre orda som har ea som andre og tredje
bokstav i ordet.

    grep '^.ea' liste
    mearridit
    geavahanvuoigatvuođaide
    leat

Det er og mogleg å søke på klassar av lydar. Soleis er \[aáeiou\]
klassen av alle vokalar i nordsamisk. Dette søket gjev alle ord som
inneheld konsonanten n pluss ein vokal:

    grep 'n[aeiouá]' liste
    eatnamiid

Alle regulære uttrykk kan kombinerast. Slik får vi fram alle tilfella av
o pluss kva teikn som helst pluss ein vokal:

    grep 'o.[aeiouá]' liste
    Bargojoavku
    geavahanvuoigatvuođaide
    gustojeaddji
    Bargojoavku
    oktavuođas

Stor eller liten bokstav som første bokstav i ordet får vi fram på denne
måten:

    grep '^[bB]' liste
    Bargojoavku
    Bargojoavku
    bidjat

Ein del kommandoar er litt meir avansert, vi kan ikkje bruke grep, men
må bruke ein meir avansert variant, egrep. Her får vi alle orda med ein
av tre diftongar.

    egrep 'ea|uo|ie' liste
    čielggadit
    mearridit
    eatnamiid
    eaiggáduššan-
    geavahanvuoigatvuođaide
    leat
    gustojeaddji
    riekti.
    oktavuođas
    vuođđun
    njuolggadusaid.

Meir informasjon om regulære uttrykk får du viss du skriv `info regex`.

# Unix sin innebygde hjelpfunksjon:

Unix har eit svært godt hjelpesystem innebygd. Viss du veit kva kommando
du vil ha meir informasjon om, kan du skrive `man kommandonamn` (t.d.
`man grep`). Det er to problem med denne informasjonen: Du må for det
første vite namnet på kommandoen før du kan spørre, og teksten er ofte
litt kryptisk. Best eigna er man-sidene til å få greie på kva flagg ein
kommando har, og korleis dei fungerer.

Viss du vil ha ein pedagogisk tekst, bør du heller skrive `info
kommandonamn`. Du kjem då inn i ein tekst som er skrive i eit format
som minnar om ein primitiv nettlesar: Du beveger deg ned og opp med
piltastane. Når du kjem til ein link (merka med \* framfor øverskrifta),
trykker du på ENTER. Du kan også bruke orda som står øverst på sida. På
"info grep" står det t.d. Node: Top, Next: Introduction, Up: (dir). Det
tyder at du kan trykke på t og komme til toppen av sida, trykke på n og
komme til avsnittet "Introduction", og trykke på u og kome til nivået
over grep.info. Når du kjem til neste nivå kan du tryppe på P (previous)
og kome dit du var. Ut av info kjem du ved å trykke q (quit).

Viss du ikkje er sikker på kommandoen du er ute etter kan du skrive
`apropos kommandonamn` (for det kommandonamnet du trur det kanskje er
du leiter etter). Apropos vil dermed gje deg ei liste over kommandonamn
som kanskje har noko med saka å gjere (og kanskje ikkje!). Som regel er
det ikkje så mykje hjelp i 'apropos'-kommandoen.

# Liste over kommandoar

- **cat (cat filnamn):**  
  skriv innhaldet av filnamn ut på skjermen  
  "cat &gt; filnamn" tar det som blir skrive på skjermen og skriv det
  inn i fila filnamn.
- **diff (diff fil1 fil2):**  
  samanlikne innhaldet i to filer
- **cp (cp fråfil tilfil):**  
  kopier fil
- **finger (finger brukarnamn):**  
  fortel kven som skjuler seg bak brukarnamn
- **grep søkestreng filnamn:**  
  listar opp liner i 'filnamn' som inneheld 'søkestreng'.
- **history:**  
  listar opp alle kommandoane du har gjeve systemet
- **man (man kommando):**  
  skriv ut hjelpfila til kommando
- **mkdir (mkdir katalognamn):**  
  lagar ny katalog
- **more (more filnamn):**  
  viser ein skjermfull av gangen
- **mv (mv fil tilkatalog/) (mv gammaltnamn nyttnamn):**  
  gje fil nytt namn; flytt fil
- **ll (ll katalognamn):**  
  list innhaldet i katalognamn, evt i katalogen der du står (langt
  format)
- **ls:**  
  list innhaldet i katalog
- **lt (lt katalognamn):**  
  list innhaldet i katalognamn, ordna etter dato
- **pwd:**  
  skriv stien til den katalogen du står i no
- **rev:**  
  reverser linene ('far' blir 'raf')
- **rm (rm filnamn):**  
  slett fila filnamn
- **rmdir (rmdir katalognamn):**  
  slett katalogen katalognamn. Merk at katalogen må vere tom for at
  rmdir skal virke. Viss du vil slette ein full katalog kan du skrive
  **rm -f katalognamn**. Dette er ein skummel kommando, tenk deg om to
  gonger før du brukar han.
- **sort:**  
  sorter linene i ei fil alfabetisk
- **uniq:**  
  slå saman like liner som står etter kvarandre (uniq -c fortel kor
  mange eksemplar det var av kvar line)
- **wc (wc filnamn) (wc -l filnamn):**  
  wc = wordcount, som tel liner (-l) ord (-w) og teikn (-c) i fila
- **who:**  
  kven er logga på akkurat no
- **whoami:**  
  fortel kva brukarnamn du har, i tilfelle du har gløymt det.
