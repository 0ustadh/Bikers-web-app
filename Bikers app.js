// Image Slideshow
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Second slides
var slideIndex = 1;
showsSlides(slideIndex);
function addSlides(n) {
  showsSlides(slideIndex += n);
}
function newSlide(n) {
  showsSlides(slideIndex = n);
}
function showsSlides(n) {
  var i;
  var slides = document.getElementsByClassName("newSlides");
  var dots = document.getElementsByClassName("new");
  var captionText = document.getElementById("capt");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actv", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " actv";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Tab contents
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Third slides
//Automatic slideshow
var slideIndexes = 0;
showSliders();
function plusSliders(n) {
  showSliders(slideIndexes += n);
}
function currentSlider(n) {
  showSliders(slideIndexes = n);
}
function showSliders() {
  var j;
  var sliders = document.getElementsByClassName("mySliders");
  for (j = 0; j < sliders.length; j++) {
    sliders[j].style.display = "none";
  }
  slideIndexes++;
  if (slideIndexes > sliders.length) {slideIndexes = 1}
  sliders[slideIndexes-1].style.display = "block";
  setTimeout(showSliders, 2000);
}

// Side navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Sign up form
var modaldal = document.getElementById('id17');

window.onclick = function(event) {
    if (event.target == modaldal) {
        modaldal.style.display = "none";
    }
}

/* Active (To show the home tab when opened.
 Without this program, the app will only display the icon bars
 and the background image.) */
function active() {
document.getElementById('hp').click();
}
active();

// About us
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Dropdown in sidenav
var dropdown = document.getElementsByClassName("dropdown-btn");
var k;

for (k = 0; k < dropdown.length; k++) {
  dropdown[k].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// Google maps API
/*
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
*/