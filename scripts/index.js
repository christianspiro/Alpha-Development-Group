function mobileToggle(){
    const navs = document.querySelectorAll(".nav-item");
    navs.forEach(nav => nav.classList.toggle("toggle"));
}
document.querySelector(".nav-toggle").addEventListener('click', mobileToggle);