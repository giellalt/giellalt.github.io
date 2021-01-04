#!/bin/bash
if test $# != 1 ; then
    echo Usage: $0 TECHDOCDIR
    exit 1
fi
ghpages=$(pwd)
pushd $1
for f in $(find . -name '*.jspwiki') ; do
    gawk -f $GTCORE/scripts/jspwiki2md.awk < $f > $ghpages/${f%.jspwiki}.md
done
