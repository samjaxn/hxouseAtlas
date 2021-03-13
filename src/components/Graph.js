import React from 'react'
import andras from '../content/andras.png'
import hongShing from '../content/hongShing.png'
import shoeLaundry from '../content/shoeLaundry.png'
import jordanBlue1 from '../content/jordanBlue1.png'
import jordanBlue2 from '../content/jordanBlue2.png'
import jordanBlue3 from '../content/jordanBlue3.png'
import jordanRed1 from '../content/jordanRed1.png'
import jordanOrange1 from '../content/jordanOrange1.png'
import ghost1080 from '../content/ghostatelier1080.png'
import trish from '../content/trish.png'
import trish2 from '../content/trish2.png'
import trish3 from '../content/trish3.png'

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
        case 'ghost':
            return ghost1080
        case 'trish':
            return trish
        case 'trish2':
            return trish2
        case 'trish3':
            return trish3
        // case '':
        //     return
        default:
            return shoeLaundry
    }
}

const GetText = (text) => {
    switch(text){
        case 'jordanBlue':
            return "testing the text that will b \n blah blah"
        default:
            return ''
    }
}

export {Graph, GetImageUrl, GetText}