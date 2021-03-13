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
        case '2011-2012':
            return "If my creative journey was a road then 2011 was the dirt path that didn't have a clear direction. It was the start to my creative path, although I didn't know it. During this time I was really into trickshotting in Call of Duty, and learned how to create animations for Call of Duty clans. I learned Cinema 4D because of my love for the trickshotting community and little did I know that learning this program would eventually become a bigger passion for 3D Motion Design for me."
        case '2013-2018':
            return "In 2013 I graduated from highschool and from 2013-2018 I went to McMaster University to study Software Engineering. During this time I was less creative and focused more on studying and learning how to code. It's during this time that I considered myself a Software Developer whenever anyone asked what I did, and it was the type of work I assumed I would do for the rest of my life."
        case '2019':
            return "After Graduating from McMaster I wasted no time in getting a \"safe job\" like my parents wanted. I started working but didn't feel passionate about it like I did with the animations I made back in highschool. It was this year that I got to see a glimpse into the creative industry and how exciting and rewarding it can be. I went to highschool with Trish Roque and she mentioned to me a program that she was in called HXOUSE and how she wanted a creative site for her studio GHOST ATELIER. I loved the idea and worked with her create something that she and I were both proud of. It was this work that made me feel that same creative passion I was missing and showed me that Software Development could be creative."
        case '2020':
            return "While working full time and doing more creative work with Software Development on the side, I was asked by a friend if I could give them some tips with Cinema 4D. I hadn't used the program since highschool but decided to try to relearn some of it so I could help them out. I started working with Cinema 4D again and it brought be back to when I was in highschool and my imagine was the limit to what I could create. It was this period of time where this once stumbled upon skill then became the one thing I worked on everyday and wanted to become great at, creating animations every week just to challenge myself and improve. I felt so passionate about it that I started to call myself not just a Software Developer, but also a 3D Motion Designer."
        case '2021':
            return "Near the end of 2020 I actually got my first freelance job in 3D Motion Design and that pushed me to work even harder in the field to work with more creatives to make just cool shit, and pieces that we are proud of. This year I also got invited back to the No More Dreams program where other creatives from Toronto inspired me and taught me so much. It's this year that I wish to continue to improve and push more and more into the creative field, as I still feel like an outsider looking in."
        case '2022-2025':
            return "During these years I wish to work with as many creatives as I can, pushing myself to a level where I feel like I am at the top of my field in both 3D Motion Design and Software Development. I also want to combine both of these creative passions that I have, instead of living 2 different lives and trying to swap between them."
        case '2026-2030':
            return "Once I am at the top of my field in both of my passions I wish to create a studio that specializes in both. Taking a brand, product or artist and working with them to create animations, websites and more. Collaborating with other creatives is something that I will never stop doing and being proud of everything that I work on and release is the ultimate goal."
        case 'trickshotting':
            return "These series of animations were when I first started learning Cinema 4D and was just having fun creating something that I thought was cool. Click each one to view the full animation when I uploaded them to youtube in 2011 - 2012"
        case 'jordanRed':
            return "One of the first animations that I made me feel like I was actually good at 3D Motion Design. It's the animation that made me look at this fun side hobby and see it as a creative discipline"
        case 'jordanBlue':
            return "While trying to get better at 3D Motion Design I wanted to make a commercial that when people saw it, they felt that it was real. This is the result of that challenge, creating a fake ad for the Nike Jordan 1"
        case 'shoeLaundry':
            return "This was the first freelance job that I got for 3D Motion Design. I had been just posting animations on my instagram account and Shoe Laundry reached out to me to create an animation that showed off their products. This one job made me feel like a real 3D Motion Designer"
        case 'hongShing':
            return "A project that I worked on with Trish Roque and Hong Shing. The restaurant wanted an animation for Lunar New Year and the new products that they were releasing. It's an animation that I love and didn't think I'd be able to pull off when starting the project, but hard work and persistence made it possible"
        case 'andras':
            return "Currently working a series of animations with Andras"
        case 'ghost':
            return "This was the first creative project that I have done in relation to Software Development. Was a cool experiment that ended up being the final result in the GHOST ATELIER website (P.S Click on the black screen when you go to the website!)"
        case 'trish':
            return "Currently working on Trish Roque's personal website releasing in March 2021"
        default:
            return ''
    }
}

export {Graph, GetImageUrl, GetText}