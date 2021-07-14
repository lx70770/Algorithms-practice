// 二分查找递归写法
export const BinarySearchR = (arr, target) => {
	function search(data, l, r, t) {
		if (l > r) return -1

		let mid = Math.floor(l + (r - l) / 2)

		if (data[mid] == t) return mid

		if (target > data[mid]) return search(data, mid + 1, r, t)

		if (target < data[mid]) return search(data, l, mid - 1, t)
	}

	return search(arr, 0, arr.length - 1, target)
}

// 非递归实现
export const BinarySearch = (arr, target) => {
	function search(data, l, r, t) {
		while (l <= r) {
			let mid = Math.floor(l + (r - l) / 2)

			if (data[mid] == t) return mid

			if (t > data[mid]) l++

			if (t < data[mid]) r--
		}

		return -1
	}

	return search(arr, 0, arr.length - 1, target)
}
