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

    var indexSectionPicture = document.getElementById("index-section-picture");
    indexSectionPicture.style.backgroundPosition = xvalue + " " + yvalue + "px";

    var indexSectionPicture2 = document.getElementById("index-section-picture-2");
    indexSectionPicture2.style.backgroundPosition = xvalue + " " + yvalue + "px";

  }
