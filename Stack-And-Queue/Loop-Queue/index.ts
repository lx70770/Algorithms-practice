import Queue from './Queue'

// 循环队列 维护tail指针
class LoopQueue<E> implements Queue<E> {
	private data: Array<E>
	private size: number
	private tail: number
	private font: number

	constructor(capacity?: number)
	constructor(capacity: number) {
		this.data = new Array(capacity + 1)
		this.font = 0
		this.size = 0
		this.tail = 0
	}

	public getSize = () => this.size

	public isEmpty = () => this.font === this.tail

	public getCapacity = () => this.data.length

    public getFront = (): E => {
        if (this.isEmpty()) {
            throw new RangeError('Cannot getFront from an empty queue.')
        }
        return this.data[this.font]
    }

	// 入队 容量不够的时候需要扩容
	public enqueue = (e: E) => {
		if ((this.tail + 1) % this.data.length === this.font) {
			this.resize(this.getCapacity() * 2)
		}

		this.data[this.tail] = e
		this.tail = (this.tail + 1) % this.data.length
		this.size++
	}

	public dequeue = () => {
		if (this.isEmpty()) {
			throw new RangeError('Cannot dequeue from an empty queue.')
		}

		const ret = this.data[this.font]
		this.data[this.font] = null
		this.font = (this.font + 1) % this.data.length
		this.size--
		if (this.size === this.getCapacity() / 4 && this.getCapacity() !== 0) {
			this.resize(this.getCapacity() / 2)
		}
		return ret
	}



    private resize = (newCapacity: number) => {
        let newData = Array(newCapacity + 1)
        for (let i = 0; i < this.data.length; i++) {
            newData[i] = this.data[i]
        }
        this.data = newData
        this.font = 0
        this.tail = this.size
    }
}
