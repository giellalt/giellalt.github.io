The table columns of the resource overviews
===========================================

The language models are presented as a table with 6 colums, where the leftmost column, *Documentation*, contains the language name. Here follwos an explanation of each of the six columns:

- **Documentation:** Link to the main documentation for the language resources.
- **Repository:** Link to the GitHub repository.
- **License:** A badge informing about the chosen license for the language resources. Clicking on the badge will take you to the full text of the license.
- **Issues:** Link to a list of open issues for the specific language
- **Doc CI:** Continous Integration status badge for building the online documentation, including documentation generated from source code. This is the documentation linked to in the first column. When clicking the badge you get to the GitHub list of workflow runs, so that one can click further to see the actual build log files and other details.
- **Tool CI:** [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) status badge for the core tools for each language. The exact list of tools varies, and is specified in the file `.build-config.yml` at the root of each repository. By default for new languages morphological analysers and spelling checkers are built, while `make check` is **NOT** run during CI. As the code is developed, one can turn on checks and more tools as part of the CI runs, by editing this file. — Clicking the badge takes you to the details page for the last build, with links to log files and other details.
