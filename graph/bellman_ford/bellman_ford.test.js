const { assert } = require('../../util')

const bellmanFord = require('./bellman_ford')

const Graph = require('../graph')
const Vertex = require('../vertex')
const Edge = require('../edge')

var vA = new Vertex('A')
var vB = new Vertex('B')
var vC = new Vertex('C')
var vD = new Vertex('D')
var vE = new Vertex('E')
var vF = new Vertex('F')
var vG = new Vertex('G')

var eAB = new Edge(vA, vB, 6)
var eAC = new Edge(vA, vC, 5)
var eAD = new Edge(vA, vD, 5)
var eBE = new Edge(vB, vE, -1)
var eCB = new Edge(vC, vB, -2)
var eCE = new Edge(vC, vE, 1)
var eDC = new Edge(vD, vC, -2)
var eDF = new Edge(vD, vF, -1)
var eEG = new Edge(vE, vG, 3)
var eFG = new Edge(vF, vG, 3)

var graph = new Graph(true)
graph.addEdges([eAB, eAC, eAD, eBE, eCB, eCE, eDC, eDF, eEG, eFG])

var results = bellmanFord(graph)
var { parents, costs } = results

assert(parents['A'] = null, 'bellmanFord test 1 ')
assert(parents['B'] = 'C', 'bellmanFord test 2 ')
assert(parents['C'] = 'D', 'bellmanFord test 3 ')
assert(parents['D'] = 'A', 'bellmanFord test 4 ')
assert(parents['E'] = 'B', 'bellmanFord test 5 ')
assert(parents['F'] = 'D', 'bellmanFord test 6 ')
assert(parents['G'] = 'E', 'bellmanFord test 7 ')
assert(costs['A'] = 0, 'bellmanFord test 8 ')
assert(costs['B'] = 1, 'bellmanFord test 9 ')
assert(costs['C'] = 3, 'bellmanFord test 10 ')
assert(costs['D'] = 5, 'bellmanFord test 11 ')
assert(costs['E'] = 0, 'bellmanFord test 12 ')
assert(costs['F'] = 4, 'bellmanFord test 13 ')
assert(costs['G'] = 3, 'bellmanFord test 14 ')

//undirected, positively weighted
// var vA = new Vertex('A')
// var vB = new Vertex('B')
// var vC = new Vertex('C')
// var vD = new Vertex('D')
// var vE = new Vertex('E')
// var vF = new Vertex('F')
// var vG = new Vertex('G')

// var eAB = new Edge(vA, vB, 7)
// var eAD = new Edge(vA, vD, 5)
// var eBC = new Edge(vB, vC, 8)
// var eBD = new Edge(vB, vD, 9)
// var eBE = new Edge(vB, vE, 7)
// var eCE = new Edge(vC, vE, 5)
// var eDE = new Edge(vD, vE, 15)
// var eDF = new Edge(vD, vF, 6)
// var eEF = new Edge(vE, vF, 8)
// var eEG = new Edge(vE, vG, 9)
// var eFG = new Edge(vF, vG, 11)

// var graph = new Graph()
// graph.addEdges([eAB, eAD, eBC, eBD, eBE, eCE, eDE, eDF, eEF, eEG, eFG])

// var results = bellmanFord(graph)

// var { parents, costs } = results

// assert(parents['A'] == null, 'bellmanFord test 1 ')
// assert(parents['B'] == 'A', 'bellmanFord test 2 ')
// assert(parents['D'] == 'A', 'bellmanFord test 3 ')
// assert(parents['F'] == 'D', 'bellmanFord test 4 ')
// assert(parents['E'] == 'B', 'bellmanFord test 5 ')
// assert(parents['C'] == 'B', 'bellmanFord test 6 ')
// assert(parents['G'] == 'F', 'bellmanFord test 7 ')
// assert(costs['A'] == 0, 'bellmanFord test 8 ')
// assert(costs['D'] == 5, 'bellmanFord test 9 ')
// assert(costs['B'] == 7, 'bellmanFord test 10 ')
// assert(costs['F'] == 11, 'bellmanFord test 11 ')
// assert(costs['E'] == 14, 'bellmanFord test 12 ')
// assert(costs['C'] == 15, 'bellmanFord test 13 ')
// assert(costs['G'] == 22, 'bellmanFord test 14 ')


