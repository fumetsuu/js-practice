function linearSearch(arr, x) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == x) return i
	}
	return -1
}

function jumpSearch(arr, x) {
	var jumpSize = Math.floor(Math.sqrt(arr.length))
	for(var i = 0; i < arr.length; i += jumpSize) {
		if(x > arr[i] && x < arr[i + jumpSize]) {
			//linear search through the bounds
			for(var j = i; j < i + jumpSize; j++) {
				if(arr[j] == x) return j
			}
		}
		//at end of array, before last jump
		if(i + jumpSize >= arr.length) {
			for(var j = i; j < arr.length; j++) {
				if(arr[j] == x) return j
			}
		}
	}
}

function binarySearch(arr, x, l, h) {
	var m = Math.floor((l+h)/2)
	if(arr[m] == x) return m
	if(x < arr[m]) return binarySearch(arr, x, l, m-1)
	if(x > arr[m]) return binarySearch(arr, x, m+1, h)
}

module.exports = {
	linearSearch,
	jumpSearch,
	binarySearch
}