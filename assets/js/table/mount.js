// Glue used by the per-page entry modules: drop a (possibly still-pending)
// node into the element identified by `selector`. Missing targets are ignored
// so one absent <div> can't abort a page's whole render.

export async function mount(selector, node) {
    const host = document.querySelector(selector);
    if (!host) return;
    host.appendChild(await node);
}

/** `mount()` every `[selector, node]` pair in parallel. */
export function mountAll(pairs) {
    return Promise.all(pairs.map(([selector, node]) => mount(selector, node)));
}
