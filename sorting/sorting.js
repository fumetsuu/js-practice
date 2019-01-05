function swap(arr, i, j) {
	var temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function insertionSort(arr) {
	//iterate from left to right
	for(var i = 1; i < arr.length; i++) {
		//start from the element currently being considered and work from it leftwards
		for(j = i; j >= 0; j--) {
			//check if the element currently being considered is smaller than the one to its left
			//swap if true
			if(arr[j] < arr[j-1]) {
				swap(arr, j, j-1)
			}
		}
	}
	return arr
}

function selectionSort(arr) {
	//iterate from left to right
	for(var i = 0; i < arr.length-1; i++) {
		//set current min and min index for unsorted partition
		var currMin = arr[i]
		var currMinIndex = i
		//find min and min index for unsorted partition
		for(var j = i+1; j < arr.length; j++) {
			if(arr[j] < currMin) {
				currMin = arr[j]
				currMinIndex = j
			}
		}
		//swap currently being considered element with the min element in the unsorted partition
		//this min element then becomes part of the sorted list and is no longer considered
		swap(arr, i, currMinIndex)
	}
	return arr
}

function mergeSort(arr) {
	//merge helper function: returns result of merging sorted arrays arr1 and arr2
	function merge(arr1, arr2) {
		var mergedArr = []
		while(arr1.length > 0 && arr2.length > 0) {
			if(arr1[0] <= arr2[0]) {
				mergedArr.push(arr1[0])
				arr1 = arr1.splice(1)
			} else {
				mergedArr.push(arr2[0])
				arr2 = arr2.splice(1)
			}
		}
		//if arr1 and arr2 are not of the same length, then either arr2 will be empty
		if(arr1.length > 0) {
			mergedArr.push(...arr1)
		}
		//or arr1 will be empty
		else if(arr2.length > 0) {
			mergedArr.push(...arr2)
		}
		return mergedArr
	}

	//partition all elements into a single, sorted 
	var partitions = arr.map(el => [el])
	//setup temp location for partitions as they merge and variable merged to hold the merged results being considered
	var partitionsBuffer = []
	var merged = []
	//when the length of merged is equal to the length of the input array, merge sort is complete
	while(merged.length != arr.length) {
		//ensure even number of partitions
		if(partitions.length % 2 == 1) partitions.push([])
		//reset partition buffer for new iteration
		partitionsBuffer = []
		//iterate over the pairs of partitions going from left to right
		for(var i = 0; i < partitions.length - 1; i+=2) {
			//merge each pair of partitions and add this to the partition buffer 
			merged = merge(partitions[i], partitions[i+1])
			partitionsBuffer.push(merged)
		}
		//update the partitions variable to point to the partitions buffer
		partitions = partitionsBuffer
	} 

	return merged
}

function quickSort(arr, l, h) {
	if(l < h) {
		var p = partition(arr, l, h) //put all elements lower than the pivot below the pivot and all elements higher than the pivot above the pivot
		quickSort(arr, l, p-1) //sort below the pivot
		quickSort(arr, p+1, h) //sort above the pivot
	}

	function partition(arr, l, h) {
		//take last element to be pivot
		var pivot = arr[h]
		var pivotIndex = h
		for(var i = l; i < h; i++) {
			if(arr[i] > pivot && i < pivotIndex) { //element is higher than pivot but is below the pivot
				swap(arr, i, pivotIndex)
				pivotIndex = i
			} else if(arr[i] < pivot && i > pivotIndex) { //element is lower than pivot but is above the pivot
				swap(arr, i, pivotIndex)
				//ensure the checking of elements below the new pivot when jumping up
				var temp = i
				i = pivotIndex
				pivotIndex = temp
			}
		}
		return pivotIndex
	}
}

function bubbleSort(arr) {
	//iterate through all elements from left to right
	for(var j = 0; j < arr.length; j++) {
		var swapCount = 0
		for(var i = 0; i < arr.length-1-j; i++) {
			if(arr[i] > arr[i+1]) {
				swap(arr, i, i+1)
				swapCount++
			}
		}
		if(swapCount == 0) {
			return arr
		}
	}
}


module.exports = {
	insertionSort,
	selectionSort,
	mergeSort,
	quickSort,
	bubbleSort
}