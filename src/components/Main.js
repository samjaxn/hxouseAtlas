import React, { Suspense } from 'react'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'

const Main = ({mouse}) => {
    let x = mouse.current[0]

    const findPosition = (node, pos) => {
        return null
    }

    const testReturn = () => {
        let value = []
        for(let i = 1; i < 3; i++){
            value.push( <NodeObject mouse={mouse} scene={<JackyObject />} position1={[0,i,i]} position2={[i,0,-i]} /> )
        }
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
