const LinkedList = require('../linked_list/linked_list')

module.exports = class HashTable {
	constructor(capacity) {
		this.capacity = capacity || 100
		this.buckets = Array(capacity).fill(null).map(() => new LinkedList())
		this.keys = {}
	}

	set(key, val) {
		var keyHash = this.getHash(key, 1)
		var bucketLinkedList = this.buckets[keyHash]
		var node = bucketLinkedList.find(nodeVal => nodeVal.key == key)
		if(!node) {
			bucketLinkedList.add({ key, val })
		} else {
			node.val.val = val
		}
	}

	delete(key) {
		var keyHash = this.getHash(key, -1)
		var bucketLinkedList = this.buckets[keyHash]
		var node = bucketLinkedList.find(nodeVal => nodeVal.key == key)
		if(!node) {
			console.log('item with key ', key, ' does not exist')
		} else {
			bucketLinkedList.remove(node.val)
		}
	}

	get(key) {
		var keyHash = this.getHash(key)
		var bucketLinkedList = this.buckets[keyHash]
		var node = bucketLinkedList.find(nodeVal => nodeVal.key == key)
		if(!node) {
			console.log('item with key ', key, ' does not exist')
			return null
		} else {
			return node.val.val
		}
	}

	contains(key) {
		return this.keys[key] != undefined
	}

	getKeys() {
		return Object.keys(this.keys)
	}

	toString() {
		return this.buckets.toString()
	}

	/* INTERNAL FUNCTIONS */
	hash(key) {
		return Array.from(key).reduce((acc, _, i) => acc += key.charCodeAt(i), 0) % this.buckets.length
	}

	getHash(key, o=0) {
		var keyHash
		if(this.keys[key]) {
			keyHash = this.keys[key]
			if(o == -1) {
				delete this.keys[key]
			}
		} else {
			keyHash = this.hash(key)
			if(o == 1) {
				this.keys[key] = keyHash
			}
		}
		return keyHash
	}

}