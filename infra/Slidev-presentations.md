# Slidev Integration

Dette repoet har no støtte for [Slidev](https://sli.dev/) presentasjonar som ein del av Jekyll-byggeprosessen.

## Korleis det fungerer

1. **Skriv markdown** som vanleg
2. **Lag lenker** som sluttar på `-slidev/` for å referere til ein Slidev-presentasjon
3. **Byggeprosessen** detecterer desse lenkjene og genererer automatisk Slidev-presentasjonar

## Eksempel

Viss du har ei fil `introduksjon.md`:

```markdown
# Introduksjon til GiellaLT

## Kapittel 1
Innhald her...

## Kapittel 2  
Meir innhald...
```

Og du lagar ei lenke til `introduksjon-slidev/dist/` i ein annan fil:

```markdown
[Sjå presentasjonen](introduksjon-slidev/dist/)
```

Så vil byggeprosessen automatisk oppdage lenka og generere ein Slidev-presentasjon frå `introduksjon.md` som blir tilgjengeleg på `introduksjon-slidev/dist/`.

## Korleis det fungerer

1. **Oppdag lenker**: GitHub Actions skannar alle `.md` og `.html` filer for lenker som sluttar på `-slidev/dist/`
2. **Bygg presentasjonar**: For kvar lenke blir den tilsvarande `.md`-fila konvertert til ein Slidev-presentasjon
3. **Publiser**: Jekyll kopierer presentasjonane som statiske filer til den publiserte nettstaden

**Viktig**: Berre lenker som sluttar på `-slidev/dist/` vil trigge generering av presentasjonar.

## Lokal testing

For å teste Slidev-funksjonaliteten lokalt:

```bash
# Installer avhengigheter
npm install

# Test Slidev-integrasjonen
./test-slidev.sh

# Eller bygg Jekyll med Slidev-støtte
bundle exec jekyll build
```

## Tilpassing av presentasjonar

Slidev-presentasjonane blir genererte med standard-tema og innstillingar. Du kan tilpasse desse ved å redigere `_plugins/slidev_generator.rb`.

### Standard-innstillingar:
- **Tema**: default
- **Bakgrunn**: #1e1e2e
- **Syntaks-highlighting**: shiki
- **Linjenummer**: av

## Deployment

Slidev-presentasjonane blir automatisk bygde og deployede til GitHub Pages gjennom `.github/workflows/docsygen.yml` når kode blir pusha til `main` eller `slidev` greinene.

## Struktur

```
.
├── introduksjon.md                    # Original markdown
├── introduksjon-slidev/               # Generert Slidev-mappe
│   ├── slides.md                      # Slidev-formatert innhald
│   ├── index.html                     # Landing page
│   └── dist/                          # Bygd presentasjon
│       ├── index.html                 # Hovud-presentasjon
│       └── assets/                    # CSS, JS, etc.
└── _site/introduksjon-slidev/         # I Jekyll _site etter bygging
```

## Feilsøking

- **Presentasjonen blir ikkje generert**: Sjekk at lenka sluttar på `-slidev/` og at tilsvarande `.md`-fil eksisterer
- **Bygge-feil**: Sjekk at Node.js og Slidev er installerte korrekt
- **Styling-problem**: Kontroller Slidev-tema innstillingar i `slidev_generator.rb`