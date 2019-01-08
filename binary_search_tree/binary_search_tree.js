class BinarySearchTreeNode {
	constructor(val, left, right, parent) {
		this.val = val
		this.left = left
		this.right = right
		this.parent = parent
	}
}

module.exports = class BinarySearchTree {
	constructor() {
		this.root = null
	}

	//check for comparisons between root node's val and given val to determine whether to recursively check left or right
	//base case is when left (or right, depending on comparison) is null, and the node is inserted there (i.e. at the leaf)
	insert(val) {
		var newNode = new BinarySearchTreeNode(val, null, null, null)
		if(this.root == null) {
			this.root = newNode
			return
		} else {
			insertHelper(this.root)
		}
		function insertHelper(rootNode) {
			if(val <= rootNode.val) {
				if(rootNode.left == null) {
					newNode.parent = rootNode
					rootNode.left = newNode
				} else {
					insertHelper(rootNode.left)
				}
			} else if(val > rootNode.val) {
				if(rootNode.right == null) {
					newNode.parent = rootNode
					rootNode.right = newNode
				} else {
					insertHelper(rootNode.right)
				}
			}
		}
	}

	//returns the first node with the given val
	search(val) {
		if(this.root == null) return null
		if(this.root.val == val) return this.root
		return searchHelper(this.root)

		function searchHelper(rootNode) {
			if(val == rootNode.val) return rootNode
			if(val < rootNode.val) {
				if(rootNode.left == null) return null
				return searchHelper(rootNode.left)
			}
			if(val > rootNode.val) {
				if(rootNode.right == null) return null
				return searchHelper(rootNode.right)
			}
		}
	}

	//remove the node with the given val and fix the bst to maintain bst conditions
	remove(val) {
		if(this.root == null) return

		var deleteNode = this.deleteNode.bind(this)
		if(removeHelper(this.root) == null) return null
		return true

		function removeHelper(pNode) {
			if(pNode.val == val) {
				deleteNode(pNode)
			} else if(val < pNode.val) {
				removeHelper(pNode.left)
			} else if(val > pNode.val) {
				removeHelper(pNode.right)
			} else {
				return null
			}

		}

	}

	
	deleteNode(node) {
		//case 1: node has no children
		if(node.left == null && node.right == null) {
			if(node.parent.val > node.val) {
				node.parent.left = null
				return
			}
			if(node.parent.val < node.val) {
				node.parent.right = null
				return
			}
		}

		//case 2: node has one child
		if(node.left && node.right == null) {
			node.val = node.left.val
			node.left = null
			return
		}
		if(node.right && node.left == null) {
			node.val = node.right.val
			node.right = null
			return
		}

		//case 3: node has two children
		//replacement node satisfies either case 1 or case 2
		var replacementNode = this.find_min(node.right)
		node.val = replacementNode.val
		this.deleteNode(replacementNode)
	}

	//the minimum val in a bst does not have a left child or else it would not be the min val
	find_min(rootNode=this.root) {
		if(rootNode == null) return null
		if(rootNode.left == null) {
			return rootNode
		} else {
			return this.find_min(rootNode.left)
		}
	}

	find_max(rootNode=this.root) {
		if(rootNode == null) return null
		if(rootNode.right == null) {
			return rootNode
		} else {
			return this.find_max(rootNode.right)
		}
	}

}