let count = 0;
let total;
const cartIcon = document.getElementById("cart-icon");
const card = document.getElementById("card");
const quantity = document.querySelectorAll("#qty");
const badge = document.querySelector(".badge");
const price = document.getElementById("price");
const addToCart = document.getElementById("add-cart");
const cardBody = document.getElementById("card-body");
const cardEmpty = document.querySelector(".card-empty");
const cardFull = document.querySelector(".card-full");
const deleteItem = document.getElementById("delete");

let loopQty = () => {
  for (let i = 0; i < quantity.length; i++) {
    quantity[i].textContent = count;
  }
};
plus.addEventListener("click", (e) => {
  count++;
  loopQty();
});
minus.addEventListener("click", (e) => {
  if (count > 0) {
    count--;
    loopQty();
  }
});
addToCart.addEventListener("click", (e) => {
  let basePrice = 125;
  badge.textContent = count;
  if (count > 0) {
    cardEmpty.style.display = "none";
    cardFull.style.display = "block";
    price.textContent = basePrice * count;
    badge.style.display = "block";
  }
});
deleteItem.addEventListener("click", (e) => {
  cardFull.style.display = "none";
  cardEmpty.style.display = "block";
  count = 0;
  loopQty();
  badge.textContent = count;
  badge.style.display = "none";
});
cartIcon.addEventListener("click", (e) => {
  card.classList.toggle("active");
});
document.addEventListener("mouseup", (e) => {
  if (!card.contains(e.target)) {
    card.classList.remove("active");
  }
});
let openNav = () => {
  document.querySelector("#collapse").classList.add("show");
  console.log("sidebar has been opened");
};
let closeNav = () => {
  document.querySelector("#collapse").classList.remove("show");
  console.log("sidebar has been closed");
};
let currentSlide = 0;
const slides = document.querySelectorAll(".slides");
const thumbnails = document.querySelectorAll("#thumb");
const showSlides = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  thumbnails[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", showSlides(currentSlide));
thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener("click", () => {
    console.log(currentSlide);
    showSlides(i);
    currentSlide = i;
  });
});
const nextSlide = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  showSlides(currentSlide);
};
const prevSlide = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  showSlides(currentSlide);
};
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}
function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}
var slideIndex = 1;
showImages(slideIndex);
function plusSlides(n) {
  showImages((slideIndex += n));
}
function currentImg(n) {
  showImages((slideIndex = n));
}
function showImages(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbs = document.getElementsByClassName("thumb-img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].className += " active";
}