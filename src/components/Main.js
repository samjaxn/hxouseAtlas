import React, { Suspense, useRef, useState } from 'react'
import { Graph, GetImageUrl, GetText } from './Graph'
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

    g.addNode('2011 - 2012', { scene: <TextObject children={"2011-2012"} />, pos: [0,0,30]})
    g.addNode('2013 - 2018', { scene: <TextObject children={"2013-2018"} />, pos: [0,0,30]})
    g.addNode('2019', { scene: <TextObject children="2019" />, pos: [0,0,30]})
    g.addNode('2020', { scene: <TextObject children="2020" />, pos: [0,0,30]})
    g.addNode('2021', { scene: <TextObject children="2021" />, pos: [0,0,30]})
    g.addNode('2022', { scene: <TextObject children="2022" />, pos: [0,0,30]})
    g.addNode('2023', { scene: <TextObject children="2023" />, pos: [0,0,30]})
    g.addNode('2024', { scene: <TextObject children="2024" />, pos: [0,0,30]})
    g.addNode('2025', { scene: <TextObject children="2025" />, pos: [0,0,30]})
    g.addNode('2026', { scene: <TextObject children="2026" />, pos: [0,0,30]})
    g.addNode('2027', { scene: <TextObject children="2027" />, pos: [0,0,30]})
    g.addNode('2028', { scene: <TextObject children="2028" />, pos: [0,0,30]})
    g.addNode('2029', { scene: <TextObject children="2029" />, pos: [0,0,30]})
    g.addNode('2030', { scene: <TextObject children="2030" />, pos: [0,0,30]})

    g.addNode('rightArrow', { scene: <TextObject children={">"} />, pos: [0,0,30], pos2: [2.5, 0, 0], center: false})
    g.addNode('leftArrow', { scene: <TextObject children={"<"} />, pos: [0,0,30], pos2: [-2.5, 0, 0], center: false})

    g.addNode('c4d', { scene: <TextObject children="3D MOTION DESIGNER" />, pos: [0,0,30], link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('dev', { scene: <TextObject children="SOFTWARE DEVELOPER" />, pos: [0,0,30], link: "http://www.jacky.design/"})

    //g.addNode('v1', { scene: <ShapeObject />, pos: [0,0,30], link: "https://www.instagram.com/jackyjacksn/"})

    // g.addNode('trickshotting', { scene: <ImageObject url={GetImageUrl('trickshotting')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/p/CJWq10igOXw/"})
    g.addNode('trickshotting', { scene: <ImageObject url={GetImageUrl('trickshottingAzon')} />, pos: [0,0,30], link: "https://www.instagram.com/p/CJWq10igOXw/"})
    g.addNode('trickshotting2', { scene: <ImageObject url={GetImageUrl('trickshottingAzon')} />, pos: [0,0,30],  pos2: [10, 2, -1], center: false})
    g.addNode('trickshotting3', { scene: <ImageObject url={GetImageUrl('trickshottingClarify')} />, pos: [0,0,30],  pos2: [10, -2, -1], center: false})

    g.addNode('shoeLaundry', { scene: <ImageObject url={GetImageUrl('shoeLaundry')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/p/CJWq10igOXw/"})
    g.addNode('shoeLaundry2', { scene: <ImageObject url={GetImageUrl('shoeLaundry2')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 2, -1], center: false})
    g.addNode('shoeLaundry3', { scene: <ImageObject url={GetImageUrl('shoeLaundry3')} hoverable={false} />, pos: [0,0,30],  pos2: [10, -2, -1], center: false})

    g.addNode('hongShing', { scene: <ImageObject url={GetImageUrl('hongShing')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/p/CLO_m43hFhT/"})
    g.addNode('hongShing2', { scene: <ImageObject url={GetImageUrl('hongShing2')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 4, -1], center: false})
    g.addNode('hongShing3', { scene: <ImageObject url={GetImageUrl('hongShing3')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 0, -1], center: false})
    g.addNode('hongShing4', { scene: <ImageObject url={GetImageUrl('hongShing4')} hoverable={false} />, pos: [0,0,30],  pos2: [10, -4, -1], center: false})

    g.addNode('blueJordan', { scene: <ImageObject url={GetImageUrl('jordanBlue2')} />, pos: [0,0,30], scaledCenter: true, link: "https://vimeo.com/464076439"})
    g.addNode('blueJordan2', { scene: <ImageObject url={GetImageUrl('jordanBlue1')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 2, -1], center: false})
    g.addNode('blueJordan3', { scene: <ImageObject url={GetImageUrl('jordanBlue3')} hoverable={false} />, pos: [0,0,30],  pos2: [10, -2, -1], center: false})
    g.addNode('blueJordanText', { scene: <TextObject children={GetText('jordanBlue')} scaleable={false} flatText={true}/>, pos: [0,0,30], pos2: [-10, 0, 0], center: false})
    
    g.addNode('andras', { scene: <ImageObject url={GetImageUrl('andras')} />, pos: [0,0,30], scaledCenter: true})

    g.addNode('ghost', { scene: <ImageObject url={GetImageUrl('ghost')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.ghostatelier.com/" })

    g.addNode('trish', { scene: <ImageObject url={GetImageUrl('trish')} />, pos: [0,0,30], scaledCenter: true })
    g.addNode('trish2', { scene: <ImageObject url={GetImageUrl('trish2')} size={[6, 3.3]} hoverable={false} />, pos: [0,0,30], pos2: [10, 3, -1], center: false })
    g.addNode('trish3', { scene: <ImageObject url={GetImageUrl('trish3')} size={[5,4.5]} hoverable={false} />, pos: [0,0,30], pos2: [10, -2, -1], center: false })

    g.addLink('jacky', 'c4d')
    g.addLink('jacky', 'dev')

    g.addLink('c4d', 'trickshotting')
    g.addLink('c4d', 'blueJordan')
    g.addLink('c4d', 'shoeLaundry')
    g.addLink('c4d', 'hongShing')
    g.addLink('c4d', 'andras')

    g.addLink('dev', 'ghost')
    g.addLink('dev', 'trish')

    g.addLink('rightArrow', '2011 - 2012')
    g.addLink('rightArrow', '2013 - 2018')
    g.addLink('rightArrow', '2019')
    g.addLink('rightArrow', '2020')
    g.addLink('rightArrow', '2021')
    g.addLink('rightArrow', '2022')
    g.addLink('rightArrow', '2023')
    g.addLink('rightArrow', '2024')
    g.addLink('rightArrow', '2025')
    g.addLink('rightArrow', '2026')
    g.addLink('rightArrow', '2027')
    g.addLink('rightArrow', '2028')
    g.addLink('rightArrow', '2029')

    g.addLink('leftArrow', '2013 - 2018')
    g.addLink('leftArrow', '2019')
    g.addLink('leftArrow', '2020')
    g.addLink('leftArrow', '2021')
    g.addLink('leftArrow', '2022')
    g.addLink('leftArrow', '2023')
    g.addLink('leftArrow', '2024')
    g.addLink('leftArrow', '2025')
    g.addLink('leftArrow', '2026')
    g.addLink('leftArrow', '2027')
    g.addLink('leftArrow', '2028')
    g.addLink('leftArrow', '2029')
    g.addLink('leftArrow', '2030')

    g.addLink('2011 - 2012', 'trickshotting')
    
    g.addLink('2019', 'ghost')

    g.addLink('2020', 'blueJordan')
    g.addLink('2020', 'shoeLaundry')   

    g.addLink('2021', 'hongShing')
    g.addLink('2021', 'andras')
    g.addLink('2021', 'trish')

    g.addLink('blueJordan', 'blueJordan2')
    g.addLink('blueJordan', 'blueJordan3')
    g.addLink('blueJordan', 'blueJordanText')
    
    g.addLink('shoeLaundry', 'shoeLaundry2')
    g.addLink('shoeLaundry', 'shoeLaundry3')

    g.addLink('hongShing', 'hongShing2')
    g.addLink('hongShing', 'hongShing3')
    g.addLink('hongShing', 'hongShing4')

    g.addLink('trish', 'trish2')
    g.addLink('trish', 'trish3')

    const onClick = (clickedNode) => {
        let node = g.getNode(clickedNode)

        //if the clicked node is not the current center node
        if(clickedNode != activeNode){
            if(clickedNode == 'leftArrow' || clickedNode == 'rightArrow'){
                clickedNode = getYearNode(activeNode, clickedNode)
                node = g.getNode(clickedNode)
            }
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

    const getYearNode = (currentYear, direction) => {
        //console.log(currentYear, direction)
        if(direction == 'rightArrow'){
            switch(currentYear){
                case '2011 - 2012':
                    return '2013 - 2018'
                case '2013 - 2018':
                    return '2019'
                case '2019':
                    return '2020'
                case '2020':
                    return '2021'
                case '2021':
                    return '2022'
                case '2022':
                    return '2023'
                case '2023':
                    return '2024'
                case '2024':
                    return '2025'
                case '2025':
                    return '2026'
                case '2026':
                    return '2027'
                case '2027':
                    return '2028'
                case '2028':
                    return '2029'
                case '2029':
                    return '2030'
            }
        }
        else{
            switch(currentYear){
                case '2013 - 2018':
                    return '2011 - 2012'
                case '2019':
                    return '2013 - 2018'
                case '2020':
                    return '2019'
                case '2021':
                    return '2020'
                case '2022':
                    return '2021'
                case '2023':
                    return '2022'
                case '2024':
                    return '2023'
                case '2025':
                    return '2024'
                case '2026':
                    return '2025'
                case '2027':
                    return '2026'
                case '2028':
                    return '2027'
                case '2029':
                    return '2028'
                case '2030':
                    return '2029'
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
