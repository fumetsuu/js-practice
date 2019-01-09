const { assert, cmpArr } = require('../../util')

const floydWarshall = require('./floyd_warshall')

const Graph = require('../graph')
const Vertex = require('../vertex')
const Edge = require('../edge')

var vA = new Vertex('A')
var vB = new Vertex('B')
var vC = new Vertex('C')
var vD = new Vertex('D')

var eAB = new Edge(vA, vB, 3)
var eBA = new Edge(vB, vA, 8)
var eBC = new Edge(vB, vC, 2)
var eAD = new Edge(vA, vD, 7)
var eDA = new Edge(vD, vA, 2)
var eCA = new Edge(vC, vA, 5)
var eCD = new Edge(vC, vD, 1)

var graph = new Graph(true)

graph.addEdges([eAB, eBA, eBC, eAD, eDA, eCA, eCD])

var resultsMatrix = floydWarshall(graph)

assert(cmpArr(resultsMatrix[0], [0,3,5,6]), 'floyd warshall test 1 ')
assert(cmpArr(resultsMatrix[1], [5,0,2,3]), 'floyd warshall test 2 ')
assert(cmpArr(resultsMatrix[2], [3,6,0,1]), 'floyd warshall test 3 ')
assert(cmpArr(resultsMatrix[3], [2,5,7,0]), 'floyd warshall test 4 ')

var graph1 = new Graph(true)
graph1.addVertices([vA, vB, vC, vD])

var eAC1 = new Edge(vA, vC, -2)
var eBA1 = new Edge(vB, vA, 4)
var eBC1 = new Edge(vB, vC, 3)
var eCD1 = new Edge(vC, vD, 2)
var eDB1 = new Edge(vD, vB, -1)
graph1.addEdges([eAC1, eBA1, eBC1, eCD1, eDB1])

var resultsMatrix1 = floydWarshall(graph1)

assert(cmpArr(resultsMatrix1[0], [0,-1,-2,0]), 'floyd warshall test negative weights 1 ')
assert(cmpArr(resultsMatrix1[1], [4,0,2,4]), 'floyd warshall test negative weights 2 ')
assert(cmpArr(resultsMatrix1[2], [5,1,0,2]), 'floyd warshall test negative weights 3 ')
assert(cmpArr(resultsMatrix1[3], [3,-1,1,0]), 'floyd warshall test negative weights 4 ')