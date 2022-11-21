

Half agreement
==============

 +Attr => +Sg+Gen, e.g. `vuosttas girjjis` => `vuosmuu kirjeest`                           


## Define categories for use in pattern in the rule
List with adjectives, pronouns, numbers which has agreement in the target language, and not in the source language 

```  
<section-def-cats>
    <def-cat n="agreement-attr">                             
      <cat-item lemma="vuosttas" tags="adj.ord.attr.*"/>
      <cat-item lemma="vuosttaš" tags="adj.ord.attr.*"/> 
      <cat-item lemma="aiddonas" tags="adj.*.attr.*"/> 
      <cat-item lemma="aiddonas" tags="adj.attr.*"/> 
      <cat-item lemma="dárbbašlaš" tags="adj.*.attr.*"/> 
      <cat-item lemma="dárbbašlaš" tags="adj.attr.*"/>  ...
```

    
List with the tags in the noun, when the attribute should have Sg+Gen


```    
<def-cat n="agreem-sg-gen">                             
      <cat-item tags="np.*.sg.gen.*"/>                    
      <cat-item tags="np.sg.gen.*"/>                    
      <cat-item tags="n.*.sg.gen.*"/>                    
      <cat-item tags="n.sg.gen.*"/>                    
      <cat-item tags="n.*.sg.ill.*"/>                    
      <cat-item tags="n.sg.ill.*"/>                    
      <cat-item tags="n.*.sg.loc.*"/>                    
      <cat-item tags="n.sg.loc.*"/>                    
      <cat-item tags="n.*.ess.*"/>                    
      <cat-item tags="n.ess.*"/>                    
      <cat-item tags="*.n.sg.gen.*"/>                    
      <cat-item tags="*.n.sg.ill.*"/>                    
      <cat-item tags="*.n.sg.loc.*"/>                    
      <cat-item tags="*.n.*.ess.*"/>                    
    </def-cat>  
```

    


## Define attributes, the tags to the left of Sg
```  <section-def-attrs>
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
### macro 1: add sg+gen

```
 <def-macro n="agreement-adj-ind-sg-gen-1Posit" npar="1">  
        <let>
          <clip pos="1" side="tl" part="tags"/>
               <concat>
                 <clip pos="1" side="tl" part="a_npagree_type"/>  
                 <lit-tag v="sg"/>
                 <lit-tag v="gen"/> 
               </concat>                
        </let> 
    </def-macro>
```


## Define pattern in the rule

```
    <rule comment="REGLA: agreement-attr n-sg-gen">                
      <pattern>                                        
        <pattern-item n="agreement-attr"/>                 
        <pattern-item n="agreem-sg-gen"/>                   
      </pattern> 
      <action>
        <call-macro n="convert-deriv-1Posit"><with-param pos="2"/></call-macro>
        <call-macro n="remove-semtag-1Posit"><with-param pos="2"/></call-macro>
        <let><clip pos="2" side="tl" part="x_func"/><lit v=""/></let>
        <let><clip pos="2" side="tl" part="a_func"/><lit v=""/></let>
        <call-macro n="agreement-adj-ind-sg-gen-1Posit"><with-param pos="1"/></call-macro>
```    




