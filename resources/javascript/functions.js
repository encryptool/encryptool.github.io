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
function toggle() {
  document.getElementById("au").classList.toggle('off')
}
