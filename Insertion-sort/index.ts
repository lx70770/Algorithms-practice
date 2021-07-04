class InsertionSort {
	public sort = (arr: number[]): void => {
		for (let i = 0; i < arr.length; i++) {
			for (let j = i; j >= 0; j--) {
				if (arr[j] < arr[j - 1]) {
					this.swap(arr, j - 1, j)
				}
			}
		}
	}

	private swap = (arr: number[], i: number, j: number) => {
		let temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
}
