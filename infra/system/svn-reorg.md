# SVN reorganisation


## Cause


We're not able to restrict access to the svn repository the way we want. We wanted to preserve the present folder structure, but restrict access to certain folders. That has turned out to be very hard.


## Solution properties


Any solution will have to isolate the folders to protect in one way or another. That is, we should move the content we want to protect to a protected area outside of the general area.


There are two types of content we need to protect:


* source code under NDA from third parties (example: some Polderland code)
* private plans and possibly unpublished articles


Two options as I see it:
* make a private folder at the root of the svn repo
* create a separate, private repository, and completely open up the present one


### Option 1
```
$SVNROOT/gt/
         xtdoc/
         private/ <== protected
         tts/somefolder <== unprotected
            /someotherfolder <== protected
         ...
```


`svn co https://gtsvn.uit.no/repos`
gives us all the open ones. To check out private parts we have to do
`svn co https://gtsvn.uit.no/repos/tts/someotherfolder`


### Option 2
```
$SVNROOTPRIVATE/plans
                polderland/
$SVNROOTPUBLIC/gt/
               tts/
```


`svn co https://gtsvn.uit.no/repos/public`
gives us the free ones.


`svn co https://gtsvn.uit.no/repos/private`
gives us:
```
plans
polderland
...
```




```
$SVNROOT/public/gt/
                xtdoc/
                st/
                ...
         /private/ <== protected
```


trond/gtsvn/public/ --> the world as we know it without the private
           /private/ --> the private, taken out of the public


an alisas for checking out both for the privileged class.


The former makes it possible to treat the whole thing as one unit
... with or without the forbidden files


The second opinion is, in a way safer. Less risk of malfunction
("oops, you got the whole lot")


```
$SVNROOT/scripts/ (here are the tools for the kal-gang and for the rest of us)
         langs/ara -> {dic, mt, fst, tts, ...}
               /bul
               /kal
               /kom
               /... --> lg
         ped/sma/
             sme/
             xxx/
         biggies
         ...
         private/
```


Pseudocode for a possible setup:
```
svn co .../repos/scripts/
cd scripts
./setup --folders=gt,tts,private, ...
```


Files relevant to all (script etc) aside, for all
big files aside 
 - then paths acc to type, and subpathsa acc to lg (possible to do only kal, but easy to do all lgs)
 - then paths acc to lang, and subpaths acc to type
private aside


two svn
ones svn with private a first-generaton mother and one sister
ones svn with private a first-generaton mother and many sisters
ones svn with private a first-generaton mother and two sisters: the default, and the big




first choole lg, then do all apps (more natural for linguists)
first choose app, the do all lgs (better struct for porting?)


(as 54, but without the public folder)


Subinterests as a grid:
acc to lg
acc to app/


procon analysis
pro a: 
uniform treatment for insiders and outsiders alike
con a:
vulnerable and difficult, conceptually complex
pro b:
clean, safe
con b:
two systems pro one (hassle for the insiders, that is)




$GTPUBLICHOME
$GTPRIVATEHOME


Use these to reference the path to each local copy.


```
1,4G    techdoc
402M    prooftools
354M    words
344M    tts
340M    gt
196M    st
156K    CVSROOT
134M    termdb
102M    mt
 89M    plan
 84M    xtdoc
 65M    ped
 22M    kt
 20M    kvensk
1,7M    sfst
1,3M    tca2


gt+st+kt = 560M + kvensk = 580M


techdoc/
932K    ling
924K    raw
856K    infra
264K    retteprog-plan.pdf
228K    system
136K    architecture.jpg
 48K    dicts
 44K    site-proof-frag.xml
 44K    mt
 32K    site-frag.xml
 24K    ped
 20M    admin
 14M    lang
 12K    index.xml
8,0K    antiword.man
4,0K    tabs-frag.xml
4,0K    howtos.xml
4,0K    header_draft.txt
4,0K    docu-cvs-sys.html
4,0K    corpus_tags_explained.txt
4,0K    corpus_tags.txt
2,7M    tools
1,4G    proof
1,3M    presentations


gt:
280 608k  sme
 23 260k  script
 21 780k  smj
  7 692k  sma
  3 448k  tmp
  2 788k  common
  1 776k  src
  1 448k  smn
    872k  sms
    748k  oarjjelsamien.txt
    552k  smi
    424k  sjd
    388k  moses
    272k  sje
    188k  cwb
    180k  mk-files
    128k  dtd
    108k  Makefile
     52k  Dan-le-danna-infonuorra.correct.doc
     24k  www
     24k  20061130_NSR_bypolitisk_plan_samisk.pdf.xml
     20k  LISENS.txt
     16k  Dan-le-danna-infonuorra.correct.doc.xml
     12k  Markansluska.correct.doc.xml
      4k  userdict
      4k  openkjeldekodekunngjering.txt
      4k  downloadwinlex.sh
      4k  copymaclex.sh


sme:
113 468k  bin
 87 484k  corp
 45 196k  hunspell
 15 040k  src
  9 572k  polderland
  7 708k  int
    628k  tag-stat-temp.txt
    576k  aspell
    468k  art
    316k  testing
     88k  res
     28k  dev
```


Conclusion: we want the following three separate modules:
* biggies (subdivided - tts recordings, test reports, working corpus files, etc)
* private
* the rest (which should be of reasonable size without the biggies)


Two questions left:
* separate or shared repository => separatate
* languages or products first => both, but no lang resources in products


Concerns:
* we still need to protect older versions of the repo content, but without loosing the history of what remains.




tts
ped
proof
fst
mt


lang/ara
    /bul
    /fao
ped
tts
fst <--
...


ped: <========= kept as ped/ unless stated otherwise
17 040k   art  <========== to art/
13 816k   images
11 296k   userdoc
 9 188k   oahpa
 6 320k   sme <========== to lang/sme/ped
 5 720k   doc
 1 280k   nob
 1 212k   src
   608k   smj
   172k   sma
    60k   fin
    52k   adm
    48k   dtd


Ped-specific:
documentation
images


sme:
- lexicon -> could/should be shared
- syntactic rules (CG) - could be shared?


# Migration plan


**TODO:**
# inform all users about the upcoming change
# make a copy of the svn repo, work on another machine than gtsvn
# follow the instructions in the svn book, section
  [Filtering Repository History](http://svnbook.red-bean.com/en/1.5/svn.reposadmin.maint.html#svn.reposadmin.maint.filtering)
# when everything works ok, then:
# inform all users about the upcoming change - again!
# inform all users to commit local edits
# redo the split with all the latest commits
# test that it works
# inform users about how to check out and set up their infra


* who: **Ciprian** with the help of **Børre**
* when: the switch should be done before Easter, 8.4.2009
