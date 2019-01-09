module.exports = function bellmanFord(graph, start=graph.getVertices()[0]) {
	var results = {
		parents: {},
		costs: {}
	}

	results.parents[start.key] = null

	var vertices = graph.getVertices()
	vertices.forEach(vertex => {
		results.costs[vertex.key] = Infinity
	})
	results.costs[start.key] = 0

	var edges = graph.getEdges()

	var changeOccured = false

	for(var i = 0; i < vertices.length; i++) {
		edges.forEach(edge => {
			var { startVertex, endVertex, weight } = edge
			var newCost = results.costs[startVertex.key] + weight
			if(newCost < results.costs[endVertex.key]) {
				results.costs[endVertex.key] = newCost
				results.parents[endVertex.key] = startVertex.key
				changeOccured = true
			}
		})
		if(!changeOccured) {
			break
		} else {
			changeOccured = false
		}
	}

	return results
}