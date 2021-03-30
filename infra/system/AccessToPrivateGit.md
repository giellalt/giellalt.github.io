The infrastructure for building mobile apps and signing macOS and iOS software
relies partially on [Fastlane](https://fastlane.tools/). And to make this work
across a developer team we use shared credentials using `fastlane match`. We
call this setup *Divvunlane*.


Below is the procedure for how to add a new user that should have access to the
private divvunlane git repo (git@gtsvn.uit.no:divvunlane.git):


The new user must:
* run `ssh-keygen -t rsa`
* send the content of `~/.ssh/id_rsa.pub` to a person with write access to the
  git repo `gitosis-admin` (presently Børre and Sjur)


The administrator must:
* either:
** `git clone git@gtsvn.uit.no:gitosis-admin.git`
** or
** `git pull` in `gitosis-admin`
* Add a new file: `keydir/USER.pub` containing all and only the `id_rsa.pub`
  from the new user; this must be done for every computer the user is using (one
  git user pr user pr machine)
* Add the USER in `gitosis.conf` under the [[divvunlane] tag
* Commit and push these changes


The new user can now clone divvunlane. On first checkout the new user must write
the certificate encryption password. Ask Sjur or Børre for the password.


To actually clone **and** install the certificate to sign software you **must**
use fastlane with the command `fastlane match` in a dir containing a
Matchfile. This can be found in any of the $GTHOME/keyboards/XXX/ios/ dirs.
