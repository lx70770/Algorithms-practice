/*
 * 使用递归的方式实现链表
 */
class LinkedListWithDummyHeadUsingRecursion<E> {
	private head: Node_<E>
	private size: number

	constructor() {
		this.head = null
		this.size = 0
	}

	public getSize = (): number => this.size

	public isEmpty = (): boolean => this.size === 0

	public add = (index: number, e: E) => {
		if (index < 0 || index > this.size) {
			throw new RangeError('Illgal index.')
		}

		this.head = this._add(this.head, index, e)
	}

	private _add = (node: Node_<E>, index: number, e: E): Node_<E> => {
		if (index === 0) {
            // 此时递归结束，node到达准备添加位置
			return new Node_(e, node)
		}
		node.next = this._add(node.next, index - 1, e)
		return node
	}
}
