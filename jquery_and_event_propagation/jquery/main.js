// Putting all of our JS code in the callback will wait for the 
// document to loaded before firing
document.addEventListener('DOMContentLoaded', () => {
  
  // === SELECTION ===

  // Select the second button
  document.getElementById('button-2') // returns node 
  $("#button-2") // returns a jQuery wrapped set
  
  // Select all anchor tags inside of <li> tags
  document.querySelectorAll("li a")
  $("li a")

  // Count the number of blue circles:

  // read length property off of NodeList
  document.querySelectorAll(".blue.circle").length 

  // read length off of jQuery set
  $(".blue.circle").length

  // === MANIPULATION ===

  // Set all the href links to http://www.nyan.cat
  document.querySelectorAll("a").forEach(link => {
    link.setAttribute("href", "http://www.nyan.cat")
  })

  // jQuery will call the function on every node within the collection
  $("a").attr("href", "http://www.nyan.cat")

  // Remove the "blue" class from all shapes and replace with the "red" class
  document.querySelectorAll(".shape.blue").forEach(blueShape => {
    blueShape.classList.remove("blue")
    blueShape.classList.add("red")
  })

  $(".shape.blue")
    .removeClass("blue") // jQuery methods return the jQuery collection that it was called on
    .addClass("red") // making them chainable like this

  // Set the "class" attribute of all anchors to "highlight"
  document.querySelectorAll("a").forEach(node => {
    node.setAttribute("class", "highlight")
  })
  $("a").attr("class", "highlight")
  
  // Replace all "circle" classes with the "diamond" class
  document.querySelectorAll(".circle").forEach(node => {
    node.classList.remove("cirle")
    node.classList.add("diamond")
  })
  $(".circle").removeClass("circle").addClass("diamond")

  // Remove all shapes in the green and purple container
  document
    .querySelectorAll('#purple-container .shape, #green-container .shape')
    .forEach(node => {
      node.remove()
    })

  $('#purple-container .shape, #green-container .shape').remove()
  
  // Get the HTML of the reset button
  document.getElementById("reset").innerHTML
  $("#reset").html()

  // Reading only reads the HTML content of the first node in the set
  // while writing would apply to everything in the set
  // $("a").attr("href") -> reads first node's value
  // $("a").attr("href", "http://www.nyan.cat") -> sets all href in the set
  // $("a").html() -> read first node's content
  // $("a").html("Nyan Cat") -> Write HTML to everything in set
  $("a").html() 

  // Read HTML of all links
  document.querySelectorAll("a").forEach(node => {
    console.log(node.innerHTML)
  })

  // jQuery's each takes in the index as the first argument 
  $("a").each(index => {
    // .eq() takes in an index as an argument and wraps the 
    // node at that index in a jQuery set
    console.log($("a").eq(index).html())
  })

  // Change the "reset" button to read "Launch Doggos!"
  document.querySelector("#reset").innerHTML = "Launch Doggos!"
  $("#reset").html("Launch Doggos!")

  // Replace contents of every "td" with "yass"
  document.querySelectorAll("td").forEach(node => {
    node.innerHTML = "yass"
  })
  $("td").html("yass")

  // Selects all parents of all <td>
  document.querySelectorAll("td").forEach(node => {
    // You only read the parent off of a single element
    console.log(node.parentElement)
  })
  $("td").parent()
})

// This is jQuery's version of waiting for the document to load
$(document).ready(function() {

  // === Creating and Adding Nodes to the DOM ===
  
  // Create a small blue diamond
  const smallBlueDiamond = $(`<div class="small blue diamond shape"></div>`)
  
  // appends the node to all nodes in the collection
  // when you append, it will be the last child 
  $(".container").append(smallBlueDiamond)

  // Prepend a new link to the list
  const nyanCatLink = $(`
    <li>
      <a href="http://www.nyan.cat">Nyan Cat</a>
    </li>
  `)
  $("ul").prepend(nyanCatLink)
})

// jQuery's shorthand of waiting for ready() is to pass a callback to $()
$(function () {

  // === EVENTS ===

  // When our mouse enters a blue circle, log "blue circle: go away!"
  document.querySelectorAll(".blue.circle").forEach(node => {
    node.addEventListener("mouseenter", function() {
      console.log("Blue Circle: Go away!")
    })
  })

  $(".blue.circle").on("mouseenter", function() {
    console.log("Blue Circle: Go away!")
  })

  // When our mouse leaves a blue circle, log "blue circle: goodbye!"
  document.querySelectorAll(".blue.circle").forEach(node => {
    node.addEventListener("mouseleave", function() {
      console.log("Blue Circle: Goodbye!")
    })
  })

  $(".blue.circle").on("mouseleave", function() {
    console.log("Blue Circle: Goodbye!")
  })

  // When button 1 is clicked, remove all shapes
  document
    .getElementById("button-1")
    .addEventListener("click", function() {
      document.querySelectorAll(".shape").forEach(shape => {
        shape.remove()
      })
    })

  $("#button-1").on("click", () => $(".shape").remove())

  // When button 2 is clicked, disable it
  // "this" in the event handler refers to the element that the 
  // event listener was attached to (event.currentTarget)
  document
    .getElementById("button-2")
    .addEventListener("click", function() {
      this.setAttribute("disabled", true)
    })
    
  // To use "attr", we'll need to pass "this" to the $() function
  $("#button-2").on("click", function() {
    $(this).attr("disabled", true)
  })

  // When button 3 is clicked, log "Button 3 was clicked"
  document
    .getElementById("button-3")
    .addEventListener("click", function() {
      console.log("Button 3 was clicked")
    })
    
  $("#button-3").on("click", function() {
    console.log("Button 3 was clicked")
  })

  // When a mouse enters any <tr>, set its class to "highlight"
  document.querySelectorAll("tr").forEach(node => {
    node.addEventListener("mouseenter", function() {
      node.classList.add("highlight")
    })
  })
  
  $("tr").on("mouseenter", function() {
    $(this).addClass("highlight")
  })
  
  // When a mouse leaves any <tr>, set its class to ""
  document.querySelectorAll("tr").forEach(node => {
    node.addEventListener("mouseleave", function() {
      node.classList.remove("highlight")
    })
  })
  
  $("tr").on("mouseleave", function() {
    $(this).removeClass("highlight")
  })
})
















