class ListNode {
  val: number
  next: ListNode | null
  constructor(val = 0, next: ListNode | null | undefined = null) {
    this.val = val
    this.next = next
  }
}

// min (node1, node2)
// min_val = node1
// min (min_val.next, node2)
// min_val = node2

type N<T> = null | T

const findMin = (node1: ListNode, node2: ListNode) => {
  let current1: N<ListNode> = node1
  let current2: N<ListNode> = node2
  if (!current1 && !current2) {
    return false
  }
  if (!current1) {
    current2 = current2.next
    return [current1, current2, node2.val]
  }
  if (!current2) {
    current1 = current1.next
    return [current1, current2, node1.val]
  }
  if (node1.val < node2.val) {
    current1 = node1.next
  } else {
    current2 = node2.next
  }

  const minVal = node1.val < node2.val ? node1.val : node2.val
  return [current1, current2, minVal]
}

const toLinkedList = (array: number[]) => {
  if (array.length === 0) {
    return null
  }
  if (array.length === 1) {
    return new ListNode(array[0])
  }
  let node = new ListNode(array[0])
  const nodes = []
  for (let i = 1; i < array.length; i++) {
    const newNode = new ListNode(array[i])
    node.next = newNode
    nodes.push(node)
    node = newNode
  }
  return nodes[0]
}

const mergeTwoLists = (listNode1: any, listNode2: any): N<ListNode> => {
  const result: number[] = []
  while (true) {
    let minResult = findMin(listNode1, listNode2)
    if (!minResult) {
      break
    }
    listNode1 = minResult[0]
    listNode2 = minResult[1]
    const minValue = minResult[2] as number
    result.push(minValue)
    console.log(result)
  }
  return toLinkedList(result)
}

