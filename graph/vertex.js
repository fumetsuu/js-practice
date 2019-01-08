module.exports = class Vertex {
	constructor(key, val=null) {
		this.key = key
		this.val = val
		this.edges = {}
	}

	addEdge(edge) {
		if(edge.startVertex != this && edge.endVertex != this) return false
		this.edges[edge.getKey()] = edge
	}

	removeEdge(edge) {
		if(this.edges[edge.getKey()]) {
			delete this.edges[edge.getKey()]
		}
	}

	getEdges() {
		return Object.keys(this.edges).map(key => this.edges[key])
	}

	hasNeighbour(vertex) {
		return this.getNeighbours().includes(vertex)
	}

	getNeighbours() {
		return Object.keys(this.edges).map(key => {
			var edge = this.edges[key]
			if(edge.startVertex == this) return edge.endVertex
			if(edge.endVertex == this) return edge.startVertex
		})
	}

	getDegree() {
		return Object.keys(this.edges).length
	}
}