const navBar = document.querySelector('#nav');
const btn = document.querySelector(`#nav-btn`);
const btnImg = document.querySelector(`#nav-btn-img`);

btn.onclick = () => {
    if (navBar.classList.toggle("open")) {
        btnImg.src = "../img/navClose.svg"
    }
    else {
        btnImg.src = "../img/nav.svg"
    }
}

AOS.init();