function fixedHeader() {
  let fixedElm = document.querySelector(".header");
  let scrollPoint = 0;
  let lastPoint = 0;
  window.addEventListener("scroll", function () {
    scrollPoint = this.window.scrollY;
    if (scrollPoint > lastPoint) {
      fixedElm.classList.add("fixed-hide");
    } else {
      fixedElm.classList.remove("fixed-hide");
    }
    lastPoint = scrollPoint;
  });
}

fixedHeader();
