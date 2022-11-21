# Full agreement


Full agreement singular, e.g. `vuosttaš albmáin` => `vuosmuin almain`                          


Full agreement plural, e.g. `vuosttaš albmáid` => `vuosmuid almaid`                           


## Define categories for use in pattern in the rule
List with adjectives, pronouns, numbers which has agreement in the target language, and not in the source language  (the same as for half agreement)

```   <section-def-cats>
    <def-cat n="agreement-attr">                             
      <cat-item lemma="vuosttas" tags="adj.ord.attr.*"/>
      <cat-item lemma="vuosttaš" tags="adj.ord.attr.*"/> 
      <cat-item lemma="aiddonas" tags="adj.*.attr.*"/> 
      <cat-item lemma="aiddonas" tags="adj.attr.*"/> 
      <cat-item lemma="dárbbašlaš" tags="adj.*.attr.*"/> 
      <cat-item lemma="dárbbašlaš" tags="adj.attr.*"/> ....
      ```

    
List with the tags in the noun, when the attribute should have full agreement, Sg and plural


```
    <def-cat n="agreem-sg">                             
      <cat-item tags="n.*.sg.nom.*"/>                   
      <cat-item tags="np.*.sg.nom.*"/>                   
      <cat-item tags="np.sg.nom.*"/>                   
      <cat-item tags="n.*.sg.acc.*"/>                    
      <cat-item tags="n.*.sg.com.*"/>                    
      <cat-item tags="n.sg.nom.*"/>                   
      <cat-item tags="n.sg.acc.*"/>                    
      <cat-item tags="n.sg.com.*"/>                    
      <cat-item tags="*.n.sg.nom.*"/>                   
      <cat-item tags="*.n.sg.acc.*"/>                    
      <cat-item tags="*.n.sg.com.*"/>                    
    </def-cat>  
    <def-cat n="agreem-pl">                             
      <cat-item tags="n.*.pl.nom.*"/>                    
      <cat-item tags="n.*.pl.gen.*"/>                    
      <cat-item tags="n.*.pl.acc.*"/>                    
      <cat-item tags="n.*.pl.ill.*"/>                    
      <cat-item tags="n.*.pl.loc.*"/>                    
      <cat-item tags="n.*.pl.abe.*"/>                    
      <cat-item tags="n.*.pl.com.*"/>      
      <cat-item tags="n.pl.nom.*"/>                    
      <cat-item tags="n.pl.gen.*"/>                    
      <cat-item tags="n.pl.acc.*"/>                    
      <cat-item tags="n.pl.ill.*"/>                    
      <cat-item tags="n.pl.loc.*"/>                    
      <cat-item tags="n.pl.abe.*"/>                    
      <cat-item tags="n.pl.com.*"/>      
      <cat-item tags="*.n.pl.nom.*"/>                    
      <cat-item tags="*.n.pl.gen.*"/>                    
      <cat-item tags="*.n.pl.acc.*"/>                    
      <cat-item tags="*.n.pl.ill.*"/>                    
      <cat-item tags="*.n.pl.loc.*"/>                    
      <cat-item tags="*.n.pl.abe.*"/>                    
      <cat-item tags="*.n.pl.com.*"/>      
    </def-cat>  ```

    


## Define attributes: the tags to the left of Sg/Pl

```
  <section-def-attrs>
    <def-attr n="a_npagree_type">
       <attr-item tags="adj"/>
       <attr-item tags="adj.ord"/>
       <attr-item tags="prn.ind"/>
       <attr-item tags="prn.dem"/>
       <attr-item tags="prn.itg"/>
       <attr-item tags="prn.rel"/>
       <attr-item tags="num"/>
    </def-attr> 
```


## Define macros

### macro 1: Full agreement in sg

