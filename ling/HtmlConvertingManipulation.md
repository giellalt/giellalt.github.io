Converting html pages
==========

## Skip pages
...



## Skip part of pages or lines


Select contains comma separated xpath path pairs.
A path pair is separated by a semicolon.


In this:  
``` <xsl:variable name="skip_elements" select="''"/> ```




Each path should start with .//body \\
Examples of valid pairs (fra og med - til):
```
.//body/div[1]/h2[1];.//body/div[3]/div[1]/h3[1]
.//body/div[5];.//body/div[8]/div[3]/h1[1], .//body/div[11]/div[2];.//body/div[11]/div[5]


```


### Comments:


```
.//body er xslt-introen som er måten å gje <html><body>


 .//body/div[1]/h2[1];.//body/div[3]/div[1]/h3[1]
I området frå første h2-datter av første div til første h3 under første div under tredje div i body ... blir sletta


vi vil slette området frå første p under første div under body til andre p
 .//body/div[1]/p[1];.//body/div[1]/p[2]
```




## Skip words in <p>


Change or remove problematic characters from the text.
Specify the elements to match (here all p's within
//body, that do contain text, but do NOT contain em and
span elements), and specify the characters
to be replaced and the replacements. If needed,
copy this template and target several different elements,
but don't make several templates that match the same set
of elements - then only one of them will apply. Also try
to restrict the template to nodes that do not contain
other markup, as such markup otherwise will be removed.


```
    <xsl:template match="p[parent::body][not(./em ]( ./span)][text())">
        <xsl:variable name="text" select='current()' />
        <xsl:variable name="type" select='@type' />
        <xsl:variable name="lang" select='@xml:lang' />
        <xsl:element name="p">
            <xsl:if test="$type">
                <xsl:attribute name="type">
                    <xsl:value-of select="$type"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="$lang">
                <xsl:attribute name="xml:lang">
                    <xsl:value-of select="$lang"/>
                </xsl:attribute>
            </xsl:if>


            <xsl:call-template name="globalTextReplace">
                <xsl:with-param name="inputString" select="$text"/>
                <xsl:with-param name="target" select="'Landbruksdeparte-mentet sier at målet/for høyeste reintall 1.april neste år står fast/'"/>
                <xsl:with-param name="replacement" select="'//'"/>
                <xsl:with-param name="continue" select="0"/>
            </xsl:call-template>
        </xsl:element>
    </xsl:template>
```


### Skip words in e.g. span


```


    <xsl:template match="span[text()]">                 <= 
        <xsl:variable name="text" select='current()' />
        <xsl:variable name="type" select='@type' />
        <xsl:variable name="lang" select='@xml:lang' />
        <xsl:element name="span">                        <= 
            <xsl:if test="$type">
                <xsl:attribute name="type">
                    <xsl:value-of select="$type"/>
                </xsl:attribute>
            </xsl:if>
            <xsl:if test="$lang">
                <xsl:attribute name="xml:lang">
                    <xsl:value-of select="$lang"/>
                </xsl:attribute>
            </xsl:if>


            <xsl:call-template name="globalTextReplace">
                <xsl:with-param name="inputString" select="$text"/>
                <xsl:with-param name="target" select="'str1/str2/str3/'"/>
                <xsl:with-param name="replacement" select="'rpl1/rpl2/rpl3/'"/>
                <xsl:with-param name="continue" select="0"/>
            </xsl:call-template>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>


```
