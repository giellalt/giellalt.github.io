

The editor *nano* is a free editor available on all unix systems.


It is not as good as e.g. emacs, but it is an ok alternative if you
must work on a remote machine and do not have the time to learning editors like emacs or vi.


To open it, open a terminal and write `nano`. To open a file called 
*file.txt* in nano, write `nano file.txt`.


The two bottom lines of the window then contain the basic commands 
(**^G:** means *ctrl G*, etc.):


```
^G Get Help  ^O WriteOut  ^R Read File  ^Y Prev Page  ^K Cut Text    ^C Cur Pos
^X Exit      ^J Justify   ^W Where Is   ^V Next Page  ^U UnCut Text  ^T To Spell
```


Pressing **ctrl G** gives a list of commands. 
The M in commands like **M-T** refers to the META key.
On the Mac, you invoke the meta key by
*pressing the ESC key, and thereafter T* 
(or whatever key is mentioned).


Useful commands when working with large files:


* **M-G** =  Go to line number
* **^K** = Remove *the whole* line (note: different from emacs and see)


To cut and paste text:


1. Press **^A** key
2. Move to the end of the area you want to mark
3. Press **^K** to cut
4. Move to where you want to paste it
5. Press **^U** to paste


The command `info nano` contains some, well, info.


