

function semafor() {
    const boje = document.getElementsByClassName('boje');
    boje[0].style.background = 'red';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'gray';

    function changetoYellow() {
        boje[1].style.background = 'yellow';
    }

    function changetoGreen() {
        boje[0].style.background = 'gray';
        boje[1].style.background = 'gray';
        boje[2].style.background = 'green';
    }

    function changetoRed() {
        boje[0].style.background = 'red';
        boje[1].style.background = 'gray';
        boje[2].style.background = 'gray';
    }

    const x = setTimeout(changetoYellow, 3000);
    const y = setTimeout(changetoGreen, 5000);
    const j = setTimeout(changetoRed, 7000);
    const start = setInterval(semafor, 9000);

}

semafor();

function semafor2() {
    const boje2 = document.getElementsByClassName('boje-2');
    boje2[0].style.background = 'gray';
    boje2[1].style.background = 'gray';
    boje2[2].style.background = 'green';

    function changetoRed() {
        boje2[0].style.background = 'red';
        boje2[1].style.background = 'gray';
        boje2[2].style.background = 'gray';
    }

    function changetoYellow() {
        boje2[0].style.background = 'red';
        boje2[1].style.background = 'yellow';
        boje2[2].style.background = 'gray';
    }

    const z = setTimeout(changetoRed, 3000);
    const c = setTimeout(changetoYellow, 7000);
    const start2 = setInterval(semafor2, 9000);

}

semafor2();