# Text-to-Speech

eSpeak NG Text-to-Speech is a formant-synthesis text-to-speech engine.
It does give a robotic voice, but is relatively fast and simple to get
going. It may thus be an interesting alternative, at least in initial
trials.

#  Source

<https://github.com/espeak-ng/espeak-ng>

#  Installation

When building `espeak-ng` using macports libs, configure as follows:

```
./configure LDFLAGS=" -L/opt/local/lib"
```

The rest as documented.

I have not yet tested `make install`, which may require additional
adjustments.
