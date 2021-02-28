import React, { Suspense, useRef, useState } from 'react'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'

const Main = ({mouse}) => {
    let x = mouse.current[0]

    let positions = useRef(new Map())

    let [activeNode, setActiveNode] = useState()

    var createGraph = require('ngraph.graph');
    var g = createGraph();

    // g.addNode('a', { scene: <JackyObject />, pos: [0,5,1]})
    // g.addNode('b', { scene: <JackyObject />, pos: [0,-5,2]})
    // g.addNode('c', { scene: <JackyObject />, pos: [3,0,3]})
    // g.addNode('d', { scene: <JackyObject />, pos: [-3,0,-3]})
    g.addNode('a', { scene: <JackyObject />, pos: [0,0,30]})
    g.addNode('b', { scene: <JackyObject />, pos: [0,0,30]})
    g.addNode('c', { scene: <JackyObject />, pos: [0,0,30]})
    g.addNode('d', { scene: <JackyObject />, pos: [0,0,30]})

    g.addLink('a', 'b')
    g.addLink('a', 'c')
    g.addLink('a', 'd')
    g.addLink('b', 'd')

    const onClick = (clickedNode) => {
        if(clickedNode != activeNode){
            g.forEachNode((node) => {
                //set each node to the original position and center the clicked node
                node.id == clickedNode ? positions.current.get(node.id).current = [0,0,0] : positions.current.get(node.id).current = node.data.pos
            })
            //change the positions of the linked nodes to be around the clicked node
            let linkedNodes = []
            g.forEachLinkedNode(clickedNode, (linkedNode) => {
                //positions.current.get(linkedNode.id).current = [i,5,i]
                //i++
                linkedNodes.push(linkedNode)
                //console.log("Connected node: ", linkedNode.id, linkedNode.data)
            })
            linkedNodesPos(linkedNodes)
            setActiveNode(clickedNode)
        }
    }

    const linkedNodesPos = (linkedNodes) => {
        let length = linkedNodes.length
        let angleIncrement = 360/length
        let angle = 0

        console.log(angleIncrement)
        linkedNodes.forEach((node, index) => {
            positions.current.get(node.id).current = [calcX(angle), calcY(angle), calcZ(angle)]
            angle += angleIncrement
        })
    }

    const calcX = (angle) => {
        angle = toRadians(angle)
        return (5 * Math.sin(angle))
    }

    const calcY = (angle) => {
        angle = toRadians(angle)
        return (5 * Math.cos(angle))
    }

    const calcZ = (angle) => {
        angle = toRadians(angle)
        return (4 * Math.random() - 2)
    }

    const toRadians = (angle) => {
        return angle * (Math.PI / 180);
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
            if(node.id == 'a'){
                value.push( <NodeObject key={node.id} value={node.id} onClick={onClick} getPosRef={getPosRef} pos={[0,0,0]} scene={node.data.scene} mouse={mouse} testing={node.data.testing}/> )
            }
            else{
                value.push( <NodeObject key={node.id} value={node.id} onClick={onClick} getPosRef={getPosRef} pos={node.data.pos} scene={node.data.scene} mouse={mouse} testing={node.data.testing}/> )
            }
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
