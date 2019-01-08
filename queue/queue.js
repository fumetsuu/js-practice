class QueueItem {
	constructor(val, next) {
		this.val = val
		this.next = next
	}
}
module.exports = class Queue {

	constructor(capacity = 0) {
		this.size = 0
		this.front = null
		this.back = null
		this.capacity = capacity
	}

	getCapacity() {
		return this.capacity
	}

	getSize() {
		return this.size
	}

	isEmpty() {
		return this.size == 0
	}

	enqueue(val) {
		//queue is full
		if(this.capacity > 0 && this.size == this.capacity) {
			console.log('error, queue is full')
			return false
		}
		var newItem = new QueueItem(val, null)

		//first item in queue
		if(!this.front) {
			this.front = this.back = newItem
			this.size++
			return true
		}

		//enqueue in middle to the back of the current queue with the current back pointing to the new item
		this.back.next = newItem
		//update back pointer to newly added item
		this.back = newItem
		this.size++
		return true
	}

	dequeue() {
		if(!this.front) {
			console.log('error, queue is empty (can\'t dequeue)')
			return null
		}
		//point this.front to what was previously the 2nd item in queue
		var poppedItem = this.front.val
		this.front = this.front.next
		this.size--
		return poppedItem
	}

	peek() {
		//return value of the first item in queue
		if(!this.front) {
			console.log('error, queue is empty (can\'t peek)')
			return null
		}
		return this.front.val
	}

}
