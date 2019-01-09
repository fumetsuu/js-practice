const { assert } = require('../../util')

const dijkstra = require('./dijkstra')

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

var eAB = new Edge(vA, vB, 7)
var eAD = new Edge(vA, vD, 5)
var eBC = new Edge(vB, vC, 8)
var eBD = new Edge(vB, vD, 9)
var eBE = new Edge(vB, vE, 7)
var eCE = new Edge(vC, vE, 5)
var eDE = new Edge(vD, vE, 15)
var eDF = new Edge(vD, vF, 6)
var eEF = new Edge(vE, vF, 8)
var eEG = new Edge(vE, vG, 9)
var eFG = new Edge(vF, vG, 11)

var graph = new Graph()
graph.addEdges([eAB, eAD, eBC, eBD, eBE, eCE, eDE, eDF, eEF, eEG, eFG])

var results = dijkstra(graph)

var { parents, costs } = results

assert(parents['A'] == null, 'dijkstra test 1 ')
assert(parents['B'] == 'A', 'dijkstra test 2 ')
assert(parents['D'] == 'A', 'dijkstra test 3 ')
assert(parents['F'] == 'D', 'dijkstra test 4 ')
assert(parents['E'] == 'B', 'dijkstra test 5 ')
assert(parents['C'] == 'B', 'dijkstra test 6 ')
assert(parents['G'] == 'F', 'dijkstra test 7 ')
assert(costs['A'] == 0, 'dijkstra test 8 ')
assert(costs['D'] == 5, 'dijkstra test 9 ')
assert(costs['B'] == 7, 'dijkstra test 10 ')
assert(costs['F'] == 11, 'dijkstra test 11 ')
assert(costs['E'] == 14, 'dijkstra test 12 ')
assert(costs['C'] == 15, 'dijkstra test 13 ')
assert(costs['G'] == 22, 'dijkstra test 14 ')


