import {
  forestOff,
  forestOn,
  rainOff,
  rainOn,
  cofOff,
  cofOn,
  fireplaceOff,
  fireplaceOn
} from "./elementsSounds.js"


export default function() { 

  const forestSound = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")
  const rainSound = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download")
  const cofSound = new Audio("https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download")
  const fireplaceSound = new Audio("https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download")

  function SoundPause(){
    forestSound.pause()
    rainSound.pause()
    cofSound.pause()
    fireplaceSound.pause()
  }

  function forestPlay(){
    forestSound.play()
    forestSound.loop = true
  }

  function rainPlay(){
    rainSound.play()
    rainSound.loop = true
  }

  function cofPlay(){
    cofSound.play()
    cofSound.loop = true
  }

  function fireplacePlay(){
    fireplaceSound.play()
    fireplaceSound.loop = true
  }

  function resetButtonsSounds(){
    forestOn.classList.add("hide")
    forestOff.classList.remove("hide")
    rainOn.classList.add("hide")
    rainOff.classList.remove("hide")
    cofOn.classList.add("hide")
    cofOff.classList.remove("hide")
    fireplaceOn.classList.add("hide")
    fireplaceOff.classList.remove("hide") 
    }

  return{
    SoundPause,
    forestPlay,
    cofPlay,
    fireplacePlay,
    rainPlay,
    resetButtonsSounds
  }

}