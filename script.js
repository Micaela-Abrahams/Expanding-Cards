// We need to change the class of each panel to make it "Active"
// First we need to bring all the panels into our JS file, by creating a variable called panels

const panels = document.querySelectorAll('.panel') //querySelector allows us to select anything, but we cannot specify .panel because there is more than one panel, so in this case we select querySelectorAll//

//We need to add an eventListener to each panel, so that when we click on a panel, the panel expands//
//Whichever panel we click on, we need to add a class of active//

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
       removeActiveClasses() //Before we add a class of active on the panel the user will click on, we will first remove the active class from the panel that is already active//
       panel.classList.add('active') //Adding a class of active to the panel the user clicks on
    })
})

//Function to removeActiveClasses
//Because there is more than one panel,we need  to loop through the panels & remove all the active classes//
//So when we click on panel 2, panel 1 & all the panels after 2 will retract & panel 2 will expand//
//Once user clicks on a new panel, the active class will first be removed from the old panel before the clicked on panel becomes active
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
})
}