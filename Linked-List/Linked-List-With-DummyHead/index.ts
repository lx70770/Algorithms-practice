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
}
