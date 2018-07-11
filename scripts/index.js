//Animation Timing
document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
    document.body.classList.remove('js-loading');
}
//Nav Bar Toggle Function
function mobileToggle(){
    const navs = document.querySelectorAll(".nav-item");
    navs.forEach(nav => nav.classList.toggle("toggle"));
}
document.querySelector(".nav-toggle").addEventListener('click', mobileToggle);

//Change Flavor Text Functions
function flavorText(){
    console.log("Test");
    let imgValues = window.document.getElementsByClassName("portfolio-img");
    let data = [];
    for(let i in imgValues){
        data.push(imgValues[i].dataset.img);
    }

}
document.querySelector(".next").addEventListener("click", flavorText);
