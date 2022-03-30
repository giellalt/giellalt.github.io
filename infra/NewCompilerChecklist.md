



We want to use the noncommercial compilers on gtlab (earlier victorio).
In order to do list, we must change the compilers, the lookup program,
and recompile the fsts. The process is:


1. Compile files with new compilers and move to /opt/newcompiler_smi
1. Change path to compiler in conf.pl from c-fsm to /usr/local/bin
1. Move opt/newcompiler_smi to opt/smi


When they are all in place we move the reference to compilers
and lookup in `conf.pl`.


here is an overview. Files in newcompiler_smi newer than 22 07:02
have been updated (and marked `ok` below).




* /opt/smi/bxr/bin/:  
**  bxr.fst -- ok
**  ibxr.fst -- ok


* /opt/smi/ciw/bin/:  
**  ciw.fst -- ok
**  iciw.fst -- ok




* /opt/smi/common/bin/:  
**  allcaps.fst -- 
**  geo.fst -- ok
**  ped-sme.fst -- 


* /opt/smi/cor/bin/:  
**  cor.fst -- ok
**  icor.fst -- ok
**  orth-cor.fst -- ok
**  orth-kor.fst -- ok


* /opt/smi/fao/bin/:  
**  fao.fst -- ok
**  ifao.fst -- ok


* /opt/smi/fin/bin/:  
**  clock-fin.fst -- ok
**  fin.fst -- ok
**  fin-inum.fst -- ok
**  fin-num.fst -- ok
**  iclock-fin.fst -- ok
**  ifin.fst -- ok


* /opt/smi/ipk/bin/:  
**  iipk.fst -- ok
**  ipk.fst -- ok
**  orth-ipk.fst -- ok


* /opt/smi/kal/bin/:  
**  2009 hyph-kal.fst -- ok
**  2010 ikal.fst -- ok
**  2010 kal.fst -- ok
**  2009 orth-kal.fst -- ok (but not yet in newinfra!)
**  2009 phon-kal.fst -- ok


* /opt/smi/kom/bin/:  
**  ikom.fst -- ok
**  kom.fst -- ok
**  kom-num.fst -- ok


* /opt/smi/mhr/bin/:  
** imhr.fst -- ok 
** mhr.fst -- ok
** mhr-num.fst -- ok


* /opt/smi/myv/bin/:  
** imyv.fst -- ok (note that the russian tags was lost in ths conversion)
** latintag-myv.fst -- 
** myv.fst -- ok
** myv-num.fst -- ok


* /opt/smi/nno/bin/:  
** nno-num.fst -- ok


* /opt/smi/rus/bin/:  
** clock-rus.fst -- ok
** date-rus.fst -- ok
** iclock-rus.fst -- ok
** idate-rus.fst -- ok
** rus-inum.fst -- ok
** rus-num.fst -- ok


* /opt/smi/sjd/bin/:  
** clock-sjd.fst -- ok
** date-sjd.fst -- ok
** iclock-sjd.fst -- ok
** idate-sjd.fst -- ok
** isjd.fst -- ok
** sjd.fst -- ok
** sjd-inum.fst -- ok
** sjd-num.fst -- ok


* /opt/smi/sje/bin/:  
** isje.fst -- ok
** sje.fst -- ok
** sje-num.fst -- ok


* /opt/smi/sma/bin/:  
** clock-sma.fst -- ok
** date-sma.fst -- ok
** hyphrules-sma.fst -- ok (hyphenation.xfst)
** hyph-sma.fst -- 
** iclock-sma.fst -- ok
** idate-sma.fst -- ok
** isma.fst -- ok
** isma-L.restr.fst -- 
** isma-norm.fst -- 
** isma-SO.restr.fst -- 
** ped-sma.fst -- 
** phon-sma.fst -- ok
** sma.fst -- ok
** sma-inum.fst -- ok
** sma-L.restr.save -- 
** sma-norm.fst -- 
** sma-num.fst -- ok
** typos.fst -- 


* /opt/smi/sme/bin/:  
** clock-sme.fst -- ok
** date-sme.fst -- ok
** hyphrules-sme.fst -- 
** hyph-sme.fst -- ok
** hyph-sme.save -- ok
** iclock-sme.fst -- ok
** idate-sme.fst -- ok
** isme.fst -- ok
** isme-GG.restr.fst -- ok
** isme-KJ.restr.fst -- 
** isme-norm.fst -- ok
** isme-restr.fst -- 
** oahpa-isme-norm.fst -- ok
** ped-sme.fst -- ok
** phon-sme.fst -- ok
** pos-sme.fst -- ok
** sme.fst -- ok
** sme-inum.fst -- ok
** smenob.fst -- 
** sme-norm.fst -- ok
** sme-num.fst -- ok
** s-sme.fst -- ok
** typos.fst -- ok
** valency-sme.fst -- ok
** val-sme.fst -- ok


* /opt/smi/smj/bin/:  
** hyph-smj.fst -- ok
** iclock-smj.fst -- ok
** ismj.fst -- ok
** ismj-norm.fst -- XXX in newinfra?
** smj.fst -- ok
** smj-num.fst -- ok
** typos.fst -- 


* /opt/smi/smn/bin/:  
** clock-smn.fst -- ok
** date-smn.fst -- ok
** iclock-smn.fst -- ok
** idate-smn.fst -- ok
** ismn.fst -- ok
** smn.fst -- ok
** smn-num.fst -- ok


* /opt/smi/sms/bin/:  
** isms.fst -- ok
** sms.fst -- ok
** sms-num.fst -- ok


* /opt/smi/udm/bin/:  
** iudm.fst -- ok
** udm.fst -- ok


* /opt/smi/yrk/bin/:  
** yrk-num.fst -- ok
** yrk-num.fst.commercial -- ok
