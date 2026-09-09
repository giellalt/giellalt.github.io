// Entry module for SharedResources.md
import { mountAll } from '../table/mount.js';
import { addSharedRepoTable } from '../table/lang.js';
import { addSharedTemplateTable } from '../table/template.js';

export function render({ shared, core, template }) {
    return mountAll([
        ['#shared', addSharedRepoTable(shared, 'shared-', ['maturity'])],
        ['#core', addSharedRepoTable(core, 'giella-', ['maturity'])],
        ['#templ', addSharedTemplateTable(template, 'template-', [])],
    ]);
}
