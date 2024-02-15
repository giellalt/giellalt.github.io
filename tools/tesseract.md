Experimenting with Tesseract
============================

Note! This documents experimenting done in 2022 (?).

## Fetching the program
The open source program [Tesseract](https://github.com/tesseract-ocr) can be fetched from Github:

```
git clone git@github.com:tesseract-ocr/tesseract.git
git clone git@github.com:tesseract-ocr/tessdata.git
...
```

## Development

Tesseract comes with a set of languages (see **tessdata**). Most GiellaLT languages are not included, though. TODO: Document how to add them.

## OCR reading

A pdf document as a picture should be

1. split into one pdf per page
2. converted to png
3. run through Tesseract with the relevant language(s) as setting

### One pdf per page

In Preview, set the document in Thumbs view and drag one page at a time to the desktop. TODO: Find a way to do this on the command line. 

### converted to png

Let us say the document contained 8 pages, after the split named *1.pdf, 2.pdf, ...* Then do the following:

```
for i in 1 2 3 4 5 6 7 8 9 10 ; do sips -s format png $i.pdf --out $i.png ; done
```


### run through Tesseract

Let us say the document contains Norwegian and Finnish. Standing in tesseract-ocr/tesseract, run the 8 pdf files through tesseract:

```
for i in 1 2 3 4 5 6 7 8 ; do tesseract --tessdata-dir ../tessdata/ $i.png $i.txt -l fin+nor ; done
```

The resulting files may then be collected into one text file.

