window.addEventListener("scroll", function(){
  var navbar = document.getElementById('navbar')
  var logo = document.getElementById('logo')

  if (window.scrollY>=305) {
    logo.classList.add('toggle')
    navbar.classList.add('toggle')
  }
  else {
    logo.classList.remove('toggle')
    navbar.classList.remove('toggle')
  }
});

document.getElementById("homepage").onscroll = function myFunction() {
    var scrolltotop = document.scrollingElement.scrollTop;
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;

    var hasherSectionPicture = document.getElementById("hasher-section-picture");
    hasherSectionPicture.style.backgroundPosition = xvalue + " " + yvalue + "px";

  }
