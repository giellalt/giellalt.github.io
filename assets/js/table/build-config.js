const RAW = 'https://raw.githubusercontent.com/giellalt';
const cache = new Map();

/** Return the root .build-config.yml URL for a language repository. */
export function buildConfigUrl(repo) {
    const branch = repo.default_branch || 'main';
    return `${RAW}/${repo.name}/${branch}/.build-config.yml`;
}

function parseBuildConfig(text) {
    const build = {};
    let inBuild = false;

    for (const line of text.split(/\r?\n/)) {
        if (/^build:\s*$/.test(line)) {
            inBuild = true;
            continue;
        }
        if (inBuild && /^\S/.test(line)) break;
        if (!inBuild) continue;

        const match = line.match(/^\s{2}([\w-]+):\s*(true|false)\s*(?:#.*)?$/i);
        if (match) build[match[1]] = match[2].toLowerCase() === 'true';
    }
    return build;
}

/** Fetch and cache the build section of a language repo's config. */
export function fetchBuildConfig(repo) {
    if (cache.has(repo.name)) return cache.get(repo.name);

    const promise = (async () => {
        try {
            const response = await fetch(buildConfigUrl(repo));
            if (!response.ok) return null;
            return parseBuildConfig(await response.text());
        } catch (error) {
            return null;
        }
    })();

    cache.set(repo.name, promise);
    return promise;
}