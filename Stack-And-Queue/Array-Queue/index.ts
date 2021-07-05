import Array_Dynamic from '../../Add-Element-In-Dynamic-Array'
import Queue from './Queue'

class ArrayQueue<E> implements Queue<E> {
	private array: Array_Dynamic<E>

	constructor(capacity?: number)
	constructor(capacity: number) {
		this.array = new Array_Dynamic(capacity)
	}

	public getSize = () => {
		return this.array.getSize()
	}

	public isEmpty = () => {
		return this.array.isEmpty()
	}

	public getFront = () => {
		return this.array.getFirst()
	}

	public enqueue = (e: E) => {
		this.array.addLast(e)
	}

	public dequeue = () => {
		return this.array.removeFirst()
	}
}
