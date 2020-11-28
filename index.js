function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    let current = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        current = next(current, collection)
    }
    return current
}

function addressAt(index, linkedList, collection) {
    if (index === 0) return linkedList
    else {
        let node = nodeAt(index-1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let current = headNode(linkedList, collection)
    let currentIndex = 0
    while(current !== node) {
        currentIndex++
        current = next(node, collection)
    }
    return currentIndex
}

// function insertNodeAt() {

// }

// function deleteNodeAt() {

// }
