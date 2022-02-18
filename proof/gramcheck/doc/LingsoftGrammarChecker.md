# Lingsoft's Swedish Grammar Checker

The Swedish Grammar Checker by Lingsoft, delivered as part of MS Office since
1999, is built using Constraint Grammar (CG1). Below are a couple of screen
shots illustrating how the grammar checker allerts and informs the user of
some common error types.


## Definitness error


The following sentence contains a definitness error:


![image](images/Image2_text_with_grammar_error.png)


And this is how the error is classified and reported to the user when right
clicked. The menu also contains a correction suggestion:


![image](images/Image1_context_menu.png)


Note how the erroneous word itself (*slutsatsen*) is used in the feedback, as
well as the word that gives the syntactic context that triggers the error
(*Naturvårdsverkets*). Note also that the triggering word is **not** the
immediately preceeding word.


If one selects the menu entry **Grammatikk...** in the context menu, one is
presented with the following:


![image](images/Image3_grammar_explanation.png)


![image](images/Image4_grammar_explanation.png)


## Gender congruency error


The second error example is one where a modifier (*utökat*, a participle) of a
noun (*vargpopulation*) is not inflected for the gender of the noun:


![image](images/Image5_error_with_context_menu.png)


Again, the context menu gives a lot of information about the error, using the
actual words in the sentence to refer to the error.


If one selects the **Grammatikk...** option in the context menu, one gets the
following:


![image](images/Image6_error_in_text_with_grammar_explanation.png)


Ideally, we want to do something similar in our grammar checker, but limitations
in the host application and its grammar checker API may force us to do something
less advanced.


## Settings


The grammar checker comes with a number of premade settings, bundled together
in suitable style options (screen shots shown are from MS Office 2013):


![image](images/Image7_Korrekturinnstillingar_med_stilval.png)


If one clicks on the **Innstillinger…** button, one can fine-tune the different
settings, or make one own's unique grammar checker style:


![image](images/Image8_Grammatikkinnstillingar_med_kategoriar.png)


The Lingsoft grammar checker in Word has **41** error categories that one can
turn on or off.
