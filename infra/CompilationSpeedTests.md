# Compilation speed tests

Tested using `sma` - various configurations & compilation times for the
default set of fst's.


The tests were run quite some time ago (early 2017 or late 2016), but the
relative speed diffs should still be valid.


#  Xerox


```
./configure
time make -j


real	0m23.681s
user	0m53.518s
sys	0m3.117s
```


#  Foma


Using Hfst to compile twolc rules.


```
./configure --with-foma --without-xfst
time make -j


real	1m20.850s
user	2m40.157s
sys	0m8.248s
```


NB! This version fails massively in the tests (using `make check`), and can
not be used. This configuration is presently blocked (foma can only be used when
an `.xfscript` file is used for the morphophonology.


#  Hfst with Foma backend


```
./configure --with-hfst --with-backend-format=foma --without-xfst
time make -j


real	1m31.903s
user	3m20.402s
sys	0m11.716s
```


#  Hfst with Sfst backend


```
./configure --with-hfst --with-backend-format=sfst --without-xfst
time make -j


real	1m43.750s
user	3m45.265s
sys	0m10.695s
```


#  Hfst with OpenFst backend (default)


```
./configure --with-hfst --without-xfst
time make -j


real	3m30.414s
user	9m23.566s
sys	0m15.767s
```


Except for the plain **Foma** configurations, all configurations give the same
results when running `make check`. That is, the fastest **Hfst** compilation
we get is the one using Hfst with the Foma backend.


There are further optimisations that can be done when compiling with Hfst, but
the selection of backend is the most important one.
