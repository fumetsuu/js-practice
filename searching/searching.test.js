const { assert } = require('../util')
const { mergeSort } = require('../sorting/sorting')

const { linearSearch, jumpSearch, binarySearch } = require('./searching')

//linear search
assert(linearSearch([1,5,6,3,4,1,7,5,3,5,9,22,41,32], 22) == 11, 'linear search 1 test ')

//jump search
assert(jumpSearch([1,5,6,3,4,1,7,5,3,5,9,22,41,32], 22) == 11, 'jump search 1 test ')
assert(jumpSearch([1,5,6,3,4,1,7,5,3,5,9,22,41,32], 32) == 13, 'jump search 2 test ')

//binary search
assert(binarySearch(mergeSort([1,5,6,3,4,1,7,5,3,5,9,22,41,32]), 22, 0, 13) == 11, 'binary search 1 test ')
assert(binarySearch(mergeSort([1,5,6,3,4,1,7,5,3,5,9,22,41,32]), 32, 0, 13) == 12, 'binary search 2 test ')