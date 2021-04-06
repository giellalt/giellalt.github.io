# Example Of File Sizes With Optimisations

Tested on Finnish, Greenlandic and North Sámi, all with large, full coverage lexicons. The testing was done in August of 2014.

## No lexical minimisation (no hyperminimisation):

**Finnish**
```
$ ls -l fin/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 xxx123  12345    46M 21 aug 22:14 acceptor.default.hfst
[...]
-rw-r--r--+ 1 xxx123  12345   8,7M 21 aug 22:14 errmodel.default.hfst
-rw-r--r--+ 1 xxx123  12345   9,5M 21 aug 22:15 fi.zhfst
-rw-r--r--+ 1 xxx123  12345   8,9M 21 aug 22:15 fi_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 xxx123  12345    12M 21 aug 22:15 fi_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 xxx123  12345   8,9M 21 aug 22:15 fi_LO-voikko-4.1-32b-mac.oxt
-rw-r--r--+ 1 xxx123  12345    17M 21 aug 22:13 generator-fstspeller-gt-norm.hfst
[...]
```

**Greenlandic**
```
$ ls -l kal/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568   284M 12 aug 08:08 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   8,3M 12 aug 08:09 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568   183M 12 aug 08:04 generator-fstspeller-gt-norm.hfst
-rw-r--r--+ 1 smo036  1907360568    50M 12 aug 08:09 kl.zhfst
-rw-r--r--+ 1 smo036  1907360568    41M 14 aug 09:22 kl_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568    44M 14 aug 09:22 kl_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568    41M 14 aug 09:22 kl_LO-voikko-4.1-32b-mac.oxt
```

**North Sámi**
```
$ ls -ll sme/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568    25M 12 aug 08:29 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   7,2M 12 aug 08:29 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568    14M 12 aug 08:28 generator-fstspeller-gt-norm.hfst
-rw-r--r--+ 1 smo036  1907360568   6,3M 12 aug 08:29 se.zhfst
-rw-r--r--+ 1 smo036  1907360568   6,2M 14 aug 09:23 se_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568   9,4M 14 aug 09:23 se_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568   6,2M 14 aug 09:23 se_LO-voikko-4.1-32b-mac.oxt
```

## Using only hfst-lexc hyperminimisation:

**Finnish**
```
$ ls -l fin/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568    21M 22 aug 09:57 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   8,7M 22 aug 09:57 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568   6,7M 22 aug 09:57 fi.zhfst
-rw-r--r--+ 1 smo036  1907360568   6,4M 22 aug 09:57 fi_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568   9,6M 22 aug 09:58 fi_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568   6,4M 22 aug 09:57 fi_LO-voikko-4.1-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568    17M 22 aug 09:54 generator-fstspeller-gt-norm.hfst
[...]
```

**Greenlandic**
```
$ ls -l kal/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568    14M 22 aug 10:10 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   8,3M 22 aug 10:10 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568    15M 22 aug 10:09 generator-fstspeller-gt-norm.hfst
-rw-r--r--+ 1 smo036  1907360568   4,1M 22 aug 10:10 kl.zhfst
-rw-r--r--+ 1 smo036  1907360568   3,7M 22 aug 10:11 kl_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568   6,9M 22 aug 10:11 kl_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568   3,7M 22 aug 10:11 kl_LO-voikko-4.1-32b-mac.oxt
```

**North Sámi**
```
$ ls -l sme/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568    15M 22 aug 10:28 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   7,2M 22 aug 10:28 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568    12M 22 aug 10:26 generator-fstspeller-gt-norm.hfst
-rw-r--r--+ 1 smo036  1907360568   4,5M 22 aug 10:28 se.zhfst
-rw-r--r--+ 1 smo036  1907360568   4,4M 22 aug 10:28 se_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568   7,7M 22 aug 10:28 se_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568   4,4M 22 aug 10:28 se_LO-voikko-4.1-32b-mac.oxt
```

## Hyperminimisation + fst minimisation:

**Finnish**
```
$ ls -l fin/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568    21M 25 aug 16:46 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   8,8M 25 aug 16:47 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568   6,7M 25 aug 16:47 fi.zhfst
-rw-r--r--+ 1 smo036  1907360568   6,4M 25 aug 16:47 fi_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568   9,7M 25 aug 16:47 fi_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568   6,4M 25 aug 16:47 fi_LO-voikko-4.1-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568    17M 25 aug 16:39 generator-fstspeller-gt-norm.hfst
[...]
```

**Greenlandic**
```
$ ls -l kal/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568   6,3M 22 aug 18:12 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   8,3M 22 aug 18:12 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568    15M 22 aug 18:10 generator-fstspeller-gt-norm.hfst
-rw-r--r--+ 1 smo036  1907360568   2,9M 22 aug 18:12 kl.zhfst
-rw-r--r--+ 1 smo036  1907360568   2,7M 22 aug 18:12 kl_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568   6,0M 22 aug 18:12 kl_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568   2,7M 22 aug 18:12 kl_LO-voikko-4.1-32b-mac.oxt
```

**North Sámi**
```
$ ls -l sme/tools/spellcheckers/fstbased/hfst/
[...]
-rw-r--r--+ 1 smo036  1907360568    13M 22 aug 22:46 acceptor.default.hfst
[...]
-rw-r--r--+ 1 smo036  1907360568   7,2M 22 aug 22:46 errmodel.default.hfst
-rw-r--r--+ 1 smo036  1907360568    12M 22 aug 22:39 generator-fstspeller-gt-norm.hfst
-rw-r--r--+ 1 smo036  1907360568   4,3M 22 aug 22:46 se.zhfst
-rw-r--r--+ 1 smo036  1907360568   4,2M 22 aug 22:46 se_LO-voikko-3.6-32b-mac.oxt
-rw-r--r--+ 1 smo036  1907360568   7,5M 22 aug 22:46 se_LO-voikko-3.6-32b-win.oxt
-rw-r--r--+ 1 smo036  1907360568   4,2M 22 aug 22:46 se_LO-voikko-4.1-32b-mac.oxt
```
