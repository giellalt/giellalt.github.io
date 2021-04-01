Special Emacs modes
===================

The Emacs mode definitions are located in project directory
`$GTHOME/tools/emacs` under svn. Copy the relevant files to your `emacs`
directory in your home directory (or better: use a direct path). Load
the file by adding the command to your `.emacs` file:

-   (load "$GTHOME/tools/emacs/file-name")

correct-corpus-mode
-------------------

The file containing the mode definitions is `correct.el`. Command to add
to your `.emacs` file:

    (load "$GTHOME/tools/emacs/correct")

Start the mode by typing

    M-x correct-corpus-mode

The keystrokes are:

-   **C-c f:**  
    Looks for the next cohort with several readings
-   **C-c c:**  
    Adds a correct tag and proceeds to the next cohort
-   **C-c x:**  
    Adds a correct tag and proceeds to the next line in the same cohort
-   **C-c t:**  
    Passes by already marked cohorts (not fully working)

namelex-mode
------------

The file containing the mode definitions is `namelex.el`. Command to add
to your `.emacs` file:

    (load "$GTHOME/tools/emacs/namelex")

Start the mode by typing

    M-x namelex-mode

The keystrokes are:

-   **a:**  
    adds tag -ani
-   **b:**  
    -obj
-   **f:**  
    -fem
-   **m:**  
    -mal
-   **n:**  
    For (skipping and) searching the next NAME
-   **o:**  
    -org
-   **p:**  
    -plc
-   **r:**  
    -surplc
-   **s:**  
    -sur
-   **t:**  
    -tit
-   **u:**  
    -surmal

Note that when using the namelex-mode, its difficult to do anything else
(since the characters are reserved for tagging). Change the mode for
example to text-mode to do some other editing than tagging and then back
to namelex-mode for tagging.

gender-assign-mode
------------------

The file containing the mode definitions is `genderassign.el`. The
purpose of the mode is to make it easier to assign gender to lexicon
files.

Command to add to your `.emacs` file:

    (load "$GTHOME/tools/emacs/genderassign")

Start the mode by typing

    M-x genderassign-mode

The keystrokes are:

-   **f:**  
    feminines
-   **m:**  
    masculines
-   **n:**  
    Neuters
-   **x:**  
    next xxx string
