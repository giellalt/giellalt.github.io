Corpus DTD
===========

# Introduction


Draft \[X\] Proposal \[ \] Approved \[ \]

| Version | Date      | Explanation                           | Author |
|---------|-----------|---------------------------------------|--------|
| 0.1     | 14.3.2005 | Initial transformation from newsgroup | Tomi   |

Version history

# Content structure


    document (header, body)

        header (fileDesc, sourceDesc)
            fileDesc (title, translatedFrom, genre)
                title
                traslatedFrom (nob|nno|fin|swe|...)
                genre (fact|fiction|religion)
                  fact (adm|news|science|...)
                  fiction (prose|poetry|...)
                  religion (bible|...)

            sourceDesc (author, year, place, publDesc)
                author (name, age, sex, nationality)
                year
                place
                publDesc (publisher, idno)
                  idno
        


        body (text)
        text (title | paragraph | list | table | section) +

            section (title | paragraph | list | table | section) +
            list (li+)
            table (row+)
                row (cell+)

# Formal TEI conformant DTD

To be added
