const itens = [
    {
        text: "",
        texto: "NEF",
        number: '5',
        value: 25,
    },
    {
        text: "",
        texto: "PED",
        number: '1',
        value: 30,
    },
]

let itens2 = itens.map(function (element) {

    return `<div class="progress" style="background: conic-gradient(#00f5d2 ${element.value}%, #202d2e ${element.value}%)">
                <span class="progress-value">${element.text}
                <p class="progress-number" style="margin-bottom: -87px">${element.texto}</p>   
                    <p class="progress-number">${element.number}</p>    
                </span>
            </div>
            `
});
document.querySelector(".teste3").innerHTML = itens2.join('\n');
