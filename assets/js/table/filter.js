// Repo filtering helpers.

/** True when any `filter` prefix matches the start of any (trimmed) topic. */
export function doesTopicsHaveSomeFilter(topics, filters) {
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
    if (filters == null || filters.length === 0) return true;
    return doesTopicsHaveSomeFilter(repo.topics, filters);
}
