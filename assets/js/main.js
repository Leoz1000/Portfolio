/*==================== MODAL ====================*/

const contactButton = document.getElementById('contact-modal'),
      contactButton1 = document.getElementById('contact-modal1'),
      contactButton2 = document.getElementById('contact-modal2'),
      contactButton3 = document.getElementById('contact-modal3'),
      modal = document.getElementById('modal'),
      sectionModal = document.getElementById('section-modal'),
      overlay = document.getElementById('overlay')

if(contactButton){
    contactButton.addEventListener('click', ()=>{
        modal.classList.add('active-modal')
        modal.classList.remove('deactivate-modal')
        sectionModal.classList.add('active-modal')
        sectionModal.classList.remove('deactivate-modal')
        overlay.classList.add('overlay')
        overlay.classList.remove('deactivate-modal')
    })        
}
if(contactButton1){
    contactButton1.addEventListener('click', ()=>{
        modal.classList.add('active-modal')
        modal.classList.remove('deactivate-modal')
        sectionModal.classList.add('active-modal')
        sectionModal.classList.remove('deactivate-modal')
        overlay.classList.add('overlay')
        overlay.classList.remove('deactivate-modal')
    })      
}
if(contactButton2){
    contactButton2.addEventListener('click', ()=>{
        modal.classList.add('active-modal')
        modal.classList.remove('deactivate-modal')
        sectionModal.classList.add('active-modal')
        sectionModal.classList.remove('deactivate-modal')
        overlay.classList.add('overlay')
        overlay.classList.remove('deactivate-modal')
    })      
}
if(contactButton3){
    contactButton3.addEventListener('click', ()=>{
        modal.classList.add('active-modal')
        modal.classList.remove('deactivate-modal')
        sectionModal.classList.add('active-modal')
        sectionModal.classList.remove('deactivate-modal')
        overlay.classList.add('overlay')
        overlay.classList.remove('deactivate-modal')
    })      
}
overlay.addEventListener('click', ()=>{
    modal.classList.add('deactivate-modal')
    modal.classList.remove('active-modal')
    sectionModal.classList.add('deactivate-modal')
    sectionModal.classList.remove('active-modal')
    overlay.classList.add('deactivate-modal')
    overlay.classList.remove('overlay')
}) 

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle =document.getElementById('nav-toggle'),
    navClose =document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each na__link, we remone the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container',{
    cssMode:true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >= 560){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})