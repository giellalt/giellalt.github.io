# Git-svn history cleanup

Cf [this project](https://github.com/orgs/giellalt/projects/3).

If you do this on a mac, you need macOS 10.13 High Sierra or __older__, later
versions do not come with `git svn`, and it is a hassle to install your own
version. Running an old macOS in a VM is easy and painless.

## Step 1 - identify relevant svn history points

Check out `https://gtsvn.uit.no/langtech/trunk` at a suitable point in the past,
typically just before the last known commit of the relevant directory in the `git`
history.

Use `svn log` to find the earliest point of that dir tree as it was then.

## Step 2 - Clone using `git svn`

Use the revision numbers you got in the previous step to restrict the cloning to
the relevant history:

```sh
git svn clone -r86176:120958 --authors-file=authors.txt https://gtsvn.uit.no/langtech/trunk/gtcore/gtdshared/urj-Cyrl/
```

REPEAT for each major change in dir structure, creating one local git repo each
time.

## Step 3 - stitch the histories together

Follow [these instructions](https://stackoverflow.com/questions/3219713/how-to-concatenate-two-git-histories).

With the example above, the following steps were taken:

```sh
git fetch ../urj-Cyrl-eldre eldre:eldre
echo $(git rev-list gamal | tail -n 1) $(git rev-parse eldre) > .git/info/grafts
git filter-branch $(git rev-parse eldre)..HEAD
```

Notes:
- `gamal` - branch name in newest repo with old history
- `eldre` - branch name in the next older history
- `fetch eldre:eldre` - source branch name, followed by target branch name

## Step 4 - clean up usernames and emails

See [this issue comment](https://github.com/giellalt/giella-core/issues/20#issuecomment-1135506061)
and the next one.

## Step 5 - force push

When everything is collected and cleaned, force push, and inform relevant
developers they need to reclone.
