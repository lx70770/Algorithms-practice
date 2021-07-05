export default class Array_Dynamic<E> {
	private data: E[]
	private size: number

	// ts类构造函数是可以重载的 但是规则和Java有点区别
	constructor(capacity?: number)
	constructor(capacity: number) {
		this.data = Array(capacity || 10)
		this.size = 0
	}

	// 获取数组长度
	public getCapacity = (): number => this.data.length

	// 获取数组容量
	public getSize = (): number => this.size

	// 是否为空
	public isEmpty = (): boolean => this.size === 0

	// 添加元素 指定位置
	public add = (index: number, e: E): void => {
		if (index < 0 || index > this.size) throw new RangeError('Add failed, Require index >= 0 and index <= size.')
		if (this.size === this.data.length) {
			this.resize(this.data.length * 2)
		}
		// 给e腾位置
		for (let i = this.size - 1; i >= index; i--) {
			this.data[i + 1] = this.data[i]
		}

		this.data[index] = e
		this.size++
	}

	// 数组最后添加元素
	public addLast = (e: E): void => this.add(this.size, e)

	// 数组最前添加元素
	public addFirst = (e: E): void => this.add(0, e)

	// 获取index索引的元素
	public get = (index: number): E => {
		if (index < 0 || index > this.size) throw new RangeError('Add failed, Require index >= 0 and index <= size.')
		return this.data[index]
	}

	// 获取最后一个元素
	public getLast = () => {
		return this.data[this.data.length - 1]
	}

	// 修改index索引位置的元素
	public set = (index: number, e: E): void => {
		if (index < 0 || index > this.size) throw new RangeError('Add failed, Require index >= 0 and index <= size.')
		this.data[index] = e
	}

	//  数组是否包含元素
	public contains = (e: E): boolean => {
		for (let i = 0; i < this.size; i++) {
			if (this.data[i] === e) {
				return true
			}
		}
		return false
	}

	// 查找元素所在数组位置
	public find = (e: E): number => {
		for (let i = 0; i < this.size; i++) {
			if (this.data[i] === e) {
				return i
			}
		}
		return -1
	}

	// 数组中删除元素 返回被删除的元素
	public remove = (index: number): E => {
		if (index < 0 || index > this.size) throw new RangeError('Add failed, Require index >= 0 and index <= size.')
		const res = this.data[index]
		for (let i = index; i < this.size; i++) {
			this.data[i] = this.data[i + 1]
		}
		this.size--
		this.data[this.size] = null

		if (this.size == this.data.length / 2) {
			this.resize(this.data.length / 2)
		}

		return res
	}

	// 删除第一个
	public removeFirst = (): E => this.remove(0)

	// 删除最后一个
	public removeLast = (): E => this.remove(this.size - 1)

	// 删除指定元素
	public removeElement = (e: E): void => {
		const index = this.find(e)
		if (index > 0) this.remove(index)
	}

	// 数组扩容 或者缩容
	private resize = (newCapacity: number) => {
		const newData = Array(newCapacity)
		for (let i = 0; i < this.size; i++) {
			newData[i] = this.data[i]
		}
		this.data = newData
	}
}
