// Automatic maturity classification, shared by the speller and grammar-checker
// overview pages. Both used to carry a byte-identical copy of this logic.

import { fetchBadgeData, parseVersion, parseCount } from './badges.js';

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
 * Results are cached per (repo, countFile) so a page that renders five maturity
 * buckets only fetches each repo's badges once.
 */
export async function classifyMaturity(repo, config) {
    const key = repo.name + '::' + config.countFile;
    if (cache.has(key)) return cache.get(key);

    const version = parseVersion(await fetchBadgeData(repo, config.versionFile));
    const count = parseCount(await fetchBadgeData(repo, config.countFile));

    let result;
    if (!version || count === null) result = 'undefined';
    else if (version.major >= 1) result = 'production';
    else if (count >= config.betaMin) result = 'beta';
    else if (count >= config.alphaMin) result = 'alpha';
    else result = 'experimental';

    cache.set(key, result);
    return result;
}

/** Split repos under `mainFilter` into `{ level: [repo, …] }` buckets. */
export async function classifyAll(repos, mainFilter, config) {
    const inScope = repos.filter((repo) => repo.name.startsWith(mainFilter));
    const tagged = await Promise.all(
        inScope.map(async (repo) => [repo, await classifyMaturity(repo, config)]),
    );
    const buckets = {};
    for (const [repo, level] of tagged) {
        (buckets[level] ||= []).push(repo);
    }
    return buckets;
}
