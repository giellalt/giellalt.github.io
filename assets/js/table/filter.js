// Repo filtering helpers.

/**
 * True when any `filter` prefix matches the start of any (trimmed) topic.
 * An empty/absent `filters` list is treated as "no filtering" and matches
 * every repo — both callers below (and negate: true on top of this one)
 * rely on that to mean "keep everyone" rather than "keep no one".
 */
export function doesTopicsHaveSomeFilter(topics, filters) {
    if (filters == null || filters.length === 0) return true;
    return filters.some(function (filter) {
        return topics.some(function (topic) {
            return topic.trim().startsWith(filter);
        });
    });
}

/**
 * Table-row membership test: the repo name must start with `mainFilter`, and
 * — when `filters` is a non-empty list — at least one topic must match it.
 * An empty/absent `filters` list keeps every repo under `mainFilter`.
 */
export function repoMatches(repo, mainFilter, filters) {
    if (!repo.name.startsWith(mainFilter)) return false;
    return doesTopicsHaveSomeFilter(repo.topics, filters);
}
