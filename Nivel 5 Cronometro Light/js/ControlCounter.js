import {
  playOn,
  playOff,
  stopOn,
  stopOff,
  pause,
  addMin,
  addMinMax,
  DisplayMinutes,
  DisplaySeconds
} from "./elementsCounter.js"

export default function(){

  let timeDisplay
  let initialMinutes = Number(DisplayMinutes.textContent)

  function temp(){

  timeDisplay = setTimeout(function(){
    let seconds = Number(DisplaySeconds.textContent)
    let minutes = Number(DisplayMinutes.textContent)

    if(minutes < 99)
    {
    addMin.classList.remove("hide")
    addMinMax.classList.add("hide")
    }
    
    if(minutes <= 0 && seconds <= 0){
      displayUpdate(initialMinutes, 0)
      playOff.classList.add("hide")
      playOn.classList.remove("hide")
      return
    }

    if (seconds <= 0){
      seconds = 60
      --minutes
    }

    displayUpdate(minutes, (seconds - 1))
    
    temp()

  }, 1000)
}

function displayUpdate(minutes, seconds){
  DisplayMinutes.textContent = String(minutes).padStart(2, "0")
  DisplaySeconds.textContent = String(seconds).padStart(2, "0")
}

function ButtonPlayOn(){
  temp()
  playOff.classList.remove("hide")
  playOn.classList.add("hide")
  stopOn.classList.add("hide")
  pause.classList.remove("hide")
  stopOff.classList.add("hide")
  addMin.classList.remove("hide")
  addMinMax.classList.add("hide")
}

function ButtonPause(){
  clearTimeout(timeDisplay)
  playOff.classList.add("hide")
  playOn.classList.remove("hide")
  pause.classList.add("hide")
  stopOff.classList.remove("hide")
}

function ButtonStopOff(){
  displayUpdate(initialMinutes, 0)
  playOn.classList.remove("hide")
  stopOff.classList.add("hide")
  stopOn.classList.remove("hide")
}

function ButtonAddMin(){
  let addminutes = Number(DisplayMinutes.textContent)
  addminutes = addminutes + 5
  if(addminutes >= 99){
    addMin.classList.add("hide")
    addMinMax.classList.remove("hide")
    displayUpdate(99, 0)
    initialMinutes = 99
    return
  }
  displayUpdate(addminutes, DisplaySeconds.textContent)
  initialMinutes = addminutes
}

function ButtonDecMin(){
  let decminutes = Number(DisplayMinutes.textContent)
  if (decminutes >= 99){
    addMin.classList.remove("hide")
    addMinMax.classList.add("hide")
    decminutes = 100
  }
  decminutes = decminutes - 5
  if(decminutes <= 0){
    displayUpdate(25, 0)
    initialMinutes = 25
    clearTimeout(timeDisplay)
    playOn.classList.remove("hide")
    playOff.classList.add("hide")
    pause.classList.add("hide")
    stopOn.classList.remove("hide")
    return
  }
  
  displayUpdate(decminutes, DisplaySeconds.textContent)
  initialMinutes = decminutes
}

return{
  ButtonPlayOn,
  ButtonPause,
  ButtonStopOff,
  ButtonAddMin,
  ButtonDecMin
}
}