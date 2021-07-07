export const reverseList = (head: Node_<number>) => {
	let prev = null
	let cur = head

	while (cur != null) {
		const next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	return prev
}

export const reverseListRecursion = (head: Node_<number>) => {
	if (head == null || head.next == null) {
		return head
	}

	const rev = reverseListRecursion(head.next)
	head.next.next = head
	head.next = null
	return rev
}
