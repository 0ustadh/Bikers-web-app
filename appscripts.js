// Disable form submissions if there are invalid fields
(function() {
'use strict';
window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form)
    {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
    });
}, false);
})();

// Get the modals
let modal = document.getElementById('login');
let modal1 = document.getElementById('signup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == modal1) {
        modal1.style.display = "none";
        }
    }


// Tab contents
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
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

// Test code
const ct = document.getElementsByClassName("container");
const hd = document.querySelector(".heading");

for (let a = 0; a <= ct.length; a++){
  ct[a].classList.add("text-white");
  ct[a].classList.add("mx-3");
}

for (let b = 0; b <= hd.length; b++){
  hd[b].classList.add("bright");
}

// Show tabs (Tabs inside tab)
function showTab(event, tabNames){
  let j, tabcontents, navLink;
  tabcontents = document.getElementsByClassName("contents");
  for (j = 0; j < tabcontents.length; j++) {
    tabcontents[j].style.display = "none";
  }
  navLink = document.getElementsByClassName("nav-link");
  for (j = 0; j < navLink.length; j++) {
    navLink[j].className = navLink[j].className.replace(" active", "");
  }
  document.getElementById(tabNames).style.display = "block";
  event.currentTarget.className += " active";
}

// Onclick buttons
function login() {
  document.getElementById("login").style.display = "block";
}
function signup() {
  document.getElementById("signup").style.display = "block";
}

// Close buttons
function closeLogin() {
  document.getElementById("login").style.display = "none";
}
function closeSignup() {
  document.getElementById("signup").style.display = "none";
}