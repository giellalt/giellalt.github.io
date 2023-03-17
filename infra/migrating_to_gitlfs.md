# Migrating data to Git LFS

The GiellaLT infra now supports the use of Git LFS for storing large binary
files (such as sound recordings) under version control. This is paid for by
UiT. Since UiT will have to pay for this for Sámi data, data for other languages
can be stored as well as long as the costs do not increase substantially.

Presently we have a storage quota of 50 Gb, and a bandwidth quota of 600 GB / 50 (?) days.

To set up Git LFS for a repository, follow the instructions [here](https://git-lfs.com).

If you do this for a new repository, nothing more is needed - just commit and push your binary files as you would any other file.

## Migrating data to Git LFS 

Follow [these](https://github.com/git-lfs/git-lfs/blob/main/docs/man/git-lfs-migrate.adoc?utm_source=gitlfs_site&utm_medium=doc_man_migrate_link&utm_campaign=gitlfs#migrate-local-history)
instructions.

In case you get an error message when you try to migrate due to a non-clean
repository (despite being clean when setting up LFS support):

```sh
$ git lfs migrate import --include-ref=main --include="*.wav"
migrate: override changes in your working copy?  All uncommitted changes will be lost! [y/N] 
migrate: working copy must not be dirty
```

follow
[these tips](https://stackoverflow.com/questions/46704572/git-error-encountered-7-files-that-should-have-been-pointers-but-werent).

To sum up, the following worked for a repository with an existing history:

```sh
cd REPOSITORY
git lfs install
git lfs track "*.wav,*flac"
git add .gitattributes                           
git commit -m "Add Git LFS support for wav, flac files"
git reset --hard
git rm --cached -r .
git reset --hard
git lfs migrate import --include-ref=main --include="*.wav,*flac"
git push -f origin main
```
