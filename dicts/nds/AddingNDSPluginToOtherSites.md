#  Including Neahttadigisánit in a website


At minimum, two or three files need to be included on any page of content that
you wish to include NDS with. If you are using a Content Management System, you
may need to edit the system's templates in the relevant location to include
these files.


* `neahttadigisanit.css` - the stylesheet that provides styling for the
  definition bubbles and options menu
* `neahttadigisanit.jquery.min.js` - the main Neahttadigisanit (compressed) JS
  file, with its own version of jQuery
* Optionally, you may include a third file that contains the options and
  actually initializes the plugin, or simply put this in a `<script />` node


NB: if you prefer to use a version of jQuery that is already in use on your
website, there is a version of the NDS source compiled without it:
`neahttadigisanit.min.js`.


##  Including the files


You can either download and rehost these files, or use our copies directly.
Either way is alright, but your site will still need to permit users' browsers
to make external API calls. All API calls use JSONP, so cross-domain API calls
should be permitted.


There are a few strategies for including these: first, the stylesheet must be
in the header. It should hopefully not interfere with any local styles, as all
the selectors refer only to things that involve NDS. If this turns out not to
be the case, report a bug.


```
    <link rel="stylesheet"
          href="https://DICTIONARY.oahpa.no/static/css/neahttadigisanit.css"></link>
```


Here you will need to replace DICTIONARY with the project you are using, i.e.,
sanit for North Saami, baakoeh for South Saami, sanat for Kven and Finnish, etc. If in doubt, look at the URL of the dictionary you want, and you will find its name in the beginning of the URL.


Second: the JS file must be included toward the end, so that it does not delay
other content in the site from loading, and also so that all the text content
is present when the file is called.




```
    <script type="text/javascript"
            src="https://PROJNAME.oahpa.no/static/js/neahttadigisanit.jquery.min.js"></script>
```


You may add the JS file in the footer.


##  Initializing the plugin


The final step is to call the plugin. Typically, you will want to do this
within a jQuery event-- usually when the document is ready. This code may be
included in its own `script` node (which you can place in the footer), but must run after the `.js` file has been
included above.


```
    // Wait for the document to load...
    $(document).ready(function (){


        // Initialize and configure NDS
        $(document).selectToLookup({
            // This specifies the dictionary set to
            api_host: 'https://PROJNAME.oahpa.no/',
        });
    });
```






For most purposes you should be able to just copy and paste this JS snippet
without changes. If you need another dictionary set, you may alter the
`api_host` setting:


* South Saami / Norwegian - https://baakoeh.oahpa.no/
* More coming soon...


Mind the trailing slash.


##  Custome language pair


If you want to use the plugin with a custom language pair, you can specify it in the script tag as follows:


```
    <script type="text/javascript" id='nds_script' data-lang='iso_source,iso_target'
            src="https://PROJNAME.oahpa.no/static/js/neahttadigisanit.jquery.min.js"></script>
```


Where you need to replace iso_source with the iso for the source language, and iso_target with the iso for the target language.


For example, if you use sanit.oahpa.no and you want to customize the plugin so that it shows North-Sámi to Norwegian as your custom default, add the following:


```
    <script type="text/javascript" id='nds_script' data-lang='sme,nob'
            src="https://sanit.oahpa.no/static/js/neahttadigisanit.jquery.min.js"></script>
```




##  Contact


If you encounter problems, please contact us!
