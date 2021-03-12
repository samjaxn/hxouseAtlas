import React from 'react'
import andras from '../content/andras.png'
import hongShing from '../content/hongShing.png'
import shoeLaundry from '../content/shoeLaundry.png'
import jordanBlue1 from '../content/jordanBlue1.png'
import jordanBlue2 from '../content/jordanBlue2.png'
import jordanBlue3 from '../content/jordanBlue3.png'
import jordanRed1 from '../content/jordanRed1.png'
import jordanOrange1 from '../content/jordanOrange1.png'

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
        case 'jordanBlue1':
            return jordanBlue1
        case 'jordanBlue2':
            return jordanBlue2
        case 'jordanBlue3':
            return jordanBlue3
        case 'jordanRed1':
            return jordanRed1
        case 'jordanOrange1':
            return jordanOrange1
        // case '':
        //     return
        default:
            return shoeLaundry
    }
}

export {Graph, GetImageUrl}