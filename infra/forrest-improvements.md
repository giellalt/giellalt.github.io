# Forrest-forbetringar


# Short summary in English:


Presently we are using a tailored version of Forrest. This is no good, especially as we are stuck with an older Forrest, and won't easily gain access to upgrades and improvements. The first list of points below is what is needed to do on Forrest to make it usable out of the box for us. The second list below is a list of improvements and enhancements beyond that - beneficial, but not required to run standard Forrest.


# Dette må gjerast for at vi kan bruka standard Forrest igjen:
- font-familie brukarspesifisert ==> ferdig
	- alle font-familie-referansar som variablar ==> ferdig
	- sjekk at det funkar ==> funkar med fop 0.95
- i18n:
	- samkøyr tekststrengomsetjingane i Skins og Dispatcher (berre HTML)
	- legg til i18n:text i pdf/fo ==> ferdig
	- legg til i18n-prosessering i sitemap ==> ferdig
	- test at i18n funkar i:
		- pdf  - funkar ikkje
		- html - funkar berre etter omstart(!)
- legg til lokalisering for våre språk:
	- pdf ==> ferdig (men 'Table' lagar i18n:text-element i fo-fila!)
	- html ==> ferdig for nn
	- menus
	- tabs
- konverter iCal-funksjon til utplugg (tasklist - den noverande)


# Nyutvikling, nye funksjonar vi gjerne vil ha:
- iCal-plugg (todo items - nyskriven, hentar ut alle oppgåver direkte i teksten)
- testbenkpluggar (vi kan kvitta oss med Forrest-formatdokumenta i svn)
- jspwiki-ut-plugg
