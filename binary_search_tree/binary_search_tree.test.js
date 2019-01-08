const { assert } = require('../util')

const BinarySearchTree = require('./binary_search_tree')

var bst = new BinarySearchTree()

bst.insert(8)
bst.insert(3)
bst.insert(10)
assert(bst.root.val == 8, 'bst insert test 1 ')
assert(bst.root.left.val == 3, 'bst insert test 2 ')
assert(bst.root.right.val == 10, 'bst insert test 3 ')
bst.insert(1)
bst.insert(6)
bst.insert(14)
bst.insert(4)
bst.insert(7)
bst.insert(13)
bst.insert(9)
assert(bst.root.left.left.val == 1, 'bst insert test 4 ')
assert(bst.root.left.right.val == 6, 'bst insert test 5 ')
assert(bst.root.left.right.left.val == 4, 'bst insert test 6 ')
assert(bst.root.left.right.right.val == 7, 'bst insert test 7 ')
assert(bst.root.right.right.val == 14, 'bst insert test 8 ')
assert(bst.root.right.right.left.val == 13, 'bst insert test 9 ')
assert(bst.root.right.left.val == 9, 'bst insert test 10 ')
assert(bst.search(8).val == 8, 'bst search test 1 ')
assert(bst.search(3).val == 3, 'bst search test 2 ')
assert(bst.search(13).val == 13, 'bst search test 3 ')
assert(bst.search(6).left.val == 4, 'bst search test 4 ')
bst.insert(62)
assert(bst.find_max().val == 62, 'bst find max test ')

bst.remove(1)
assert(bst.root.left.left == null, 'bst remove case 1 test ')

bst.remove(10)
assert(bst.root.right.val == 13, 'bst remove case 3 test 1 ')
assert(bst.root.right.right.val == 14, 'bst remove case 3 test 2 ')
assert(bst.root.right.right.left == null, 'bst remove case 3 test 3 ')

bst.remove(14)
assert(bst.root.right.right.val == 62, 'bst remove case 2 test ')