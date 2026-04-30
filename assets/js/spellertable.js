// Spellchecker table functions
// This file contains functions specific to spellcheckers
// REQUIRES: tablecommon.js and langtable.js must be loaded first
//           (uses addLemmaCount and addCoreCI from langtable.js)

// Automatic maturity classification based on version and lemma count

async function fetchBadgeData(repo, badgeFile) {
    try {
        const url = `https://raw.githubusercontent.com/giellalt/${repo.name}/main/docs/badgedata/${badgeFile}`;
        const response = await fetch(url);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data.message || null;
    } catch (error) {
        return null;
    }
}

async function fetchVariantsData(repo) {
    try {
        const url = `https://raw.githubusercontent.com/giellalt/${repo.name}/main/docs/badgedata/fst-variants.json`;
        const response = await fetch(url);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        
        // Extract all variants with has_speller: true
        const variants = [];
        const categories = ['dialects', 'areas', 'orthographies', 'writing_systems'];
        const categoryMap = {
            'dialects': 'dialect',
            'areas': 'area',
            'orthographies': 'orthography',
            'writing_systems': 'writing-system'
        };
        
        for (const category of categories) {
            if (data[category] && Array.isArray(data[category])) {
                for (const variant of data[category]) {
                    if (variant.has_speller === true) {
                        variants.push({
                            category: categoryMap[category],
                            code: variant.code
                        });
                    }
                }
            }
        }
        
        return variants.length > 0 ? variants : null;
    } catch (error) {
        return null;
    }
}

function parseVersion(versionString) {
    if (!versionString) return null;
    // Remove 'v' prefix if present, extract version number
    const match = versionString.match(/v?(\d+)\.(\d+)\.(\d+)/);
    if (!match) return null;
    return {
        major: parseInt(match[1]),
        minor: parseInt(match[2]),
        patch: parseInt(match[3])
    };
}

function parseLemmaCount(countString) {
    if (!countString) return null;
    // Handle formats like "12.3k", "47 K", "1.2k", "234"
    // Allow optional whitespace before k/K
    const match = countString.match(/^([\d.]+)\s*k?$/i);
    if (!match) return null;
    const number = parseFloat(match[1]);
    // If it has 'k' or 'K' suffix (case-insensitive), multiply by 1000
    if (/k/i.test(countString)) {
        return Math.floor(number * 1000);
    }
    return Math.floor(number);
}

// Cache for maturity classifications to avoid re-fetching
const maturityCache = new Map();

async function classifySpellerMaturity(repo) {
    // Check cache first
    if (maturityCache.has(repo.name)) {
        return maturityCache.get(repo.name);
    }
    
    // Fetch version and lemma count data
    const versionStr = await fetchBadgeData(repo, 'speller-version.json');
    const lemmaCountStr = await fetchBadgeData(repo, 'fst-lemmacount.json');
    
    // Parse the data
    const version = parseVersion(versionStr);
    const lemmaCount = parseLemmaCount(lemmaCountStr);
    
    let result;
    
    // If either is missing, classify as undefined
    if (!version || lemmaCount === null) {
        result = 'undefined';
    }
    // Classification logic:
    // Production: version >= 1.0.0
    else if (version.major >= 1) {
        result = 'production';
    }
    // Beta: version < 1.0.0 and lemmaCount >= 10000
    else if (lemmaCount >= 10000) {
        result = 'beta';
    }
    // Alpha: version < 1.0.0 and lemmaCount between 1000 and 10000
    else if (lemmaCount >= 1000) {
        result = 'alpha';
    }
    // Experimental: version < 1.0.0 and lemmaCount < 1000
    else {
        result = 'experimental';
    }
    
    // Cache the result
    maturityCache.set(repo.name, result);
    return result;
}

// Spellchecker-specific list item generation

function addSpellerLi(repo) {
    const li = document.createElement('li')
    li.appendChild(addr(reponame2langname(repo.name), '/' + repo.name + '/'))
    li.appendChild(document.createTextNode(' '))
    li.appendChild(addr('(source)', repo.html_url))

    return li
}

function addSpellerUnorderedList(repos, mainFilter, filters) {
    const ul = document.createElement('ul')
    
    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const p = document.createElement('p');
        p.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        p.style.textAlign = 'center';
        p.style.padding = '20px';
        p.style.backgroundColor = '#fff3cd';
        p.style.border = '1px solid #ffeaa7';
        p.style.borderRadius = '8px';
        p.style.color = '#856404';
        return p;
    }
    
    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                ul.appendChild(addSpellerLi(repo))
            }
        }
    }
    // If no repos found, inform the user:
    if (!ul.firstChild) {
        const p = document.createElement('p')
        p.appendChild(document.createTextNode('No repos found.'))
        return p
    } else {
        return ul
    }
}

