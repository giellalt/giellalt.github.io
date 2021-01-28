Many documents are parallel with the parallel content in the same file.
Other documents are simply placed in the wrong catalogues. Algorithm
to fix this:


# For each file, count the number of words
# For each file, count the number of words marked with the language of
  the catalogue
# Estimate the ratio
# Pick the files with a bad ratio, and investigate them. Split and reallocate.
