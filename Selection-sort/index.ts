class SelectionSort {
	public sort = (arr: number[]): void => {
		for (let i = 0; i < arr.length; i++) {
			let minIndex = i
			for (let j = i; i < arr.length; j++) {
				if (arr[j] < arr[minIndex]) {
					minIndex = j
				}
			}
			this.swap(arr, i, minIndex)
		}
	}

	private swap = (arr: number[], i: number, j: number) => {
		let temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
}
