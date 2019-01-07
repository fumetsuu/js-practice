const { assert, cmpArr } = require('../util')

const { insertionSort, selectionSort, mergeSort, heapSort, quickSort, bubbleSort } = require('./sorting')

//insertion sort
assert(cmpArr(insertionSort([5,3,9,8,22,13,7,1]), [1,3,5,7,8,9,13,22]), 'insertion sort 1 test ')
assert(cmpArr(insertionSort([5,-3,2,0,11]), [-3,0,2,5,11]), 'insertion sort 2 test ')

//selection sort
assert(cmpArr(selectionSort([5,3,9,8,22,13,7,1]), [1,3,5,7,8,9,13,22]), 'selection sort 1 test ')
assert(cmpArr(selectionSort([5,-3,2,0,11]), [-3,0,2,5,11]), 'selection sort 2 test ')

//merge sort
assert(cmpArr(mergeSort([5,3,9,8,22,13,7,1]), [1,3,5,7,8,9,13,22]), 'merge sort 1 test ')
assert(cmpArr(mergeSort([5,-3,2,0,11]), [-3,0,2,5,11]), 'merge sort 2 test ')

//heap sort
assert(cmpArr(heapSort([5,3,9,8,22,13,7,1]), [1,3,5,7,8,9,13,22]), 'heap sort 1 test ')
assert(cmpArr(heapSort([5,-3,2,0,11]), [-3,0,2,5,11]), 'heap sort 2 test ')

//quick sort
var qstest1 = [5,3,9,8,22,13,7,1]
quickSort(qstest1, 0, qstest1.length)
var qstest2 = [5,-3,2,0,11]
quickSort(qstest2, 0, qstest2.length)
var qstest3 = [3,7,8,5,2,1,9,5,4]
quickSort(qstest3, 0, qstest3.length)
assert(cmpArr(qstest1, [1,3,5,7,8,9,13,22]), 'quick sort 1 test ')
assert(cmpArr(qstest2, [-3,0,2,5,11]), 'quick sort 2 test ')
assert(cmpArr(qstest3, [1,2,3,4,5,5,7,8,9]), 'quick sort 3 test ')

//bubble sort
assert(cmpArr(bubbleSort([5,3,9,8,22,13,7,1]), [1,3,5,7,8,9,13,22]), 'bubble sort 1 test ')
assert(cmpArr(bubbleSort([5,-3,2,0,11]), [-3,0,2,5,11]), 'bubble sort 2 test ')
assert(cmpArr(bubbleSort([1,2,3,4,5,6,7]), [1,2,3,4,5,6,7]), 'bubble sort 3 test ')