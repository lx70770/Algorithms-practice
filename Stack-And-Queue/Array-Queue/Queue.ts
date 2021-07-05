export default interface Queue<E> {
    getSize: () => number
    isEmpty: () => boolean
    enqueue: (e: E) => void
    dequeue: () => E
    getFront: () => E
}