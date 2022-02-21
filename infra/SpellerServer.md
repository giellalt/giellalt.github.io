# Speller servers

Two speller server instances run on divvun.uit.no as systemd services, `divvun.no`
and `divvun.org`.

Online spellers using these services are found at
[divvun.no](https://divvun.no/korrektur/speller-demo.html) and
[divvun.org](https://divvun.org/proofing/online-speller.html)

When speller files are added, updated or removed, the servers pick up the changes and add, update or remove the language automatically.

## Update a speller

### `divvun.no` language

scp `<mylang>`-mobile.zhfst webbuilder@divvun.uit.no:divvun_no/

### `divvun.org` language

scp `<mylang>`-mobile.zhfst webbuilder@divvun.uit.no:divvun_org/

## Install a new language

### `divvun.no` language

scp `<mylang>`-mobile.zhfst webbuilder@divvun.uit.no:divvun_no/

### `divvun.org` language

scp `<mylang>`-mobile.zhfst webbuilder@divvun.uit.no:divvun_org/

## Remove a language

### `divvun.no` language
```bash
ssh webbuilder@divvun.uit.no
rm divvun_no/`<mylang>`-mobile.zhfst
```

### `divvun.org` language
```bash
ssh webbuilder@divvun.uit.no
rm divvun_org/`<mylang>`-mobile.zhfst
```

## Update ck-ospell

```bash
ssh webbuilder@divvun.uit.no
cd ck-ospell
git pull --rebase
```

Restart the divvun.no and divvun.org systemd services
