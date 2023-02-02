# Documentation for *gut*

GiellaLT contains over 200 repositories. If you want to check out many (or all) of them, you may need a program to handle operations to several repositories at the same time. for this, we have made a program called *gut*.

- Gut should be installed as follows: First you install *rust*, then *gut*.
- Rust can be installed following [this instruction](https://www.rust-lang.org/learn/get-started).
  If you have an old dysfunctional rust, as happened to this writer, do: `sudo port uninstall rust`,
  then go on and install rust as shown in the link above.
- Then open a new shell, or do `. .profile` to tell your computer that you have rust.
- Then install gut from [github.com/divvun/gut](https://github.com/divvun/gut).
  In a suitable folder, e.g. the `lang` folder, do (and note the final dot at the last command):

```sh
git clone https://github.com/divvun/gut.git
cd gut
cargo install --path .
```

Thereafter you need to set up gut:

```
sh gut init
# NOTE: more documentation to come!
```

While waiting: In order to use *gut*, have a lok at [the gut usage page](https://github.com/divvun/gut/blob/main/USAGE.md).
