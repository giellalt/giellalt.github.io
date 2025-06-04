Recording text
==============


The recording must be done in a professional studio (native speaker + sound technician) (10 hours will take **a week**, the speaker needs rest)



### Finding voice talents and working with them

- Suitable voice talents: voice type, reading skills, dialect, majority language...
- Instructions to guide voice talents
- Scheduling the recordings

### Technical setup

#### Microphones & room acoustics

- Main: [DPA omnidirectional headset microphone](https://www.dpamicrophones.com/headset/flex-omnidirectional-headset-microphone)
- We used this to ensure the microphone is at the same distance from the mouth throughout recordings and thus captures less room acoustics, also because this microphone will not block the reader's sight like a large-diaphragm microphone in front of the reader. If an omnidirectional condenser mic is available, it is good to record with these 2 microphones at once. Dynamic microphones such as Shure SM7B are not optimal, they are not sensitive enough and one needs to use a lot of mic gain -> leads to more noise as well.
- Backup/spare: Zoom H2n (standalone), AKG C414 omnidirectional condensator

- Room acoustics – we always try to minimize noise sources like grounding noise, lamps, air conditioning etc. We have also tried to avoid echo by acoustic material, curtains, anything that prevents room reverb.

#### Sound card, sampling rate & DAW

- smj female: RME Fireface
- sme female: Focurite Scarlett
- smj male: unknown at NRK Bodø

- Minimal quality/sampling rate 44.1 KHz, with 16-bit (CD-quality). Higher quality is also OK.

- The digital audio workstation we have used has been mainly [Audacity](https://www.audacityteam.org/), but any software with possiblity to monitor the quality and level of the recordings is good

#### Soundfiles and backups

- After each session the recordings were backed up to an external hard drive and to a private UiT OneDrive folder. All sound files were named after the date/session, text genre and speaker.

### Building a manuscript/Preparing a TTS text corpus

- We mainly collected suitable texts from our [Freecorpus](https://raw.githubusercontent.com/giellalt/lang-smj/main/corp/freecorpus.txt) for both smj and sme
- Additionally, we have also used parts of texts in [Boundcorpus], these are texts without CC-BY lincence.
- Minimum amount of texts should be corresponding to approx. 10 hours of speech; smj -- ~ 74 000 words, +12 h, depending on the speech rate
- We took texts from several genres: advertisements, bible, blogs, convention, curriculums, educational texts, facts, fiction, info, news, parliament, popular science, press release, speech etc. We tried to balance the word counts for each genre by doing corpus statistics [R SCRIPT], checking which genres have the least words and adding to these when possible
- Also "otherlang" texts were collected: english, norwegian/swedish to ensure good pronunciation of loan words
- After collecting the texts, they were once more checked, proofread and formatted fo reading aloud.
- Additionally we checked that the texts include all important grade alternation pattern and their coverage [SCRIPT: check_gradation/gradation_checker_progress_bar.py] and checked the trigram distribution: [SCRIPT: save_trigram_freqs_for_entire_corpus_nltk.py]
- Adjustments were made after looking at the statistics: if some grade alternation patterns were missing, we added at least 3 more instances of that pattern.

#### Text prompting

- When the texts were ready, we developed a text prompter/logger script in Praat program for comfortable and effective reading. The prompter [SCRIPT: Praat_Prompter/smj_text_prompt_6.praat] reads raw .txt files and shows one paragraph at the time. The reader/voice talent controls the pace by pressing arrow keys to move forward or to repeat some text parts. The script logs timestamps for each paragraph so that it is easy to check the order of the texts in the post-processing stage.

### Post-processing of recordings

- The processing of the recordings is done in the following steps:

1. Find the correct texts that were read aloud; use the Praat prompter log file if needed
2. Make sure the .wavs and the corresponding .txt are named identically
3. Next, the first round of cleaning is done by cutting long pauses, noise parts without speech and sounds of moving, clearing the throat, coughing etc.
4. If the long sound files are very long, over an hour, it is a good idea to split them to 2-3 shorter parts for easier processing
5. Then, we look at audio processing procedures:
  - echo removal (if needed, done with Cubase for our male smj voice)
  - high pass filtering in Audacity; Frequency 40Hz and Roll-off 24 dB
  - noise gate or noise reduction (note that noise gate is advised only in extreme cases of noise). In noise reduction: select a part from the audio signal WITHOUT any speech, then go to Noise reduction and click on "Get noise profile". Then, select the whole audio track for Step 2 and use these parametres, for example: Noise reduction 10 dB, Sensitivity 10 dB and Frequency smoothing (bands): 3.

All of these CAN be done with an AI-based "resynthesis" tool called Resemble-Enhance which is available in [GitHub](https://github.com/resemble-ai/resemble-enhance). This does echo and noise removal very well and even for very bad quality material. The consequences of this to the synthesis output is, however, still not well-known. Using Resemble-enhance can require a computing cluster, because it needs effective computing power. We used our Sigma2 computing cluster for this.
6. After cleaning the audio, it is time to level-normalize (make all sound files in the corpus to be at the same volume level) it by using sox, for example. [sox](https://pypi.org/project/sox/) & [STL](https://github.com/openitu/STL) are open-source tools. Usage:
     - copy the [SCRIPT: norm_file_noconv.sh] to the folder where you have your target files, open a Terminal and cd to that folder with the script and the target files. Make a separate /output subfolder
     - remember to export path before running the command: export PATH=$PATH:/home/user/STL/bin
     - run this command (example; fill with your own folder paths): `ls -1 /home/user/data/\*.wav | xargs -P 8 -I {} bash norm_file_noconv.sh {} /home/user/data/output`
