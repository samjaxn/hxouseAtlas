import React, { Suspense, useRef, useState } from 'react'
import { Graph, GetImageUrl } from './Graph'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'
import TextObject from './TextObject'
import ShapeObject from './ShapeObject'
import ImageObject from './ImageObject'

const Main = ({mouse}) => {
    let x = mouse.current[0]

    let positions = useRef(new Map())
    let scaleVals = useRef(new Map())

    //need this for react to re render the components after a click is made
    let [activeNode, setActiveNode] = useState()

    var createGraph = require('ngraph.graph');
    var g = createGraph();

    g.addNode('jacky', { scene: <JackyObject />, pos: [0,0,30]})
    g.addNode('2019', { scene: <TextObject children="2019" />, pos: [0,0,30]})
    g.addNode('2020', { scene: <TextObject children="2020" />, pos: [0,0,30]})
    g.addNode('2021', { scene: <TextObject children="2021" />, pos: [0,0,30]})
    g.addNode('c4d', { scene: <TextObject children="3D MOTION DESIGNER" />, pos: [0,0,30], link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('dev', { scene: <TextObject children="SOFTWARE DEVELOPER" />, pos: [0,0,30], link: "http://www.jacky.design/"})
    g.addNode('v1', { scene: <ShapeObject />, pos: [0,0,30], link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('v2', { scene: <ShapeObject />, pos: [0,0,30], link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('v3', { scene: <ImageObject url={GetImageUrl('shoeLaundry')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('v4', { scene: <ImageObject url={GetImageUrl('hongShing')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('v5', { scene: <ImageObject url={GetImageUrl('andras')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('blueJordan', { scene: <ImageObject url={GetImageUrl('jordanBlue2')} />, pos: [0,0,30], scaledCenter: true, link: "https://vimeo.com/464076439"})
    g.addNode('blueJordan2', { scene: <ImageObject url={GetImageUrl('jordanBlue1')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 2, -1], center: false})
    g.addNode('blueJordan3', { scene: <ImageObject url={GetImageUrl('jordanBlue3')} hoverable={false} />, pos: [0,0,30],  pos2: [10, -2, -1], center: false})
    g.addNode('blueJordanText', { scene: <TextObject children={"testing the text that will b \n blah blah"} scaleable={false} flatText={true}/>, pos: [0,0,30], pos2: [-10, 0, 0], center: false})

    g.addLink('jacky', 'c4d')
    g.addLink('jacky', 'dev')
    g.addLink('c4d', 'v1')
    g.addLink('c4d', 'v2')
    g.addLink('c4d', 'v3')
    g.addLink('c4d', 'v4')
    g.addLink('c4d', 'v5')
    g.addLink('c4d', 'blueJordan')
    g.addLink('2020', 'v1')
    g.addLink('2020', 'v2')
    g.addLink('2020', 'v3')
    g.addLink('2020', 'v4')
    g.addLink('2020', 'v5')
    g.addLink('2020', 'blueJordan')
    g.addLink('blueJordan', 'blueJordan2')
    g.addLink('blueJordan', 'blueJordan3')
    g.addLink('blueJordan', 'blueJordanText')

    const onClick = (clickedNode) => {
        let node = g.getNode(clickedNode)

        //if the clicked node is not the current center node
        if(clickedNode != activeNode){
            //if the node can be centerable
            if(node.data.center !== false){
                g.forEachNode((node) => {
                    //set each node to the original position and center the clicked node
                    node.id == clickedNode ? positions.current.get(node.id).current = [0,0,0] : positions.current.get(node.id).current = node.data.pos;
                    (node.id == clickedNode && node.data.scaledCenter) ? scaleVals.current.get(node.id).current = [2,2,2] : scaleVals.current.get(node.id).current = [1,1,1];
                })
                //calculates and moves the nodes to the position around the clicked node (maybe in useframe for the linked nodes to rotate around the clicked node)
                let linkedNodes = []
                let customPosNodes = []
                g.forEachLinkedNode(clickedNode, (linkedNode) => {
                    if(!linkedNode.data.pos2){
                        linkedNodes.push(linkedNode)
                    }
                    else{
                        customPosNodes.push(linkedNode)
                    }
                    //console.log("Connected node: ", linkedNode.id, linkedNode.data)
                })
                linkedNodesPos(linkedNodes, customPosNodes)
                setActiveNode(clickedNode)
            }
        }
        else{
            let urlLink = node.data.link

            if(urlLink){
                window.open(urlLink, "_blank")
            }
        }
    }

    const linkedNodesPos = (linkedNodes, customPosNodes) => {
        let length = linkedNodes.length
        let angleIncrement = 360/length
        let angle = 0

        linkedNodes.forEach((node, index) => {
            positions.current.get(node.id).current = [calcX(angle), calcY(angle), calcZ(angle)]
            angle += angleIncrement
        })

        customPosNodes.forEach((node, index) => {
            positions.current.get(node.id).current = node.data.pos2
        })
    }

    const calcX = (angle) => {
        angle = toRadians(angle)
        return (10 * Math.sin(angle))
    }

    const calcY = (angle) => {
        angle = toRadians(angle)
        return (6 * Math.cos(angle))
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
    }

    const getScaleRef = (node, scaleVal) => {
        scaleVals.current.set(node, scaleVal)
    }

    const returnObjects = () => {
        let value = []
        
        //adds all the nodes to the array that gets rendered
        g.forEachNode((node) => {
            if(node.id == 'jacky'){
                value.push( <NodeObject key={node.id} value={node.id} data={node.data} onClick={onClick} getPosRef={getPosRef} getScaleRef={getScaleRef} pos={[0,0,0]} scene={node.data.scene} mouse={mouse} testing={node.data.testing}/> )
            }
            else{
                value.push( <NodeObject key={node.id} value={node.id} data={node.data} onClick={onClick} getPosRef={getPosRef} getScaleRef={getScaleRef} pos={node.data.pos} scene={node.data.scene} mouse={mouse} testing={node.data.testing}/> )
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
