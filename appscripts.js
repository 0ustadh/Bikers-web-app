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

// not yet working
const ib = document.getElementsByClassName("icon-bar");
const cb = ib.querySelector("a");

if (window.orientation == "portrait") {
  ib[0].style.marginBottom = 0;
  ib[0].style.width = "100%";
  ib[0].style.overflow = "auto";
  cb[0].style.float = "left"
  cb[0].style.width = "20%";
  cb[0].style.textAlign = "center";
  cb[0].style.padding = "0.75rem 0";
  cb[0].style.fontSize = "2.5rem";
}