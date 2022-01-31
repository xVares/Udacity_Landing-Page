/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * !Define Global Variables
 * 
*/

const pageSections = document.querySelectorAll("[data-nav]");


/**
 * !End Global Variables
 * !Start Helper Functions
 * 
 */


let navBar = document.querySelector("#navbar__list");


/**
 * !End Helper Functions
 * !Begin Main Functions
 *
 */

// !build the nav

const addNavLink = function () {

  pageSections.forEach((section) => {
    // !create <li> and get sectionID
    const li = document.createElement("li");
    const sectionId = section.id;

    // !create <a> with class="menu__link" + href="sectionID"
    const a = document.createElement("a");
    a.classList.add("menu__link");
    a.setAttribute("href", `#${sectionId}`);
    a.setAttribute("data-nav", sectionId);

    // !append <li> to navBar
    const navName = section.getAttribute("data-nav");
    a.innerText = navName;
    li.appendChild(a);
    navBar.appendChild(li);
  })
  console.log("DOMContentLoaded");
}

window.addEventListener('DOMContentLoaded', addNavLink());


// !Add class 'active' to section when near top of viewport


const pageSectionActive = function () {
  pageSections.forEach(function (element) {

    // !get <section> position and add <a data-nav="section.id">
    let a = navBar.querySelector(`[data-nav=${element.id}]`);
    let position = element.getBoundingClientRect();

    // !add/remove active class for <section> && <a>
    if (position.top <= 30 && position.bottom >= 40) {

      element.classList.add("active");
      a.classList.add("active");
    }
    else {
      element.classList.remove("active");
      a.classList.remove("active");
    }
  });
}

this.addEventListener("scroll", function () {
  pageSectionActive()
});


// !Scroll to anchor ID using scrollTO event

// !Function: get all <a href='#'> and prevent default
const smoothScroll = function () {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // !set behavior: smooth for all anchor with 'href' attr
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

smoothScroll();

// !Hide navBar when scrolling, show when stopping

// document.addEventListener('scroll', function (e) {
//   // !get navBar>
//   const navContainer = document.querySelector('.navbar__menu');

//   // !add/remove scroll class for navBar
//   if (document.getElementsByClassName('scrolling')) {

//     navContainer.classList.add("scrolling");
//   }
//   else {
//     navContainer.classList.remove("scrolling");
//   }
//   console.log(navContainer)
// });

// console.log

/**
 * !End Main Functions
 *
*/