function addNegSpellerUnorderedList(repos, mainFilter, filters) {
    ul = document.createElement('ul')
    
    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const p = document.createElement('p');
        p.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        p.style.textAlign = 'center';
        p.style.padding = '20px';
        p.style.backgroundColor = '#fff3cd';
        p.style.border = '1px solid #ffeaa7';
        p.style.borderRadius = '8px';
        p.style.color = '#856404';
        return p;
    }
    
    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (!doesTopicsHaveSomeFilter(repo.topics, filters)) {
                ul.appendChild(addSpellerLi(repo))
            }
        }
    }
    // If no repos found, inform the user:
    if (!ul.firstChild) {
        const p = document.createElement('p')
        p.appendChild(document.createTextNode('No repos found.'))
        return p
    } else {
        return ul
    }
}

// Main table view for spellcheckers

function addSpellerTableHeader() {
    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Documen&shy;tation';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Reposi&shy;tory';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Speller version';
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Lemma Count';
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Suggestion Quality';
    heading_5.setAttribute('style', 'width: 28%;');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);

    return row_1;
}

async function addSpellerRepoTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addSpellerTableHeader());

    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const errorRow = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.colSpan = 5; // Match number of columns in header
        errorCell.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        errorCell.style.textAlign = 'center';
        errorCell.style.padding = '30px 20px';
        errorCell.style.backgroundColor = '#fff3cd';
        errorCell.style.border = '1px solid #ffeaa7';
        errorCell.style.borderRadius = '8px';
        errorCell.style.color = '#856404';
        errorRow.appendChild(errorCell);
        tbody.appendChild(errorRow);
        return table;
    }

    for (const repo of repos) {
        if (repo.name.startsWith(mainFilter)) {
            if (filters === null || filters.length === 0) {
                const row = await addSpellerTR(repo);
                tbody.appendChild(row);
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    const row = await addSpellerTR(repo);
                    tbody.appendChild(row);
                }
            }
        }
    }
    // If no repos found, inform the user:
    if (!tbody.firstChild) {
        tbody.appendChild(addEmptyRow(5));
    }
    return table;
}

// Spellchecker-specific table row generation

async function addSpellerVersion(repo) {
    let row_version = document.createElement('td');
    
    // Fetch version data to build release URL
    const versionStr = await fetchBadgeData(repo, 'speller-version.json');
    
    // Extract language code from repo name (e.g., "lang-sma" -> "sma")
    const langCode = repo.name.replace(/^lang-/, '');
    
    const version_image = document.createElement('img');
    version_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fmain%2Fdocs%2Fbadgedata%2Fspeller-version.json&label=V'
    );
    version_image.setAttribute('alt', 'Speller version');
    
    // If we have version data, wrap in link to release page
    if (versionStr) {
        const version_link = document.createElement('a');
        // URL format: https://github.com/giellalt/lang-sma/releases/tag/speller-sma%2Fv4.7.0
        // %2F is URL-encoded /
        version_link.setAttribute(
            'href',
            `https://github.com/giellalt/${repo.name}/releases/tag/speller-${langCode}%2F${versionStr}`
        );
        version_link.appendChild(version_image);
        row_version.appendChild(version_link);
    } else {
        // No version data, just show badge without link
        row_version.appendChild(version_image);
    }
    
    return row_version;
}

