class LinkedListNode {
	constructor(val, next) {
		this.val = val
		this.next = next
	}
}

module.exports = class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	getSize() {
		return this.size
	}

	//append to end operation
	add(val) {
		var newNode = new LinkedListNode(val, null)

		if(!this.tail) {
			this.head = this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}

		this.size++
	}

	prepend(val) {
		var newNode = new LinkedListNode(val, null)

		if(!this.head) {
			this.head = this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = newNode
		}

		this.size++
	}

	//removes the first item found with value val, returning true if successful, otherwise false
	remove(val) {
		if(!this.head) return false
		var cNode = this.head
		//firstly, check the head for the target value
		if(cNode.val == val) {
			if(this.head == this.tail) {
				this.head = this.tail = null
			} else {
				this.head = cNode.next
			}
			this.size--
			return true
		}
		//continue while there is still a next node
		while(cNode.next) {
			if(cNode.next.val == val) {
				//cNode.next is the node to be removed
				//change pointer for cNode to point to cNode.next.next
				cNode.next = cNode.next.next
				//if cNode.next.next happens to be null, then the tail has been removed
				if(!cNode.next.next) this.tail = cNode
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
		//no choice but to traverse entire list until 2nd last item is reached,
		//adjust the 2nd last item pointer to null and set this.tail to 2nd last item
		var cNode = this.head
		while(cNode.next.next) {
			cNode = cNode.next
		}
		this.tail = cNode
		this.size--
		return true
	}

	//return the node object of the node with the given val, null if non existent
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
		var tempHead = this.head
		var pNode = null
		var cNode = this.head
		var nNode = cNode.next
		while(true) {
			cNode.next = pNode
			if(!nNode) {
				this.head = cNode
				this.tail = tempHead
				return true
			}
			pNode = cNode
			cNode = nNode
			nNode = nNode.next
		}
	}

	toString() {
		var cNode = this.head
		var listAsString = ''
		while(cNode) {
			listAsString += cNode.val + '->'
			cNode = cNode.next
		}
		return listAsString+'null'
	}
}