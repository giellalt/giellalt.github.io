# Infrastructure upgrade and Github

The present GiellaLT infrastructure has been serving us well in terms of
scalability and maintainability. But over the years, a number of limiting issues
have popped up, both from linguists and external groups we are cooperating with,
and from a technical point of view.


Another aspect is that the present version control system, with a self-hosted
subversion repository, is arcane and invisible, and also not easy to administer
the users of. To both increase visibility and cooperation, as well as making it
easier to publish regular updates, we should consider moving to github or a
similar hosted and distributed version control system.


This document is a first overview of things to work on, and list possible
solutions.


#  Directory structure


The present structure is way too deep and hard to navigate. It also hard-codes
certain coding patterns related to phonology, and the tests are too far away
from the code it should test. There are three different steps to be taken here:


1. merge `src/morphology/` and `src/phonology` to a new dir `fst/`, and
  reorganise the whole `src/` dir to reflect technology rather than linguistic
  groups - the linguistic splitup really never was completely consistent and
  logical;
1. flatten the `tools/` directory tree, so that it has only (or mostly) one
  subdir level
1. move all test dirs to being subdirs of the actual source code they are testing
  e.g. `test/tools/spellcheckers/` should be moved to
  `tools/spellcheckers/test/`


#  Isolate dependencies and common build elements


Each language source code has a number of dependencies, both on other parts of
the GiellaLT infra, and of external tools and repos. As it is now, most of these
dependencies users have to install themselves, which creates a heavy and brittle
getting started process. Ideally one should only have to check out a single
language dir, and then run a setup script that handles all the rest.


Specifically, the following changes are ideas to follow up:


* remove the `am-shared/` dir, and instead havd a common/shared `am-shared/`
  dir in `giella-shared/` (or core?) and sym-link to it or check it out as
  a submodule or similar within a `.deps/` directory, done by the
  `autogen.sh` script; a requirement of the solution is that it must still be
  compatible with the various build systems we need to support
* do the same for the various `giella-shared/` dirs
* do the same for `giella-core/`


The end result of the points above should be that it should be enough to check
out one language dir, then run `./autogen.sh`, and then you are ready to go.
It should also work the same although one has checked out all languages, or the
whole `$GTHOME` tree (but then using a common `.deps` dir one level up, or
symlinks to the various `giella-shared` and `giella-core` bits).


These changes should also remove the need to merge changes in `am-shared/`,
but we need to ensure that the `.deps/am-shared/` dir is kept up-to-date all
the time, for all types of setups.


#  Github move concerns


