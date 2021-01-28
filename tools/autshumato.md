

Autshumato is an open-source computer-aided translation program.
It works on any language pair, but requires a translation memory 
(a set of parallel sentences), as can be found below for Norwegian 
Bokmål - North Saami.


The purpose of Autsumato is to suggest phrases during the translation process, 
thereby making translation easier and more consistent.


# Documenting the Autshumato platform


* [The Autshumato page on SourceForge](http://autshumato.sourceforge.net/)


You may [download the last Authsumato version here](http://sourceforge.net/projects/autshumatoite/files/latest/download). 


Start the program by doubleclicking
the **Autshumato.jar** file. Help files are behind the **?** symbol to the right.


##  For the impatient: 


# Install translation memory
# Make a new translation project
# Import files into the translation project
# Translate
# Create the translated document
# Exit, import a new file into the translation project or start a new translation project


##  A bit more systematic introduction:


##  Translation memory


# Make a folder, name it **tm**.
# [Download our translation memory files](http://divvun.no/static_files/nob2sme-tmx.zip)
# Unpack this file inside the folder tm


##  Make a new translation project


# Go to Project->New
# A dialog appears, write the name of your translation project.
# Press Save
# The New Project dialog appears
# Specify Source and Target languages
# Specify the folder tm that you made in the above steps as the Translation Memory Folder
# Press **OK**


##  Import files into the translation project


# The Project Files dialog appears
# Press Import Source Files...
# Choose the file that you want to translate
## **Note** Your safest bet are .odt and .docx files. 
## Known problems: .txt files are ok on Windows, but problematic on Mac.
   .doc files are ok on mac, but Windows only handles .docx files, not .doc ones.
# Press Close in the Project Files dialog


##  Translate


# Translate the first segment.
# Go to the next segment by pressing **enter** or **cmd-N**


To navigate in the document, use the shortcuts found in the
**Goto**-menu (cmd-U = next untranslated; cmd-P = previous; cmd-J number = go to segment number)


##  Using the translation memory


Suggestions from the translation memory appears in the Fuzzy Matches part.
Chose one of the suggestions by pressing cmd+1-5. Use the suggestion by pressing cmd+r


##  Create the translated document


Goto Project->Create Translated Documents


The translated documents appears in the folder target inside the Translation Project folder


# Machine translation


To be documented.


# Dictionaries


To be documented. They should be in the stardict format.


# Glossaries


Choose a ready-made glossary, or make one as you translate.


Glossaries must be of the following format:


```
surce word<tab>target word
...
```


Norwegian - North Saami glossaries will be made available at Giellatekno's homepage.








