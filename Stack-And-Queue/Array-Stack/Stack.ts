export default interface Stack<E> {
	getSize: () => number
	isEmpty: () => boolean
	pop: () => E
	peek: () => E
}
