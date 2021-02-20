const btn = document.querySelector('#btn');
const btn_switch = document.querySelector('#switch');
const body = document.querySelector('#body');
const header = document.querySelector('.header');
const social = document.querySelector('.social');
const overview = document.querySelector('.overview');

btn_switch.onclick = () => {
    btn.classList.toggle('dark-theme');
    btn_switch.classList.toggle('dark-theme');
    body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme');
    social.classList.toggle('dark-theme');
    overview.classList.toggle('dark-theme');
}