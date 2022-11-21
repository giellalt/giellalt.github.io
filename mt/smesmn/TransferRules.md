
Transfer rules
===============




Dokumentasjon av transferreglar.


  "Apertium is a more complicated and less user friendly version of sed."

  


Documentation:


* [http://wiki.apertium.org/wiki/Apertium_New_Language_Pair_HOWTO	  ]
* [http://wiki.apertium.org/wiki/A_long_introduction_to_transfer_rules]
* [http://wiki.apertium.org/wiki/Chunking:_A_full_example			  ]


Task:


```
Num Sg (Nom|Acc) + N Sg Gen => Num Sg Nom + N Par
```


* sme: Leat guokte guoli.   
* smn: Láá kyehti kyellid.


Input:


```
$ echo "Leat guokte guoli" | apertium -d . sme-smn-biltrans
^Leat<vblex><iv><indic><pres><pl3><@+FMAINV>/Leđe<vblex><indic><pres><pl3><@+FMAINV>$ ^guokte<num><sg><nom><@←SUBJ>/kyehti<num><sg><nom><@←SUBJ>$ 
^guolli<n><sem_ani><sg><gen><@Num←>/kyeli<n><sem_ani><sg><gen><@Num←>$
```


Output:


```
$ echo "Láá kyehti kyellid" | hfst-proc smn-sme.automorf.hfst 
^Láá/Leđe<vblex><iv><indic><pres><pl3>$ 
^kyehti/kyehti<num><sg><nom>$ 
^kyellid/kyeli<n><par>$
```




**Rule 1: Ignore disambiguation errors!**


```
$ echo "Leat guokte guoli" | apertium -d . sme-smn
#Leđe #kyehti kyele
```


So what output do we current have ?


```
$ echo "Leat guokte guoli" | apertium -d . sme-smn-postchunk
^Leđe<vblex><indic><pres><pl3>$ ^kyehti<num><sg><nom>$ ^kyeli<n><sg><gen>$^.<sent>$
```




So, what do we actually want to do ?


```
  <n><sg><gen> --> <n><par> | [ <num><sg><nom> | <num><sg><acc> 
```

	  
In Apertium we call the first part (before the two pipes) the "action", and
the second part (... the context after the two pipes) the "pattern".


So:


```
Pattern = [ <num><sg><nom> ]( <num><sg><acc> ) <n><sg><gen>


Action = <n><sg><gen> --> <n><par>


         <sg> --> ""
         <gen> --> <par>
```


Patterns are defined by "def-cat" entries. The "cat" stands for category. 


```
<def-cat n="num-nomacc">
  <cat-item tags="num.sg.nom.*"/>
  <cat-item tags="num.sg.acc.*"/>
</def-cat>
```


This is a set of two items, one containing nom and one containing acc.


You can change the order of the "cat-items" (they are more or less a set). The 
tags are not sets, they are sequences with wildcards.


To do "or" in the category entries, you just add more cat-item lines.


```
<def-cat n="n-sg-gen">
  <cat-item tags="n.sg.gen.*"/>
</def-cat>
```


So, to match the pattern "numeral singular in nominative or accusative followed
by noun singular in genitive" we would do:


```
<pattern> 
  <pattern-item n="num-nomacc"/>
  <pattern-item n="n-sg-gen"/>
</pattern>
```


Here the order is important, this is a sequence. 


The "." is not a regular expression "." it is ><




so: 


```
    n.sg.gen.* = <n><sg><gen>(<*>)+
    n.*.gen.* = <n><*><gen>(<*>)+
```



 
Let´s start to define our rule file:


```
-------------------------------------------------------                                                       
<transfer>                                             
  <section-def-cats>                                   
    <def-cat n="num-nomacc">                           
      <cat-item tags="num.sg.nom.*"/>                  
      <cat-item tags="num.sg.acc.*"/>                  
    </def-cat>                                         
    <def-cat n="n-sg-gen">                             
      <cat-item tags="n.sg.gen.*"/>                    
    </def-cat>                                         
  </section-def-cats>                                  

                                                       
  <section-rules>                                      
    <rule>                                             
      <pattern>                                        
        <pattern-item n="num-nomacc"/>                 
        <pattern-item n="n-sg-gen"/>                   
      </pattern>                                       
    </rule>                                            
  </section-rules>                                     

                                                       
</transfer>                                            
-------------------------------------------------------
```


Input:


```
^guokte<num><sg><nom><@←SUBJ>/kyehti<num><sg><nom><@←SUBJ>$ ^guolli<n><sem_ani><sg><gen><@Num←>/kyeli<n><sem_ani><sg><gen><@Num←>$


| ________________________**| |**________________________|
     Source language (SL)        Target language (TL)


| _________________________________________________________|
                   Lexical unit (LU) 

                   
Now we look at the action. Actions are defined within the <rule>.


The action may contain different instructions, and most importantly
determine the output string. The instructions can work on both the 
source and target side of the input lexical unit.


<action>


  <out>

  
  </out>
</action>


Output:


^num-noun<SN>{^kyehti<num><sg><nom>$ ^kyeli<n><par>$}$
| ______|
    name
| ____________________________________________________|
                   Chunk
```




We define this with:




```
<chunk name="num-noun">


</chunk>
```


This is essentially like writing 


```
^num-noun{}$.
```


Each chunk has a name, some tags and some contents, for example
to get the <SN> "noun group" (sintagma nominal)


```
<out>
<chunk name="num-noun">
  <tags>
    <tag><lit-tag v="SN"/></tags>
  </tags>
</chunk>
</out>
```


This is essentially like writing 


```
^num-noun<SN>{}$.
```


Looking at this in the file context:




```
-------------------------------------------------------                                                    
<transfer>                                             
  <section-def-cats>                                   
    <def-cat n="num-nomacc">                           
      <cat-item tags="num.sg.nom.*"/>                  
      <cat-item tags="num.sg.acc.*"/>                  
    </def-cat>                                         
    <def-cat n="n-sg-gen">                             
      <cat-item tags="n.sg.gen.*"/>                    
    </def-cat>                                         
  </section-def-cats>                                  

                                                       
  <section-rules>                                      
    <rule>                                             
      <pattern>                                        
        <pattern-item n="num-nomacc"/>                 
        <pattern-item n="n-sg-gen"/>                   
      </pattern>     
      <action>
        <out>
          <chunk name="num-noun">
            <tags>
              <tag><lit-tag v="SN"/></tags>
            </tags>
          </chunk>
        </out>
      </action>                                  
    </rule>                                            
  </section-rules>                                     
</transfer>                                            
-------------------------------------------------------
```


This matches the input pattern <num><sg>(<nom>|<acc) <n><sg><gen>


And outputs: 


```
^num-noun<SN>{}$
```




What is missing here is the chunk contents (e.g. the lexical units
that were matched by the pattern).


```
          <chunk name="num-noun">
            <tags>
              <tag><lit-tag v="SN"/></tags>
            </tags>
            <lu>
              <clip pos="2" side="tl" part="whole"/>
            </lu>
          </chunk>
```


* pos = position. the position is defined the order in the pattern.
* side = which side of the LU to output. 
* part = a substring within one of the sides of a lexical unit.

 
```
  **side="sl" part="whole"**_
|                           |
| _lem_                     |
|     |                     |
^guokte<num><sg><nom><@←SUBJ>/kyehti<num><sg><nom><@←SUBJ>$ 
| ________________________**| |**________________________|
     Source language (sl)        Target language (tl)
```


For "part" we can define our own patterns of substrings, but there
are also some built in:


*  whole = the whole string   kyehti<num><sg><nom><@←SUBJ>
*  lem = the lemma            kyehti 
*  tags = the tags            <num><sg><nom><@←SUBJ>
*  lit = literal
*  v = value
*  n = name


So, for the rule above, it will currently output:


```
^num-noun<SN>{^kyeli<n><sg><gen><@Num←>$}$
```


So, now that we have some output, we can start with the interesting
part, that is changing the output so that it will generate properly.


We´ll start with the easy way, which is just specifying directly what
we want to output:


input is the output from  sme-smn-biltrans
Then comes this:


```
        <out>
          <chunk name="num-nomacc">                   <!-- Output: ^num-noun -->
            <tags>                          
              <tag><lit-tag v="SN"/></tags>         <!-- Output: <SN> -->
            </tags>                                 <!-- Output: { -->
            <lu>                                    <!-- Output: ^ -->
              <clip pos="2" side="tl" part="lem"/>  <!-- Output: kyeli -->
              <lit-tag v="n.par"/>                  <!-- Output: <n><par> -->
            </lu>                                   <!-- Output: $ -->
          </chunk>                                  <!-- Output: }$ -->
        </out>
```

          
The lit-tag instruction outputs strings encased in < and >.

	
the the output is what we get by calling sme-smn-chunker1

	
```
^num-noun<SN>{^kyeli<n><par>$}
```


Now, how would we output both lexical units ? The output we
are looking for is:


```
^num-noun<SN>{^kyehti<num><sg><nom>$ ^kyeli<n><par>$}$
```


The rule:


```
        <out>
          <chunk name="num-noun">                     <!-- Output: ^num-noun -->
            <tags>                          
              <tag><lit-tag v="SN"/></tags>           <!-- Output: <SN> -->
            </tags>                                   <!-- Output: { -->
            <lu>                                      <!-- Output: ^ -->
              <clip pos="1" side="tl" part="lem"/>    <!-- Output: kyehti -->
              <clip pos="1" side="tl" part="tags"/>   <!-- Output: <num><sg><nom><@←SUBJ> -->
            </lu>                                     <!-- Output: $ -->
            <lu>                                      <!-- Output: ^ -->
              <clip pos="2" side="tl" part="lem"/>    <!-- Output: kyeli -->
              <lit-tag v="n.par"/>                    <!-- Output: <n><par> -->
            </lu>                                     <!-- Output: $ -->
          </chunk>                                    <!-- Output: }$ -->
        </out>
```


This will give:


```
^num-noun<SN>{^kyehti<num><sg><nom><@←SUBJ>$ ^kyeli<n><par>$}$
```


This is good, but we don´t want the syntax tag... <@←SUBJ>


How can we change the tags? We first need to define patterns that
we want to change. For example, we could define a pattern that 
matches all of the possible syntax tags.


These patterns are defined in a separate section:


```
<section-def-attrs>
	<def-attr n="function">
		<attr-item tags="@←SUBJ"/>
		<attr-item tags="@←OBJ"/>
		<attr-item tags="@←ADVL"/>
	</def-attr>
</section-def-attrs>
```


The "def-attr" stands for define attribute. 


The procedure for changing something goes something like:


```
<let>
	<clip pos="2" side="tl" part="function"/>
	<lit v=""/>
</let>
```


This replaces anything substring that matches one of the patterns
in def-attr n="function" with the empty string.


Here "lit" means "literal" and the attribute "v" is the value. e.g.
<lit v="foo" is just "foo", while e.g. <lit-tag v=foo"/> is <foo>


```
  (@←SUBJ|@←OBJ|@←ADVL) --> 0
```


So now if we have 


```
            <lu>                                      <!-- Output: ^ -->
              <clip pos="1" side="tl" part="lem"/>    <!-- Output: kyehti -->
              <clip pos="1" side="tl" part="tags"/>   <!-- Output: <num><sg><nom> -->
            </lu>                                     <!-- Output: $ -->
```


We will get:


  ^kyehti<num><sg><nom>$


Note that all <let> statements must go outside of the <out> statement.

	
What will the whole rule file look like? 


```
 <action>
        <let><clip pos="1" side="tl" part="tense"/><lit-tag v="past"/></let>
        <out>


<let> A B </let>

	
-------------------------------------------------------
-------------------------------------------------------
<transfer>                                             

                                                   
  <section-def-cats>                                   
    <def-cat n="num-nomacc">                           
      <cat-item tags="num.sg.nom.*"/>                  
      <cat-item tags="num.sg.acc.*"/>                  
    </def-cat>                                         
    <def-cat n="n-sg-gen">                             
      <cat-item tags="n.sg.gen.*"/>                    
    </def-cat>                                         
  </section-def-cats>                                  


<section-def-attrs>
	<def-attr n="function">
		<attr-item tags="@←SUBJ"/>
		<attr-item tags="@←OBJ"/>
	</def-attr>
</section-def-attrs>

                                                       
  <section-rules>                                      
    <rule>                                             
      <pattern>                                        
        <pattern-item n="num-nomacc"/>                 
        <pattern-item n="n-sg-gen"/>                   
      </pattern>     
      <action>
        <let>
        	<clip pos="2" side="tl" part="tags"/>
            <lit-tag v="n.par"/>                
        </let> 
        <let>
        	<clip pos="1" side="tl" part="function"/>
            <lit-tag v=""/>                
        </let> 
        <out>
          <chunk name="num-noun">
            <tags>
              <tag><lit-tag v="SN"/></tag>
            </tags>
            <lu>
              <clip pos="1" side="tl" part="lem"/>    
              <clip pos="1" side="tl" part="tags"/>   
	        </lu>
	        <b/>
	        <lu>
              <clip pos="2" side="tl" part="whole"/>   
		    </lu>
          </chunk>
        </out>

        
      </action>                                  
    </rule>                                            
  </section-rules>                                     
</transfer>                                            
-------------------------------------------------------
```




Homework: The data in:


`A-3lex_ordinals_uptoten_gt-norm.gen.yaml`


Command:


hfst-proc sme-smn.automorf.hfst


More phrases:


* num adv adj-attr  noun - Mun oasttán guokte hui varas guoli.
* num n-gen adj-attr noun - Mun gávdnen guokte eatni boares girjji.
* num  adv adj noun - 




