SSH
===

# Use keys, avoid password trouble


If you have an ssh account on giellatekno.uit.no / divvun.no or gtweb.uit.no or
similar, you should ideally have a long and difficult password so no one can
gain access to your account and wreak havoc or leak ```$GTBOUND``` to piratebay
or something.


However, no one likes typing in (and remembering!) long and difficult
passwords. Here, `ssh-keygen` comes to the rescue. With `ssh-keygen`, you
create a **keypair** consisting of a public file and a private file. You copy
the public file to your account on the server, but never share the private
file. Through [the magic of mathematics](https://en.wikipedia.org/wiki/Public-key_cryptography),
the server will only let you in if you have the private file corresponding to
the public one, even though you never transmit the private file.


# Creating a keypair


If you've never created a keypair before, running this command on your local
machine will create one for you:


```
    ssh-keygen
```


Just click Enter to accept the default suggested file path. You can protect
your private key with a password if you like, or press Enter if you like to
live dangerously.


Then you need to copy your public key to the server. The simplest way, assuming
the server is "divvun.no" and your username there is "alice", is to do:


```
    ssh-copy-id alice@divvun.no
```
and type in your server password for the last time.


You should now be able to do
```
    ssh alice@divvun.no
```


without having to type in your server password.  But if you put a password on
your private key, you'll still have to type in that, read on for how to avoid
that.


# Never having to type a password again


Most modern operating systems offer to save your ssh keypair password for you,
unlocking it when you log in to your local machine. 


On a Mac, you can do
```
    ssh-add -K
```
to have your keypair password stored in Mac Keychain.


Ubuntu should offer storing it the first time you use it.


# Sharing a server account


When you do ```ssh-copy-id```, what happens is you copy your public keyfile,
typically named ~/.ssh/id_rsa.pub, to the server account, where it's appended
to the file ~/.ssh/authorized_keys. This file can have several public keys, one
per line.  This might be handy if you happen to have several keypairs (e.g. one
per laptop), or if you want several people to have access to the same server
account, without any of them having to remember the password of that account.


If user Bob has access to the account "neahtta", and you give your
~/.ssh/id_rsa.pub to Bob, then he can give you access to "neahtta" by doing


```
    cat alices_id_rsa.pub >> /home/neahtta/.ssh/authorized_keys
```


(If the folder /home/neahtta/.ssh doesn't exist, do ```mkdir
/home/neahtta/.ssh; chmod 700 /home/neahtta/.ssh```  first.)




# See also


* []




