Hva som skal være med
=====================

Hver kontrakt som skal til sendes til underskrift skal inneholde [Avtale
om overføring av bruksrett for
tekstar](http://divvun.no/adm/legal/sd-contract.html), der forfattere,
oversettere, forlag og sametinget inngår en avtale for under hvilke
vilkår tekstene kan brukes. I tillegg skal kontrakten ha to vedlegg:
[Avtale om bruksrett til maskinlagra
tekstar](http://divvun.no/adm/legal/sd-contract-part-3.html) og en liste
over hvilke tekster kontrakten omfatter. Det skal være like mange
eksemplar av kontrakten *og* vedleggene som det er parter som skal
underskrive.

Å fylle ut kontraktene
======================

[Kontraktene våre](http://divvun.no/adm/legal/index.html) er publisert
på internett, og er derfor også tilgjengelig i `cvs`. De er tilgjengelig
på norsk
(`xtdoc/sd/src/documentation/content/xdocs/adm/legal/sd-contract.nb.xml`)
eller nordsamisk
(`xtdoc/sd/src/documentation/content/xdocs/adm/legal/sd-contract.se.xml`).

Fra linje 18 og utover ser kontrakten ut som dette. Disse linjene må
forandres slik at man har de rette dataene.

              <table>
                <tr><th>Rolle:</th>                   <th>Forfattar</th></tr>
                <tr><td>Namn:</td>                    <td> </td></tr>
                <tr><td>Adresse:</td>                 <td> </td></tr>
                <tr><td>Postnummer og -stad:</td>     <td> </td></tr>
              </table>

              <table>
                <tr><th>Rolle:</th>                   <th>Omsetjar</th></tr>
                <tr><td>Namn:</td>                    <td> </td></tr>
                <tr><td>Adresse:</td>                 <td> </td></tr>
                <tr><td>Postnummer og -stad:</td>     <td> </td></tr>
              </table>


              <table>
                <tr><th>Rolle:</th>                   <th>Forleggjar</th></tr>
                <tr><td>Namn:</td>                    <td> </td></tr>
                <tr><td>Adresse:</td>                 <td> </td></tr>
                <tr><td>Postnummer og -stad:</td>     <td> </td></tr>
              </table>
          

... her er et eksempel med en forfatter, en oversetter og forlag:

              <table>
              <tr><th>Rolle:</th>                   <th>Forfattar</th></tr>
              <tr><td>Namn:</td>                    <td>Ole Johan Eira</td></tr>
              <tr><td>Adresse:</td>                 <td>Diergeheavva 14</td></tr>
              <tr><td>Postnummer og -stad:</td>     <td>9520 Kautokeino</td></tr>
              </table>
              
              <table>
              <tr><th>Rolle:</th>                   <th>Omsetjar</th></tr>
              <tr><td>Namn:</td>                    <td>Dagmar Kronstad</td></tr>
              <tr><td>Adresse:</td>                 <td>Nypeveien 283</td></tr>
              <tr><td>Postnummer og -stad:</td>     <td>9500 Alta</td></tr>
              </table>
              
              
              <table>
              <tr><th>Rolle:</th>                   <th>Forleggjar</th></tr>
              <tr><td>Namn:</td>                    <td>Girji Davvi</td></tr>
              <tr><td>Adresse:</td>                 <td>Ávvir Ávvir jorgu</td></tr>
              <tr><td>Postnummer og -stad:</td>     <td>9730 Karasjok</td></tr>
              </table>
          

Her er et annet med *to forfattere*, en oversetter og forlag.

              <table>
              <tr><th>Rolle:</th>                   <th>Forfattar</th></tr>
              <tr><td>Namn:</td>                    <td>Ole Johan Eira</td></tr>
              <tr><td>Adresse:</td>                 <td>Diergeheavva 14</td></tr>
              <tr><td>Postnummer og -stad:</td>     <td>9520 Kautokeino</td></tr>
              </table>
              
              <table>
              <tr><th>Rolle:</th>                   <th>Forfattar</th></tr>
              <tr><td>Namn:</td>                    <td>Nils Ove Krojk</td></tr>
              <tr><td>Adresse:</td>                 <td>Kulmans Doktorgatan 24</td></tr>
              <tr><td>Postnummer og -stad:</td>     <td>SE-900 31 Kålmården</td></tr>
              </table>
              
              <table>
              <tr><th>Rolle:</th>                   <th>Omsetjar</th></tr>
              <tr><td>Namn:</td>                    <td>Dagmar Kronstad</td></tr>
              <tr><td>Adresse:</td>                 <td>Nypeveien 283</td></tr>
              <tr><td>Postnummer og -stad:</td>     <td>9500 Alta</td></tr>
              </table>
              
              
              <table>
              <tr><th>Rolle:</th>                   <th>Forleggjar</th></tr>
              <tr><td>Namn:</td>                    <td>Girji Davvi</td></tr>
              <tr><td>Adresse:</td>                 <td>Ávvir Ávvir jorgu</td></tr>
              <tr><td>Postnummer og -stad:</td>     <td>9730 Karasjok</td></tr>
              </table>
          

Få pdf versjonen og utskrift
============================

For å få en pdf versjon av dette må man ha forrest installert på sin
egen maskin. Vi har laget en [ok innføring i det](forrest-howto.html).
Når det er gjort er det bare å gå til adressen
<http://localhost:8888/adm/legal/sd-contract.html>, trykke på pdf-ikonet
og skrive ut.
