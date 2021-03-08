import React, { Suspense, useRef, useState } from 'react'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'
import TextObject from './TextObject'
import ShapeObject from './ShapeObject'

const Main = ({mouse}) => {
    let x = mouse.current[0]

    let positions = useRef(new Map())

    //need this for react to re render the components after a click is made
    let [activeNode, setActiveNode] = useState()

    var createGraph = require('ngraph.graph');
    var g = createGraph();

    g.addNode('a', { scene: <JackyObject />, pos: [0,0,30]})
    g.addNode('b', { scene: <TextObject children="2020" />, pos: [0,0,30]})
    g.addNode('c', { scene: <TextObject children="3D MOTION DESIGNER" />, pos: [0,0,30]})
    g.addNode('d', { scene: <TextObject children="SOFTWARE DEVELOPER" />, pos: [0,0,30]})
    g.addNode('e', { scene: <ShapeObject />, pos: [0,0,30]})
    g.addNode('f', { scene: <ShapeObject />, pos: [0,0,30]})
    g.addNode('g', { scene: <ShapeObject />, pos: [0,0,30]})
    g.addNode('h', { scene: <ShapeObject />, pos: [0,0,30]})

    g.addLink('a', 'c')
    g.addLink('a', 'd')
    g.addLink('c', 'e')
    g.addLink('c', 'f')
    g.addLink('c', 'g')
    g.addLink('c', 'h')
    g.addLink('b', 'e')
    g.addLink('b', 'f')
    g.addLink('b', 'g')
    g.addLink('b', 'h')

    const onClick = (clickedNode) => {
        if(clickedNode != activeNode){
            g.forEachNode((node) => {
                //set each node to the original position and center the clicked node
                node.id == clickedNode ? positions.current.get(node.id).current = [0,0,0] : positions.current.get(node.id).current = node.data.pos
            })
            //calculates and moves the nodes to the position around the clicked node (maybe in useframe for the linked nodes to rotate around the clicked node)
            let linkedNodes = []
            g.forEachLinkedNode(clickedNode, (linkedNode) => {
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
        // return (2 * Math.random() - 2)
        return -1
    }

    const toRadians = (angle) => {
        return angle * (Math.PI / 180);
    }
    
    //adds the posRef to a list with the key of the node it is the posRef for
    const getPosRef = (node, posRef) => {
        positions.current.set(node, posRef)
        console.log(positions)
    }

    const returnObjects = () => {
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
            {returnObjects()}
            {/* <NodeObject key={'a'} value={'a'} onClick={onClick} getPosRef={getPosRef} pos={[0,0,0]} scene={<TextObject position={[0,0,0]} children="SOFTWARE DEVELOPER" />} mouse={mouse} testing={false}/> */}
            {/* <NodeObject key={'a'} value={'a'} onClick={onClick} getPosRef={getPosRef} pos={[0,0,0]} scene={<JackyObject />} mouse={mouse} testing={false}/> */}
        </Suspense>
    )
}

export default Main
