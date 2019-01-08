const { assert, cmpArr } = require('../../util')

const depthFirstSearch = require('./depth_first_search')

const Vertex = require('../vertex')
const Edge = require('../edge')
const Graph = require('../graph')

var graph = new Graph()

var vA = new Vertex('A')
var vB = new Vertex('B')
var vC = new Vertex('C')
var vD = new Vertex('D')
var vE = new Vertex('E')
var vF = new Vertex('F')
var vG = new Vertex('G')

var eAB = new Edge(vA, vB)
var eAC = new Edge(vA, vC)
var eAE = new Edge(vA, vE)
var eBD = new Edge(vB, vD)
var eBF = new Edge(vB, vF)
var eCG = new Edge(vC, vG)
var eFE = new Edge(vF, vE)

graph.addEdges([eAB, eAC, eAE, eBD, eBF, eCG, eFE])

assert(cmpArr(depthFirstSearch(graph), ['A','B','D','F','E','C','G']), 'depth first search test 1 ')
assert(cmpArr(depthFirstSearch(graph, graph.getVertices()[1]), ['B','A','C','G','E','F','D']), 'depth first search test 2 ')
assert(cmpArr(depthFirstSearch(graph, graph.getVertices()[2]), ['C','A','B','D','F','E','G']), 'depth first search test 3 ')