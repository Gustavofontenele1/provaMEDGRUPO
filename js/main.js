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
                <p class="progress-number">${element.texto}</p>   
                    <p class="progress-number">${element.number}</p>    
                </span>
            </div>
            `
});
document.querySelector(".teste3").innerHTML = itens2.join('\n');
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

    return `<p id="icon"<i class="fa-solid fa-arrow-down"></i></p>
            <div class="progress" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value active">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>

            `
});
document.querySelector(".test3").innerHTML = itens4.join('\n');

document.addEventListener("DOMContentLoaded", function () {
    const teste1 = document.querySelectorAll('.teste1');
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

document.addEventListener('DOMContentLoaded', function(event) {
    
    document.getElementById('button').style.visibility = 'visible';
    document.getElementById('buttonn').style.visibility = 'visible';

    document.getElementById('button').onclick = function() {
    document.getElementById('flip-card').classList.toggle('do-flip');
    };
    document.getElementById('buttonn').onclick = function() {
        document.getElementById('flip-card').classList.toggle('do-flip');
        };

});
