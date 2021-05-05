const l=console.log

// l("naveed")

// Syntax: <node>.querySelector('<css-selector>');
// It will find the first node that matches the query selector
// we can pass a string or a variable with a string as it value. and the value of that string should be css-selector

const toxicTim=document.querySelector('#toxic-tim');
// l(toxicTim);
const teamSalmonSelector='.team.salmon';
const teamSalmon=document.querySelector(teamSalmonSelector);
// l(teamSalmon);
const lastDoggoOfTeamSalmon=teamSalmon.querySelector(".doggo:last-child")

// l(lastDoggoOfTeamSalmon);

// <node>.querySelectorAll('<css-selector>')
// This finds all the nodes that matches in the HTML file
// it returns the node in an objectList called NodeList which can be iterated with for..of and .forEach like and array but it is NOT an array
// it doesnot have map or reduce method
const allDoggoFighters=document.querySelectorAll('.doggo.fighter');
// l(allDoggoFighters);

// Exercise 
const michealLarry = document.querySelectorAll(
  "#moneybags-michael, #larry-the-lion"
);
// l(michealLarry);

const allTeamTealDoggosButTheFirst=document.querySelectorAll('.team.teal .doggo:not(:first-child)');
// l(allTeamTealDoggosButTheFirst);
const secondDoggos=document.querySelectorAll('.team .doggo:nth-child(2)');
// l(secondDoggos);

// iterating over the nodes
// l("Logging all nodes of the doggo fighters using for..loop")

for (let doggo of allDoggoFighters){
  // l(doggo.id)
}
// l("Logging all nodes of the doggo fighters using forEach")
allDoggoFighters.forEach(node=>{
  // l(node.id)
})

// .nextElementSibling.previousElementSibling
const inbreadDog=document.querySelector('#inbread-dog')
// l(inbreadDog.nextElementSibling.previousElementSibling)
// l(inbreadDog.nextElementSibling.nextElementSibling)

// l(toxicTim.parentElement.parentElement.parentElement)
// l(teamSalmon.children[1])
// const salmonRoster=teamSalmon.children[1].childNodes
// l(salmonRoster)

// for(let doggo of salmonRoster){
//   l(doggo.id)
// }
// l(salmonRoster.firstElementChild)
// l(salmonRoster.lastElementChild)

// Matches
// Syntax: <node>.matches("<css-selector>")
// it returns true or false

// l(toxicTim.matches("#toxic-tim")) // true
// l(toxicTim.matches('.doggo.fighter'))//true
// l(toxicTim.matches('h1'))//false
// l(toxicTim.matches('.doggo.worker')) //false

// closest
// Syntax: <node>.closest('<css-query>');
// l(toxicTim.closest("div"))
// l(toxicTim.closest(".team"))

// toxicTim.style.border="solid 5px lime"
// toxicTim.style.borderRadius='10px'

// toxicTim.style["background-image"]="url(images/paws.jpg)"

// l(getComputedStyle(toxicTim))
const toxicTimStyles=getComputedStyle(toxicTim);
// l(toxicTimStyles.top)
// l(toxicTimStyles.position)
/**
l(teamSalmon.innerHTML) // returns all the HTMl content inside team Salmon as a sring
l(teamSalmon.innerText) // return all of the text and will strip the HTML tags

l(teamSalmon.outerHTML)
l(teamSalmon.outerText)
 

// toxicTim.outerHTML='<h1>My turn in the light</h1>'

l(toxicTim.id)
l(toxicTim.className)
l(toxicTim.href)
l(toxicTim.name)
l(toxicTim.classList.add("dead"))
l(toxicTim.classList)
l(toxicTim.classList.remove("dead"))
l(toxicTim.classList)
l(toxicTim.classList.add("dead","invisible"))
l(toxicTim.classList)
l(toxicTim.classList.remove("dead","invisible",'fadsfadsfad'))
l(toxicTim.classList)
l(toxicTim.classList.toggle("invisible"))
l(toxicTim.classList)
l(toxicTim.classList.toggle("invisible"))
l(toxicTim.classList)

// Adding attributes
const inputName=document.querySelector('#name')
inputName.setAttribute('value','naveed')
toxicTim.setAttribute('data-method',"add")
toxicTim.setAttribute('data-target',"#navbar-nav")

// Removing Attributes
toxicTim.removeAttribute('data-method')
l(toxicTim.hasAttribute('data-target'))

l(toxicTim)
toxicTim.remove();
// Exercise: Vandalise the arena
for(let node of document.querySelectorAll('.team')){
  node.style.backgroundColor='fuchsia'
}

document.querySelectorAll('.doggo.fighter').forEach(node=>{
  node.innerText='Rob the Slob'
})

document.querySelectorAll(".doggo.fighter").forEach(node=>{
  node.style.backgroundImage='url(images/paws.jpg)';
})

document.createElement('p');
document.createElement('img');
document.createElement('main');
*/
const drillBitDarel=document.createElement('div');
drillBitDarel.className='doggo fighter';
drillBitDarel.id='drill-bit-darel';
drillBitDarel.style.backgroundImage='url(images/drill_bit_darel.jpg)';
const h1=document.createElement('h1');
h1.innerText= "Drill Bit Darel";
drillBitDarel.append(h1);

const teamSalmonRoster=document.querySelector('.team.salmon .roster');
l(teamSalmonRoster)
// teamSalmonRoster.appendChild(drillBitDarel);
const firstMember=teamSalmonRoster.children[2];
teamSalmonRoster.insertBefore(drillBitDarel,firstMember)

// cloneNode
// Syntax: <node>.cloneNode(<deep-clone?>);
// To make copies of nodes, use the cloneNode method
// This will duplicate a node without duplicating its descendents
// to include discendants, pass in true as an argument.

drillBitDarel.cloneNode(true)
teamSalmon.querySelector('.roster').prepend(
  drillBitDarel.cloneNode(true),drillBitDarel.cloneNode(true),drillBitDarel.cloneNode(),drillBitDarel.cloneNode()
)