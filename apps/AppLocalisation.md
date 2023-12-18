# Loalising apps and webapps related to the GiellaLT infrastructure

# App overview

The following apps & webapps need localisation:

- [borealium.org](https://borealium.org)
- Divvun Manager
- DM One-click installer
- Páhkat package descriptions
- [satni.org](https://satni.org)

Localisation of each of them is described below.

# [borealium.org](https://borealium.org)

## Languages and fallback mechanisms

`data/languages.ts` contains a list of all languages covered by the site. It has four sections:

<dl>
  <dt>languages</dt>
    <dd>The main language definition, contains language codes and the human readable names, possibly also regions covered by the language, in case there are linguistic or orthographic variation following the regions, or just to ensure a most useful fallback list depending on region: SME in Finland should fall back to Finnish, then English, while SME in Sweden should fall back to Swedish, then English.</dd>
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

# Divvun Manager

(macOS & Windows)

TBW

# DM One-click installer

(Windows)

TBW

# Páhkat package descriptions

TBW

# [satni.org](https://satni.org)

TBW
