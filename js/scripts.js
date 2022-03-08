AOS.init();
// scroll to top
$(window).scroll(() => {
  if ($(this).scrollTop() > 40) {
    $(".scroll-to-top").fadeIn();
  } else {
    $(".scroll-to-top").fadeOut();
  }
});

$(".scroll-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// humberger menu script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav ul");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".main-nav ul li a");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// add sticky style effect on header
window.onscroll = function () {
  myFunction();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
