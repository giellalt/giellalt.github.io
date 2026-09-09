// URLs and fetch/parse helpers for the generated per-repo "docs-data" badges.
//
// Every language repo publishes small JSON (and SVG) files on its `generated`
// branch under docs-data/, e.g. fst-version.json, speller-suggestions.json,
// gramcheck-rules.json. shields.io renders them as badges via its endpoint API.

const RAW = 'https://raw.githubusercontent.com/giellalt';
const DOCS_DATA = 'generated/docs-data';

/** Raw URL of a docs-data file on `<repo>`'s `generated` branch. */
export function docsDataUrl(repo, file) {
    return `${RAW}/${repo.name}/${DOCS_DATA}/${file}`;
}

/** A shields.io "endpoint" badge `<img>` driven by a docs-data JSON file. */
export function endpointBadge(repo, file, label, alt) {
    const img = document.createElement('img');
    img.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=' +
        encodeURIComponent(docsDataUrl(repo, file)) +
        '&label=' + encodeURIComponent(label),
    );
    img.setAttribute('alt', alt);
    return img;
}

/** Fetch a docs-data JSON badge file and return its `message` field, or null. */
export async function fetchBadgeData(repo, file) {
    try {
        const response = await fetch(docsDataUrl(repo, file));
        if (!response.ok) return null;
        const data = await response.json();
        return data.message || null;
    } catch (error) {
        return null;
    }
}

/**
 * Fetch fst-variants.json and return the variants that ship a speller as
 * `[{ category, code }]` (category is singular: dialect / area / orthography /
 * writing-system), or null when there are none.
 */
export async function fetchVariantsData(repo) {
    try {
        const response = await fetch(docsDataUrl(repo, 'fst-variants.json'));
        if (!response.ok) return null;
        const data = await response.json();

        const variants = [];
        const categoryMap = {
            dialects: 'dialect',
            areas: 'area',
            orthographies: 'orthography',
            writing_systems: 'writing-system',
        };

        for (const category of Object.keys(categoryMap)) {
            if (Array.isArray(data[category])) {
                for (const variant of data[category]) {
                    if (variant.has_speller === true) {
                        variants.push({ category: categoryMap[category], code: variant.code });
                    }
                }
            }
        }

        return variants.length > 0 ? variants : null;
    } catch (error) {
        return null;
    }
}

/** Parse "v1.2.3" / "1.2.3" into `{ major, minor, patch }`, or null. */
export function parseVersion(versionString) {
    const match = versionString && versionString.match(/v?(\d+)\.(\d+)\.(\d+)/);
    if (!match) return null;
    return {
        major: parseInt(match[1]),
        minor: parseInt(match[2]),
        patch: parseInt(match[3]),
    };
}

/** Parse a badge count like "234", "1.2k", "47 K" into an integer, or null. */
export function parseCount(countString) {
    if (!countString) return null;
    const match = countString.match(/^([\d.]+)\s*k?$/i);
    if (!match) return null;
    const number = parseFloat(match[1]);
    return Math.floor(/k/i.test(countString) ? number * 1000 : number);
}
