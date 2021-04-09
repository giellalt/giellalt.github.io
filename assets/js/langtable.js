function addr(name, href) {
    const a = document.createElement('a')
    a.appendChild(document.createTextNode(name))
    a.setAttribute('href', href)

    const td = document.createElement('td')
    td.appendChild(a)

    return td
}

function addName(name) {
    const td = document.createElement('td')
    td.appendChild(document.createTextNode(name))
    return td
}

function filterTopic(arr, topic) {
    let filtered = []
    for (const item in arr) {
        if (item.topics.includes(topic)) {
            filtered.push(item)
        }
    }

    return filtered
}

function addTr(item) {
    const tr = document.createElement('tr')
    tr.appendChild(addName(item.name))
    tr.appendChild(addr('documentation', item.name + '/'))
    tr.appendChild(addr('source', item.html_url))

    return tr
}

function addTable(arr, mainFilter, filters) {
    table = document.createElement('table')
    for (const item of arr) {
        if (item.name.startsWith(mainFilter)) {
            if (filters.every(function(filter) {
                return item.topics.includes(filter)
            })) {
                table.appendChild(addTr(item))
            }
        }
    }
    return table
}

function addNegTable(arr, mainFilter, filters) {
    table = document.createElement('table')
    for (const item of arr) {
        if (item.name.startsWith(mainFilter)) {
            if (!filters.every(function(filter) {
                return item.topics.includes(filter)
            })) {
                table.appendChild(addTr(item))
            }
        }
    }
    return table
}

function addH2(name) {
    const h2 = document.createElement('h2')
    h2.appendChild(document.createTextNode(name))

    return h2
}

function langTables(arr) {
    div = document.createElement('div')
    div.appendChild(addH2('prod'))
    div.appendChild(addTable(arr, 'lang-', ['maturity-prod']))
    div.appendChild(addH2('beta'))
    div.appendChild(addTable(arr, 'lang-', ['maturity-beta']))
    div.appendChild(addH2('alpha'))
    div.appendChild(addTable(arr, 'lang-', ['maturity-alpha']))
    div.appendChild(addH2('other'))
    div.appendChild(addNegTable(arr, 'lang-', ['maturity-beta', 'maturity-alpha', 'maturity-prod']))

    return div
}
