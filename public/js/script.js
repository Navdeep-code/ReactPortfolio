var btn = document.getElementById("menu-btn");
btn.onclick = togglemenu;

function togglemenu() {
  var menu = document.querySelector(".header ul");
  menu.classList.toggle("show");
}
