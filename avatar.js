"use strict";
import multiavatar from '@multiavatar/multiavatar/esm'
let svgCode = multiavatar('Binx Bond')


let avatarId = 'Binx Bond'
fetch('https://api.multiavatar.com/'
    +JSON.stringify(avatarId))
    .then(res => res.text())
    .then(svg => console.log(svg))