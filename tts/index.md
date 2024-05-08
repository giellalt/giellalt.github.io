# Developing TTS

- [ESpeakNG](ESpeakNG.md)
- overview of [existing resources](../SpeechTechnologyResources.md)

# Recording

## Technical setup

### Microphones & room acoustics

- Main: [DPA omnidirectional headset microphone](https://www.dpamicrophones.com/headset/flex-omnidirectional-headset-microphone)
- We used this to ensure the microphone is at the same distance from the mouth throughout recordings and thus captures less room acoustics, also because this microphone will not block the reader's sight like a large-diaphragm microphone in front of the reader
- Backup/spare: Zoom H2n (standalone), AKG C414 omnidirectional condensator

- Room acoustics – we always try to minimize noise sources like grounding noise, lamps, air conditioning etc. We have also tried to avoid echo by acoustic material, curtains, anything that prevents room reverb.

### Sound card, sampling rate & DAW

- smj female: RME Fireface
- sme female: Focurite Scarlett
- smj male: unknown at NRK Bodø

- Minimal quality/sampling rate 44.1 KHz, with 16-bit (CD-quality)

- The digital audio workstation we have used has been mainly [Audacity](https://www.audacityteam.org/), but any software with possiblity to monitor the quality and level of the recordings is good

### Soundfiles and backups

- After each session the recordings were backed up to an external hard drive and to a private UiT OneDrive folder. All sound files were named after the date/session, text genre and speaker.

## Building a manuscript/Preparing a TTS text corpus

- We mainly collected suitable texts from our [Freecorpus](https://raw.githubusercontent.com/giellalt/lang-smj/main/corp/freecorpus.txt) for both smj and sme
- Additionally, we have also used parts of texts in [Boundcorpus], these are texts without CC-BY lincence.
- Minimum amount of texts should be corresponding to approx. 10 hours of speech; smj -- ~ 74 000 words, +12 h, depending on the speech rate
- We took texts from several genres: advertisements, bible, blogs, convention, curriculums, educational texts, facts, fiction, info, news, parliament, popular science, press release, speech etc. We tried to balance the word counts for each genre by doing corpus statistics [R SCRIPT], checking which genres have the least words and adding to these when possible
- Also "otherlang" texts were collected: english, norwegian/swedish to ensure good pronunciation of loan words
- After collecting the texts, they were once more checked, proofread and formatted fo reading aloud.
- Additionally we checked that the texts include all important grade alternation pattern and their coverage [SCRIPT: check_gradation/gradation_checker_progress_bar.py] and checked the trigram distribution: [SCRIPT: save_trigram_freqs_for_entire_corpus_nltk.py]
- Adjustments were made after looking at the statistics: if some grade alternation patterns were missing, we added at least 3 more instances of that pattern.

### Text prompting 

- When the texts were ready, we developed a text prompter/logger script in Praat program for comfortable and effective reading. The prompter [SCRIPT: save_trigram_freqs_for_entire_corpus_nltk.py] reads raw .txt files and shows one paragraph at the time. The reader/voice talent controls the pace by pressing arrow keys to move forward or to repeat some text parts. The script logs timestamps for each paragraph so that it is easy to check the order of the texts in the post-processing stage.

## Post-processing of recordings

## Transcribing the recordings 

## Final speech corpus with sound files and corresponding text transcripts 

# Text processing / normalisation

Using rule-based technologies (Sjur writes this)

- normalising acronyms and abbreviations
- normalising digits of various kinds
- exceptional pronunciation
- do you need fonemic / non-orthographic text?

# Building a voice

- code
- GPU
- ...

# Combining parts

- combining a voice with text normalisation tools
- how to run

# CI/CD & package distribution

- mac
- win
- Android
- iOS
- Linux
