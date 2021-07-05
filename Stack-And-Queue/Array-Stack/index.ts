import Array_Dynamic from '../../Add-Element-In-Dynamic-Array'
import Stack from './Stack'

class ArrayStack<E> implements Stack<E> {
	private array: Array_Dynamic<E>

	constructor(capacity?: number)
	constructor(capacity: number) {
		this.array = new Array_Dynamic(capacity)
	}

    public getSize = (): number => {
		return this.array.getSize()
	}

	public isEmpty = (): boolean => {
		return this.array.isEmpty()
	}

    public pop = (): E => {
		return this.array.removeLast()
	}

    public peek = (): E => {
		return this.array.getLast()
	}
}
