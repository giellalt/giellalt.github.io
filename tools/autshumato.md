# Autshomato

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


#  For the impatient: 


1. Install translation memory
2. Make a new translation project
3. Import files into the translation project
4. Translate
5. Create the translated document
6. Exit, import a new file into the translation project or start a new translation project


#  A bit more systematic introduction:


#  Translation memory


1. Make a folder, name it **tm**.
2. [Download our translation memory files](http://divvun.no/static_files/nob2sme-tmx.zip)
3. Unpack this file inside the folder tm


#  Make a new translation project


1. Go to Project->New
2. A dialog appears, write the name of your translation project.
3. Press Save
4. The New Project dialog appears
5. Specify Source and Target languages
6. Specify the folder tm that you made in the above steps as the Translation Memory Folder
7. Press **OK**


#  Import files into the translation project


1. The Project Files dialog appears
2. Press Import Source Files...
3. Choose the file that you want to translate
   1. **Note** Your safest bet are .odt and .docx files. 
   2. Known problems: .txt files are ok on Windows, but problematic on Mac.
   .doc files are ok on mac, but Windows only handles .docx files, not .doc ones.
4. Press Close in the Project Files dialog


#  Translate


1. Translate the first segment.
2. Go to the next segment by pressing **enter** or **cmd-N**


To navigate in the document, use the shortcuts found in the
**Goto**-menu (cmd-U = next untranslated; cmd-P = previous; cmd-J number = go to segment number)


#  Using the translation memory


Suggestions from the translation memory appears in the Fuzzy Matches part.
Chose one of the suggestions by pressing cmd+1-5. Use the suggestion by pressing cmd+r


#  Create the translated document


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








