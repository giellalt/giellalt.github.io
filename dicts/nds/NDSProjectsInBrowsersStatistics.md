
# Projects in browsers statistics


NDS projects can be used to varied extents in http and https on Google Chrome and Firefox


- ok = works
- no = does not work
- pseudo = only works if unsafe scripts are allowed
- - = not tested
- F = seems to work with foreign text
- Fno = does NOT work with foreign text


Browser  Google Chrome 52.0.2743.82 (64-bit)


|   Date | Type   | baakoeh | kyv | muter | saan | saanih | sanat | sanit | sonad | valks | vada
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- 
|  160928 | https   |  ok     |  ok  |   ok    |  ok   | ok     |  ok     | ok     | ok    |  ok    | ok
|  160729 | gt korp |  ok     |  F       |    F      | ok   | ok      |  ok   |  ok    | no     |  ok     | no    | ok     | -


Browser Firefox 47.0


|   Date | Type        | baakoeh | kyv | muter | saan | saanih | sanat | sanit | sonad | vada | valks
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- 
|  160729 | https        |  Fno     |  ok  |  ok    |  Fno  |  Fno    |  Fno   |  no    |  no    |  no   | no
|  160729 | gt korp conc |  ok      |  F       |    F      |  ok  |  ok    |  ok   |  ok     |  ok    |  ok    |  F     |  F    | ok
|  160729 | gt korp L R  |  no      |  Fno     |    Fno    |  no  |  no    |  no   |  no     |  no    |  no    |  Fno   |  Fno  | no


Browser Firefox 49.0


|   Date | Type        | baakoeh | kyv | muter | saan | saanih | sanat | sanit | sonad | vada | valks
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- 
|  161010 | https        |  ok      |  ok  | -      | -     | -       | -      |  ok    | -      | -     |   -


FF49 notes


1. udmM-kpv doesn't work
1. occasionally switching projects on the same page (steps below) results in error that e.g., pair is not found. at minimum this should be corrected so a better error is displayed, because this use case isn't likely to happen outside of our set of developers
	1. go to se.wikipedia.org
	1. click on sanit bookmarklet, and look up a word
	1. refresh
	1. click on baakoeh bookmarklet, and look up a word: should result in error about not being able to connect




# Firefox 47.0 and wikipedia-type content with private browse: 


## 2016-07-28: 


Only the kyv and muter projects can use the click-in-text facility for wikipedia-type https texts.


### kyv


