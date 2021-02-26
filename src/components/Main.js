import React, { Suspense } from 'react'
import NodeObject from './NodeObject'
import JackyObject from './JackyObject'

const Main = ({mouse}) => {
    return (
        <Suspense fallback={null}>
            <NodeObject mouse={mouse} scene={<JackyObject />} />
            <NodeObject mouse={mouse} scene={<JackyObject />} position={[0,5,1]} />
        </Suspense>
    )
}

export default Main
