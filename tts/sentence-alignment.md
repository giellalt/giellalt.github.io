
Splitting and aligning recording and text
=========================================

In this phase, we split the recordings and text transcripts to approx. sentence-long individual files.

Generally, all TTS frameworks require the training data to be in certain form. This is sentence-long `.wav` and `.txt` pairs. The files should not vary too much in length, but there should be both shorter and longer sentences/utterances.

Before splitting the files, make sure .wav and .txt long file pairs are identically named. To make the splitting easier and faster, we have used [WebMAUS Pipeline Without ASR](https://clarin.phonetik.uni-muenchen.de/BASWebServices/interface/Pipeline) to automatically find and annotate segments, words and importantly, the sentence boundaries from the long audios. 

Some tips for using WebMAUS:

- Audio files over 200 MB/30mins in size should be split in smaller chunks first or the aligner won't work/will work very slowly
- A TIP for very long audio files: [use Pipeline without ASR](https://clarin.phonetik.uni-muenchen.de/BASWebServices/interface/Pipeline) with G2P -> Chunker -> MAUS options
-  There is no Sámi model available in WebMAUS, but the Finnish model works for Sámi – note that numbers etc. would be normalized in Finnish if any in the text input so make sure numbers are normalized before using WebMAUS!
- First, you need to upload identically named `.txt` and `.wav` pairs.
- To retain original punctuation, choose this Pipeline name: `G2P->MAUS->SUBTITLE!`
- WebMAUS automatically outputs a Praat `.TextGrid` annotation file with 4 annotation layers and boundaries on phoneme and word levels/tiers, additionally a tier named "TRN" that contains the original sentences with original punctuation retained!

The resulting sentence tier is manually checked and fixed in Praat. The sentences boundaries might be slightly wrong as in "too tight", some speech might be left out from the interval. The boundaries will be adjusted so that the sentence in its entirety sounds natural and not too rushed. Boundary mistakes (e.g. the first or the last word interval is in the wrong place) made by the machine are obviously corrected manually.

Next, a python splitter script is ran for the whole material in the folder 

	[SCRIPT: split_sound_by_labeled_intervals_from_tgs_in_a_folder.py] 

The script will save each labeled interval (defined in the script) into indexed short `.wav` and `.txt` files into an output folder.

Then, the filenames of the short audio files and the transcripts are saved into one table file using a python script: 

	[SCRIPT: extract_filenames.py]

Fill in the correct paths carefully!

Remember to check the texts and punctuation/commas once more! You can also add commas to the transcriptions in the table whenever the reader makes a (breathing) pause in the speech. This is important in lists especially. Without this check, the prosody will not be natural in our current method.
