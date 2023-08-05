window.addEventListener('load', function () {
    const load = document.getElementById('load');
    load.style.display = 'none';
});

const btn2 = document.getElementById('btn2')
const load = document.getElementById('load')
const starting = document.getElementById('starting-pages')

btn2.addEventListener('click', function (){
    starting.style.display = 'none';
    document.getElementById('load').classList.add('slide-in-right');
    load.style.display = 'block';

    setTimeout(() => {
        window.location.href = 'home.html';
    }, 3000);
})