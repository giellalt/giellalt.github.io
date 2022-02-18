# Setup Emacs for GiellaLT

For modern Emacs versions (might need a download first)
=======================================================

Modern Emacs versions have nXML-mode and good Unicode support built-in,
and support lots of handy packages.

**If you're using a Mac**, first download a fresh Emacs from
<https://emacsformacosx.com/> and then run

```
        echo 'alias emacs="open -a /Applications/Emacs.app"' >> ~/.bashrc
        echo 'alias em="/Applications/Emacs.app/Contents/MacOS/Emacs -nw"' >> ~/.bashrc
```

to make the "emacs" start your newly downloaded Emacs.app in GUI, and
"em" start it in terminal.  
Close the terminal and start a new one.

If you have a file \~/.emacs, first move it to \~/.emacs.d/init.el

        mkdir ~/.emacs.d
            mv ~/.emacs ~/.emacs.d/init.el
          

In a new terminal, do

```
        cd
        svn co https://svn.code.sf.net/p/apertium/svn/trunk/apertium-tools/emacs apertium-tools-emacs
        mkdir ~/.emacs.d
        echo '(load "~/apertium-tools-emacs/init-apertium.el")' >>  ~/.emacs.d/init.el
        emacs
```          

Note: If you've already checked out the full apertium SVN tree, you
already have the init-apertium.el file and you might want to just refer
to that:

```
        mkdir ~/.emacs.d
        echo '(load "/path/to/where/you/have/apertium-svn/trunk/apertium-tools/emacs/init-apertium.el")' >>  ~/.emacs.d/init.el
        emacs
```

On first run, Emacs should download some packages for you, then you
should be ready for editing CG, XML, lexc and twolc with syntax
highlighting and many handy functions.

See <http://wiki.apertium.org/wiki/Emacs> for some of the features given
by the above configuration.

For old Emacs versions (default-installed on Mac's)
===================================================

Older Emacs versions need to be setup to be use UTF-8 as its default
decoding and to use nxml mode when writing xml-documents.

Fetching and unpacking nxml-mode
--------------------------------

[Fetch nxml mode](http://thaiopensource.com/download). You end up with a
folder called nxml-mode-2xxxxxxx. Move it to the Documents folder.

Setting up
----------

After this is done, open the file $HOME/.emacs.d/init.el. Add the
following lines to that file.

```
          ;; Make the nxml-mode you downloaded available to emacs
          (load "~/Documents/nxml-mode-20041004/rng-auto.el")

          ;; Load nxml-mode automatically for files with the following endings
          (add-to-list 'auto-mode-alist
          (cons (concat "\\." (regexp-opt '("xml" "xsd" "sch" "rng" "xslt" "svg" "rss") t) "\\'")
          'nxml-mode))

          ;; Older Emacs versions need to be told to use UTF-8 for both display and editing:
          (prefer-coding-system 'utf-8)
          (set-terminal-coding-system 'utf-8)
          (set-keyboard-coding-system 'utf-8)

          ;; Turn on syntax colouring in all modes supporting it:
          (global-font-lock-mode t)
        
```

Save and close the file.
