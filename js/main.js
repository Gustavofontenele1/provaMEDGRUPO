const itens = [
    {
        text: "NEF",
        number: '5',
        value: 25,
    },
    {
        text: "PED",
        number: '1',
        value: 30,
    },
]

let itens2 = itens.map(function (element) {

    return `<div class="progress" style="background: conic-gradient(#00f5d2 ${element.value}%, #202d2e ${element.value}%)">
                <span class="progress-value">${element.text}
                    <span class="progress-number">${element.number}</span>     
                </span>
            </div>
            `
});
document.querySelector(".teste3").innerHTML = itens2.join('\n');
