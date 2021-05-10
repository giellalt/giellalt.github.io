# Web-speller

This documents the first encounter with [hfst-ospell-js|https://github.com/killercup/hfst-ospell-js] and [ck-ospell](https://github.com/killercup/ck-ospell) as encountered by a nodejs/npm newbie.


## Install a current npm/nodejs


At first, installing hfst-ospell-js failed using the outdated (as it turned out) native nodejs/npm on Fedora 23. Fumbling around with the native nodejs/npm installation wasted quite some time.


[Info on getting nvm](http://www.liquidweb.com/kb/how-to-install-nvm-node-version-manager-on-fedora-23/)


[Info on getting current nodejs/npm ]( http://www.liquidweb.com/kb/how-to-install-node-js-on-fedora-23/)


Resulted in
```nvm install stable```


Or (summary version):
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
nvm ls-remote
nvm current
nvm install stable
```


### hfst-ospell-js


ck-ospell is built on this, so in retrospect installing this turned out to be an excercise in using npm …


```
git clone https://github.com/killercup/hfst-ospell-js.git
cd hfst-ospell-js/
git submodule update --init --recursive
npm install
mkdir etc
curl http://divvun.no/static_files/zhfsts/se.zhfst > etc/se.zhfst
npm test
```


### ck-ospell


```
cd ..
git clone https://github.com/killercup/ck-ospell.git
cd ck-ospell
npm install
mkdir etc
curl http://divvun.no/static_files/zhfsts/se.zhfst > "etc/sme_NO.zhfst"
curl http://divvun.no/static_files/zhfsts/smj.zhfst > "etc/smj_NO.zhfst"
curl http://divvun.no/static_files/zhfsts/sma.zhfst > "etc/sma_NO.zhfst"
npm start
```


After this, ck-ospell on http://localhost:3000 works as announced
