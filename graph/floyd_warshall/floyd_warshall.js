module.exports = function floydWarshall(graph) {
	var vertices = graph.getVertices()
	var resultsMatrix = []
	
	var i, j
	for(i = 0; i < vertices.length; i++) {
		var row = []
		for(j = 0; j < vertices.length; j++) {
			if(i==j) {
				row[j] = 0
			} else {
				var edge = graph.getEdge(vertices[i].key, vertices[j].key)
				if(edge) {
					row[j] = edge.weight
				} else {
					row[j] = Infinity
				}
			}
		}
		resultsMatrix.push(row)
	}


	for(var k = 0; k < vertices.length; k++) {
		for(var i = 0; i < vertices.length; i++) {
			for(var j = 0; j < vertices.length; j++) {
				var shortest = resultsMatrix[i][j]
				var candidate = resultsMatrix[i][k] + resultsMatrix[k][j]
				shortest = candidate < shortest ? candidate : shortest
				resultsMatrix[i][j] = shortest
			}
		}
	}

	return resultsMatrix
}