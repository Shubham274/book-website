let NavLink = document.getElementById("nav-links");
let MenuBar = document.getElementById("menu-bar");

NavLink.style.maxHeight = "0px";

MenuBar.addEventListener("click", () => {
  NavLink.style.maxHeight == "0px"
    ? (NavLink.style.maxHeight = "100vh")
    : (NavLink.style.maxHeight = "0px");
});
