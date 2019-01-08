const Queue = require('../../queue/queue')

module.exports = function breadthFirstSearch(graph, start=graph.getVertices()[0]) {
	var visited = []
	var queue = new Queue()
	queue.enqueue(start)
	while(!queue.isEmpty()) {
		var cVertex = queue.dequeue()
		if(!visited.includes(cVertex.key)) visited.push(cVertex.key)
		var neighbours = cVertex.getNeighbours()
		neighbours.forEach(neighbour => {
			if(!visited.includes(neighbour.key)) {
				queue.enqueue(neighbour)
			}
		})
	}
	return visited
}