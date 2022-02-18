# Virtual servers

Here we document our servers and common machines. If some servers are down, see our [in case of a crisis document](DontPanic.html)


# List over the machines


- divvun.uit.no
- gtlab.uit.no
- gtoahpa-01.uit.no
- gtdict.uit.no
- gtsvn-01.uit.no
- gtsvn.uit.no
- gtweb-01.uit.no
- satni.uit.no
- stallo.uit.no (shared server)


Each machine is documented below.


#  divvun.uit.no


#  gtlab.uit.no


- Specifications:
	- OS: Fedora 28
	- CPU: 8
	- Minne: 16GB


- Running services:
	- none


#  gtoahpa-01.uit.no


- Specifications:
	- OS: Centos 7
	- CPU: 8
	- Minne: 16GB


- Running services:
	- oahpa
		- sme_oahpa_project ([http://oahpa.no/davvi/])
		- sms_oahpa_project ([http://oahpa.no/nuorti/])
		- sma_oahpa_project ([http://oahpa.no/aarjel/])
		- sjd_oahpa_project ([http://oahpa.no/kiilt/])
		- smn_oahpa_project ([http://oahpa.no/aanaar/])
		- est_oahpa_project ([http://oahpa.no/eesti/])
		- vro_oahpa_project ([http://oahpa.no/voro/])
		- fkv_oahpa_project ([http://oahpa.no/kveeni/])
		- myv_oahpa_project ([http://oahpa.no/erzya/])
		- crk_oahpa_project ([http://oahpa.no/nehiyawetan/])
	- others
		- konteaksta ([http://oahpa.no/konteaksta/])
		- kuvsje ([http://kuvsje.oahpa.no/])


#  gtdict.uit.no


- Specifications:
	- OS: Centos 7
	- CPU: 8
	- Minne: 16GB


- Running services:
	- NDS:
		- [https://sanit.oahpa.no]
		- [https://baakoeh.oahpa.no]
		- [https://kyv.oahpa.no]
		- [https://muter.oahpa.no]
		- [https://saanih.oahpa.no]
		- [https://vada.oahpa.no]
		- [https://bahkogirrje.oahpa.no]
		- [https://saan.oahpa.no]
		- [https://sanat.oahpa.no]
		- [https://sonad.oahpa.no]
		- [https://valks.oahpa.no]


#  gtsvn-01.uit.no


#  gtsvn.uit.no


#  gtweb-01.uit.no


- Specifications:
	- OS: Centos 7
	- CPU: 4
	- Minne: 16GB


- Running services:
	- korp
		- sme, smj, sma, smn, sms, nob_parallel and fin_parallel ([http://gtweb.uit.no/korp])
		- fkv, fit, vep, vro, fkv_parallel ([http://gtweb.uit.no/f_korp/])
		- kpv, koi, udm, mdf, myv, mrj, mhr ([http://gtweb.uit.no/u_korp/])
		- tyv ([http://gtweb.uit.no/tyv_korp/])
	- others
		- gïelese ([http://gielese.no/])
		- Jorgal/MT-testing/Apertium ([https://gtweb.uit.no/jorgal/])
		- cgi-bin
		- webdicts


#  satni.uit.no (oppgradert)


#  stallo.uit.no








# Other documentation


Admin documentation/log:
- private/admin/README-admin-gtoahpa.txt: for changes, package installation, and other things that must remain private.


General practices:
- Admin group on the four (following CentOS) are to add users to the wheel group (usermod -G wheel USER).
