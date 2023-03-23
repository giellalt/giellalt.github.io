# What is Nikola

[Nikola](http://getnikola.com) is a static site generator written in Python 3.

Our [Indigenous langtech site](http://indigenous-langtech.uit.no) uses Nikola for generating the content of that site.

## How to install Nikola

Installing Nikola makes it convenient to make new pages and posts and to have a look at the content of the site.

```sh
python3 -m pip install --user Nikola
python3 -m pip --user "Nikola[extras]"
```

## How to use

### Getting access to the site content

To make Nikola work as `forrest run`, do

```sh
cd $GTHOME/xtdoc/indigenous-langtech
nikola auto
```

Open <http://localhost:8000> and see the front page reveal itself in all it's glory.

### Edit the frontpage

```sh
open pages/index.rst
```

### Making new site pages

Make sure you are in `$GTHOME/xtdoc/indigenous-langtech`

Run

```sh
nikola new_page
```

nikola tells you to fill in some basic information, then quits and tells where the page is found.

Open and edit the new page by running

```sh
open <path-to-new-file>
```

When done editing, remember to check it in.

### Making new blog page

Make sure you are in `$GTHOME/xtdoc/indigenous-langtech`

Run

```sh
nikola new_post
```

nikola tells you to fill in some basic information, then quits and tells where the page is found.

Open and edit the new page by running

```sh
open <path-to-new-file>
```

When done editing, remember to check it in.

The blog posting appears under the blog link.

## More info in Nikola

* [The Nikola handbook](https://getnikola.com/handbook.html)
* [The Nikola-as-site documentation](https://getnikola.com/creating-a-site-not-a-blog-with-nikola.html) This info was used to make the indigenous-langtech site.
* [Nikolas official site](https://getnikola.com)
