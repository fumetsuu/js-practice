module.exports = class Edge {
	constructor(startVertex, endVertex, weight = 1) {
		this.startVertex = startVertex
		this.endVertex = endVertex
		this.startVertex.addEdge(this)
		this.endVertex.addEdge(this)
		this.weight = weight
	}

	getKey() {
		return `${this.startVertex.key} ➞ ${this.endVertex.key}`
	}
}