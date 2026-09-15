// Glue used by the per-page entry modules: drop a (possibly still-pending)
// node into the element identified by `selector`. Missing targets are ignored
// so one absent <div> can't abort a page's whole render.

import { prefetchLazyImages } from './dom.js';

export async function mount(selector, node) {
    const host = document.querySelector(selector);
    if (!host) return;
    host.appendChild(await node);
}

/** `mount()` every `[selector, node]` pair in parallel. */
export function mountAll(pairs) {
    const done = Promise.all(pairs.map(([selector, node]) => mount(selector, node)));
    done.then(prefetchLazyImages);
    return done;
}
