class StackItem {
	constructor(val, prev) {
		this.val = val
		this.prev = prev
	}
}

module.exports = class Stack {
	constructor(capacity = 0) {
		this.capacity = capacity
		this.size = 0
		this.bottom = null
		this.top = null
	}

	getCapacity() {
		return this.capacity
	}

	getSize() {
		return this.size
	}

	push(val) {
		//stack overflow
		if(this.capacity > 0 && this.size == this.capacity) {
			console.log('error, stack is full')
			return false
		}

		var newItem = new StackItem(val, null)

		//pushing first item
		if(!this.bottom) {
			this.bottom = this.top = newItem
			this.size++
			return true
		}

		//pushing above (some) items; take the top item's pointer and point it to the new item, then assign the newItem to the top pointer
		newItem.prev = this.top
		this.top = newItem
		this.size++
		return true
	}

	pop() {
		//empty stack
		if(!this.top) {
			console.log('error, stack is empty (can\'t pop)')
			return false
		}

		//retreive required value from current top item, then change the top pointer to point to the current top item's prev pointer
		var poppedVal = this.top.val
		this.top = this.top.prev
		this.size--
		if(this.size == 0) {
			this.bottom = null
		}
		return poppedVal
	}
}