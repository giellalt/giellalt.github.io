# SJEKKLISTE for VD-ordboka (gammel infra):


# Spesielt for VD
* sjekk at alle lemmaer (adjektiver, verb, substantiver, numeraler, pronIndef og propernouns) som genererer med enn en grunnform, merkes med v1 osv i fst og vmax i dict-filene. Eksempel på kommando for å sjekke dette. Pass på at isme-norm.fst er kompilert med at v1-taggene går til 0 i tag-not-save.regex før kommandoene:


```
grep '<l ' adjective_smenob.xml | grep -v vmax | tr "<" ">" | cut -d ">" -f3 |
 sed 's/$/+A+Sg+Nom/' | dsmeNorm | grep -v "?" | sed 's/^$/€/' | tr "\n" " " | 
 tr "€" "\n" | grep 'A+.*A+' | l
```


- sjekk at substantiver er i riktig fil (G3, Actor osv.)
- sjekk gt/common/src/tag-not-save (**oppdater** til nyinfra)
- genere lemmaer fra hver ordklasse med codes.txt-filene for å teste kodene
- evt. legge til `illpl="no"` og `pg="no"` i leksikonfilene
- evt. legge til `l_ref`


# SJEKKLISTE for den nykompilerte VD-ordboka (gammel infra):


# Minst 2-3 ord fra hver ordklassefil - og sjekk

- hvordan ordklasse er presentert
- entalls- og flertallsstedsnavn
- flertallslemmaer
- hvordan <mg> og <tg> er presentert
- hvordan <re> og <te> er presentert
- analysetaggene
- nøkkelformer
	- at de er med for substantiv, stedsnavn, verb, adjektiv, numeraler og pron.indef
	- taggene
	- presentasjonstekst
	- sortering av variasjon (flere ordfomer med samme analyse)
	- lemmaer med flere skrivemåter, bør ha grunnformen med i nøkkelformer. F.eks. hvis man med tunealla-lemmaet genererer både tunealla og tunnealla. Alternativt kan man ha presentere hver grunnform med eget oppslag i ordboka. Sjekk da at det er riktige nøkkelformer til hver grunnform.
	- sjekke spesielle verb: hjelpeverb, værverb etc.
- at eksempler er med, og hvordan de er presentert
- at l_ref-linking fungerer
- at illpl="no" fungerer
- at homonymer får rett bøyningsparadigme, feks beassi = never og beassi = reir
- at ønskede ordformer er med i ordboka
- at sublemmaer er med
- at evt. spellrelax fungerer


# Minst ett ord fra hver statisk fil

- hvordan ordklasse er presentert
- analysetaggene
- at linking fungerer
- at eksempler er med, og hvordan de er presentert
- at det er en ryddig presentasjon av homonymer
	- vi ønsker ikke presentere homonymer hver for seg, med link til samme grunnord. De vil vi heller presentere med alternative analyse-stringer.
- nøkkelformer (dvs fullt paradigme)
