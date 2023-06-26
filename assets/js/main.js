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
