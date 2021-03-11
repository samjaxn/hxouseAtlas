import React from 'react'
import andras from '../content/andras.png'
import hongShing from '../content/hongShing.png'
import shoeLaundry from '../content/shoeLaundry.png'

const Graph = ({url}) => {
    return null
}

const GetImageUrl = (url) => {
    switch(url){
        case 'andras':
            return andras
        case 'hongShing':
            return hongShing
        case 'shoeLaundry':
            return shoeLaundry
        default:
            return shoeLaundry
    }
}

export {Graph, GetImageUrl}