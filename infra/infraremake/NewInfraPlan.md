# Plan and status


1. start small - only one language. First language is `fao`, which is reasonably big but still not too complex. Create the basic dir tree, and use `svn copy` to copy over the `fao` sources, so that the old `fao` dir remains intact and usable all the time (only when everything is working ok, the old dir will be removed).
	- DONE
1. get all the basic infrastructure and build functionality to work for the needs of `fao`
	- DONE
1. add another language, probably a small one, to test the multilingual behaviour as well as templating system (the small language will most likely not have all features that `fao` has)
	- NOT DONE
1. add a third language - a big one this time, e.g. `kal` (which is using `xfst` instead of `twolc` and thus provides a slightly new use case). Make sure all build targets are working as they should, and extend the build system, template files, etc as needed. `kal` has probably more requirements than `fao`.
	1. Partially DONE, but NOT committed into svn
1. add support for the following transducer features:
	- dialects
	- norm vs sub
	- PLX languages
	- hyphenating transducers
	- morphological border transducers
	- HFST spellers
1. then add one language at a time, all the time ensuring that everything is working for all langauges, and that the small languages automatically pick up new functionality from the big ones as the template dir is expanded to follow the big languages being added
1. gradually remove the old language dirs as the new location and build infrastructure becomes stable, also forcing the whole group to start using the new infrastructure. This is important to get feedback and correct bugs.


# Progress summary


A working new infrastructure using autotools are now in place. Tommi has experimented a bit with CMake, but nothing has been committed.


Faroese is working, but no other languages. This is too little to really test it all, and the next important goal is to add at least one other language. Tommi's plan was to add Greenlandic.


# Details


## Configuration and dependency checks for external tools, build framework


There are many tools out there for solving these tasks. Our requirement is that it should be open source, available for as many platforms as possible, preferably including Windows, and have a large user base (=ease of getting support and find solutions). Our two candidates at the moment:


* Autotools (Windows only through Cygwin)
* CMake


We probably do not have a full overview of all our dependencies, but here are at least some:


* xerox tools (relatively new versions, ie summer 2011 - check version #)
* hfst3 - recent svn
* foma - recent svn, at least r29 (test: ability to read regex files using @re:)
* vislcg3
* python
* saxon 9.x
* perl 5.8 <
* forrest (for rendering the documentation, but can be skipped if that is not required)


Not all tools are required for all parts of our source base. We probably need to split up some parts into separate subprojects, with their own requirements.


## Central & local makefiles


It is essential that we can support the following:


* experimenting with new functionality and new tools for one language only
* local adaptions to each language
* centralised build rules


This can be supported through a combination of central and local makefiles. The idea is that local makefiles include central makefiles. The central makefiles carries the burden of the build machinery, whereas the local ones can be enhanced with additional machinery for language-specific processing and experiments.


The central makefiles should be part of the core module, and thus always available.


**Implemented?** Doesn't look like it based on the faroese build files.


## Templating


Another crucial feature of the new infrastructure is that it should be easy to add new languages, and easy to add new functionality to existing languages. This can be done through a templating system combined with the central build system.


There should exist - within the core - a fully functional template for all languages, functional in the sense that all files compile and constitute a working environment for linguistic development. The linguistric content is of course only placeholder text, to be replaced with real content for any new language.


The template structure should also be used to propagate new shared resources to all languages. The idea here is that when a new feature is developed enough for a single language, the files making up the new feature should be copied to the template tree (with boilerplate content), and the corresponding build instructions should be moved to the central makefiles. Then, the next time another language is built, the build system should note the new files (or the non-existence of the template files in the language dir tree), and copy the template files into the dir tree for the language, and build them. From there on the "only" thing needed is to populate the new files with real content for the language in question.


Populating files with real content is of course the main job, but with a template structure as described above we ensure two things:


* we do not need to develop the infrastructure for a new feature twice - as soon as it is working for one, we can automatically deploy it to the other languages
* the linguists won't have to care about infrastructure things to support a new feature for real, they can instead consentrate on the linguistics


# Known issues


* doesn't detect too old hfst installation
* circular dependency between speller error model and speller transducer
* VPATH building (out-of-source building) does not work
