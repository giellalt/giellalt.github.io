# Speller servers

Two speller server instances run on the [divvun.no](http://divvun.no/) server,
one for saami languages, the other one for non-saami languages.


A web editor with the saami spellers is found at [http://divvun.no:3000],
and also at [divvun.no](http://divvun.no/korrektur/speller-demo.html)


A web editor with the non-saami spellers is found at [http://divvun.no:3001],
and also at [divvun.org](http://divvun.org/proofing/online-speller.html)


The speller servers runs on the [divvun.no](http://divvun.no/) server. The saami
one is run from the account `spellerserver`, the non-saami one is run from
the account `morespellerservers`. Both have
[screen](https://www.gnu.org/software/screen/) instances running.


The code for the server is found at
[github](https://github.com/divvun/ck-ospell).


# Log in, attach to screen, exit screen


- Log in to the account.
- Attach to the `screen` instance: `screen -RD`
- Use nvm: `nvm use stable`
- Do whatever work is needed.
- When done, exit `screen` by pressing `Ctrl-a, Shift-d, Shift-d`


# How ck-ospell was installed


- `git clone https://github.com/divvun/ck-ospell.git`
- `cd ck-ospell`
- `git submodule init`
- `git submodule update`
- Alternatively, change port from 3000 to something else in server.js
- `CXX=clang++-mp-3.4 npm install`


# Run server


```
npm start
```




# How to update a speller


- Log in to the account, attach to `screen` by screen -RD
- Go to the screen where the server is not running `ctrl a SPACE`
- check the age of the relevant language
- copy from your local machine a newer speller: \\
   `scp tools/spellcheckers/fstbased/desktop/hfst/smn.zhfst  morespellerservers@divvun.no:ck-ospell/etc/`
- check it got the new date
- go the screen where the server is running `ctrl a SPACE`
- Stop the server `ctrl c`
- Start the server with `npm start`
- exit `ctrl a SHIFT D shift D`




# How to install a new language


- Log in to the account, attach to `screen`
- `Ctrl-c` (stop the speller server)
- Copy a .zhfst file to the etc directory, e.g. `curl -o etc/<newlanguage>.zhfst http://divvun.no/static_files/zhfsts/<newlanguage>.zhfst`
- `npm start`


# Update ck-ospell


- Log in to the account, attach to `screen`
- `Ctrl-c` (stop the speller server)
- `git pull`
- `npm install`
- `npm start`




# Depending on particular branches/commits


ck-ospells dependencies are specified in package.json. More info can be found in
[package.json/npm documentation](https://docs.npmjs.com/files/package.json-git-urls-as-dependencies).


## Depending on a particular commit


```
    "hfst-ospell-js": "git://github.com/divvun/hfst-ospell-js-c311421b3c9a79bcb5decd482b131dd5883564fb",
```


[Example commit on github](https://github.com/divvun/ck-ospell/commit/062082229d86d7ca0b0878604f764461d0e7428e)


## Depending on a particular branch


```
    "hfst-ospell-js": "git://github.com/divvun/hfst-ospell-js-alphabet-hack",
```


[Example commit on github](https://github.com/divvun/ck-ospell/commit/1b7ec150fa8fce3c286cc5788c8d3e26e39dd4b6)