```
    <def-macro n="agreement-adj-ind-sg-2Posit" npar="2">  
        <let>
          <clip pos="1" side="tl" part="tags"/>
		<concat>
		  <clip pos="1" side="tl" part="a_npagree_type"/>
		  <clip pos="2" side="tl" part="a_nbr"/>
		  <clip pos="2" side="tl" part="a_cas"/> 
		</concat>                
        </let> 
    </def-macro> 
```


### macro 2: Full agreement in pl, with exeption for Pl Com

```
    <def-macro n="agreement-adj-ind-pl-2Posit" npar="2"> 
       <choose>
          <when>        <!-- with pl.com -->
            <test>
	      <and>
		<equal>
		  <clip pos="2" side="tl" part="a_cas"/>
		  <lit-tag v="com"/>
		</equal>
                <equal>
		  <clip pos="2" side="tl" part="a_nbr"/>
		  <lit-tag v="pl"/>
		</equal>
              </and>
	    </test>
         <let>
            <clip pos="2" side="tl" part="tags"/>
	    <concat>
	      <lit-tag v="n"/>
	      <clip pos="2" side="tl" part="a_ntype"/>
	      <clip pos="2" side="tl" part="a_nbr"/>
	      <clip pos="2" side="tl" part="a_cas"/>
	    </concat>  
        </let> 
        <let>
          <clip pos="1" side="tl" part="tags"/>
	  <concat>
            <clip pos="1" side="tl" part="a_npagree_type"/>
	    <clip pos="2" side="tl" part="a_nbr"/>
	    <lit-tag v="gen"/> 
	  </concat>                
        </let> 
        </when>
        <otherwise>
                <!-- default -->
        <let>
       	  <clip pos="2" side="tl" part="tags"/>
	  <concat>
            <lit-tag v="n"/>
	    <clip pos="2" side="tl" part="a_ntype"/>
	    <lit-tag v="pl"/>
	    <clip pos="2" side="tl" part="a_cas"/> 
	  </concat>                
        </let> 
        <let>
          <clip pos="1" side="tl" part="tags"/>
	  <concat>
            <clip pos="1" side="tl" part="a_npagree_type"/>
	    <clip pos="2" side="tl" part="a_nbr"/>
	    <clip pos="2" side="tl" part="a_cas"/> 
	  </concat>                
        </let> 
        </otherwise>
        </choose>
    </def-macro> 
```




## Define pattern in the rule

Full agreement singular:


```
    <rule comment="REGLA: agreement-attr n-sg agreement"> 
      <pattern>                                        
        <pattern-item n="agreement-attr"/>                 
        <pattern-item n="agreem-sg"/>                   
      </pattern>     
      <action>
        <call-macro n="remove-semtag-1Posit"><with-param pos="2"/></call-macro>
        <let><clip pos="2" side="tl" part="x_func"/><lit v=""/></let>
        <let><clip pos="2" side="tl" part="a_func"/><lit v=""/></let>
        <call-macro n="agreement-adj-ind-sg-2Posit"><with-param pos="1"/><with-param pos="2"/></call-macro>
        <out>
```


Full agreement plural:


``` 
     <rule comment="REGLA: agreement-attr n-pl"> 
      <pattern>                                        
        <pattern-item n="agreement-attr"/>                 
        <pattern-item n="agreem-pl"/>                   
      </pattern>     
      <action>
        <call-macro n="convert-deriv-1Posit"><with-param pos="1"/></call-macro>
        <call-macro n="convert-deriv2-1Posit"><with-param pos="1"/></call-macro>
        <call-macro n="convert-deriv-1Posit"><with-param pos="2"/></call-macro>
        <call-macro n="convert-deriv2-1Posit"><with-param pos="2"/></call-macro>
        <let><clip pos="2" side="tl" part="x_func"/><lit v=""/></let>
        <let><clip pos="2" side="tl" part="a_func"/><lit v=""/></let>
        <call-macro n="agreement-adj-ind-pl-2Posit"><with-param pos="1"/><with-param pos="2"/></call-macro>
```    

