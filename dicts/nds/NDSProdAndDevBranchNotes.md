#  Prod adn Dev Branch Notes

Working with prod and trunk stuff




##  Switching a production server from trunk to prod


 * check out tag to new dir *neahtta-prod-tag*


 * in new dir, switch to runk for translations/ configs/ and dicts/


 * *copy* the following:


```
    neahtta/dicts/*.xml neahtta-prod-tag/dicts/
    neahtta/dicts/*.bak neahtta-prod-tag/dicts/
    neahtta/configs/*.yaml neahtta-prod-tag/configs/*.yaml
    neahtta/user_log.txt neahtta-prod-tag/user_log.txt
```


 * *copy* the following.


```
     neahtta/secret_key.do.not.check.in neahtta-prod-tag/
```


 * then test configuration


```
     fab sanit test-configuration
     fab baakoeh test-configuration
```


 * troubleshoot any errors with the above


 * in *neahtta-prod-tag*


```
     fab sanit compile-strings
     fab baakoeh compile-strings
```


 * then, stop services


```
   sudo service nds-sanit stop
   sudo service nds-baakoeh stop
```

 
 * then


```
   cd ~/
     mv ~/neahtta ~/neahtta-trunk
     mv ~/neahtta-prod ~/neahtta
```


 * then once more


```
     fab sanit test-configuration
     fab baakoeh test-configuration
```


 * then finally...


```
   sudo service nds-sanit start
   sudo service nds-baakoeh start
```
