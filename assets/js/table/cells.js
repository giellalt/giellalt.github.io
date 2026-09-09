// Per-repo `<td>` cell builders: repository link, license / issues / CI badges,
// FST version + lemma count, and the giella-core specials.
// Ported from tablecommon.js, langtable.js and gametable.js.

import { addr, cell } from './dom.js';
import { endpointBadge } from './badges.js';

function badgeImg(src, alt) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    return img;
}

function linkedBadge(href, img) {
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.appendChild(img);
    return a;
}

// GitHub Actions workflow-status badge for `<repo>` / `<workflow>.yml`.
const workflowBadge = (repo, workflow, label) =>
    badgeImg(
        'https://img.shields.io/github/actions/workflow/status/giellalt/' +
        repo.name + '/' + workflow + '?label=' + label,
        'Doc Build Status',
    );

// giellalt CI pipeline badge; `path` is '' for repos and '/build' for giella-core.
const pipelineBadge = (repo, path) =>
    linkedBadge(
        'https://builds.giellalt.org/pipelines/' + repo.name + '/builds/latest',
        badgeImg('https://builds.giellalt.org/api/badge/' + repo.name + path + '?label=CI', 'CI Build Status'),
    );

/** Repository name linking to its GitHub page. */
export function addRepo(repo) {
    return cell(addr(repo.name, repo.html_url));
}

/** GitHub license badge (with the embedded law-scales logo). */
export function addRLicense(repo) {
    const logo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZmZmZmZmIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi43NSAyLjc1YS43NS43NSAwIDAwLTEuNSAwVjQuNUg5LjI3NmExLjc1IDEuNzUgMCAwMC0uOTg1LjMwM0w2LjU5NiA1Ljk1N0EuMjUuMjUgMCAwMTYuNDU1IDZIMi4zNTNhLjc1Ljc1IDAgMTAwIDEuNUgzLjkzTC41NjMgMTUuMThhLjc2Mi43NjIgMCAwMC4yMS44OGMuMDguMDY0LjE2MS4xMjUuMzA5LjIyMS4xODYuMTIxLjQ1Mi4yNzguNzkyLjQzMy42OC4zMTEgMS42NjIuNjIgMi44NzYuNjJhNi45MTkgNi45MTkgMCAwMDIuODc2LS42MmMuMzQtLjE1NS42MDYtLjMxMi43OTItLjQzMy4xNS0uMDk3LjIzLS4xNTguMzEtLjIyM2EuNzUuNzUgMCAwMC4yMDktLjg3OEw1LjU2OSA3LjVoLjg4NmMuMzUxIDAgLjY5NC0uMTA2Ljk4NC0uMzAzbDEuNjk2LTEuMTU0QS4yNS4yNSAwIDAxOS4yNzUgNmgxLjk3NXYxNC41SDYuNzYzYS43NS43NSAwIDAwMCAxLjVoMTAuNDc0YS43NS43NSAwIDAwMC0xLjVIMTIuNzVWNmgxLjk3NGMuMDUgMCAuMS4wMTUuMTQuMDQzbDEuNjk3IDEuMTU0Yy4yOS4xOTcuNjMzLjMwMy45ODQuMzAzaC44ODZsLTMuMzY4IDcuNjhhLjc1Ljc1IDAgMDAuMjMuODk2Yy4wMTIuMDA5IDAgMCAuMDAyIDBhMy4xNTQgMy4xNTQgMCAwMC4zMS4yMDZjLjE4NS4xMTIuNDUuMjU2Ljc5LjRhNy4zNDMgNy4zNDMgMCAwMDIuODU1LjU2OCA3LjM0MyA3LjM0MyAwIDAwMi44NTYtLjU2OWMuMzM4LS4xNDMuNjA0LS4yODcuNzktLjM5OWEzLjUgMy41IDAgMDAuMzEtLjIwNi43NS43NSAwIDAwLjIzLS44OTZMMjAuMDcgNy41aDEuNTc4YS43NS43NSAwIDAwMC0xLjVoLTQuMTAyYS4yNS4yNSAwIDAxLS4xNC0uMDQzbC0xLjY5Ny0xLjE1NGExLjc1IDEuNzUgMCAwMC0uOTg0LS4zMDNIMTIuNzVWMi43NXpNMi4xOTMgMTUuMTk4YTUuNDE4IDUuNDE4IDAgMDAyLjU1Ny42MzUgNS40MTggNS40MTggMCAwMDIuNTU3LS42MzVMNC43NSA5LjM2OGwtMi41NTcgNS44M3ptMTQuNTEtLjAyNGMuMDgyLjA0LjE3NC4wODMuMjc1LjEyNi41My4yMjMgMS4zMDUuNDUgMi4yNzIuNDVhNS44NDYgNS44NDYgMCAwMDIuNTQ3LS41NzZMMTkuMjUgOS4zNjdsLTIuNTQ3IDUuODA3eiI+PC9wYXRoPjwvc3ZnPgo=';
    return cell(linkedBadge(
        repo.html_url + '/blob/main/LICENSE',
        badgeImg('https://img.shields.io/github/license/giellalt/' + repo.name + '?label=L&logo=' + logo, 'GitHub License'),
    ));
}

/** GitHub open-issue count badge. */
export function addIssues(repo) {
    return cell(linkedBadge(
        repo.html_url + '/issues',
        badgeImg('https://img.shields.io/github/issues/giellalt/' + repo.name + '?label=I', 'GitHub Issues'),
    ));
}

/** Documentation-build workflow badge (docs.yml). */
export function addRDoc(repo) {
    return cell(linkedBadge(repo.html_url + '/actions', workflowBadge(repo, 'docs.yml', 'D')));
}

/** Deploy-CI pipeline badge. */
export function addCI(repo) {
    return cell(pipelineBadge(repo, ''));
}

/** FST version badge (fst-version.json). */
export function addVersion(repo) {
    return cell(endpointBadge(repo, 'fst-version.json', 'V', 'FST Version'));
}

/** FST lemma-count badge (fst-lemmacount.json). */
export function addLemmaCount(repo) {
    return cell(endpointBadge(repo, 'fst-lemmacount.json', 'L', 'Lemma Count'));
}

/** Core-CI pipeline badge (giella-core builds a `/build` sub-pipeline). */
export function addCoreCI(repo) {
    return cell(pipelineBadge(repo, '/build'));
}

/** giella-core version badge (version.json, not fst-version.json). */
export function addCoreVersion(repo) {
    return cell(endpointBadge(repo, 'version.json', 'V', 'Version'));
}

/** giella-core documentation-build badge (docsgen.yml, not docs.yml). */
export function addCoreRDoc(repo) {
    return cell(linkedBadge(repo.html_url + '/actions', workflowBadge(repo, 'docsgen.yml', 'D')));
}

/** wordguess-game deploy badge (classic GitHub workflow SVG). */
export function addRGameDoc(repo) {
    return cell(linkedBadge(
        repo.html_url + '/actions',
        badgeImg('https://github.com/giellalt/' + repo.name + '/workflows/Deploy/badge.svg', 'Doc Build Status'),
    ));
}
