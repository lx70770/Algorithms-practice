class LinkedList<E> {
	private head: Node_<E>
	private size: number

	constructor() {
		this.head = null
		this.size = 0
	}

	public getSize = (): number => this.size

	public isEmpty = (): boolean => this.size === 0

	public addFirst = (e: E): void => {
		this.head = new Node_(e, this.head)
	}

	public add = (index: number, e: E) => {
		if (index < 0 || index > this.size) {
			throw new RangeError('Illegal index.')
		} else if (index == 0) {
			this.addFirst(e)
		} else {
			let prev = this.head
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next
			}
			prev.next = new Node_(e, prev.next)
			this.size++
		}
	}

	public addLast = (e: E) => {
		this.add(this.size, e)
	}
}

class Node_<E> {
	public e: E
	public next: Node_<E>
	constructor(e: E, next: Node_<E>) {
		this.e = e
		this.next = next
	}
}
