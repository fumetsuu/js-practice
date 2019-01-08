module.exports = function depthFirstSearch(graph, start = graph.getVertices()[0]) {
	return depthFirstSearchRecursive(start, [])

	function depthFirstSearchRecursive(start, visited) {
		visited.push(start.key)
		var neighbours = start.getNeighbours()
		neighbours.forEach(vertex => {
			if(!visited.includes(vertex.key)) {
				return depthFirstSearchRecursive(vertex, visited)
			}	
		})
		return visited
	}
}