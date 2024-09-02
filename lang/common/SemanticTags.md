# Semantic tags

See also separate pages on [compounds](CompoundTags.html), [syntax](docu-sme-syntaxtags.html) and [dependency](docu-deptags.html) tags.

## Guidelines for semantic tagging of proper nouns

The tags used for proper nouns are the following:

- +Sem/Ani
- +Sem/Fem
- +Sem/Mal
- +Sem/Obj
- +Sem/Org
- +Sem/Plc
- +Sem/Sur

If the tag is _+Sem/Plc_, then _+Sem/Sur_ is added in the affixfile, except for Saami placenames

Other combination tags (_objplc, femsur, malfem, objplc, orgsur, malplc, surmal, femplc_) are lexical.

## Semantic tagging of other lemmas

### Format

Note the tag format when the same entry has more than one tag:

```
Sem/Tagname1
Sem/Tagname1_Tagname2
```

All combinations shall be listed in the file `root.lexc`.

In the cg3-files there will be sets:

```
Sem/Tagname1 = Sem/Tagname1 Sem/Tagname1_Tagname2
Sem/Tagname2 = Sem/Tagname1_Tagname2
```

Documentation on the tags forthcoming, we will make cg3 tag declaration automatic (forthcoming).
