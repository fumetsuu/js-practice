function findMinKey(obj) {
	var min = Infinity
	var minKey
	Object.keys(obj).forEach(key => {
		if(obj[key] < min) {
			min = obj[key]
			minKey = key
		}
	})
	return minKey
}

module.exports = function dijkstra(graph, start=graph.getVertices()[0]) {
	var results = {
		parents: {},
		costs: {}
	}

	results.parents[start.key] = null

	var unexplored = {}
	graph.getVertices().forEach(vertex => {
		unexplored[vertex.key] = Infinity
	})
	unexplored[start.key] = 0

	while(Object.keys(unexplored).length > 0) {
		var cVertex = graph.getVertex(findMinKey(unexplored))
		var neighbours = graph.getNeighbours(cVertex)
		neighbours.forEach(neighbour => {
			if(unexplored[neighbour.key] != undefined) {
				var edge = graph.getEdge(cVertex.key, neighbour.key)
				var accCost = unexplored[cVertex.key]
				var newCost = accCost + edge.weight
				if(newCost < unexplored[neighbour.key]) {
					results.parents[neighbour.key] = cVertex.key
					unexplored[neighbour.key] = newCost
				}
			}
		})
		results.costs[cVertex.key] = unexplored[cVertex.key]
		delete unexplored[cVertex.key]
	}

	return results

}