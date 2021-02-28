import React, { Suspense, useRef, useState } from 'react'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'

const Main = ({mouse}) => {
    let x = mouse.current[0]

    let positions = useRef(new Map())

    let [activeNode, setActiveNode] = useState()

    var createGraph = require('ngraph.graph');
    var g = createGraph();

    g.addNode('a', { scene: <JackyObject />, pos: [0,5,1]})
    g.addNode('b', { scene: <JackyObject />, pos: [0,-5,2]})
    g.addNode('c', { scene: <JackyObject />, pos: [3,0,3]})
    g.addNode('d', { scene: <JackyObject />, pos: [-3,0,-3]})

    g.addLink('a', 'b')
    g.addLink('a', 'c')

    const onClick = (clickedNode) => {
        g.forEachNode((node) => {
            //set each node to the original position and center the clicked node
            node.id == clickedNode ? positions.current.get(node.id).current = [0,0,0] : positions.current.get(node.id).current = node.data.pos
        })
        //change the positions of the linked nodes to be around the clicked node
        g.forEachLinkedNode(clickedNode, (linkedNode) => {

            console.log("Connected node: ", linkedNode.id, linkedNode.data)
        })
        setActiveNode(clickedNode)
    }
    
    const findPosition = (node, pos) => {
        return null
    }
    
    //adds the posRef to a list with the key of the node it is the posRef for
    const getPosRef = (node, posRef) => {
        positions.current.set(node, posRef)
        console.log(positions)
    }

    const testReturn = () => {
        let value = []
        
        //adds all the nodes to the array that gets rendered
        g.forEachNode((node) => {
            value.push( <NodeObject key={node.id} value={node.id} onClick={onClick} getPosRef={getPosRef} pos={node.data.pos} scene={node.data.scene} mouse={mouse} testing={node.data.testing}/> )
        })

        return value
    }

    return (
        <Suspense fallback={null}>
            {/* <NodeObject mouse={mouse} scene={<JackyObject />} position1={[0,5,1]} position2={[0,0,0]} />
            <NodeObject mouse={mouse} scene={<JackyObject />} position1={[0,0,0]} position2={[0,0,15]} /> */}
            {testReturn()}
        </Suspense>
    )
}

export default Main
