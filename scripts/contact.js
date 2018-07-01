
document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
    document.body.classList.remove('js-loading');
}
function mobileToggle(){
    const navs = document.querySelectorAll(".nav-item");
    navs.forEach(nav => nav.classList.toggle("toggle"));
}
document.querySelector(".nav-toggle").addEventListener('click', mobileToggle);