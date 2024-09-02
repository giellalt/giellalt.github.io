# Developing TTS

- [ESpeakNG](ESpeakNG.md)
- overview of [existing resources](../SpeechTechnologyResources.md)

# Recording

## Finding voice talents and working with them

- Suitable voice talents: voice type, reading skills, dialect, majority language...
- Instructions to guide voice talents
- Scheduling the recordings

## Technical setup

### Microphones & room acoustics

- Main: [DPA omnidirectional headset microphone](https://www.dpamicrophones.com/headset/flex-omnidirectional-headset-microphone)
- We used this to ensure the microphone is at the same distance from the mouth throughout recordings and thus captures less room acoustics, also because this microphone will not block the reader's sight like a large-diaphragm microphone in front of the reader. If an omnidirectional condenser mic is available, it is good to record with these 2 microphones at once. Dynamic microphones such as Shure SM7B are not optimal, they are not sensitive enough and one needs to use a lot of mic gain -> leads to more noise as well.
- Backup/spare: Zoom H2n (standalone), AKG C414 omnidirectional condensator

- Room acoustics – we always try to minimize noise sources like grounding noise, lamps, air conditioning etc. We have also tried to avoid echo by acoustic material, curtains, anything that prevents room reverb.

### Sound card, sampling rate & DAW

- smj female: RME Fireface
- sme female: Focurite Scarlett
- smj male: unknown at NRK Bodø

- Minimal quality/sampling rate 44.1 KHz, with 16-bit (CD-quality). Higher quality is also OK.

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

- When the texts were ready, we developed a text prompter/logger script in Praat program for comfortable and effective reading. The prompter [SCRIPT: Praat_Prompter/smj_text_prompt_6.praat] reads raw .txt files and shows one paragraph at the time. The reader/voice talent controls the pace by pressing arrow keys to move forward or to repeat some text parts. The script logs timestamps for each paragraph so that it is easy to check the order of the texts in the post-processing stage.

## Post-processing of recordings

- The processing of the recordings is done in the following steps:

- 1. Find the correct texts that were read aloud; use the Praat prompter log file if needed
- 2. Make sure the .wavs and the corresponding .txt are named identically
- 3. Next, the first round of cleaning is done by cutting long pauses, noise parts without speech and sounds of moving, clearing the throat, coughing etc.
- 4. If the long sound files are very long, over an hour, it is a good idea to split them to 2-3 shorter parts for easier processing
- 5. Then, we look at audio processing procedures:
  - echo removal (if needed, done with Cubase for our male smj voice)
  - high pass filtering in Audacity; Frequency 40Hz and Roll-off 24 dB
  - noise gate or noise reduction (note that noise gate is advised only in extreme cases of noise). In noise reduction: select a part from the audio signal WITHOUT any speech, then go to Noise reduction and click on "Get noise profile". Then, select the whole audio track for Step 2 and use these parametres, for example: Noise reduction 10 dB, Sensitivity 10 dB and Frequency smoothing (bands): 3.

All of these CAN be done with an AI-based "resynthesis" tool called Resemble-Enhance which is available in [GitHub](https://github.com/resemble-ai/resemble-enhance). This does echo and noise removal very well and even for very bad quality material. The consequences of this to the synthesis output is, however, still not well-known. Using Resemble-enhance can require a computing cluster, because it needs effective computing power. We used our Sigma2 computing cluster for this.

- 6. After cleaning the audio, it is time to level-normalize (make all sound files in the corpus to be at the same volume level) it by using sox, for example. [sox](https://pypi.org/project/sox/) & [STL](https://github.com/openitu/STL) are open-source tools. Usage:
     - copy the [SCRIPT: norm_file_noconv.sh] to the folder where you have your target files, open a Terminal and cd to that folder with the script and the target files. Make a separate /output subfolder
     - remember to export path before running the command: export PATH=$PATH:/home/user/STL/bin
     - run this command (example; fill with your own folder paths): ls -1 /home/user/data/\*.wav | xargs -P 8 -I {} bash norm_file_noconv.sh {} /home/user/data/output

## Transcribing the recordings

- The read texts will be then edited to match the audio as accurately as possible. Also light mistakes, corrections, repetitions are kept and written out in the text transcript.
- It is very important to write out the numbers, abbreviations, acronyms and any pronunciation of special characters (like @, /, - etc.). People tend to read these unsystematically and the actual pronunciation of these may vary.
- Often, another round of audio cleaning will be also done at this point to remove all remaining coughs, mistakes that weren't noticed before.

## Creating the final speech corpus with sound files and corresponding text transcripts

### Splitting the recordings and text transcripts to approx. sentence-long individual files

- Generally, all TTS frameworks require the training data to be in certain form. This is sentence-long .wav and .txt pairs. The files should not vary too much in length, but there should be both shorter and longer sentences/utterances.
- Before splitting the files, make sure .wav and .txt long file pairs are identically named
- To make the splitting easier and faster, we have used [WebMAUS basic force-aligner](https://clarin.phonetik.uni-muenchen.de/BASWebServices/interface/WebMAUSBasic) to automatically find and annotate segments and words from the long audios. These annotations are going to be used to then find correct sentence boundaries. Some tips for using WebMAUS:
  - Audio files over 200 MB/30mins in size should be split in smaller chunks first or the aligner won't work
  - A TIP for very long audio files: [use Pipeline without ASR](https://clarin.phonetik.uni-muenchen.de/BASWebServices/interface/Pipeline) with G2P -> Chunker -> MAUS options
  - There is no Sámi model available in WebMAUS, but the Finnish model works for Sámi – note that numbers etc. would be normalized in Finnish if any in the text input so make sure numbers are normalized before using WebMAUS!
  - NOTE that WebMAUS removes commas from the original texts – these need to be readded, and it is possible to do it automatically using the original fixed text as the input: [Python script: add_commas_from_original_txt_file_fuzzy.py]
  - WebMAUS automatically outputs a Praat .TextGrid annotation file with 4 annotation layers and boundaries on phoneme and word levels/tiers
- After using WebMAUS the word boundary tier is converted to SENTENCE level boundaries based on silence duration between the sentences. It might require some fine-tuning of the duration variable to find a suitable treshold to each speaker/speech rate [SCRIPT: scripts/concatenate_webmaus_word_tier.py]. The resulting sentence tier is manually checked and fixed in Praat. The sentences boundaries might be slightly wrong as in "too tight", some speech might be left out from the interval. The boundaries will be adjusted so that the sentence in its entirety sounds natural and not too rushed. Boundary mistakes (e.g. the first or the last word interval is in the wrong place) made by the machine are obviously corrected manually.
- Next, a python splitter script is ran for the whole material in the folder [SCRIPT: split_sound_by_labeled_intervals_from_tgs_in_a_folder.py]. The script will save each labeled interval (defined in the script) into indexed short .wav and .txt files into an output folder.
- Then, the filenames of the short audio files and the transcripts are saved into one table file using a python script: [SCRIPT: scripts/extract_filenames.py]. Fill in the correct paths carefully!
  - Remember to check the commas once more! You can also add commas to the transcriptions in the table whenever the reader makes a (breathing) pause in the speech. This is important in lists especially. Without this check, the prosody will not be natural.

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
