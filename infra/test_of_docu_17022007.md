# Test of the language technology documentation

This report is obsolete, and may be deleted

I have started to navigate through the documentation and look for
problems. My testing was done mainly in the period 05.02.2007 -
17.02.2007

## Front pages

### The Giellateknologiija project web-side

I started on this page to look for information about anonymous cvs. I
did not find anything and I did not get the impression that I needed to
search in another web site. I then had to ask the technician Børre who
told me that I had to go to the Divvun site (Sametinget) to find the
information. It would be a good thing if there were tips in the text on
the language technology front page that you can find useful tools via
the Divvun site and also in Risten. It is not enough to have just the
links, you should also be introduced and told how to navigate.

Another problem on this (university) side: After having chosen English
language, I could not go back to Saami language.

### The Divvun project web-side

I started to look for the tools for linguistics analysis on the front
page. The information that it is possible to try out the tools could be
more explicit. For instance, under the existing heading "Source code and
documentation" there could be added that you need the code in order to
get access to programs or tools. A tip should also be added in the text
on the front page that it is possibly to go to Risten and to the
(universitys) giellateknologiija sites and use the tools found there
(for instance the Sametinget protocols corpus). The point is that you
should be told on the front page where you, firstly, find the tools that
are ready to use and, secondly, where to find the CVS tools (that are
not that user friendly!). In other words there should be an introduction
on the first page.

## Checking out using anonymous cvs

At first I started the testes with the computer I use in my daily work
with the language technology project. This computer of course already
has got the tools and files installed. I managed to log in via anonymous
CVS on the computer and I managed to check out (copy the source and
documentation). The only problem with this was that there were a lot of
cvs checkout and updating amongst the file names. This may not be a
problem though.

I then started to work on my private computer (Macbook) and tried to do
the same thing here. This will be more realistic and the rest of the
testing were done on this private computer. The instruction on the
Divvun site told me how to log in to the cvs server. This went well.

## Installing transducer, perl etc

Then I went on to read the instructions on how to build, compile and run
linguistics analysis. The instruction on our web side "Anonymous CVS"
said (in chapter 4. "Building, compiling and running") that you need two
tools first: Xerox morphological transducer tools and vislcg. When I
went to the web site where the transducer should be, I had problems
finding the transducer under downloads there. I now had to ask a
technician ( Børre) to help. He told me that you have to buy a certain
book in order to get the transducer. This should of course be stressed
in the instructions. I have not tested more on how to install the
transducer, as our technician now has fixed it for me. The download for
VISL I did find and I downloaded it. There was however one difficulty.
The instruction in our Divvun page said that I had to compile (the
vislcg) myself, using a GCC 2.9x compiler (or update the source code to
compile with newer versions of GCC:-). I did not however find more
instructions on how to precede with this, and I am not sure if the
vislcg works after my instalment.

## Where is the corpus and where do you find out where to start

I now wanted to download the corpus and use the disambiguator. But I was
not sure where I could find the instructions for this. It should maybe
have been under the info about anonymous cvs? I had problems finding it.
I am not sure if there even exist instructions, but if so, then there
should be added a link to them. At least I found a link to basic user
documentation, which led me to "How to use the CG-2 parser vislcg". When
I went there I discovered there a link called "Tools" that contains
amongst other things "lookup" and "how to analyze". Maybe this was the
disambiguator? I was not sure whether any of these links contains info
on how to download the corpus. I went back to CVS site and now
discovered a link to "technical documentation". Maybe I now had found
all the links I needed? It would however be nice if the front page or
the "anonymous csv" page could have a short text about where and what
sort of corpus there is and where the links to the tools are and in what
order one could look at the links. THE PROBLEM IS THAT THERE ARE SO MANY
LINKS THAT YOU DON'T KNOW WHERE TO START. I have now looked at the
instruction in all the relevant links, but I have not found anything on
how to get started when you have an anonymous cvs. I later learned that
one probably can start on the page "How to use the Saami parsers" There
seems to be no information about restricted and open corpus. There needs
to be a short introduction on how to get started with the corpus. This
information should certainly be on the page "Anonymous CVS" under
chapter 4 "Building, compiling and running". In this chapter should also
be a suggestion where to start, for instance there could be a link to
"How to use the morphological parser." PS: the word "corpus" is indeed
mentioned under the side "How to use the Saami morphological parsers",
but it is not explained what it is.

