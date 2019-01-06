class DoublyLinkedListNode {
	constructor(prev, val, next) {
		this.prev = prev
		this.val = val
		this.next = next
	}
}

module.exports = class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	getSize() {
		return this.size
	}

	add(val) {
		var newNode = new DoublyLinkedListNode(null, val, null)

		if(!this.tail) {
			this.head = this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}

		this.size++
	}

	prepend(val) {
		if(!this.head) return false

		var newNode = new DoublyLinkedListNode(null, val, this.head)
		this.head.prev = newNode
		this.head = newNode

		this.size++
	}

	remove(val) {
		if(!this.head) return false
		
		var cNode = this.head
		if(cNode.val == val) {
			if(this.head == this.tail) {
				this.head = this.tail = null
			} else {
				cNode.next.prev = null
				this.head = cNode.next
			}
			this.size--
			return true
		}

		while(cNode) {
			if(cNode.val == val) {
				cNode.prev.next = cNode.next
				if(!cNode.next) { //tail is being removed
					this.tail = cNode.prev
				} else {
					cNode.next.prev = cNode.prev
				}
				this.size--
				return true
			}
			cNode = cNode.next
		}

		return false
	}

	removeHead() {
		if(!this.head) return false

		if(this.head == this.tail) {
			this.head = this.tail = null
			this.size--
			return true
		}

		this.head.next.prev = null
		this.head = this.head.next
		this.size--
		return true
	}

	removeTail() {
		if(!this.tail) return false

		if(this.head == this.tail) {
			this.head = this.tail = null
			this.size--
			return true
		}

		this.tail.prev.next = null
		this.tail = this.tail.prev
		this.size--
		return true
	}

	find(val) {
		if(!this.head) return null

		var cNode = this.head
		while(cNode) {
			if(cNode.val == val) {
				return cNode
			}
			cNode = cNode.next
		}

		return null
	}

	reverse() {
		if(this.size < 2) return true
		var cNode = this.head
		while(cNode) {
			var temp = cNode.prev
			cNode.prev = cNode.next
			cNode.next = temp
			cNode = cNode.prev //prev as this is what was previously next
		}
		var temp = this.head
		this.head = this.tail
		this.tail = temp
		return true
	}

	toString() {
		var cNode = this.head
		var listAsString = 'null'
		while(cNode) {
			listAsString += '<-' + cNode.val + '->'
			cNode = cNode.next
		}
		return listAsString+'null'
	}
}