const itens = [
    {
        texto: "NEF",
        number: '5',
        value: 25,
    },
    {
        texto: "PED",
        number: '1',
        value: 30,
    },
]

let itens2 = itens.map(function (element) {

    return `<div class="progress" style="background: conic-gradient(#00f5d2 ${element.value}%, #202d2e ${element.value}%)">
                <span class="progress-value active">
                <p class="progress-number active">${element.texto}</p>   
                    <p class="progress-number active">${element.number}</p>    
                </span>
            </div>
            `
});
document.querySelector(".card-script1").innerHTML = itens2.join('\n');
const itens6 = [
    {
        letra: "NEF",
        num: '1',
        valor: 0,
    },
    {
        letra: "CIR",
        num: '1',
        valor: 0,
    },

]
let itens4 = itens6.map(function (elemento) {

    return `<p id="icon"<i class="icon fa-solid fa-arrow-down"></i></p>
            <div class="progress" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value active">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>

            `
});
document.querySelector(".card-script2").innerHTML = itens4.join('\n');








const itens8 = [
    {
        letra: "REU",
        num: '2',
        valor: 0,
    },
    {
        letra: "OBS",
        num: '2',
        valor: 0,
    },

]
let itens14 = itens8.map(function (elemento) {

    return `
            <div class="progress" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value active">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>

            `
});

document.querySelector(".card-script3").innerHTML = itens14.join('\n');



const itenss8 = [
    {
        letra: "REU",
        num: '2',
        valor: 0,
    },
    {
        letra: "OBS",
        num: '2',
        valor: 0,
    },

]
let itenss14 = itenss8.map(function (elemento) {

    return `<p id="icon"<i class="icon fa-solid fa-arrow-down "></i></p>
            <div class="progress" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value active">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>

            `
});
document.querySelector(".card-script4").innerHTML = itenss14.join('\n');

document.addEventListener("DOMContentLoaded", function () {
    const teste1 = document.querySelectorAll('.card');
    if (teste1) {
        teste1.forEach((el, key) => {
            el.addEventListener('click', function () {
                el.classList.toggle('active');
                teste1.forEach((active, index) => {
                    if (key !== index) {
                        active.classList.remove('active')
                    }
                })
            })
        })
    }
});
document.addEventListener("DOMContentLoaded", function (event) {
    const teste2 = document.querySelectorAll('.icon');
    if (teste2) {
        teste2.forEach((el, key) => {
            el.addEventListener('click', function () {
                el.classList.toggle('active');
                teste2.forEach((active, index) => {
                    if (key !== index) {
                        active.classList.remove('active')
                    }
                })
            })
        })
    }
    document.getElementById('button1').style.visibility = 'visible';
    document.getElementById('button2').style.visibility = 'visible';

    document.getElementById('button1').onclick = function() {
    document.getElementById('flip-card').classList.toggle('do-flip');
    };
    document.getElementById('button2').onclick = function() {
        document.getElementById('flip-card').classList.toggle('do-flip');
        };
    
    document.getElementById('button3').style.visibility = 'visible';
    document.getElementById('button4').style.visibility = 'visible';

    document.getElementById('button3').onclick = function() {
    document.getElementById('flip-card2').classList.toggle('do-flip');
    };
    document.getElementById('button4').onclick = function() {
        document.getElementById('flip-card2').classList.toggle('do-flip');
        };

});