[http://kyv.oahpa.no/read/]


- Komi-Permyak    [https://koi.wikipedia.org/]
- Komi-Zyrian     [https://kv.wikipedia.org/]
- Udmurt          [https://udm.wikipedia.org/]


### muter


[http://muter.oahpa.no/read/]

 
- Meadow and Eastern Mari    [https://mhr.wikipedia.org/]
- Hill or Western Mari       [https://mrj.wikipedia.org/]




### other dictionaries


Most projects are not allowed to provide click-in-text facility: valks, sanit, saan, saanih, baakoeh, vada, sanat, sonad




 [http://valks.oahpa.no/read/]


- Moksha          [https://mdf.wikipedia.org/]
- Erzya           [https://myv.wikipedia.org/]




 [http://sanit.oahpa.no/read/]

 
- Northern Sami       [https://se.wikipedia.org/]


- [http://saan.oahpa.no/read/]
- [http://baakoeh.oahpa.no/read/] - [https://samediggi.no/sorsamisk]
- [http://saanih.oahpa.no/read/]


 [http://sanat.oahpa.no/read/]

 
Finnish, Kven, Olonets-Karelian


[http://sonad.oahpa.no/read/]


- Estonian  [https://et.wikipedia.org/]
- Latvian   [https://lv.wikipedia.org/]
- Võro      [https://fiu-vro.wikipedia.org/]


Ingrian, Livonian, Veps, Võro


 [http://vada.oahpa.no/read/]


* Nenets  [https://incubator.wikimedia.org/wiki/Wp/yrk/Main_Page]




# Firefox 47.0 and Giellatekno korp content with private browse:


##  2016-07-28 
concordance-focus word can be read and translated by click-in-text provided it is not followed by punctuation. 
##  2016-07-28 
concordance-focus word CAN	be read	and translated by click-in-text	when followed by punctuation: saan
##  2016-07-28 
concordance-focus word CANNOT be read and translated by click-in-text	when followed by punctuation: sanit, saanih, valks, kyv, muter
##  2016-07-28 
concordance-context words left and right CANNOT be clicked as individual words in any of the projects. This feature can be attested in other pages as well, where entire fields are activated instead of individual words.






This Livonian text activates as an entire field:


- Livonian   [http://www.nba.fi/liivilaiset/Liv/ALiv.html]








# Google Chrome Version 52.0.2743.82 (64-bit) and wikipedia-type content https:


- Successful launch in muter, kyv
- Successful launch in sanit, baakoeh once allowed as unsafe script
- No Success in valks, vada, sonad, sanat




# Google Chrome Version 52.0.2743.82 (64-bit) and GT Korp content:


* The language pairs in sanit, muter and kyv are not preselected. They must be preselected before click-in-text translations occur.
* Adjacent punctuation and position in context or as concordance focus have no bearing on function of click-in-text NDS for: muter, kyv, valks, sanit, saan




# Javascript for NDS 2016-07-31: 


* sanit is the primary script, it DOES work in https after accepting unsafe scripts:   javascript:(function()%7Bvar%20e%3D%22http%3A%2F%2Fsanit.oahpa.no%22%2Ct%3D%220.0.3%22%2Cn%3Ddocument.createElement(%22link%22)%3Bn.href%3De%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Cn.rel%3D%22stylesheet%22%3Bvar%20r%3Ddocument.createElement(%22script%22)%3Br.type%3D%22text%2Fjavascript%22%2Cr.src%3De%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dt%3Bif(window.location.hostname%3D%3D%22skuvla.info%22%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(n)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(r)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(n)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(r)%7D)()%3B


* baakoeh DOES NOT work in https:  javascript:(function()%7Bvar%20e%3D%22http%3A%2F%2Fbaakoeh.oahpa.no%22%2Ct%3D%220.0.3%22%2Cn%3Ddocument.createElement(%22link%22)%3Bn.href%3De%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Cn.rel%3D%22stylesheet%22%3Bvar%20r%3Ddocument.createElement(%22script%22)%3Br.type%3D%22text%2Fjavascript%22%2Cr.src%3De%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dt%3Bif(window.location.hostname%3D%3D%22skuvla.info%22%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(n)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(r)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(n)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(r)%7D)()%3B




* kyv  DOES work in https:  javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//sanit.oahpa.no%2Freader%2Fkyv%22%2Ct%3D%22//sanit.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


* muter  DOES work in https: javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//sanit.oahpa.no%2Freader%2Fmuter%22%2Ct%3D%22//sanit.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


* saan  DOES NOT work in https: javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//saan.oahpa.no%22%2Ct%3D%22//saan.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


* saanih  DOES NOT work in https: javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//saanih.oahpa.no%22%2Ct%3D%22//saanih.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


* sanat  DOES NOT work in https:  javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//sanat.oahpa.no%22%2Ct%3D%22//sanat.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


* sonad  DOES NOT work in https: javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//sonad.oahpa.no%22%2Ct%3D%22//sonad.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


* valks  DOES NOT work in https:  javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//valks.oahpa.no%22%2Ct%3D%22//valks.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


* vada  DOES NOT work in https: javascript:javascript:(function()%7B(function()%7Bvar%20e%3D%22//vada.oahpa.no%22%2Ct%3D%22//vada.oahpa.no%22%2Cn%3D%220.0.4%22%2Ca%3Ddocument.createElement(%22link%22)%3Ba.href%3Dt%2B%22%2Fstatic%2Fcss%2Fjquery.neahttadigisanit.css%22%2Ca.rel%3D%22stylesheet%22%3Bvar%20d%3Ddocument.createElement(%22script%22)%3Bif(d.type%3D%22text%2Fjavascript%22%2Cd.src%3Dt%2B%22%2Fstatic%2Fjs%2Fbookmarklet.min.js%22%2Cwindow.NDS_API_HOST%3De%2Cwindow.NDS_BOOKMARK_VERSION%3Dn%2C%22skuvla.info%22%3D%3Dwindow.location.hostname%26%26window.frames.length%3E0)%7Bvar%20i%3Bi%3Dwindow.frames%5B1%5D%2Ci.window.NDS_API_HOST%3Dwindow.NDS_API_HOST%2Ci.document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Ci.document.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7Delse%20document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(a)%2Cdocument.getElementsByTagName(%22body%22)%5B0%5D.appendChild(d)%7D)()%3B%7D)()


