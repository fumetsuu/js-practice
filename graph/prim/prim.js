const Graph = require('../graph')
const Queue = require('../../queue/queue')
const byWeight = (e1, e2) => e1.weight > e2.weight

module.exports = function prim(graph, start=graph.getVertices()[0]) {
	var mst = new Graph()

	//cheat because bad heap implementation, possibleEdges must always be kept sorted
	var possibleEdges = graph.getEdges(start).sort(byWeight)
	var visited = []
	while(possibleEdges.length > 0) {
		var edge = possibleEdges.shift()
		var targetVertex = mst.vertexExists(edge.startVertex) ? edge.endVertex : edge.startVertex
		if(!visited.includes(targetVertex.key)) {
			mst.addEdges(edge)
			visited.push(targetVertex.key)
			possibleEdges = [...possibleEdges, ...graph.getEdges(targetVertex)].sort(byWeight)
		}
	}

	return mst
}
