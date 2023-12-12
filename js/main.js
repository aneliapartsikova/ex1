example.onmouseover = function() {
example.style.background= "gray";
};

example.onmouseleave = function() {
example.style.background= "black";
};

const swiper = new Swiper(".mySwiper", {
  effect:"fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
}); 

  
