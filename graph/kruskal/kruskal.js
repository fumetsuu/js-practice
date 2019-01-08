const Graph = require('../graph')
const Edge = require('../edge')
const Vertex = require('../vertex')

//returns a minimum spanning tree (graph) of the given graph
module.exports = function kruskal(graph) {
	var mst = new Graph()

	//get edges sorted by weight
	var edges = graph.getEdges().sort((edge1, edge2) => edge1.weight > edge2.weight)
	edges.forEach(edge => {
		console.log(mst.closesCycle(edge))
		//before adding an edge, check to see if it makes a cycle
		//a cycle will be made if the start or end vertex has neighbours that connect to the end or start vertex
		if(!mst.closesCycle(edge)) mst.addEdges(edge)
	})

	return mst
}