Updating Apertium on gtweb
===============

See the
[gtweb-apy-conf README](https://github.com/unhammer/gtweb-apy-conf#introduction)
for full documentation on how the MT pairs on gtweb are installed and
updated, and how the html pages and APY MT server are configured and
kept up-to-date (as well as other system configuration files that were
altered to make everything work).


In summary:

- language pairs are installed using the `dnf` command, and come from from Tino's nightly packages
- every morning, `dnf-automatic` runs an upgrade of all packages (including language pairs), and restarts the APY MT server to load the new data
- if you install *new* language pairs, you have to run "sudo /home/apy/update" afterwards to make them appear in [gtweb.uit.no/mt-testing](http://gtweb.uit.no/mt-testing/) (while the configuration files in gtweb-apy-conf specify that e.g. [jorgal](http://gtweb.uit.no) only translates Northern Saami→Norwegian, and [tolkimine](http://gtweb.uit.no) only translates Finnish-Estonian).
