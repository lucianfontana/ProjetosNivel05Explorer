import sounds from "./ControlSons.js"
import counter from "./ControlCounter.js"
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
import{
  playOn,
  pause,
  stopOff,
  addMin,
  decMin
}from "./elementsCounter.js"

const ControlSounds = sounds()
const ControlCounter = counter()

playOn.addEventListener("click", function(){
  ControlCounter.ButtonPlayOn()
})

pause.addEventListener("click", function(){
  ControlCounter.ButtonPause()
})

stopOff.addEventListener("click", function(){
  ControlCounter.ButtonStopOff()
})

addMin.addEventListener("click", function(){
 ControlCounter.ButtonAddMin()
})

decMin.addEventListener("click", function(){
  ControlCounter.ButtonDecMin()
})

forestOff.addEventListener("click", function(){
  ControlSounds.resetButtonsSounds()
  forestOff.classList.add("hide")
  forestOn.classList.remove("hide")
  ControlSounds.SoundPause()
  ControlSounds.forestPlay()
})

forestOn.addEventListener("click", function(){
  forestOff.classList.remove("hide") 
  forestOn.classList.add("hide")
  ControlSounds.SoundPause()
})

rainOff.addEventListener("click", function(){
  ControlSounds.resetButtonsSounds()
  rainOff.classList.add("hide")
  rainOn.classList.remove("hide")
  ControlSounds.SoundPause()
  ControlSounds.rainPlay()
})

rainOn.addEventListener("click", function(){
  rainOff.classList.remove("hide")
  rainOn.classList.add("hide")
  ControlSounds.SoundPause()
})

cofOff.addEventListener("click", function(){
  ControlSounds.resetButtonsSounds()
  cofOff.classList.add("hide")
  cofOn.classList.remove("hide")
  ControlSounds.SoundPause()
  ControlSounds.cofPlay()
  })

cofOn.addEventListener("click", function(){
  cofOff.classList.remove("hide")
  cofOn.classList.add("hide")
  ControlSounds.SoundPause()
})

fireplaceOff.addEventListener("click", function(){
  ControlSounds.resetButtonsSounds()
  fireplaceOff.classList.add("hide")
  fireplaceOn.classList.remove("hide")
  ControlSounds.SoundPause()
  ControlSounds.fireplacePlay()
})

fireplaceOn.addEventListener("click", function(){
  fireplaceOff.classList.remove("hide")
  fireplaceOn.classList.add("hide")
  ControlSounds.SoundPause()
})