When we move to Github, and thus git, there are a number of maintenance
scenarios we have to work out in front of the move. We have already moved all
keyboards [there](https://github.com/giellalt), and they can serve as a test case
for the language repos.


Benefits of the move:


* vastly increased code visibility and accessibility
* easier cooperation and contribution
* automatized user management/account creation
* easy CI and CD


To avoid the cost of a huge and slow, single repo for all languages, each
language will become a repo of its own. But this does require the ability to
easily update the code across all or some repositories in a simple way. It also
makes it necessary to be able to administer all repositories collectively.


##  Procedure for moving


See [https://github.com/subethaedit/UniversalDetector]. Follow that receipt for
each language in each `langs` dir. Then run the following commands:


```
git remote add origin <git@github.com:my-user/new-repo.git>
git push origin -u master
```


After that we should have a set of language repos in GitHub, with the full
history of each language.


##  Update data across all repositories


One of the reasons we have been able to scale well in terms of languages (with
more than hundred languages in all our repos pr january 2020), is that we have a
consistent directory and file structure. From time to time we need to do changes
en mass to all repos, and that needs to be possible also after the move to
Github. And there will still be the need to update both single files and batches
of files based on some template data.


One promising tool to handle such chores is
[Silver Platter](https://www.jelmer.uk/silver-platter-intro.html). It is a tool
to loop over a number of repositories, and apply the same changes to all of
them. There might be other similar tools, this is just a first suggestion.
Silver Platter is available on [GitHub](https://github.com/jelmer/silver-platter)
and is open source.


##  GitHub multiple repo admin


By moving to GitHub, with one language = one repo, there is also a need to
easily administer all repos en block. So far there does not seem to exist a tool
that does what we need, so we might have to build it ourselves. Here's a list of
possible actions performed on all or a subset of repos, and required features:


* perform actions on repos whose name are matching a given regex (e.g. all repos
  matching `keyboard-*`, or all repos mathcing `*-sm?`, etc)
* rename all/multiple repos
* set default branch for all/multiple repos
* add all/multiple repos to a team
* set access restrictions for all/multiple repos
* add/update/remove git submodules, including revision for said submodule
* get list of all repos matching a certain pattern, potentially with repo URL
  or documentation site URL, to include in overview documentation or reports


There will certainly be more, but this at least gives a first impression of the
required features.


##  Private repos


We have a couple of languages which are closed-source and private for various
reasons. You can have private repos also in GitHub, but only with max three
collaborators, unless payments are involved.
One can also self-host git repos, but then we loose the co-administration and
scalability benefits of the infrastructure - we can't have multiple ways of
doing one thing.


These are concerns we need to discuss thoroughly before we decide to switch to
GitHub.


After further investigation, it looks like UiT could apply for the
[GitHub Campus Program](https://education.github.com/schools), which would give
us access to GitHub Enterprise Cloud, which would give us umlimnited
collaborators for
[private repos](https://github.com/pricing#feature-comparison). A request for
getting this for UiT has been sent to [orakelet](https://uit.no/om/orakelet).


##  Teams and nested teams


We should consider whether
[nested teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)
are useful for our purposes.
One obvious need is to be able to communicate with various groups of committers:


* Tromsø people only
* all committers
* Edmonton people only
* project people only
* etc


The only trouble is: one can still not force an email upon everyone -
notifications can be turned off individually, and are controlled individually.
Thsi is something that has been
[requested by a lot of people](https://github.com/isaacs/github/issues/569).


##  Subversion compatibility


GitHub allows checkout via svn, allowing people most familiar with svn to
continue working as before. The only caveat is that git submodules, which is
planned to be used for the internal dependencies (giella-core, giella-shared,
etc) will not work using the svn checkout method. For those users we need an
alternative, possibly a shell script checking out the dependent repos using svn 
in a suitable subdir. The shell script should be called from `./autogen.sh`,
which people are used to run in any case.


We also need to consider how to best ensure that people are using the correct
version/revision of those dependencies, both for `@HEAD` and when rebuilding
past versions.


A third concern is that we need to ensure that the main development is done
without breaking releases. Using the
[git-flow model](https://nvie.com/posts/a-successful-git-branching-model/),
the default commit branch in github should be the `develop` branch. This
should be accompanied with both existing and new tests to ensure that the code
is mostlly releasable at any point. Further information about `git-flow` can
be found:


* [here](https://datasift.github.io/gitflow/IntroducingGitFlow.html)
* [here](https://www.git-tower.com/learn/git/ebook/en/desktop-gui/advanced-topics/git-flow)
  for [Tower](https://www.git-tower.com/mac?utm_source=learn-website&utm_medium=navigation)


##  Multiple languages in one go


The present infra groups languages in different subdirs:


* `langs/` - the default/production languages
* `startup-langs/` - as the name implies
* `experiment-langs/` - as the name implies
* `private*-langs/` - closed-source or otherwise non-public languages


In various settings it would be beneficial to be able to continue to define sets
of languages one would like to process together. In Apertium, this is done by
defining such sets as abstract repos, with all included languages as submodules.
This seems like a straight-forward solution, but other ways could definitely
be considered.


Possible use cases for such groupings:


* defining a group of *production* languages = all within should be pushed to
  a páhkat release repo
* language groups for projects or teams
* defining something as *startup* or *experimental* is a clear sign to
  outsiders that this is not yet ready for consumption
* the core UiT people would like to check out all languages, and possibly build
  them all locally


There might be better ways of achieving these goals in the Git(Hub) universe,
but we need something that will help us group languages.


Also, the grouping should be bidirectional, such that a given language repo
"knows" what group(s) it belongs to. And as indicated, one language can be a
member of multiple such groups.


##  Name collisions


Because languages are grouped in several subdirs, we have a couple of cases
where one language is described more than once. This is the case for at least
`est` and `sms`. When/if moving to GitHub, each language will become a repo
of its own, with the repo name being the language code. Thus we get repo name
collisions for the mentioned languages.


In both cases one of the two descriptions is in `experiment-langs/`, so one
can consider repo names like `lang-est-x-exp` (keeping the part after
`lang- ` BCP-47 compatible). There certainly are other alternatives, the main
point is just to remember to consider this, and find a good solution.


This is also a reminder that we need to update the script for setting up a new
language, in two ways:


* it must support the new git repo structure
* it should accept a full BCP-47 tag, not only ISO 639-3 language codes


The second point could be fixed while we are still in svn, but the first one
obviously needs to be fixed as we move to git.


##  Bugzilla issues


Open (or all?) issues for various languages in the
[GiellaLT Bugzilla](http://giellatekno.uit.no/bugzilla/) should be transferred to
github. There are various tools for this, so this note is here just to remember
to do it. Some pointers:


* [BugzillaMigrate](https://github.com/dill/BugzillaMigrate)
* [StackOverflow discussion](https://stackoverflow.com/questions/7281304/migrate-bugzilla-issues-to-github-issue-tracker)
* [bugzilla2github](https://github.com/berestovskyy/bugzilla2github)
* see also the
  [llvm bugz->github switch dicsussion](https://groups.google.com/forum/#!msg/llvm-dev/CyTzrV1JwfA/k-09hspAAAAJ)
* [W3C Bugzilla shutdown](https://www.w3.org/2019/01/bugzilla-shutdown.html)
