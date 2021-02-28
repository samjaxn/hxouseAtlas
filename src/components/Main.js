import React, { Suspense } from 'react'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'

const Main = ({mouse}) => {
    let x = mouse.current[0]

    return (
        <Suspense fallback={null}>
            <NodeObject mouse={mouse} scene={<JackyObject />} position1={[0,5,1]} position2={[0,0,0]} />
            <NodeObject mouse={mouse} scene={<JackyObject />} position1={[0,0,0]} position2={[0,0,15]} />
        </Suspense>
    )
}

export default Main
