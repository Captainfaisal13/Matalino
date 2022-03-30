const menu = document.querySelector(".nav-wrap");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
})

cancelBtn.addEventListener("click", function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
});


$("#nav").on('click', 'a', function (event) {
  if (this.innerText !== "About Us") {
    event.preventDefault();
    var o = $($(this).attr("href")).offset();
    var sT = o.top - $(".navbar").outerHeight(true);
    window.scrollTo(0, sT);
  }
});