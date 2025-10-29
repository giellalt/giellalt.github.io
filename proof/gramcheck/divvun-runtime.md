The test tool *divvun-runtime*
==============================

The tool itself is documented at
[divvun.github.io/divvun-runtime](https://divvun.github.io/divvun-runtime]. This
document shows how linguists should use it for grammar checker
testing. It comes in two versions, we look at them one at a time,
after having given some practical advice on how to get it.

How to get divvun-runtime
=========================

- Go to [the divvun-runtime page on
  git](https://github.com/divvun/divvun-runtime)
- Look for the column to the right on that page, the second section is
  called **Releases**. Click on *Latest*. For mac, download the two
  first ones (*-apple-*), open them, put the *-playground-* one in
  your `/Application` folder and the other one (*divvun-runtime*) in
  some folder in your path (`echo $PATH | tr ":" "\n"` if you don't
  know). For linux (and linux on Windows),
  download the third file.
- [If you rather want to build it
  yourself](https://divvun.github.io/divvun-runtime/installation)
  (advice: Leave this to the developers)


The two versions of *divvun-runtime*
====================================

## 1. The graphical version *Divvun Runtime Playground* 

- Make sure you have compiled the grammarchecker, and have a file
  `bundle.drb` in the `tools/grammarchecker` catalogue
- Open *Divvun Runtime Playground*
- Click on `Open Bundle` in the upper right corner
- Choose the `bundle.drb` file and open it
- Add a sentence in the lower left corner and press `Run` to see the
  correction and feedback. Each step
  of the analysis process may be expanded and inspected.
- To check whether the error messages are working, click the `Fluent
  tester` tab. If there are now red warnings, everything is ok


## 2. The command line program *divvun-runtime*


The program may be treated as any command line program:

```
which divvun-runtime
divvun-runtime -V
divvun-runtime -h
man divvun-runtime sync --help
... etc
```

You may use divvun-runtime in a pipeline standing in `grammarchecker`
(example from lang-nob):

`echo "Vi prøver og kjøre." | divvun-runtime run`

It may also be used interactively:

```
divvun-runtime
Vi prøver og kjøre.
```

This latter option will give all 13 steps in the grammarchecker
process.



