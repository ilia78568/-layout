let menuMobile = document.getElementById('menu-mobile');
let menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    document.getElementById('menuPhone').style.display = 'flex';
    document.getElementById('headerText').style.display = 'none';
})

menuMobile.addEventListener('click', () => {
    document.getElementById('menuPhone').style.display = 'none';
    document.getElementById('headerText').style.display = 'block';
})



document.querySelector('#div-portfolio').addEventListener('click', () => {
    if(event.target.id === 'portfolioImage') {
        document.querySelectorAll('#portfolioImage').forEach((element) => {
            element.classList.remove('border-image');
        })
        event.target.classList.add('border-image');
    }
})

document.querySelector('.main').addEventListener('click', () => {
    if (event.target.id != 'menu-mobile' ) {
        document.getElementById('menuPhone').style.display = 'none';
    document.getElementById('headerText').style.display = 'block';
    }
})

function sendInfo() {
    alert('Письмо отправлено');
}