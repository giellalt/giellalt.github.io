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
 * Each repo's classification is kicked off up front, for every repo at once,
 * so no repo's fetch waits on an earlier one to start. The four tables show
 * up immediately (empty) rather than waiting on any of that work.
 *
 * Rows are still appended in original repo-list order, not completion order,
 * so that repos don't shuffle around as they resolve — the final loop awaits
 * each repo's task before moving to the next. That's a deliberate trade-off
 * for stable ordering, not a fairness guarantee: a slow or hanging fetch for
 * one repo does hold up every row behind it in the list, even ones that
 * already resolved.
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
    const tasks = inScope.map(async (repo) => {
        const level = await classifyMaturity(repo, config);
        if (level === 'undefined') return { level, node: item(repo) };
        return { level, node: await row(repo) };
    });
    for (const task of tasks) {
        const { level, node } = await task;
        if (level === 'undefined') list.appendChild(node);
        else tbody[level].appendChild(node);
    }

    for (const level of TABLE_LEVELS) {
        if (!tbody[level].firstChild) tbody[level].appendChild(emptyRow(colCount));
    }
    if (!list.firstChild) targets.undefined?.replaceChildren(emptyListNotice());
}
