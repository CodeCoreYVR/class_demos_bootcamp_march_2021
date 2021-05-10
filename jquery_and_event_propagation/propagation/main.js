const eventLogger = event => {
  // event.eventPhase tells us what phase we're on:
  // 1. Capturing phase
  // 2. At event.target (the element that triggered the event)
  // 3. Bubbling phase
  console.log(`Phase: ${event.eventPhase}`)

  // event.currentTarget is the element that the event listener
  // was attached to
  console.log(`event.target:`, event.target.id)
  console.log(`Element: ${event.currentTarget.id}`)
  console.log("-------------")

  // The first time event.stopPropagation() is called, it stops 
  // the event from triggering the other remaining event handlers
  // If it's the bubble phase, it will stop the event listeners 
  // from bubbling up to the ancestral elements.
  // If it's the capture phase, it prevents capturing down and it
  // might not reach the event.target (the element that triggered the event)
  event.stopPropagation()
}

document
  .querySelectorAll("div")
  .forEach(node => {
    // 3rd argument to addEventListener is a boolean
    // if set to "true", we use the capture phase
    // The default is "false" if we do not specify 

    // node.addEventListener("click", eventLogger, false) // bubbling
    node.addEventListener("click", eventLogger, true) // capturing
  })