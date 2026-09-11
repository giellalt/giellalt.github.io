// Grammar checker table functions
// This file contains functions specific to grammar checkers
// REQUIRES: tablecommon.js and langtable.js must be loaded first
//           (uses addr, addRepo and reponame2langname from tablecommon.js)

// Automatic maturity classification based on version and rule count

async function fetchBadgeData(repo, badgeFile) {
    try {
        const url = `https://raw.githubusercontent.com/giellalt/${repo.name}/generated/docs-data/${badgeFile}`;
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
        const url = `https://raw.githubusercontent.com/giellalt/${repo.name}/generated/docs-data/fst-variants.json`;
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

function parseRuleCount(countString) {
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
const gramcheckMaturityCache = new Map();

async function classifyGramcheckMaturity(repo) {
    // Check cache first
    if (gramcheckMaturityCache.has(repo.name)) {
        return gramcheckMaturityCache.get(repo.name);
    }
    
    // Fetch version and rule count data
    const versionStr = await fetchBadgeData(repo, 'gramcheck-version.json');
    const ruleCountStr = await fetchBadgeData(repo, 'gramcheck-rules.json');
    
    // Parse the data
    const version = parseVersion(versionStr);
    const ruleCount = parseRuleCount(ruleCountStr);
    
    let result;
    
    // If either is missing, classify as undefined
    if (!version || ruleCount === null) {
        result = 'undefined';
    }
    // Classification logic:
    // Production: version >= 1.0.0
    else if (version.major >= 1) {
        result = 'production';
    }
    // Beta: version < 1.0.0 and ruleCount > 10
    else if (ruleCount > 10) {
        result = 'beta';
    }
    // Alpha: version < 1.0.0 and ruleCount between 5 and 10
    else if (ruleCount >= 5) {
        result = 'alpha';
    }
    // Experimental: version < 1.0.0 and ruleCount < 5
    else {
        result = 'experimental';
    }
    
    // Cache the result
    gramcheckMaturityCache.set(repo.name, result);
    return result;
}

// Grammar checker-specific list item generation

function addGramcheckLi(repo) {
    const li = document.createElement('li')
    li.appendChild(addr(reponame2langname(repo.name), '/' + repo.name + '/'))
    li.appendChild(document.createTextNode(' '))
    li.appendChild(addr('(source)', repo.html_url))

    return li
}

function addGramcheckUnorderedList(repos, mainFilter, filters) {
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
                ul.appendChild(addGramcheckLi(repo))
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

function addNegGramcheckUnorderedList(repos, mainFilter, filters) {
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
            if (!doesTopicsHaveSomeFilter(repo.topics, filters)) {
                ul.appendChild(addGramcheckLi(repo))
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

// Main table view for grammar checkers

function addGramcheckTableHeader() {
    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = 'Documen&shy;tation';
    heading_1.style.textAlign = 'left';
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = 'Reposi&shy;tory';
    heading_2.style.textAlign = 'left';
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = 'Version';
    heading_3.setAttribute('style', 'width: 11%; text-align: left;');
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = 'Rule Count';
    heading_4.setAttribute('style', 'width: 11%; text-align: left;');
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = 'Core CI';
    heading_5.setAttribute('style', 'width: 11%; text-align: left;');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);

    return row_1;
}

async function addGramcheckRepoTable(repos, mainFilter, filters) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addGramcheckTableHeader());

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
                const row = await addGramcheckTR(repo);
                tbody.appendChild(row);
            } else {
                if (doesTopicsHaveSomeFilter(repo.topics, filters)) {
                    const row = await addGramcheckTR(repo);
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

// Grammar checker-specific table row generation

async function addGramcheckVersion(repo) {
    let row_version = document.createElement('td');
    
    // Fetch version data to build release URL
    const versionStr = await fetchBadgeData(repo, 'gramcheck-version.json');
    
    // Extract language code from repo name (e.g., "lang-sma" -> "sma")
    const langCode = repo.name.replace(/^lang-/, '');
    
    const version_image = document.createElement('img');
    version_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fgenerated%2Fdocs-data%2Fgramcheck-version.json&label=V'
    );
    version_image.setAttribute('alt', 'Version');
    
    // If we have version data, wrap in link to release page
    if (versionStr) {
        const version_link = document.createElement('a');
        // URL format: https://github.com/giellalt/lang-sma/releases/tag/gramcheck-sma%2Fv4.7.0
        // %2F is URL-encoded /
        version_link.setAttribute(
            'href',
            `https://github.com/giellalt/${repo.name}/releases/tag/gramcheck-${langCode}%2F${versionStr}`
        );
        version_link.appendChild(version_image);
        row_version.appendChild(version_link);
    } else {
        // No version data, just show badge without link
        row_version.appendChild(version_image);
    }
    
    return row_version;
}

function addRuleCount(repo) {
    let row_rules = document.createElement('td');
    const rule_image = document.createElement('img');
    rule_image.setAttribute(
        'src',
        'https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgiellalt%2F' + repo.name + '%2Fgenerated%2Fdocs-data%2Fgramcheck-rules.json&label=R'
    );
    rule_image.setAttribute('alt', 'Rule Count');
    row_rules.appendChild(rule_image);
    return row_rules;
}

async function addGramcheckTR(repo) {
    let row = document.createElement('tr');

    let row_lang = document.createElement('td');
    row_lang.appendChild(addr(reponame2langname(repo.name), '/' + repo.name + '/'));

    row.appendChild(row_lang);
    row.appendChild(addRepo(repo));
    row.appendChild(await addGramcheckVersion(repo));
    row.appendChild(addRuleCount(repo));
    row.appendChild(addCoreCI(repo));

    return row;
}

// New maturity-based table generation

async function addGramcheckRepoTableByMaturity(repos, mainFilter, maturityLevel) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(addGramcheckTableHeader());

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
            maturity: await classifyGramcheckMaturity(repo)
        }))
    );
    
    // Filter by desired maturity level
    const filteredRepos = classifications
        .filter(item => item.maturity === maturityLevel)
        .map(item => item.repo);
    
    // Add rows to table (async)
    for (const repo of filteredRepos) {
        const row = await addGramcheckTR(repo);
        tbody.appendChild(row);
    }
    
    // If no repos found, inform the user:
    if (!tbody.firstChild) {
        tbody.appendChild(addEmptyRow(5));
    }
    
    return table;
}

async function addGramcheckUnorderedListByMaturity(repos, mainFilter) {
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
            maturity: await classifyGramcheckMaturity(repo)
        }))
    );
    
    // Filter by undefined maturity
    const undefinedRepos = classifications
        .filter(item => item.maturity === 'undefined')
        .map(item => item.repo);
    
    // Add items to list
    for (const repo of undefinedRepos) {
        ul.appendChild(addGramcheckLi(repo));
    }
    
    // If no repos found, inform the user:
    if (!ul.firstChild) {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode('No repos found.'));
        return p;
    }
    
    return ul;
}
