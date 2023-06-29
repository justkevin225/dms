const navbar_items = document.querySelectorAll(".navbar-nav .nav-item a");

navbar_items.forEach((navbar_item) => {
  navbar_item.addEventListener("click", () => {
    navbar_item.classList.add("isActive");
    navbar_items.forEach(function (otherItems) {
      if (otherItems !== navbar_item) {
        otherItems.classList.remove("isActive");
      }
    });
  });
});

const swiper = new Swiper('.swiper', {
  initialSlide: 2,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 110,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
