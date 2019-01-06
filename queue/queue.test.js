const { assert } = require('../util')

const Queue = require('./queue')

var queue = new Queue(5)

queue.enqueue('A')

assert(queue.peek() == 'A', 'enqueue and peek test 1 ')

queue.enqueue('B')

assert(queue.peek() == 'A', 'enqueue and peek test 2 ')
assert(queue.getSize() == 2, 'queue size test ')

queue.enqueue('C')
assert(queue.back.val == 'C', 'back pointer test 1 ')
assert(!queue.back.next, 'back pointer test 2 ')

queue.dequeue()
assert(queue.peek() == 'B', 'dequeue and peek test ')

assert(queue.front.next.val == 'C', 'front pointer test ')

queue.enqueue('X')
queue.enqueue('X')
queue.enqueue('X')
assert(!queue.enqueue('X'), 'capacity check test ')