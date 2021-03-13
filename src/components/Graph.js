import React from 'react'

import andras from '../content/andras.png'

import hongShing from '../content/hongShing.png'
import hongShing2 from '../content/hongShing2.png'
import hongShing3 from '../content/hongShing3.png'
import hongShing4 from '../content/hongShing4.png'

import shoeLaundry from '../content/shoeLaundry.png'
import shoeLaundry2 from '../content/shoeLaundry2.png'
import shoeLaundry3 from '../content/shoeLaundry3.png'

import jordanBlue1 from '../content/jordanBlue1.png'
import jordanBlue2 from '../content/jordanBlue2.png'
import jordanBlue3 from '../content/jordanBlue3.png'

import trickshotting from '../content/trickshotting.gif'
import trickshottingAzon from '../content/trickshottingAzon.png'
import trickshottingClarify from '../content/trickshottingClarify.png'
import trickshottingCute from '../content/trickshottingCute.png'
import trickshottingDare from '../content/trickshottingDare.png'
import trickshottingRava from '../content/trickshottingRava.png'
import trickshottingVL from '../content/trickshottingVL.png'


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
        case 'hongShing2':
            return hongShing2
        case 'hongShing3':
            return hongShing3
        case 'hongShing4':
            return hongShing4
        case 'shoeLaundry':
            return shoeLaundry
        case 'shoeLaundry2':
            return shoeLaundry2
        case 'shoeLaundry3':
            return shoeLaundry3
        case 'jordanBlue1':
            return jordanBlue1
        case 'jordanBlue2':
            return jordanBlue2
        case 'jordanBlue3':
            return jordanBlue3
        case 'trickshotting':
            return trickshotting
        case 'trickshottingAzon':
            return trickshottingAzon
        case 'trickshottingClarify':
            return trickshottingClarify
        case 'trickshottingCute':
            return trickshottingCute
        case 'trickshottingDare':
            return trickshottingDare
        case 'trickshottingRava':
            return trickshottingRava
        case 'trickshottingVL':
            return trickshottingVL
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