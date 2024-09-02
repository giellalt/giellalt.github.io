# Tesseract development

The Sámi languages (more general: The GiellaLT languages) are missing from tesseract.

# Train on data

In order to train on the document `filename.pdf`, do the following:

Convert to html:

`pdftohtml filename.pdf`

Open the resulting filename.html and find a nice page to train on. In e.g. Preview, cut lines one by one: Mark with mose, cmd C, cmd N. Save the file as `filename_page_line.png`.

In filename.html, find the corresponding line. Copy it to a file `filename_page_line,gt.txt`, correct it if needed and save.

The files `filename_page_line.png` and `filename_page_line.gt.txt` should be placed in `divvungellatekno/tesstrain/training-data/sme-ground-truth/`.

Then **train** the model, as follows:

gmake training MODEL_NAME=sme

Check in the resulting sme.traineddata

Then copy the resulting `sme.traineddate to where tesseract may find it:

On Mac Intel:

`cp divvungiellatekno/tesstrain/training-data/sme.traineddata /usr/local/share/tessdata/`

On other processors and machines:

`cp divvungiellatekno/tesstrain/training-data/sme.traineddata /opt/homebrew/share/tessdata/sme.traineddata`
