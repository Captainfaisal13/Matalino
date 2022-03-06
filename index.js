$("#nav").on('click', 'a', function (event) {
  if (this.innerText !== "About Us") {
    event.preventDefault();
    var o = $($(this).attr("href")).offset();
    var sT = o.top - $(".navbar").outerHeight(true);
    window.scrollTo(0, sT);
  } else {

  }
});