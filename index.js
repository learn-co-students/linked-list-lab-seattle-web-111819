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
        current = next(current, collection)
    }
    return currentIndex
}

function insertNodeAt(index, newNodeAddress,linkedList, collection) {
    let previousNode = nodeAt(index-1, linkedList, collection)
    let nextNode = nodeAt(index, linkedList, collection)
    // let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    // let nextNodeIsx = indexAt(nextNode, collection, linkedList)
    // let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let nextNodeAddress = addressAt(nextNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = nextNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
    let prev;
    let curr = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        prev = curr
        curr = next(curr, collection)
    }
    prev.next = curr.next
}
