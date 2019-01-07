module.exports = class MaxHeap {
	constructor() {
		this.nodes = []
	}

	getSize() {
		return this.nodes.length
	}

	//push the value on to the end of the array (bottom-right most leaf) then sift it up
	insert(val) {
		this.nodes.push(val)
		this.siftUp(this.nodes.length - 1)
	}

	//deletes first occurence of the node with value val
	delete(val) {
		var valIndex = this.find(val)
		if(valIndex == -1) return null
		this.swapNodes(valIndex, this.nodes.length - 1)
		this.nodes = this.nodes.slice(0, this.nodes.length - 1)
		this.siftDown(valIndex)
	}

	pop() {
		if(this.nodes.length == 0) return null
		var retVal = this.nodes[0]
		this.swapNodes(0, this.nodes.length - 1)
		this.nodes = this.nodes.slice(0, this.nodes.length - 1)
		this.siftDown(0)
		return retVal
	}

	findMax() {
		return this.nodes[0]
	}

	//returns the index of the first occurence of the node with value val
	find(val) {
		for(var i = 0; i < this.nodes.length; i++) {
			if(this.nodes[i] == val) {
				return i
			}
		}
		return -1
	}

	heapify(arr) {
		this.nodes = arr
		var swaps = 1
		while(swaps > 0) {
			swaps = 0
			for(var i = this.nodes.length - 1; i > 0; i--) {
				if(this.siftUp(i)) swaps++
			}
		}
		return this.nodes
	}

	toString() {
		return this.nodes.toString()
	}

	toArrayRepresentation() {
		return this.nodes
	}

	/* INTERNAL FUNCTIONS */
	siftUp(n) {
		if(n == 0 || this.nodes[n] <= this.getParent(n)) return false
		//check between n and n's parent, if n > n'parent then swap
		if(this.nodes[n] > this.getParent(n)) {
			this.swapNodes(n, this.getParentIndex(n))
			//now sift up again at the parent's index (where n now resides)
			this.siftUp(this.getParentIndex(n))
			return true
		}
	}

	siftDown(n) {

		var leftChild = this.getLeftChild(n)
		var rightChild = this.getRightChild(n)
		var higherChildIndex
		
		if((leftChild == undefined || this.nodes[n] >= leftChild) && (rightChild == undefined || this.nodes[n] >= rightChild)) return false

		if((leftChild != undefined && this.nodes[n] < leftChild) && (rightChild == undefined || this.nodes[n] >= rightChild)) {
			higherChildIndex = this.getLeftChildIndex(n)
		} else if((rightChild != undefined && this.nodes[n] < rightChild) && (leftChild == undefined || this.nodes[n] >= leftChild)) {
			higherChildIndex = this.getRightChildIndex(n)
		} else {
			higherChildIndex = leftChild > rightChild ? this.getLeftChildIndex(n) : this.getRightChildIndex(n)
		}
		this.swapNodes(n, higherChildIndex)
		//now sift up again at the higher child's index (where n now resides)
		this.siftDown(higherChildIndex)
	}

	swapNodes(n1, n2) {
		var temp = this.nodes[n1]
		this.nodes[n1] = this.nodes[n2]
		this.nodes[n2] = temp
	}

	getLeftChildIndex(n) { return 2*n + 1 }
	getRightChildIndex(n) { return 2*n + 2 }
	getParentIndex(n) { return Math.floor((n-1)/2) }
	getLeftChild(n) { return this.nodes[this.getLeftChildIndex(n)] }
	getRightChild(n) { return this.nodes[this.getRightChildIndex(n)] }
	getParent(n) { return this.nodes[this.getParentIndex(n)] }
}