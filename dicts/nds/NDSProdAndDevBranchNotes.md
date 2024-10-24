# Prod adn Dev Branch Notes

Working with prod and trunk stuff

## Switching a production server from trunk to prod

- check out tag to new dir _neahtta-prod-tag_

- in new dir, switch to runk for translations/ configs/ and dicts/

- _copy_ the following:

```
    neahtta/dicts/*.xml neahtta-prod-tag/dicts/
    neahtta/dicts/*.bak neahtta-prod-tag/dicts/
    neahtta/configs/*.yaml neahtta-prod-tag/configs/*.yaml
    neahtta/user_log.txt neahtta-prod-tag/user_log.txt
```

- _copy_ the following.

```
     neahtta/secret_key.do.not.check.in neahtta-prod-tag/
```

- then test configuration

```
     nds test-configuration sanit
     nds test-configuration baakoeh
```

- troubleshoot any errors with the above

- in _neahtta-prod-tag_

```
     nds strings compile
```

- then, stop services

```
   sudo service nds-sanit stop
   sudo service nds-baakoeh stop
```

- then

```
   cd ~/
     mv ~/neahtta ~/neahtta-trunk
     mv ~/neahtta-prod ~/neahtta
```

- then once more

```
     nds test-configuration sanit
     nds test-configuration baakoeh
```

- then finally...

```
   sudo service nds-sanit start
   sudo service nds-baakoeh start
```
