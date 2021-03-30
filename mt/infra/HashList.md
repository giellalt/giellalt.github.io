## Mo ráhkadit listtu
Mii ráhkadit hash-listtu fiillain mat leat otpt_dir-máhpas. Danne lea dehálaš ahte máhpas leat dušše ođđa fiillat.


# `rm otpt_dir/*` (sihko buot fiillaid)
# Generere jorgalusaid nugo čilgejuvvon dás: [genereret jorgalusaid](Paralleltexts.html)
# Čoakke buot sániid merkejuvvon #: \\  `cat otpt_dir/*|grep 'tg-amt'|cut -d">" -f2-|cut -d"<" -f1|sed 's/&gt;/>/g;'|sed 's/&lt;/</g;'|tr ' ' '\n'|grep '#'|tr -d '.,"!:'|sort|uniq -c|sort -nr > dev/hash-report.freq`
## Seammá kommando lea maid vejolaš vuodjat skripta bokte: \\ `sh hash.sh`
# `less dev/hash-report.freq`


```
  49 #guhti<prn><rel><pl><nom>
  48 #sámegiel<adj><attr>
  38 #giella<n><cmp_sgnom><cmp>
  36 #ietjá<prn><ind><attr>
  36 #ienebu<adj><attr> ```


## Mo iskat dáhpáhusaid
Don sáhtát juogo geahččat kommandolinnjás:
* `cat otpt_dir/* | less`


Dahje don sáhtát ráhkádit ovtta stuorra html-fiila ja rahpat dan omd. Safaris.
# `cat otpt_dir/* > buotfiillat.html` 
# `open buotfiillat.html` (åpnes i Safari)




