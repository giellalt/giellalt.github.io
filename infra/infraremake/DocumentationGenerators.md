# Tools to convert in-source documentation to external formats


Source: [wikipedia](http://en.wikipedia.org/wiki/Comparison_of_documentation_generators)


This is a table over software tools to parse source code in a number of formats, and extract structured comments and certain aspects of the real source to create separate documentation. That is, we should start to write the core LexC documentation directly in the LexC code, and use a suitable tool to extract the documentation-as-comments and produce HTML, PDF or whatever we want.


The table is sorted according to 1. *Any With Comments*, 2. *Mac OS X*, 3. *Software License*. This is to get the most likely candidates on top. There are of course also other considerations, like maturity and community (= future support and updates). More discussion below the table.


|   Name | Creator | Latest stable version | Software license | Windows | MacOS X | Linux | C/C++ | Java | C# | VB / VBScript | Ada | D | IDL | .NET1 | Access | PHP | Perl | Python | Ruby | JavaScript | Any With Comments
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- 
|  Natural Docs | Greg Valure | 1.51 | GPL | Yes | Yes | Yes | Partial | Partial | Yes | Partial | Partial | No | No | No | No | Partial | Yes | Partial | Partial | Partial | Yes
|  ROBODoc | Frans Slothouber | 4.99.36 | GPL | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No | No | Yes | Yes | No | Yes | Yes | Yes
|  Universal Report | Universal Software | 9.0 | Free Education / Proprietary | Yes | No | No | Yes | Yes | Yes | Yes | Yes | No | No | Yes | Yes | Yes | Yes | Yes | No | Yes | Yes
|  Doxygen | Dimitri van Heesch | 1.7.1 | GPL | Yes | Yes | Yes | Yes | Yes | Yes | No(*) | No | Partial | Yes | No | No | Yes | No(*) | Yes | No | No | No(*)
|  Ddoc | Walter Bright | DMD 1.010 / GDC 0.14 | Freeware / GPL | Yes | Yes | Yes | No | No | No | No | No | Yes | No | No | No | No | No | No | No | No | No
|  DOC++ | Dragos Acostachioaie. | 3.4.10 | GPL | Yes | Yes? | Yes | Yes | Yes | No | No | No | No | Yes | No | No | No | No | No | No | No | No
|  KDOC | Sirtaj Singh Kang | 3.0.1 |  ? | Partial | Yes | Yes | Yes | No | No | No | No | No | Yes | No | No | No | No | No | No | No | No
|  HeaderDoc | Apple Inc. | 8.7.15 | APSL | No | Yes | Yes | Yes | Yes | No | No | No | No | Yes | No | No | Yes | Yes | No | No | Yes | No
|  Haddock | Simon Marlow | 2.0.0.0 (2008) | BSD | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No | No | No
|  jGrouseDoc | Denis Riabtchik | 1.5 | BSD | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No | Yes | No
|  classdoc | Jens Gulden | 1.0 | GPL | Yes | Yes | Yes | No | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No
|  fpdoc | Sebastian Guenther | 2.4.0 | GPL | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No | No | No
|  HyperSQL | Randy Phillips, Itzchak Rehberg | 3.7.5 | GPL | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No | No | No
|  Javadoc | Sun Microsystems | 1.6 | GPL | Yes | Yes | Yes | No | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No
|  JSDoc | Michael Mathews | 1.10.2 | GPL | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No | Yes | No
|  phpSimpleDoc | Thierry Graff | 1.0 | GPL | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | Yes | No | No | No | No | No
|  phpDocumentor | Joshua Eichorn | 1.4.2 | LGPL | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | Yes | No | No | No | No | No
|  Epydoc | Edward Loper | 3.0 | MIT License | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | Yes | No | No | No
|  JsDoc Toolkit | Michael Mathews | 2.0.0 | MIT License | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | No | No | Yes | No
|  YARD | Loren Segal | 0.2.3.5 | MIT License | Yes | Yes | Yes | No | No | No | No | No | No | No | No | No | No | No | No | Yes | No | No
|  RDoc | Dave Thomas | in Ruby core | Ruby License | Yes | Yes | Yes | Partial | No | No | No | No | No | No | No | No | No | No | No | Yes | No | No
|  Autoduck | Eric Artzt | 2.10 | Freeware | Yes | No | No | Yes | No | No | Yes | No | No | No | No | No | No | No | No | No | No | No
|  NDoc | Kevin Downs | 1.3.1 | GPL | Yes | No | No | No | No | Yes | No | No | No | No | Yes | No | No | No | No | No | No | No
|  VBDOX | Mihayl Stamenov | 2.1.0 | GPL | Yes | No | No | No | No | No | Yes | No | No | No | No | No | No | No | No | No | No | No
|  devscribe | Geoff Cox | 2.00 | MSDN Code Gallery Licenses | Yes | No | No | No | No | Yes | No | No | No | No | No | No | No | No | No | No | No | No


**(*)** Doxygen note: Though not supported as a native input language, Doxygen can be extended through the use of filters.


Both for this and for other external tools, there are a couple of general considerations:
* the tool **must** run on MacOS X & Linux
* the tool **should** also run on Windows
* the tool **must** be open source, preferably with a liberal license (there are a couple of exceptions to this, for legacy reasons, notably the Xerox tools; no new exceptions should be allowed)
* under otherwise equal circumstances, among a set of alternative tools for the same functionality one should choose the tool which seems to have the more robust development cycle and community


For processing our LexC, Xfst, TwolC and VislCG3 source files (and probably other formats as well in the future), there are a couple of additional requirements:
* the tool needs to be (easily) extendable to parse our programming languages
* the output should be easily integratable with the existing documentation infrastructure (forrest, that is - xml output should be fine)
* the documentation syntax should be easy to grasp and remember


Applied to the set of documentation generation toolsabove, the following three candidates seem to come closest to our requirements (alphabetically ordered):


* [Doxygen     ](http://www.stack.nl/~dimitri/doxygen/)
* [Natural Docs](http://www.naturaldocs.org/)
* [ROBODoc     ](http://www.xs4all.nl/~rfsber/Robo/)


Exactly which one of these to choose is open for discussion, but based on a brief browsing on the web sites probably *Doxygen*. It seems to have a relatively broad user base & community, and very flexible documentation & formatting styles, with inline HTML as well as simpler structures. But this is just an initial evaluation, and requires more work to see which of them will most easily adapt to our formalisms - writing filters for Doxygen doesn't seem like a straightforward thing for our formal languages.
