# Outline of major goals


* divide and conquer - split dirs and source files to contain one and only one type of content
  * e.g. $GTLANG/src/ now contains both lexc, twolc, cg3 and other source files
  * some regex filters contains filtering both for normative and generation purposes - these are not necessarily the same!
  * etc.
* use a commonly found build system - autotools or CMake
  * an important part of this is to ensure that we do proper checking of dependencies, both within our source files, as well as against external tools and software packages
* merge all languages in `gt/`, `kt/` and `st/` into one dir named `gtlangs/`
* move `script/` out of any language dirs
* try to build a Apertium-style system where one only needs to check out one core component, and then only the languages one wants to work with
* another inspiration is `Omorfi` which has a dir structure and build system along the lines of what we want


# More detailed plans and progress


There are some details further down, but the meat of the plan is found [on a separate page](NewInfraPlan.html). The same goes for the [progress](NewInfraPlan.html).


# Other goals


* VPATH builds (out-of-source builds) - would be nice to plan for this from the very beginning
* parallel builds: both Xerox and HFST should be supported; autoconf should check for both, and continue happily as long as one of them is found
  * Sjur: I'm not sure what the best behaviour should be if both are found, probably to give a build/makefile option to specify which one to use.
  * Tommi: I think this is a good approach. For defaults we can go anyway, perhaps even set it language by language.
    * Good idea. One global default (xerox for now), but possibly other defaults for specific languages.
  * Sjur: Also, we probably need to maintain separate build commands for each tool set, as they are too different to be able to use the same build commands (perhaps with an exception for foma vs xfst).
  * Tommi: Yeah, unfortunately. One of the aims would be to have exactly same commands as xerox tool set in HFST but it still requires a lot of work.
    * Yes. The targets should be the same (ie 'make' will make both hfst and xerox), but for some targets there is no parallel in the other (e.g. hfst can make a speller, but there is no xerox counterpart for a speller transducer).
  * Tommi: Anyways, since the builds will be separate it would even be possible to build both variants if both tool sets are found.


* Another design goal is that once you are within $GTHOME/gtlangs/, you should be able to just 'make', and all languages should be built. If you instead cd into one of the language subfolders and 'make', only that language should be built. Probably obvious, but I just wanted to put it in print.
  * This should indeed work like that. If we use autotools it'll add the configure phases, and the initial autogen.sh. 
    * I don't know about CMake, but something similar should be possible there as well. I believe that CMake produces make-files  on a *nix system, in any case), such that you would in the end do the same make command in that case as well. And on Windows, CMake would construct build files usable in that environment, that would in effect produce the same end results. At least that is my understanding.


* Another question is how to handle the growing size of \$GTMAIN. We are now cleaning up & moving a few things, but that is probably only a temporary solution. What we would need is something along the lines of Apertium, where the required scripts are in a separate dir ($GTHOME/gt/script/ in our svn as of now), and you can check out only one language at a time, as long as the script dir is checked out.
  * The problem with the above solution is that it will break the dependency on the template and common dirs. But if you can find a way around that (ie maintain that dependency the way we discussed, even if one has checked out only a single language), then the Apertium way of organising things is probably better for people in the long run.
  * I think autotools  can do a great deal to help with the script requirement, it will just require some polishing to get it user-friendly. E.g. it can easily note the missing scripts and settings and suggest checkout.


* Another thing I would like to have further along the road is to add a new language by just making a special target in the top dir: 'make newlang ISO3CODE=xyz' (or something similar).
  * Almost always this is implemented by copying some templates and filling in values as needed. And this has been found useful on many other kinds of software projects so I agree on adding this. Perhaps use the zxx or qaa-qtz code for it.
    * The template files should be the same as the ones used for checking if anything in the build environment has been updated. But I will try to elaborate on this a bit later on.


* Finally, we should support unit testing and inline documentation (á la Javadoc) for all of our main source file types.
  * That is one thing I (and I think Anssi Yli-Jyrä as well) have been working a bit on lately. E.g. the definitions.lexc file now is the documentation as it is in omorfi booklet's multichar symbols section. The original idea is from Knuth's literate programming style of course, I think it suits very well for FSM descriptions.
  * further discussion on inline documentation is found on [a separate page](DocumentationGenerators.html)


# Some details


## Dir structure


The basic dir structure could be something like this:


```
$GTHOME/
        gtcore/
                scripts/    # the old gt/script/ dir
                mk-files/   # shared core mk-files
                templates/  # src file templates and dir structure
                shared/     # old common/ - shared linguistic src files
        gtlangs/
                sme/
                smj/
                sma/
                fao/
                kom/
                langgroups/
                           smi/
```


**Comments:** the dirs in `$GTHOME/gtcore/` are intended to be used as follows:
* `mk-files/` - the bulk of the build system is found here. In each language dir der is only a very simple (auto)make file that imports or includes the core makefile at the same relative position, as well as a local (auto)make file for local overrides. This will make it easy to improve or change the build for all languages, and at the same time provide enough flexibility to do language-specific experiments.
* `templates/` - contains a complete directory structure and source file templates for all tools and purposes for our languages. This dir tree is used for two purposes: to populate a new language dir tree, and to add new files to existing languages when new source file templates are added. That is, when a new functionality is added, with its corresponding source files in this directory, then all languages will automatically be updated to get source file templates for this new functionality.


