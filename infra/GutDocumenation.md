# Gut documentation

`gut` is a tool to do multirepo maintenance of `git` repos hosted in [GitHub](https://github.com/). It handles:


* adding and removing users
* cloning, cleaning, fetching, pulling, pushing, branching and removing repos
* switch between private and public
* creating teams
* set info, topics and webhooks, including programmatically using scripts
* update many similar repos based on a delta from a template repo (fast and easy distribution of new features)
* helper commands to set up CI for targeted repos
* repo names can be matched using regular expressions
* run any other git command (or any other command) by way of applying a shell script to targeted repos


The source code can be found in [GitHub](https://github.com/divvun/gut).


The following is the help text for the new tool `gut` as per version 0.1.0 (01.09.2020). Make sure to run `gut --help` to get the latest update on the available command, subcommands and options.


```
$ gut --help
gut 0.1.0
git multirepo maintenance tool


USAGE:
    dadmin <SUBCOMMAND>


FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information


GENERAL OPTIONS (most subcommands):
    -o, --organisation <organisation>
    -r, --regex <regex>                  


SUBCOMMANDS:
    add         Add users, repos to an organisation/a team
        repos       - Add all matched repositories to a team by using team_slug
        users       - Invite users by users' usernames to an organisation
    apply       Apply a script to all local repositories that match a pattern
    branch      Set default, set protected branch
        default     - Set a branch as default for all repositories that match a pattern
        protect     - Set a branch as protected for all local repositories that match a pattern
    checkout    Checkout a branch all repositories that their name matches a pattern or a topic
    ci          Continuous Integration
        export      - export data file for ci generate command
        generate    - generate ci for every repositories that matches
    clean       Do git clean -f for all local repositories that match a pattern
    clone       Clone all repositories that matches a pattern
    commit      Add all and then commit with the provided messages for all repositories that match a pattern or a topic
    create      Create team, discussion, repo to an organisation or create a branch for repositories
        branch      - Create a new branch for all repositories that match a regex or a topic
        discussion  - Create a discussion for a team in an organisation
        repo        - Create new repositories in an organisation and push for existing git repositories
        team        - Create a new team for an organisation
    fetch       Fetch all local repositories that match a regex
    help        Prints this message or the help of the given subcommand(s)
    hook        Create, delete hooks for all repositories that match a pattern
        create      - Create web hook for repos matching regex
        delete      - Delete all web hooks for all repository that match regex
    init        Init configuration data
    invite      Invite users to an organisation by emails
        users       - Invite users to an organisation by emails
    make        Make repositories that match a regex become public/private
        private    
        public     
    merge       Merge a branch to the current branch for all repositories that match a pattern
    pull        Pull the current branch of all local repositories that match a regex
    push        Push the provided branch to remote server for all repositories that match a pattern or a topic
    remove      Remove users, repos from an organisation/a team
        repositories    
        users       - Remove users by users' usernames from an organisation
    set         Set information, secret for repositories or permission for a team
        info        - Set description and/or website for all repositories that match regex, plain text or using a script
                      NB! Make sure there is no trailing newline at the end! Or it will fail.
        organisation- Set default organisation name for every other command
        permission  - Set access permissions for a team, for repos matching regex; matching repos will be added if not already in the team
        secret      - Set a secret all repositories that match regex
    show        Show config, list of repositories or users
        config      - Print configuration
        repositories- Show all repos matching regex   
        users       - Show all users in an organisation
    status      Show git status of all repositories that match a pattern
    template    Apply changes or generate new template
        apply       - Apply changes from template to all repos that match the regex
        generate    - Generate a new project from a template
    topic       Add, get, set or apply a script by topic
        add      Add topics for all repositories that match a regex
        apply    Apply a script to all repositories that has a topics that match a pattern Or to all repositories that has a specific topic
        get      Get topics for all repositories that match a regex
        set      Set topics for all repositories that match a regex
    transfer    Transfer repositories that match a regex to another organisation
    workflow    Run a workflow
        run         - Rerun the most recent workflow or send a repository_dispatch event to trigger workflows
```
