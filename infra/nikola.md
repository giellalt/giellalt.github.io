# What is Nikola

[Nikola](http://getnikola.com) is a static site generator written in Python 3.

Our [Indigenous langtech site](http://indigenous-langtech.uit.no) uses Nikola for generating the content of that site.

# How to install Nikola

Installing Nikola makes it convenient to make new pages and posts and to have a look at the content of the site.

```
pip3 install --user Nikola
pip3 install --user "Nikola[extras]"
```

If pip3 does not exist, write

```
pip3
```

then press tab to get the minor version.

## Help! I don't have pip3

If you don't have any pip3.x version, run

```
port search pip|grep py3
```

Install the newest possible one (mine is py36-pip)

```
sudo port install py36-pip
```

Then do

```
port select --list python3
```

Again, use the highest version (mine is python36)

```
sudo port select --set python3 python36
```

You should now be ready to install nikola.

# How to use

## Getting access to the site content

To make Nikola work as `forrest run`, do

```
cd $GTHOME/xtdoc/indigenous-langtech
nikola auto
```

Open <http://localhost:8000> and see the front page reveal itself in all it's glory.

## Edit the frontpage

```
open pages/index.rst
```

## Making new site pages

Make sure you are in `$GTHOME/xtdoc/indigenous-langtech`

Run

```
nikola new_page
```

nikola tells you to fill in some basic information, then quits and tells where the page is found.

Open and edit the new page by running

```
open <path-to-new-file>
```

When done editing, remember to check it in.

## Making new blog page

Make sure you are in `$GTHOME/xtdoc/indigenous-langtech`

Run

```
nikola new_post
```

nikola tells you to fill in some basic information, then quits and tells where the page is found.

Open and edit the new page by running

```
open <path-to-new-file>
```

When done editing, remember to check it in.

The blog posting appears under the blog link.

## More info in Nikola

* [The Nikola handbook](https://getnikola.com/handbook.html)
* [The Nikola-as-site documentation](https://getnikola.com/creating-a-site-not-a-blog-with-nikola.html) This info was used to make the indigenous-langtech site.
* [Nikolas official site](https://getnikola.com)
