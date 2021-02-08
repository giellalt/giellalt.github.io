#!/bin/bash
if test $# != 1 ; then
    echo Usage: $0 TECHDOCDIR
    exit 1
fi
ghpages=$(pwd)
pushd $1
for f in $(find . -name '*.md') ; do
    cp -v $f $ghpages/${f}
done
for f in $(find . -name '*.xml') ; do
    cp -v $f $ghpages/${f}
done
