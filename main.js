//Sliding navigation small screen with burger and darken mode
const mainEl = document.querySelector('main')
const menuBtn = document.querySelector('.menu-btn')
const slideNav = document.querySelector('.right-side-nav')
let menuOpen = false

//Target the accordian parent elements
const accordianTitles = document.querySelectorAll('.accordian-title')



//Set transform on Hamburger button
//Darken main content while menu is open
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
        mainEl.classList.add('darken')
        slideNav.classList.add('slide')
        
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
        mainEl.classList.remove('darken')
        slideNav.classList.remove('slide')
    }
})


//Opening and closing accordian elements
//Rotating arrows on accordian elements to up or down position on click
accordianTitles.forEach(accordianItem => {
    accordianItem.addEventListener('click', event => {
        let target = accordianItem.nextElementSibling       //target object must rotate on each click
        target.classList.toggle('rotate-fa-icon')           
        let content = target.nextElementSibling             //content object is the body of the item
        if(target.classList.contains('rotate-fa-icon')) {            
            content.style.maxHeight = content.scrollHeight + "px"
        }
        else{
            content.style.maxHeight = 0 + "px"

        }
    })
})



    