While waiting for the needed update in the instructions I guessed that a
good place to start would be the side "How to use the Saami
morphological parsers". I found out that this at least can do
morphological analyses. The instructions told me to log in, but this
seems to be somewhat misleading, as I already have used the anonymous
CVS the previous day. I have later heard that you log in only if you
want to work in the restricted part of Victorio. The instructions should
mention this, and also tell exactly how to log in (or contain links to
the page that explains this) I tried now without login in, and I managed
to update the files. The commands for compiling (in chapter 1 and 2.1)
were old but this problem has now been fixed, the documentation is
updated, but please look if chapter 1 is OK, when I last looked it still
said that you should write "make" in src, this is maybe wrong. My
compilation was however aborted because I lacked something called perl.
When I wanted to analyse one word at a time, I could not use
"sme/bin/sme.fst". The reason seems to be perl lacking. I could however
use "sme/bin/sme.save", but this opportunity was not mentioned in the
instructions as far as I know. I now had a serious problem. The
technicians had to install perl and Develop tools before I could go on.
I have so far tried only the Northern lookup. I also tested 2.2.
"generating words" and 2.3."Analysing more than one word at a time".
Under this last heading is even Victorio mentioned, but nothing about
what it is and how to get there. I then I went on to chapter 3.
"Analysing files." (Under the side "how to use the morphological
parser".) This is maybe the open corpus? The instructions told me to
give a filename, so I guessed that I could analyse one of my own
documents. The information about this opportunity and the instructions
are lacking. The instruction must tell how to put usual documents in. I
tried, but I did not know that it had to be a txt-document. Trond
Trosterud had to help me. The instructions must also contain information
about the open corpus and how to get password to the closed corpus. I
have now heard from informed peoples that the main corpus is in
Victorio. The instructions should certainly have a link to it.

When I continued using "How to use the Saami morphological parser" the
next day, I found out that I this time would try to check out only
existing files. Without first logging in I wrote only "cvs up". The
machine then asked for my victorio-password. This is not mentioned
neither under the side "Anonymous CVS" nor under "How to use the Saami
morphological parser". The reason is probably that I confused the info
about password and the info about anonymous CVS.

    Connection closed by 129.242.4.42
    cvs [update aborted]: end of file from server (consult above messages if any)

I did not understand this message. I tried again and this time it
worked.

The instruction under "Setting up the environment" then told me to
change to gt/sme/src and then write "make". This did not seem to work,
and this may still be old instruction (the last time I checked). The
result was:

    Type 'quit' to exit.
    Starting in utf8-mode.
    twolc> read-grammar twol-sme.txt
    opening "twol-sme.txt"
    reading from "twol-sme.txt"...
    parse error at 'changequote'
    Bye!
    make: *** No rule to make target `closed-sme-lex.txt', needed by `../bin/sme.save'.  Stop.

I then went to "Analysing one word at a time" where you are told to be
in gt to do compiling. This worked fine as it did the previous day.

I now went on to "Analysing files" (as I did not manage this the
previous day).I now managed to analyse my own documents as well as the
main corpus in Victorio. Here should however be a link to Trond
Trosteruds course "Unix for lingvistar" where you find more useful
commands for analysis.

However when I tried to use the corpus as anonymous CVS and wrote (when
in gt):
`ccat -1 sme -r zcorp/bound | preprocess --abbr=bin/abbr.txt | lookup -flags mbTT bin/sme.fst             | grep '+N+Pl'`

the message was:

ERROR in ‘LOOKUP’:
`Lexicon file 'bin/sme.fst' could not be found or opened`

    -bash: ccat: command not found
    Cant open the file: No such file or directory

I think I tried this in the wrong catalogue. When I tried the same in
sme, the message was:

    -bash: ccat: command not found

The instructions under both "Anonymous CVS" and "How to use the Saami
morphological parsers" must tell if there are restrictions.

## The interactive programs and texts on internet

I have also tested these (in Saami giellateknologiija page) and reported
to Trond Trosterud.

## Conclusions and final comments

I have tested what I believe is most important if you want to do
analysis, namely the front pages in Divvun and the disambiguating
projects, the pages "Anonymous CVS" and " How to use the Saami
morphological parsers". I have also tested the interactive programs and
text on Saami giellateknologiija page. The test was mainly done in the
period 05.02.2007 - 17.02.2007. Some of the problems have already been
fixed.

As mentioned I saw a problem on the front pages, namely that a short
introduction on how to navigate was lacking. You also should be pointed
to the interactive tools on the Internet that everyone can use, as well
as to the CVS opportunity. The point is that you should be told about
both, so you don't risk that you start working with only CVS without
knowing about the other tools, and vice versa. It should also be more
explicitly said why you need a source code.

The instalment of the transducer and the VISL was not easy for me. If
you want the transducer you have to buy a certain book. I also had a
problem with something called perl. This was lacking, and I could not do
any analyses before the technicians installed this and the develop
tools. These things are crucial. Maybe the reason for my problems with
perl was that I had not installed or compiled the VISL properly??

The information on how to find the corpus and where to start was not
good. The page "Anonymous CVS" should in chapter 4 (Building, compiling
and running) contain a link to the page "How to use the Saami
morphological parsers". This page last mentioned I believe is the best
starting point after having read "Anonymous CVS". The page "How to use
the Saami morphological parsers" did not mention how to get a password
and it lacked links or information about how to log in. You should be
told that some parts of the corpus are restricted. There should be short
explanations about the corpus. The explanations about how to use your
own files for analysis were not sufficient good. It would also be useful
if there under chapter 3 "Analysing files" was a link to Trond
Trosteruds linux-course, because the commands are very relevant here. I
discovered some old commands about compiling. This is now fixed, but
please look if chapter 1 (“setting up the environment ") is OK, when I
last looked it still said that you should write "make" in src, this is
maybe wrong. " The page "Anonymous CVS" did not tell you what to do if
you just want to update and then suddenly are asked for your
Victorio-password. Shall you then use the anonymous CVS again? This
error however I believe occurred because I confused the info about
password and the info about anonymous CVS. This page should also explain
shortly that you may want to get a password and how. There was no info
about how to apply for access.

I have not tested everything in the documentation but I have now managed
to use the most important tools in spite of the lack of instructions. I
have reported problems to Børre and I will follow this up and come back
with a second report later. I will also continue to try out some details
in the instructions and include comments about them in the next report.

17.02.2007  
Steinar Nilsen
