// Small DOM builders shared by every table/list module.

/**
 * `<img>` that loads lazily. The table pages emit hundreds of shields.io badge
 * images, most of them far below the fold, so deferring the off-screen ones
 * keeps the initial request burst small.
 */
export function img(src, alt) {
    const el = document.createElement('img');
    el.setAttribute('src', src);
    el.setAttribute('alt', alt);
    el.setAttribute('loading', 'lazy');
    el.setAttribute('decoding', 'async');
    return el;
}

/** `<a>` with plain-text content and an href (was `addr()` in tablecommon.js). */
export function addr(text, href) {
    const a = document.createElement('a');
    a.appendChild(document.createTextNode(text));
    a.setAttribute('href', href);
    return a;
}

/** `<td>` wrapping the given child node(s); nullish children are skipped. */
export function cell(...children) {
    const td = document.createElement('td');
    for (const child of children) {
        if (child != null) td.appendChild(child);
    }
    return td;
}

/** `<th>` with HTML content and an optional inline `style` string. */
export function th(html, style) {
    const el = document.createElement('th');
    el.innerHTML = html;
    if (style != null) el.setAttribute('style', style);
    return el;
}

/** `<th>` with HTML content, left-aligned via the `style` DOM property. */
export function thLeft(html) {
    const el = document.createElement('th');
    el.innerHTML = html;
    el.style.textAlign = 'left';
    return el;
}

/** `<tr>` of `<th>` cells built from `[html, style?]` pairs. */
export function headerRow(cells) {
    const tr = document.createElement('tr');
    for (const [html, style] of cells) tr.appendChild(th(html, style));
    return tr;
}

const UNAVAILABLE_HTML =
    '<strong>⚠️ GitHub repository data is temporarily unavailable</strong>' +
    '<br><em>This usually resolves automatically. Please try refreshing the page in a few minutes.</em>';

/** `<p>` notice used when the GitHub repo list could not be loaded (list pages). */
export function dataUnavailableNotice() {
    const p = document.createElement('p');
    p.innerHTML = UNAVAILABLE_HTML;
    p.style.textAlign = 'center';
    p.style.padding = '20px';
    p.style.backgroundColor = '#fff3cd';
    p.style.border = '1px solid #ffeaa7';
    p.style.borderRadius = '8px';
    p.style.color = '#856404';
    return p;
}

/** `<tr>` carrying the same notice, spanning `colSpan` columns (table pages). */
export function dataUnavailableRow(colSpan) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = colSpan;
    td.innerHTML = UNAVAILABLE_HTML;
    td.style.textAlign = 'center';
    td.style.padding = '30px 20px';
    td.style.backgroundColor = '#fff3cd';
    td.style.border = '1px solid #ffeaa7';
    td.style.borderRadius = '8px';
    td.style.color = '#856404';
    tr.appendChild(td);
    return tr;
}

/** `<tr>` shown in a table body when no repositories matched the filter. */
export function emptyRow(colCount = 6) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.appendChild(document.createTextNode('— No repos found. —'));
    td.setAttribute('colspan', String(colCount));
    td.setAttribute('style', 'text-align: center;');
    tr.appendChild(td);
    return tr;
}

/** `<p>No repos found.</p>` shown when a list matched nothing. */
export function emptyListNotice() {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode('No repos found.'));
    return p;
}
