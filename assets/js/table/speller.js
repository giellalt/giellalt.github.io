// Speller overview tables. (Former spellertable.js.)
//
// Same shape as gramcheck.js — maturity buckets + an "undefined" list — with an
// extra "Suggestion Quality" column that fans out per FST variant.

import { addr, cell, th, thLeft } from './dom.js';
import { reponame2langname } from './names.js';
import { buildTable, buildList } from './core.js';
import { addRepo, addLemmaCount } from './cells.js';
import { fetchBadgeData, fetchVariantsData, endpointBadge } from './badges.js';
import { classifyAll } from './maturity.js';

const MATURITY = {
    versionFile: 'speller-version.json',
    countFile: 'fst-lemmacount.json',
    betaMin: 10000,
    alphaMin: 1000,
};

const pick = (repos, mainFilter, level) =>
    classifyAll(repos, mainFilter, MATURITY).then((buckets) => buckets[level] || []);

// --- cells ---------------------------------------------------------------

function spellerHeader() {
    const tr = document.createElement('tr');
    tr.appendChild(thLeft('Documen&shy;tation'));
    tr.appendChild(thLeft('Reposi&shy;tory'));
    tr.appendChild(th('Speller version', 'width: 11%; text-align: left;'));
    tr.appendChild(th('Lemma Count', 'width: 11%; text-align: left;'));
    tr.appendChild(th('Suggestion Quality', 'width: 30%; text-align: left;'));
    return tr;
}

async function versionCell(repo) {
    const version = await fetchBadgeData(repo, MATURITY.versionFile);
    const badge = endpointBadge(repo, MATURITY.versionFile, 'V', 'Speller version');
    if (!version) return cell(badge);

    const langCode = repo.name.replace(/^lang-/, '');
    const link = document.createElement('a');
    link.setAttribute('href',
        `https://github.com/giellalt/${repo.name}/releases/tag/speller-${langCode}%2F${version}`);
    link.appendChild(badge);
    return cell(link);
}

function suggestionBadgeLink(repo, href, file, label, alt) {
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.appendChild(endpointBadge(repo, file, label, alt));
    return a;
}

async function suggestionCell(repo) {
    const td = document.createElement('td');
    const report = '/' + repo.name + '/typosreport/';

    td.appendChild(suggestionBadgeLink(
        repo, report, 'speller-suggestions.json', 'S', 'Suggestion Quality'));

    const variants = await fetchVariantsData(repo);
    if (variants) {
        for (const variant of variants) {
            td.appendChild(document.createElement('br'));
            td.appendChild(suggestionBadgeLink(
                repo,
                report + '?variant=' + variant.code,
                `speller-suggestions-${variant.code}.json`,
                'S-' + variant.code,
                `Suggestion Quality: ${variant.category}-${variant.code}`,
            ));
        }
    }
    return td;
}

async function spellerRow(repo) {
    const row = document.createElement('tr');
    row.appendChild(cell(addr(reponame2langname(repo.name), '/' + repo.name + '/')));
    row.appendChild(addRepo(repo));
    row.appendChild(await versionCell(repo));
    row.appendChild(addLemmaCount(repo));
    row.appendChild(await suggestionCell(repo));
    return row;
}

function spellerLi(repo) {
    const li = document.createElement('li');
    li.appendChild(addr(reponame2langname(repo.name), '/' + repo.name + '/'));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(addr('(source)', repo.html_url));
    return li;
}

// --- public API --------------------------------------------------------

export const addSpellerRepoTableByMaturity = (repos, mainFilter, maturityLevel) =>
    buildTable({
        repos, colCount: 5,
        header: spellerHeader,
        row: spellerRow,
        select: (list) => pick(list, mainFilter, maturityLevel),
    });

export const addSpellerUnorderedListByMaturity = (repos, mainFilter) =>
    buildList({
        repos,
        item: spellerLi,
        select: (list) => pick(list, mainFilter, 'undefined'),
    });
