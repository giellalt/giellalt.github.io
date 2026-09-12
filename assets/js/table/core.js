// Generic `<table>` / `<ul>` builders. Every *table.js file used to reimplement
// this skeleton — thead/tbody assembly, the "GitHub data unavailable" branch,
// the per-row filter loop and the "no repos found" fallback.

import {
    emptyRow,
    emptyListNotice,
    dataUnavailableRow,
    dataUnavailableNotice,
} from './dom.js';
import { repoMatches, doesTopicsHaveSomeFilter } from './filter.js';

/**
 * Build a `<table>`.
 *
 *   repos       GitHub repo array, or null/undefined when the API call failed
 *   mainFilter  repo-name prefix, e.g. 'lang-'
 *   filters     topic-tag prefixes (optional; empty = keep all under mainFilter)
 *   header      () => <tr> of <th>
 *   row         (repo) => <tr> | Promise<tr>
 *   colCount    column count, for the empty / unavailable rows
 *   colWidths   optional CSS widths → adds a <colgroup> and fixed layout
 *   select      optional (repos) => repos, replacing the mainFilter/filters step
 */
export async function buildTable({
    repos, mainFilter, filters, header, row, colCount, colWidths, select,
}) {
    const table = document.createElement('table');

    if (colWidths) {
        table.style.tableLayout = 'fixed';
        table.style.width = '100%';
        const colgroup = document.createElement('colgroup');
        for (const width of colWidths) {
            const col = document.createElement('col');
            col.style.width = width;
            colgroup.appendChild(col);
        }
        table.appendChild(colgroup);
    }

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(header());

    if (!Array.isArray(repos)) {
        tbody.appendChild(dataUnavailableRow(colCount));
        return table;
    }

    const selected = select
        ? await select(repos)
        : repos.filter((repo) => repoMatches(repo, mainFilter, filters));

    for (const repo of selected) {
        tbody.appendChild(await row(repo));
    }
    if (!tbody.firstChild) {
        tbody.appendChild(emptyRow(colCount));
    }
    return table;
}

/**
 * Build a `<ul>` of list items (or a `<p>` notice).
 *
 *   repos, mainFilter, item: (repo) => <li>
 *   filters + negate   topic-tag filtering, positive or negated. An empty/
 *                      absent filters list matches every repo under
 *                      mainFilter (same as buildTable), so negate: true
 *                      with no filters keeps none.
 *   select             optional (repos) => repos|Promise<repos>, overrides the above
 */
export async function buildList({
    repos, mainFilter, item, filters, negate = false, select,
}) {
    if (!Array.isArray(repos)) return dataUnavailableNotice();

    const selected = select
        ? await select(repos)
        : repos.filter((repo) => {
            if (!repo.name.startsWith(mainFilter)) return false;
            const hit = doesTopicsHaveSomeFilter(repo.topics, filters);
            return negate ? !hit : hit;
        });

    const ul = document.createElement('ul');
    for (const repo of selected) {
        ul.appendChild(item(repo));
    }
    return ul.firstChild ? ul : emptyListNotice();
}
