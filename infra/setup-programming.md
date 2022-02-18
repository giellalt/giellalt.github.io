# Install perl and its modules



All Users
=========

There is one Perl module that need to be installed before the analyzing
tools are fully working.

The command to install the module:

    sudo perl -MCPAN -e 'install Expect'

The command requres a password. The command is interactive and requires
the user to press &lt;enter&gt; to a list of questions. The default
values can all be accepted. Do not write anything, just press
&lt;enter&gt; to all the questions. If the installation fails, contact
the programmers.

Programmers
===========

Project-internal modules
------------------------

There are couple of project-internal modules, which can be used or
installed from the cvs-copy:

    samiChar::Decode.pm
    langTools::Util.pm
    langTools::XMLStruct.pm

Copy these modules to your Perl-library, in mac it is for example:

    /Library/Perl/5.8.6/

If you don't want to copy, you may run the script using option -I to
include these modules:

    perl -I gt/script gt/script/perl-script.pl

Other Perl modules
------------------

The other Perl modules that are used extensively in this project are
[XMLTwig.pm](http://www.xmltwig.com/)Install it as a super user.

    sudo perl -MCPAN -e 'install XML::Twig'

There may be also other modules, which need to be installed to a new
computer. The error message of missing Perl modules is of the format:

    Can't locate IO/Pty.pm in @INC (@INC contains: script /sw/lib/perl5/5.8.6/
    ...

To install the misisng package, replace "/" with "::" and strip the
suffix ".pm".:

    sudo perl -MCPAN -e 'install IO::Pty'
