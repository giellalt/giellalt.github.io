# Enabling and using git pre-commit in dictionary work

[pre-commit](https://pre-commit.com/) is an add-on to git which lets the user force certain tests to be run and pass before allowing a commit to be made. We use this to avoid checking in xml files which contain syntax errors, thus catching the errors while we remember what we just did. Everyone who works with our xml dictionaries should use pre-commit.

pre-commit is installed using pip: `pip install pre-commit`

## Enable pre-commit

After installing, it needs to be enabled in each dictionary repository you work in. If unsure, first check that the repository contains the necessary configuration file and testing script. `cd` into the root directory of your dictionary and execute `ls .pre-commit-config.yaml .githooks`. You should see something like the following, confirming the files exist:
```
.pre-commit-config.yaml

.githooks:
.  ..  pre-commit-xmllint-validate.py
```
If the files existed, then execute `pre-commit install` to set up pre-commit for that repository. You should see the following message:
```
pre-commit installed at .git/hooks/pre-commit
```

## Using pre-commit

When pre-commit is enabled in a repository, it automatically runs the configured tests each time you execute `git commit`. If the tests fail, then you will be notified and the commit will be aborted. Fix the syntax errors and add and commit the files again. If the tests pass, then the changes will be committed.

## Setting up pre-commit if the files did not exist

If `ls .pre-commit-config.yaml .githooks` returned something like:
```
ls: cannot access '.pre-commit-config.yaml': No such file or directory
ls: cannot access '.githooks': No such file or directory
```
then you need to add these files to your repository. Usually they can be copied from another dictionary repo without any changes, like this: `cp -r ../dict-sme-nob/.pre-commit-config.yaml ../dict-sme-nob/.githooks .`. Add and commit the files to git. Then enable pre-commit using `pre-commit install`.