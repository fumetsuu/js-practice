const { assert } = require('../util')

const Stack = require('./stack')

var stack = new Stack(3)

stack.push('A')

assert(stack.pop() == 'A', 'push and pop test 1 ')

stack.push('A')
stack.push('B')

assert(stack.getSize() == 2, 'stack size test ')

assert(!stack.bottom.prev, 'bottom pointer test ')

stack.push('C')

assert(stack.top.prev.val == 'B', 'top pointer test ')

assert(!stack.push('X'), 'stack overflow test ')