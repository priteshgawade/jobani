// menu button function for hide and show navbar
function myfunction() {
  if (document.getElementById('header').style.display !== 'none') {
    document.getElementById('header').style.display = 'none';
  }
  else {

    document.getElementById('header').style.display = 'block';
  }
}

//slider code
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("circle");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//header nav links active on scroll
sections = document.querySelectorAll('.section');

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  let current = "";
  sections.forEach(section => {
    const sectionTop = (section.getBoundingClientRect().top + window.pageYOffset) - 50;
    const sectionHeight = section.offsetHeight;
    current = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-bar a[href*=" + current + "]").classList.add("active-links");
    } else {
      document.querySelector(".nav-bar a[href*=" + current + "]").classList.remove("active-links");
    }
  })
})


//filter for portfolio links
filter = document.querySelectorAll('.links a');

card = document.querySelectorAll('#card')
web = document.querySelectorAll('#web');
app = document.querySelectorAll('#app');


for (item of filter) {
  item.addEventListener('click', (e) => {
    c = e.target.classList;
    if (c == 'web') {

      web.forEach(element => (element.style.display = "block"));
      card.forEach(element => (element.style.display = "none"));
      app.forEach(element => (element.style.display = "none"));
    }
    else if (c == 'card') {

      web.forEach(element => (element.style.display = "none"));
      card.forEach(element => (element.style.display = "block"));
      app.forEach(element => (element.style.display = "none"));
    }
    else if (c == 'app') {

      app.forEach(element => (element.style.display = "block"));
      web.forEach(element => (element.style.display = "none"));
      card.forEach(element => (element.style.display = "none"));
    }
    else if (c == 'all') {
      app.forEach(element => (element.style.display = "block"));
      web.forEach(element => (element.style.display = "block"));
      card.forEach(element => (element.style.display = "block"));
    }
  }
  )
}