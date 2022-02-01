# Proofing Tools Release Procedure

This document gives the general procedure to go through when releasing a new speller + hyphenator.

The starting point is a new speller/hyphenator lexicon with all known bugs fixed so that it can be released. The procedure is then the following (the procedure is meant to be general and valid for all proofing tools - PLX, Hfst, Hunspell - but some specific notes might be found in between):

1. download the newest speller files in $GTHOME/prooftools/:
    - all: `make lexicons`
    - PLX: `make mslex-download`
    - Hunspell: `make hunspell-lex-download`
    - Hfst: *not yet implemented*
1. build installers: `make` (Mac installers must be built on MacOSX 10.6.x)
1. upload installers: `make upload`
    - write down the date used for the upload - it is needed again later, if the
   uploaded files are becoming the official release
1. send out an e-mail with download links for people to test
1. check all user documentation, and update if necessary:
    - Mac - all Office versions (PLX only)
    - Win - all Office versions (PLX only)
    - Linux - all [[Libre](Open)Office versions (Hunspell only)
    - CD installation for all of the above (but who uses CD's nowadays...)
1. follow the [user documentation](http://divvun.no/), and test that the tools work as advertised
    - fix user documentation if the text is broken, fix the tools if they are
   broken
1. write a press release
1. update list of fixed bugs and new features
1. update list of known bugs
1. IFF no new bugs are found, and everything works as it should, THEN:
    - add download links to the old version, using the existing links to identify
   the correct version to link to (the link goes to the "other downloads" page)
    - update the download links: `make links DATE=(the date written down above)`
    - send out press release to:
        - sámi media
        - facebook group
        - e-mail list (see list in
    $GTPRIV/admin/e-mail-distro-lists/Divvun-GT-info.txt - you might want to
    update the list with people that have contacted us regarding bugs or update
    requests). **REMEMBER!!** Always use Bcc field for all recipients, send to
    feedback@divvun.no, Cc to divvun@hum.uit.no, reply to feedback@divvun.no.
