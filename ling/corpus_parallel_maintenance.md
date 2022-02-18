Maintenance of parallel corpus
==============
Many documents are parallel with the parallel content in the same file.
Other documents are simply placed in the wrong catalogues. Algorithm
to fix this:


1. For each file, count the number of words
1. For each file, count the number of words marked with the language of
  the catalogue
1. Estimate the ratio
1. Pick the files with a bad ratio, and investigate them. Split and reallocate.
