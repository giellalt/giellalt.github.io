# Change word order


##  From preposition to postposition


Example sme: *maŋŋel* can be both pr and post, *maŋa* is post


Bidix:


```
<e><p><l>maŋŋel<s n="pr"/></l><r>maŋa<s n="post"/></r></p></e>
<e><p><l>maŋŋel<s n="post"/></l><r>maŋa<s n="post"/></r></p></e>
```


**sme-smn t1x:** 

REGLA: prep to postp: adding pr_po as name to the chunk, we change order in t2x


```
    <rule comment="REGLA: prep to postp">
      <pattern>
        <pattern-item n="prep"/>
      </pattern>
      <action>
        <call-macro n="remove-semtag1"><with-param pos="1"/></call-macro>
        <let><clip pos="1" side="tl" part="a_func"/><lit v=""/></let>
       <choose>
         <when><test><and><equal><clip pos="1" side="sl" part="a_adpos"/><lit-tag v="pr"/></equal>
                          <equal><clip pos="1" side="tl" part="a_adpos"/><lit-tag v="post"/></equal>
           </and></test>
           <let><var n="adpos_chunk_name"/><lit v="pr_po"/></let></when>
         <otherwise>
           <let><var n="adpos_chunk_name"/><lit v="pr_pr"/></let>
         </otherwise>
       </choose>
        <out>
          <chunk namefrom="adpos_chunk_name" case="caseFirstWord">
            <tags>
              <tag><lit-tag v="SN"/></tag>
            </tags>
            <lu>
              <clip pos="1" side="tl" part="whole"/>
            </lu>
          </chunk>
        </out>
      </action>
    </rule> 
```


**sme-smn t2x:** 

REGLA: PR_PO - here we change the order from 1 2 to 2 1


```
    <def-cat n="PR_PO">
       <cat-item lemma="pr_po" tags="*"/>
    </def-cat>


    <rule comment="REGLA: PR_PO">
    	<pattern>
       		<pattern-item n="PR_PO"/>
       	 	<pattern-item n="GenCompl"/>
    	</pattern>
      	<action>
    		<out>
      	  		<chunk>
					<clip pos="2" part="whole"/>
				</chunk>
				<b pos="1"/>
				<chunk>
					<clip pos="1" part="whole"/>
				</chunk>
			</out>
      	  </action>
    </rule>
```


##  From SOV to SVO

 
**sme-smn t1x:**

category obj_l (object to left) when function tag is @OBJ→. All the other function tags are category nom. \\ see REGLA: OBJ to left


**sme-smn t2x:**

REGLA: OBJ - here we change the order from 1 2 to 2 1


```
<rule comment="REGLA: OBJ">
    <pattern>
       <pattern-item n="OBJL"/>
       <pattern-item n="SV"/>
    </pattern>
      <action>
    	<out>
      	<chunk>
        	<clip pos="2" part="whole"/>
      	</chunk>
      	<b pos="1"/>
        <chunk>
        	<clip pos="1" part="whole"/>
      	</chunk>
    	</out>
     </action>
</rule>
```










