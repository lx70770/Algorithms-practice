export const BinarySearch = (arr, target) => {
	function search(data, l, r, t) {
		if (l > r) return -1

		let mid = Math.floor(l + (r - l) / 2)

		if (data[mid] == t) return mid

		if (target > data[mid]) return search(data, mid + 1, r, t)

		if (target < data[mid]) return search(data, l, mid - 1, t)
	}

	return search(arr, 0, arr.length - 1, target)
}