async function addSpellerSuggQuality(repo) {
    let row_sugg = document.createElement('td');
    
    // First, try to fetch variants data
    const variantsData = await fetchVariantsData(repo);
    
    // If no variants or all null, show default badge
    if (!variantsData || variantsData.length === 0) {
        const sugg_link = document.createElement('a');
        sugg_link.setAttribute('href', '/' + repo.name + '/typosreport/');
        const sugg_image = document.createElement('img');
        sugg_image.setAttribute(
            'src',
            'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fmain%2Fdocs%2Fbadgedata%2Fspeller-suggestions.json&label=S'
        );
        sugg_image.setAttribute('alt', 'Suggestion Quality');
        sugg_link.appendChild(sugg_image);
        row_sugg.appendChild(sugg_link);
    } else {
        // Add default badge first
        const default_link = document.createElement('a');
        default_link.setAttribute('href', '/' + repo.name + '/typosreport/');
        const default_image = document.createElement('img');
        default_image.setAttribute(
            'src',
            'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fmain%2Fdocs%2Fbadgedata%2Fspeller-suggestions.json&label=S'
        );
        default_image.setAttribute('alt', 'Suggestion Quality');
        default_link.appendChild(default_image);
        row_sugg.appendChild(default_link);
        row_sugg.appendChild(document.createElement('br'));
        
        // Add variant badges
        for (let i = 0; i < variantsData.length; i++) {
            const variant = variantsData[i];
            const variant_link = document.createElement('a');
            variant_link.setAttribute('href', '/' + repo.name + '/typosreport/?variant=' + variant.code);
            const variant_image = document.createElement('img');
            const variantFile = `speller-suggestions-${variant.code}.json`;
            variant_image.setAttribute(
                'src',
                'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fmain%2Fdocs%2Fbadgedata%2F' + encodeURIComponent(variantFile) + '&label=' + encodeURIComponent('S-' + variant.code)
            );
            variant_image.setAttribute('alt', `Suggestion Quality: ${variant.category}-${variant.code}`);
            variant_link.appendChild(variant_image);
            row_sugg.appendChild(variant_link);
            if (i < variantsData.length - 1) {
                row_sugg.appendChild(document.createElement('br'));
            }
        }
    }
    
    return row_sugg;
}

async function addSpellerTR(repo) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2langname(repo.name), '/' + repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(await addSpellerVersion(repo));
    row.appendChild(addLemmaCount(repo));
    row.appendChild(await addSpellerSuggQuality(repo));

    return row;
}

// New maturity-based table generation

async function addSpellerRepoTableByMaturity(repos, mainFilter, maturityLevel) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addSpellerTableHeader());

    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const errorRow = document.createElement('tr');
        const errorCell = document.createElement('td');
        errorCell.colSpan = 5; // Match number of columns in header
        errorCell.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        errorCell.style.textAlign = 'center';
        errorCell.style.padding = '30px 20px';
        errorCell.style.backgroundColor = '#fff3cd';
        errorCell.style.border = '1px solid #ffeaa7';
        errorCell.style.borderRadius = '8px';
        errorCell.style.color = '#856404';
        errorRow.appendChild(errorCell);
        tbody.appendChild(errorRow);
        return table;
    }

    // Filter repos by mainFilter and classify them
    const langRepos = repos.filter(repo => repo.name.startsWith(mainFilter));
    
    // Classify all repos in parallel
    const classifications = await Promise.all(
        langRepos.map(async repo => ({
            repo: repo,
            maturity: await classifySpellerMaturity(repo)
        }))
    );
    
    // Filter by desired maturity level
    const filteredRepos = classifications
        .filter(item => item.maturity === maturityLevel)
        .map(item => item.repo);
    
    // Add rows to table (async)
    for (const repo of filteredRepos) {
        const row = await addSpellerTR(repo);
        tbody.appendChild(row);
    }
    
    // If no repos found, inform the user:
    if (!tbody.firstChild) {
        tbody.appendChild(addEmptyRow(5));
    }
    
    return table;
}

async function addSpellerUnorderedListByMaturity(repos, mainFilter) {
    const ul = document.createElement('ul');
    
    // Handle case where GitHub API data is not available
    if (!repos || !Array.isArray(repos)) {
        const p = document.createElement('p');
        p.innerHTML = '<strong>⚠️ GitHub repository data is temporarily unavailable</strong><br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';
        p.style.textAlign = 'center';
        p.style.padding = '20px';
        p.style.backgroundColor = '#fff3cd';
        p.style.border = '1px solid #ffeaa7';
        p.style.borderRadius = '8px';
        p.style.color = '#856404';
        return p;
    }
    
    // Filter repos by mainFilter and classify them
    const langRepos = repos.filter(repo => repo.name.startsWith(mainFilter));
    
    // Classify all repos in parallel
    const classifications = await Promise.all(
        langRepos.map(async repo => ({
            repo: repo,
            maturity: await classifySpellerMaturity(repo)
        }))
    );
    
    // Filter by undefined maturity
    const undefinedRepos = classifications
        .filter(item => item.maturity === 'undefined')
        .map(item => item.repo);
    
    // Add items to list
    for (const repo of undefinedRepos) {
        ul.appendChild(addSpellerLi(repo));
    }
    
    // If no repos found, inform the user:
    if (!ul.firstChild) {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode('No repos found.'));
        return p;
    }
    
    return ul;
}
