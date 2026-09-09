// Automatic maturity classification, shared by the speller and grammar-checker
// overview pages. Both used to carry a byte-identical copy of this logic.

import { fetchBadgeData, parseVersion, parseCount } from './badges.js';
import {
    emptyRow,
    emptyListNotice,
    dataUnavailableRow,
    dataUnavailableNotice,
} from './dom.js';

const cache = new Map();

/**
 * Classify a repo from its version badge plus a "size" badge (lemma count for
 * spellers, rule count for grammar checkers).
 *
 *   config = { versionFile, countFile, betaMin, alphaMin }
 *
 *   production   version major >= 1
 *   beta         version < 1.0.0  and  count >= betaMin
 *   alpha        version < 1.0.0  and  count >= alphaMin
 *   experimental version < 1.0.0  and  count <  alphaMin
 *   undefined    version or count missing
 *
 * The version file is fetched first: a repo with no released checker (no
 * version badge) is "undefined" regardless of the count, so the second request
 * is skipped for those repos.
 *
 * Results are cached per (repo, countFile) so a page that renders five maturity
 * buckets only fetches each repo's badges once.
 */
export async function classifyMaturity(repo, config) {
    const key = repo.name + '::' + config.countFile;
    if (cache.has(key)) return cache.get(key);

    let result;
    const version = parseVersion(await fetchBadgeData(repo, config.versionFile));
    if (!version) {
        result = 'undefined';
    } else {
        const count = parseCount(await fetchBadgeData(repo, config.countFile));
        if (count === null) result = 'undefined';
        else if (version.major >= 1) result = 'production';
        else if (count >= config.betaMin) result = 'beta';
        else if (count >= config.alphaMin) result = 'alpha';
        else result = 'experimental';
    }

    cache.set(key, result);
    return result;
}

const TABLE_LEVELS = ['production', 'beta', 'alpha', 'experimental'];

/**
 * Render the four maturity tables plus the "undefined" list for an overview
 * page, streaming rows into place in repo-list order as each classification
 * resolves.
 *
 * Every badge request is kicked off up front; the awaits in the loop only gate
 * DOM insertion, so the tables show up immediately (empty) and fill top-to-
 * bottom instead of the whole page blocking on the slowest repo.
 *
 *   targets  { production, beta, alpha, experimental, undefined } -> host elements
 *   config   maturity config (see classifyMaturity)
 *   header   () => <tr>              row  (repo) => <tr> | Promise<tr>
 *   colCount table column count      item (repo) => <li>   (undefined bucket)
 */
export async function renderMaturityBuckets({
    repos, mainFilter, targets, config, header, row, colCount, item,
}) {
    const tbody = {};
    for (const level of TABLE_LEVELS) {
        const table = document.createElement('table');
        const head = document.createElement('thead');
        const body = document.createElement('tbody');
        table.appendChild(head);
        table.appendChild(body);
        head.appendChild(header());
        tbody[level] = body;
        targets[level]?.appendChild(table);
    }
    const list = document.createElement('ul');
    targets.undefined?.appendChild(list);

    if (!Array.isArray(repos)) {
        for (const level of TABLE_LEVELS) tbody[level].appendChild(dataUnavailableRow(colCount));
        targets.undefined?.replaceChildren(dataUnavailableNotice());
        return;
    }

    const inScope = repos.filter((repo) => repo.name.startsWith(mainFilter));
    const pending = inScope.map((repo) => classifyMaturity(repo, config));
    for (let i = 0; i < inScope.length; i++) {
        const level = await pending[i];
        if (level === 'undefined') list.appendChild(item(inScope[i]));
        else tbody[level].appendChild(await row(inScope[i]));
    }

    for (const level of TABLE_LEVELS) {
        if (!tbody[level].firstChild) tbody[level].appendChild(emptyRow(colCount));
    }
    if (!list.firstChild) targets.undefined?.replaceChildren(emptyListNotice());
}
