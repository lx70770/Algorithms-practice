class LinkedListWithDummyHead<E> {
	private dummyHead: Node_<E>
	private size: number

	constructor() {
		this.dummyHead = new Node_(null, null)
		this.size = 0
	}

	public getSize = (): number => this.size

	public isEmpty = (): boolean => this.size === 0

	public addFirst = (e: E): void => this.add(0, e)

	// 引入dummyHead减少了很多不必要的麻烦
	public add = (index: number, e: E) => {
		if (index < 0 || index > this.size) {
			throw new RangeError('Illegal index.')
		} else {
			let prev = this.dummyHead
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next
			}
			prev.next = new Node_(e, prev.next)
			this.size++
		}
	}

	public addLast = (e: E) => this.add(this.size, e)

	public get = (index: number): E => {
		if (index < 0 || index > this.size) {
			throw new RangeError('Illegal index.')
		}
		let cur = this.dummyHead.next
		for (let i = 0; i < index; i++) {
			cur = cur.next
		}
		return cur.e
	}

	public getFirst = () => this.get(0)

	public getLast = () => this.get(this.size - 1)

	public set = (index: number, e: E) => {
		if (index < 0 || index > this.size) {
			throw new RangeError('Illegal index.')
		}
		let cur = this.dummyHead.next
		for (let i = 0; i < index; i++) {
			cur = cur.next
		}
		cur.e = e
	}

	public contains = (e: E) => {
		let cur = this.dummyHead.next
		while (cur) {
			if (cur.e === e) {
				return true
			}
			cur = cur.next
		}
		return false
	}

	public remove = (index: number): E => {
		if (index < 0 || index > this.size) {
			throw new RangeError('Illegal index.')
		}
		let prev = this.dummyHead
		for (let i = 0; i < index; i++) {
			prev = prev.next
		}
		let cur = prev.next
		prev.next = cur.next
		cur.next = null
		this.size--
		return cur.e
	}
	public removeFirst = () => this.remove(0)

	public removeLast = () => this.remove(this.size - 1)
}
