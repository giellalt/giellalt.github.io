# Loalising apps and webapps related to the GiellaLT infrastructure

# App overview

The following apps & webapps need localisation:

- [borealium.org](https://borealium.org)
- Divvun Manager
- DM One-click installer
- Páhkat package descriptions
- [satni.org](https://satni.org)

Localisation of each of them is described below.

# borealium.org

All pathnames in this section are relative to the root of the [borealium.org](https://github.com/borealium/borealium.org) repository.

## Languages and fallback mechanisms

`data/languages.ts` contains a list of all languages covered by the site. It has four sections:

<dl>
  <dt>regions</dt>
    <dd>Defines all BCP-47 compatible area codes used in the portal, with their localised names. Regions are used to cover linguistic or orthographic variation following the regions, or just to ensure a most useful fallback list depending on region: SME in Finland should fall back to Finnish, then English, while SME in Sweden should fall back to Swedish, then English.</dd>
  <dt>languages</dt>
    <dd>The main language definition, contains language codes and the human readable names.</dd>
  <dt>fallbacks</dt>
    <dd>This is a fallback definition for page content when the requested content is not available in the desired language. This makes pages "multilingual", but in a controlled manner, so that the most appropriate language available is used to build each element of the page.</dd>
  <dt>uiOnly</dt>
    <dd>Languages that are only used to select page language in the portal, not to select tools = we do not make or promote tools for these languages (at least not in this portal).</dd>
  <dt>excludeFromUi</dt>
    <dd>Languages for which we do not have any translated content, but for which we still want them listed in the tools list. That is, skip these languages in the language selection drop down for the site, but list them in the overview of resources for languages.</dd>
</dl>

## Categories

`data/categories.ts` contains localised names and descriptions of categories.

It is seen on top of each category page. One gets to these pages when clicking on a category label.

## Resources

`data/resources/` contains the definition of all resources described on the site. Except for the file `mod.ts`, all files contain strings that should be localised. The strings are the following:

- `name` - the name of the resource
- `description` - a short description of the resource
- `moreInfo` - a longer description of the resource, if wanted
- `links:text` - text to appear on the link button. Often this can just use the English text, but sometimes a translation will work better

## Content files

Most of the content for the portal lives in `src/`. All localisable text is placed in `.flt` files, including in subdirs. At present, the following dirs contain `.flt` files to be localised:

```sh
src/
├── _components
│   └── landing
├── _includes
├── about
├── doc
│   ├── divvun-manager
│   └── website
├── post
│   └── ...
└── privacy
```

# Divvun Manager

(macOS & Windows)

TBW

# DM One-click installer

(Windows)

TBW

# Páhkat package descriptions

Each package has a name and description, both of which can be localised. The entries look like
the following:

```toml
[name]
en = 'North Sámi Speller'
nb = 'Nordsamisk stavekontroll'

[description]
en = 'System-wide speller for North Sámi'
nb = 'Systemvid stavekontroll for nordsamisk'
```

These strings show up in [borealium.org](https://borealium.org/nb/language/se/):

![Pahkattekst i Boeralium](../images/Pahkattekst_i_boeralium.png)

and in the package listing in Divvun Manager:

![Pahkattekst i Divvun Manager](../images/Pahkattekst_i_DM.png)

The strings are defined in the [pahkat.uit.no-index](https://github.com/divvun/pahkat.uit.no-index) repository, in `toml` files, one for each package ackording to the following pathname scheme: `main/packages/<PACKAGE_NAME>/index.toml`. Replace `<PACKAGE_NAME>` with the name of your package. In the example above that would be `speller-sme`, so that the full pathname to the `toml` file should become `main/packages/speller-sme/index.toml`.

To add localised package names and descriptions, just add new lines for your locale/language below the existing ones.

The name and description will be updated in two steps:

1. they will be accessible on the next package update (ie after the next successfull nightly build and upload of already existing packages)
2. the next time borealium.org is build or Divvun Manager loads data anew.

Both steps should be automatic and happen regularly, so on average, new package descriptions will be available pretty soon after they have been committed and pushed.

# satni.org

TBW
