
// NAVIGATION PANEL
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills_header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  element.addEventListener("click", function () {
    skillContentArr[idx].classList.toggle("skills_open");
  });
});

// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
workheader.style.color = "var(--first-color)";
educationheader.style.color = "var(--text-color)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  if (!condition1) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-color)";
    educationheader.style.color = "var(--first-color)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("qualification-inactive");
  if (!condition2) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-color)";
    workheader.style.color = "var(--first-color)";
  }
});

let condition3 = education.classList.contains("qualification-inactive");
if (!condition3) {
  work.classList.remove("qualification-inactive");
  education.classList.add("qualification-inactive");

  educationheader.style.color = "var(--text-color)";
  workheader.style.color = "var(--first-color)";
}


// PORTFOLIO SWIPER
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// HEADER SHADOW
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
function scrollUpfunc() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUpfunc);




// Typing Animation using Typed JS
var typed = new Typed(".type", {
  strings: ["développeur mobile", "UI/UX designer", "cyber sécurité pentester"],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
});



// Popup button 
// the modal pop screen
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// quiz score
var correctAnswers = [
  { question: "question1", answer: "true" },
  { question: "question2", answer: "true" },
  { question: "question3", answer: "number" },
  { question: "question4", answer: "false" },
  { question: "question5", answer: "true" },
]

function checkScore() {
  var score = 0;
  var form = document.getElementById("quiz-form");
  for (var i = 0; i < correctAnswers.length; i++) {
    var question = form[correctAnswers[i].question];
    for (var j = 0; j < question.length; j++) {
      if (question[j].checked && question[j].value == correctAnswers[i].answer) {
        score++;
      }
    }
  }
  switch (score) {
    case 0:
      alert("Score : 0/5 . 👀 sérieux ?")
      break;
    case 1:
      alert("Score : 1/5 . 🤔 tu peux mieux faire")
      break;
    case 2:
      alert("Score : 2/5 . 😬 tu peux mieux faire")
      break;
    case 3:
      alert("Score : 3/5 . 🤓 J'ai un super site pour toi ; Apprendrejs.com")
      break;
    case 4:
      alert("Score : 4/5 . 🫡 Pas mal hein!")
      break;
    case 5:
      alert("Score : 5/5 . 🤖 tu es robot en fait")
      break;

    default:
      break;
  }
}
var quizform = document.getElementById("quiz-form");
quizform.addEventListener("submit", function (event) {
  event.preventDefault();
  checkScore();
});




