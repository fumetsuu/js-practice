const Vertex = require('./vertex')
const Edge = require('./edge')

module.exports = class Graph {
	constructor(isDirected = false) {
		this.vertices = {}
		this.edges = {}
		this.isDirected = isDirected
	}

	getVertices() {
		return Object.keys(this.vertices).map(vKey => this.vertices[vKey])
	}

	getNeighbours(vertex) {
		return vertex.getNeighbours().filter(vNeighbour => this.getEdge(vertex.key, vNeighbour.key))
	}
	
	hasNeighbour(v1, v2) {
		return this.getNeighbours(v1).includes(v2)
	}

	closesCycle(edge) {
		var sV = edge.startVertex
		var eV = edge.endVertex
		
		const closesCycleRecursive = (cV, visited) => {
			visited.push(cV.key)
			var neighbours = this.getNeighbours(cV)

			neighbours.forEach(neighbour => {
				if(!visited.includes(neighbour.key)) {
					return closesCycleRecursive(neighbour, visited)
				}
			})

			return visited
		}

		return closesCycleRecursive(sV, []).includes(eV.key)

	}


	getEdges(vertex = null) {
		if(vertex == null) return Object.keys(this.edges).map(eKey => this.edges[eKey])
		return Object.keys(this.edges).filter(eKey => {
			var edge = this.edges[eKey]
			if(!this.isDirected) return edge.startVertex == vertex || edge.endVertex == vertex
			if(this.isDirected) return edge.startVertex == vertex
		}).map(eKey => this.edges[eKey])
	}

	addVertices(vertices) {
		const addVertex = vertex => {
			this.vertices[vertex.key] = vertex
		}

		//single vertex
		if(!Array.isArray(vertices)) {
			var vertex = vertices
			addVertex(vertex)
		} else {
			vertices.forEach(addVertex)
		}
	}

	
	deleteVertices(vertices) {
		const deleteVertex = vertex => {
			delete this.vertices[vertex.key]
			//remove all edges connected to this vertex
			var edges = vertex.getEdges()
			this.deleteEdges(edges)
		}

		//single vertex
		if(!Array.isArray(vertices)) {
			var vertex = vertices
			deleteVertex(vertex)
		} else {
			vertices.forEach(deleteVertex)
		}
	}

	addEdges(edges) {
		const addEdge = edge => {
			var undirectedEdge = this.getEdge(edge.startVertex, edge.endVertex)
			if(!this.isDirected && undirectedEdge) delete this.edges[undirectedEdge.getKey()]
			if(!this.vertexExists(edge.startVertex)) this.addVertices(edge.startVertex)
			if(!this.vertexExists(edge.endVertex)) this.addVertices(edge.endVertex)
			this.edges[edge.getKey()] = edge
		}

		//single edge
		if(!Array.isArray(edges)) {
			var edge = edges
			addEdge(edge)
		} else {
			edges.forEach(addEdge)
		}
	}

	deleteEdges(edges) {
		const deleteEdge = edge => {
			delete this.edges[edge.getKey()]
		}

		//single edge
		if(!Array.isArray(edges)) {
			var edge = edges
			deleteEdge(edge)
		} else {
			edges.forEach(deleteEdge)
		}
	}

	edgeExists(edge) {
		return Object.keys(this.edges).includes(edge.getKey())
	}

	vertexExists(vertex) {
		return Object.keys(this.vertices).includes(vertex.key)
	}

	getVertex(key) {
		return this.vertices[key] || null
	}

	getEdge(v1key, v2key) {
		var targetEdge = null
		Object.keys(this.edges).forEach(edgeKey => {
			var startVCorrect = this.edges[edgeKey].startVertex.key == v1key
			var endVCorrect = this.edges[edgeKey].endVertex.key == v2key
			if(this.isDirected) {
				if(startVCorrect && endVCorrect) targetEdge = this.edges[edgeKey]
			} else {
				var startVCorrectR = this.edges[edgeKey].endVertex.key == v1key
				var endVCorrectR = this.edges[edgeKey].startVertex.key == v2key
				if((startVCorrect && endVCorrect) || (startVCorrectR && endVCorrectR)) targetEdge = this.edges[edgeKey]
			}
		})
		return targetEdge
	}

	getWeight() {
		var totalWeight = 0
		Object.keys(this.edges).forEach(edgeKey => {
			totalWeight += this.edges[edgeKey].weight
		})
		return totalWeight
	}

	getAdjacencyMatrix() {
		var vKeys = Object.keys(this.vertices)
		var vCount = vKeys.length
		var aM = []
		for(var sV = 0; sV < vCount; sV++) {
			var row = []
			for(var eV = 0; eV < vCount; eV++) {
				var edge = this.getEdge(vKeys[sV], vKeys[eV])
				if(edge == null) {
					row[eV] = 0
				} else {
					row[eV] = edge.weight
				}
			}
			aM.push(row)
		}
		return aM
	}

	printAdjacencyMatrix() {
		var aM = this.getAdjacencyMatrix()
		var vKeys = Object.keys(this.vertices)
		var aMString = '-  | '
		for(var h = 0; h < vKeys.length; h++) {
			aMString += vKeys[h] + ' | '
		}
		aMString += '\n'
		for(var v = 0; v < vKeys.length; v++) {
			aMString += vKeys[v] + ' | '
			for(var i = 0; i < vKeys.length; i++) {
				aMString += aM[v][i] + ' | '
			}
			aMString += '\n'
		}
		console.log(aMString)
	}

}