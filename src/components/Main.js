import React, { Suspense, useRef, useState } from 'react'
import { Graph, GetImageUrl, GetText } from './Graph'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'
import TextObject from './TextObject'
import ShapeObject from './ShapeObject'
import ImageObject from './ImageObject'
import FlatTextObject from './FlatTextObject'

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
    g.addNode('2022 - 2025', { scene: <TextObject children="2022-2025" />, pos: [0,0,30]})
    g.addNode('2026 - 2030', { scene: <TextObject children="2026-2030" />, pos: [0,0,30]})

    g.addNode('2011Text', { scene: <FlatTextObject children={GetText('2011-2012')} />, pos: [0,0,30], center: false})
    g.addNode('2013Text', { scene: <FlatTextObject children={GetText('2013-2018')} />, pos: [0,0,30], center: false})
    g.addNode('2019Text', { scene: <FlatTextObject children={GetText('2019')} />, pos: [0,0,30], center: false})
    g.addNode('2020Text', { scene: <FlatTextObject children={GetText('2020')} />, pos: [0,0,30], center: false})
    g.addNode('2021Text', { scene: <FlatTextObject children={GetText('2021')} />, pos: [0,0,30], center: false})
    g.addNode('2022Text', { scene: <FlatTextObject children={GetText('2022-2025')} />, pos: [0,0,30], center: false})
    g.addNode('2030Text', { scene: <FlatTextObject children={GetText('2026-2030')} />, pos: [0,0,30], center: false})

    g.addNode('rightArrow', { scene: <TextObject children={">"} />, pos: [0,0,30], pos2: [2.5, 0, 0], center: false})
    g.addNode('leftArrow', { scene: <TextObject children={"<"} />, pos: [0,0,30], pos2: [-2.5, 0, 0], center: false})

    g.addNode('c4d', { scene: <TextObject children="3D MOTION DESIGNER" />, pos: [0,0,30], link: "https://www.instagram.com/jackyjacksn/"})
    g.addNode('dev', { scene: <TextObject children="SOFTWARE DEVELOPER" />, pos: [0,0,30], link: "http://www.jacky.design/"})

    g.addNode('trickshotting', { scene: <ImageObject url={GetImageUrl('trickshottingAzon')} />, pos: [0,0,30], link: "https://www.youtube.com/watch?v=HDtHW6M-8Kk"})
    g.addNode('trickshotting2', { scene: <ImageObject url={GetImageUrl('trickshottingCute')} />, pos: [0,0,30],  pos2: [6.5, 0, 0], center: false, link: "https://www.youtube.com/watch?v=knRxSW3mDIU"})
    g.addNode('trickshotting3', { scene: <ImageObject url={GetImageUrl('trickshottingClarify')} />, pos: [0,0,30],  pos2: [-6.5, 0, 0], center: false, link: "https://www.youtube.com/watch?v=V0siQ2MRQkw"})
    g.addNode('trickshotting4', { scene: <ImageObject url={GetImageUrl('trickshottingDare')} />, pos: [0,0,30],  pos2: [6.5, -3.5, 0], center: false, link: "https://www.youtube.com/watch?v=dhmH2NP6Sc4"})
    g.addNode('trickshotting5', { scene: <ImageObject url={GetImageUrl('trickshottingVL')} />, pos: [0,0,30],  pos2: [-6.5, -3.5, 0], center: false, link: "https://www.youtube.com/watch?v=0q3MhwuJgTA"})
    g.addNode('trickshotting6', { scene: <ImageObject url={GetImageUrl('trickshottingRava')} />, pos: [0,0,30],  pos2: [0, -3.5, 0], center: false, link: "https://www.youtube.com/watch?v=GIZNN9rI2mc"})
    g.addNode('trickshottingText', { scene: <FlatTextObject children={GetText('trickshotting')} />, pos: [0,0,30], pos2: [0, 3.5, 0], center: false})

    g.addNode('shoeLaundry', { scene: <ImageObject url={GetImageUrl('shoeLaundry')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/p/CJWq10igOXw/"})
    g.addNode('shoeLaundry2', { scene: <ImageObject url={GetImageUrl('shoeLaundry2')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 2, 0], center: false})
    g.addNode('shoeLaundry3', { scene: <ImageObject url={GetImageUrl('shoeLaundry3')} hoverable={false} />, pos: [0,0,30],  pos2: [10, -2, 0], center: false})
    g.addNode('shoeLaundryText', { scene: <FlatTextObject children={GetText('shoeLaundry')} width={200}/>, pos: [0,0,30], pos2: [-11, 0, 0], center: false})

    g.addNode('hongShing', { scene: <ImageObject url={GetImageUrl('hongShing')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/p/CLO_m43hFhT/"})
    g.addNode('hongShing2', { scene: <ImageObject url={GetImageUrl('hongShing2')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 4, -1], center: false})
    g.addNode('hongShing3', { scene: <ImageObject url={GetImageUrl('hongShing3')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 0, -1], center: false})
    g.addNode('hongShing4', { scene: <ImageObject url={GetImageUrl('hongShing4')} hoverable={false} />, pos: [0,0,30],  pos2: [10, -4, -1], center: false})
    g.addNode('hongShingText', { scene: <FlatTextObject children={GetText('hongShing')} width={200}/>, pos: [0,0,30], pos2: [-11, 0, 0], center: false})

    g.addNode('redJordan', { scene: <ImageObject url={GetImageUrl('jordanRed1')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.instagram.com/p/CE4muoaB5hm/"})
    g.addNode('redJordanText', { scene: <FlatTextObject children={GetText('jordanRed')} />, pos: [0,0,30], pos2: [0, 4, 0.5], center: false})

    g.addNode('blueJordan', { scene: <ImageObject url={GetImageUrl('jordanBlue2')} />, pos: [0,0,30], scaledCenter: true, link: "https://vimeo.com/464076439"})
    g.addNode('blueJordan2', { scene: <ImageObject url={GetImageUrl('jordanBlue1')} hoverable={false} />, pos: [0,0,30],  pos2: [10, 2, -1], center: false})
    g.addNode('blueJordan3', { scene: <ImageObject url={GetImageUrl('jordanBlue3')} hoverable={false} />, pos: [0,0,30],  pos2: [10, -2, -1], center: false})
    g.addNode('blueJordanText', { scene: <FlatTextObject children={GetText('jordanBlue')} width={200}/>, pos: [0,0,30], pos2: [-11, 0, 0], center: false})
    
    g.addNode('andras', { scene: <ImageObject url={GetImageUrl('andras')} />, pos: [0,0,30], scaledCenter: true})
    g.addNode('andrasText', { scene: <FlatTextObject children={GetText('andras')} />, pos: [0,0,30], pos2: [0, 4, 0.5], center: false})

    g.addNode('ghost', { scene: <ImageObject url={GetImageUrl('ghost')} />, pos: [0,0,30], scaledCenter: true, link: "https://www.ghostatelier.com/" })
    g.addNode('ghostText', { scene: <FlatTextObject children={GetText('ghost')} />, pos: [0,0,30], pos2: [0, 4, 0.5], center: false})

    g.addNode('trish', { scene: <ImageObject url={GetImageUrl('trish')} />, pos: [0,0,30], scaledCenter: true })
    g.addNode('trish2', { scene: <ImageObject url={GetImageUrl('trish2')} size={[6, 3.3]} hoverable={false} />, pos: [0,0,30], pos2: [10, 3, -1], center: false })
    g.addNode('trish3', { scene: <ImageObject url={GetImageUrl('trish3')} size={[5,4.5]} hoverable={false} />, pos: [0,0,30], pos2: [10, -2, -1], center: false })
    g.addNode('trishText', { scene: <FlatTextObject children={GetText('trish')} width={200}/>, pos: [0,0,30], pos2: [-11, 0, 0], center: false})

    g.addLink('jacky', 'c4d')
    g.addLink('jacky', 'dev')

    g.addLink('c4d', 'trickshotting')
    g.addLink('c4d', 'redJordan')
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
    g.addLink('rightArrow', '2022 - 2025')

    g.addLink('leftArrow', '2013 - 2018')
    g.addLink('leftArrow', '2019')
    g.addLink('leftArrow', '2020')
    g.addLink('leftArrow', '2021')
    g.addLink('leftArrow', '2022 - 2025')
    g.addLink('leftArrow', '2026 - 2030')

    g.addLink('2011 - 2012', '2011Text')
    g.addLink('2011 - 2012', 'trickshotting')

    g.addLink('2013 - 2018', '2013Text')
    
    g.addLink('2019', '2019Text')
    g.addLink('2019', 'ghost')

    g.addLink('2020', '2020Text')
    g.addLink('2020', 'redJordan')
    g.addLink('2020', 'blueJordan')
    g.addLink('2020', 'shoeLaundry')   

    g.addLink('2021', '2021Text')
    g.addLink('2021', 'hongShing')
    g.addLink('2021', 'andras')
    g.addLink('2021', 'trish')

    g.addLink('2022 - 2025', '2022Text')

    g.addLink('2026 - 2030', '2030Text')

    g.addLink('trickshotting', 'trickshotting2')
    g.addLink('trickshotting', 'trickshotting3')
    g.addLink('trickshotting', 'trickshotting4')
    g.addLink('trickshotting', 'trickshotting5')
    g.addLink('trickshotting', 'trickshotting6')
    g.addLink('trickshotting', 'trickshottingText')

    g.addLink('blueJordan', 'blueJordan2')
    g.addLink('blueJordan', 'blueJordan3')
    g.addLink('blueJordan', 'blueJordanText')

    g.addLink('redJordan', 'redJordanText')
    
    g.addLink('shoeLaundry', 'shoeLaundry2')
    g.addLink('shoeLaundry', 'shoeLaundry3')
    g.addLink('shoeLaundry', 'shoeLaundryText')

    g.addLink('hongShing', 'hongShing2')
    g.addLink('hongShing', 'hongShing3')
    g.addLink('hongShing', 'hongShing4')
    g.addLink('hongShing', 'hongShingText')

    g.addLink('trish', 'trish2')
    g.addLink('trish', 'trish3')
    g.addLink('trish', 'trishText')

    g.addLink('ghost', 'ghostText')

    g.addLink('andras', 'andrasText')

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
            else if(node.data.link){
                window.open(node.data.link, "_blank")
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
                    return '2022 - 2025'
                case '2022 - 2025':
                    return '2026 - 2030'
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
                case '2022 - 2025':
                    return '2021'
                case '2026 - 2030':
                    return '2022 - 2025'
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