Longer term, one can consider the following additions:


```
$GTHOME/
        gtcore/         # as above
        gtlangs/        # as above
        gtlangpairs/    # language pairs, typically dictionaries and MT
        gtlanggroups/   # multilingual resources, typically terminology
                        # collections and shared name resources
```


The idea is to gather resources that are specific to the given language pairs within these directories. They should also serve as the starting point for ''CS's Dream'' (Cip's and Sjur's Dream), where all monolingual information is stored in `gtlangs/`, and all multilingual information is stored in one of the two dirs indicated above. Language pair names are directional, indicating the source and target languages.


In this scenario, resources for an MT application would then probably be divided among three dir trees: `gtlangs/` for the monolingual resources, `gtlangpairs/` for the transfer dictionaries, and `gtlanggroups/` for terminology resources.


* Cip: As a matter of fact, Cip's dream is about how to model humans' language knowledge, i.e. humans don't have a list of Saami words, a list of Norwegian words, a list of Sami-Norwegian word pairs, a list of Norwegian-Saami word pairs, etc. If there is something like gtlangpairs directories then either as derived (generated from the individual gtlangs-dirs plus pointers from a language to another, this can be done as needed for some specific multilingual application) or as containing the pointers from one language to another, aka a modularization of bilingual information functioning as link between the pointer from one language into another, but this is just a technical issue. In Cip's dream all pointers -- both intralingual (to synonyms, antonyms, hyponyms, etc.) and interlingual (for ALL languages) -- reside in one and the same directory. But I stress it: POINTERS to meaning groups.


## Filenames and extension


Filenames need to be standardised, as well as the use of filename extensions. The extension should reflect the content type. A possible list of extensions could be:


* `.lexc` - LexC source files
* `.xfscript` - xfst script file
* `.regex` - xfst regex file
* `.twolc` - twolc source file
* `.xfst` - compiled transducer, Xerox type
* `.hfst` - compiled transducer, HFST type
* `.hfstol` - compiled transducer, optimised HFST type
* `.cg` - generic constraint grammar (CG) file
* `.cg2` - CG2 source file (probably not used anymore, but listed to ensure we can differentiate between major versions of the CG formalism)
* `.cg3` - VISL CG3 constraint grammar source file
* `.cg3bin` - binary/compiled VISLCG3 constraint grammar file


There are probably other file types we need to handle, add mmore extensions here as needed.


## Language codes


So far we have used ISO639-2 codes for all languages, and applied that to both dir names and as part of file names. We should probably move to (the relevant subparts of) proper locale codes, following the standards used by the rest of the world. This means changing all `sme` strings to `se`, `nob` to `nb`, etc.


## Execution plan
*Small* and *big* in the list below refers to the size of the linguistic resources. Simplifying a bit it is roughly equal to the number of `lexc` entries.


1. start small - only one language. First language is `fao`, which is reasonably big but still not too complex. Create the basic dir tree, and use `svn copy` to copy over the `fao` sources, so that the old `fao` dir remains intact and usable all the time (only when everything is working ok, the old dir will be removed).
2. get all the basic infrastructure and build functionality to work for the needs of `fao`
3. add another language, probably a small one, to test the multilingual behaviour as well as templating system (the small language will most likely not have all features that `fao` has)
4. add a third language - a big one this time, e.g. `kal` (which is using `xfst` instead of `twolc` and thus provides a slightly new use case). Make sure all build targets are working as they should, and extend the build system, template files, etc as needed. `kal` has probably more requirements than `fao`.
5. then add one language at a time, all the time ensuring that everything is working for all langauges, and that the small languages automatically pick up new functionality from the big ones as the template dir is expanded to follow the big languages being added
6. gradually remove the old language dirs as the new location and build infrastructure becomes stable, also forcing the whole group to start using the new infrastructure. This is important to get feedback and correct bugs.


## Testing the remake


We need to ensure that nothing changes in terms of the output of the transducers as part of the remake - unless there are some intended changes (e.g. unifying tags across languages). It is probably best to first do the infra remake, and then later do such tag unifying in the output. So what we need for each language is:


* a reference corpus
  * analysed using the different transducers built with the old build system
  * analysed using the same transducers from the new build system


The testing then amounts to ensuring that the output is the same from both the old and new transducers. This should guarantee stability in the output, and thus reliability from a linguistic point of view.


There might be problems with this testing scenario in cases where we want to change tags as part of the infrastructure remake. One example could be that we want to standardise some of the compounding tags, to ensure that a compound filter works the same for all languages. Or that some tags that are visible now will be removed in the output of the new transducers, since they really should not be part of the output even in the old transducers (e.g. the `+Der1` tags).


# Open questions


## Applications - top-level or bottom-level?


Should we build end-user applications in a separate dir tree, one tree for each application, or should the applications be included in the regular language dirs? As long as the application basically only involves one technology and a few files, it would probably seem easiest to build the application as part of the other builds for that language. One such example is spell checkers, which basically are an application of normative transducers.


But as soon as the application builds on multiple technologies, requires several installation packages for different plattforms and a multitude of files as part of the application, it might get more complicated. In this case it might be easier to maintain separate directory trees for each application. Take Oahpa as an example, which uses both several transducers, disambiguators, SQL data, and user interface files.


There is no easy answer to this, we probably have to try both, and see how things develop.
