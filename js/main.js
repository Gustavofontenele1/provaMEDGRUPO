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
        letra: "REU",
        num: '2',
        valor: 25,
    },
    {
        letra: "OBS",
        num: '2',
        valor: 30,
    },

]
let itens4 = itens6.map(function (elemento) {

    return `<div class="progress1" style="background: conic-gradient(#00f5d2 ${elemento.valor}%, #202d2e ${elemento.valor}%)">
                <span class="progress-value1">
                <p class="progress-number">${elemento.letra}</p>   
                    <p class="progress-number">${elemento.num}</p>    
                </span>
            </div>
            `
});
document.querySelector(".test3").innerHTML = itens4.join('\n');


