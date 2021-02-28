import React from 'react'

const Graph = () => {
    var createGraph = require('ngraph.graph');
    var g = createGraph();

    g.addNode('a', <h1>Test</h1>)
    g.addNode('b', <h2>Test2</h2>)
    g.addNode('c', <h2>Test3</h2>)
    g.addNode('d', <h2>Test4</h2>)

    g.addLink('a', 'b')
    g.addLink('a', 'c')
    g.addLink('a', 'd')
    g.addLink('c', 'd')

    g.forEachNode(function(node){
        //console.log(node.id, node.data);
    })

    // g.forEachLinkedNode('d', function(linkedNode, link){
    //     console.log("Connected node: ", linkedNode.id, linkedNode.data);
    //     //console.dir(link); // link object itself
    // });

    return null
}

export default Graph