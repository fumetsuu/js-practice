const { assert, cmpArr } = require('../util')

const Graph = require('./graph')
const Vertex = require('./vertex')
const Edge = require('./edge')

var graph = new Graph(false) //undirected graph
var vA = new Vertex('A')
var vB = new Vertex('B')
var vC = new Vertex('C')
var vD = new Vertex('D')
var vE = new Vertex('E')
var vF = new Vertex('F')

var eAB = new Edge(vA, vB, 1)
var eAC = new Edge(vA, vC, 3)
var eBD = new Edge(vB, vD, 2)
var eCD = new Edge(vC, vD, 4)
var eDE = new Edge(vD, vE, 1)
var eEF = new Edge(vE, vF, 6)

graph.addEdges([eAB, eAC, eBD, eCD, eDE, eEF])

assert(graph.getWeight() == 17, 'graph weight test ')

assert(cmpArr(graph.getAdjacencyMatrix()[0], [0,1,3,0,0,0]), 'adjacency matrix test 1 ')
assert(cmpArr(graph.getAdjacencyMatrix()[1], [1,0,0,2,0,0]), 'adjacency matrix test 2 ')
assert(cmpArr(graph.getAdjacencyMatrix()[2], [3,0,0,4,0,0]), 'adjacency matrix test 3 ')
assert(cmpArr(graph.getAdjacencyMatrix()[3], [0,2,4,0,1,0]), 'adjacency matrix test 4 ')
assert(cmpArr(graph.getAdjacencyMatrix()[4], [0,0,0,1,0,6]), 'adjacency matrix test 5 ')
assert(cmpArr(graph.getAdjacencyMatrix()[5], [0,0,0,0,6,0]), 'adjacency matrix test 6 ')

assert(graph.getVertex('D').getDegree() == 3, 'vertex degree test ')
assert(graph.getVertex('C').getNeighbours()[0].key == 'A', 'vertex neighbours test 1 ')
assert(graph.getVertex('C').getNeighbours()[1].key == 'D', 'vertex neighbours test 2 ')
assert(!graph.vertexExists('G'), 'vertex exists test ')
graph.deleteVertices(vF)
assert(!graph.getVertex('F'), 'delete vertex test 1 ')
assert(!graph.getEdge('E', 'F'), 'delete vertex edge collorary test 1 ')
graph.deleteVertices([vA, vD])
assert(graph.getWeight() == 0, 'delete vertices and collorary edges test 2 ')