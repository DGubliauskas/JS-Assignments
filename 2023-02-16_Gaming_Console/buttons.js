//Viršutinis (baltas) x mygtukas įjungia įrenginį ir televizoriuje atvaizduojama pasisveikinimo žinutė, 
//taip pat šis mygtukas atsakingas už konsolės išjugimą. Tuo atveju rodoma atsisveikinimo žinutė.
let onOff = false;

const powerSwitch = () => {
 switch (onOff) {
    case true:
        goodbye();
        onOff = false;
        break;
    case false:
        greetings();
        onOff = true;
        break;
 }
}

const clear = () => {
    document.querySelector('.screen').style = "";
    document.querySelector('.screen').innerHTML = "";
}

function greetings() {
    clear();
    document.querySelector('.screen').innerHTML = `<div class="greets animated">
    <div class="greetsText">Hello!</div>
    <div class="legend">
    <div><span class = "yBut">Y</span><h2>TV</h2></div> 
    <div><span class = "xBut">X</span><h2>Back</h2></div>
    <div><span class = "bBut">B</span><h2>Shop</h2></div>
    <div><span class = "aBut">A</span><h2>Browser</h2></div>
    </div>`
}

function goodbye() {
    clear();
    document.querySelector('.screen').innerHTML = `<span class="bye">Bye!</span>`;
}

//Y (geltonas) mygtukas įjungia televizijos programą. Patalpinkite šį kodą į televizoriaus rėmelį:
//<iframe width="100%" height="315" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

function video() {
    if (onOff == false) {
        return;
    } 
    clear();
    document.querySelector('.screen').style.backgroundColor = "lightblue"
    document.querySelector('.screen').innerHTML = `<span><iframe width="100%" height="100%" src="https://www.youtube.com/embed/y-28CssnqEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span>`;
}

//B (raudonas) mygtukas grąžina vartotoją į pasisveikinimo ekraną.

const back = () => {
    if (onOff == false) {
        return;
    } else {
        document.querySelector('.screen').innerHTML = `<div class="greets">
        <div class="greetsText">Hello!</div>
        <div class="legend">
        <div><span class = "yBut">Y</span><h2>TV</h2></div> 
        <div><span class = "xBut">X</span><h2>Back</h2></div>
        <div><span class = "bBut">B</span><h2>Shop</h2></div>
        <div><span class = "aBut">A</span><h2>Browser</h2></div>
        </div>`  
    }
}
//X (mėlynas) mygtukas atvaizduoja galimų nusipirkti žaidimų sąrašą. 
//Prie kiekvieno žaidimo rodoma nuotrauka, pavadinimas ir kaina. Žaidimus patalpinkite masyve.

const a = 5;
a = 7;
console.log(a)

const games = [
    {
        nuotrauka: `<img src="../2023-02-16_Gaming_Console/assets/games/Kelyje.jpg"></img>`,
        pavadinimas: "Kelyje 2",
        kaina: "9.99€"
    },
    {
        nuotrauka: `<img src="../2023-02-16_Gaming_Console/assets/games/CS16.jpg"></img>`,
        pavadinimas: "Counter - Strike 1.6",
        kaina: "9.99€"
    },
    {
        nuotrauka: `<img src="../2023-02-16_Gaming_Console/assets/games/Fallout_New_Vegas.jpg"></img>`,
        pavadinimas: "Fallout: New Vegas",
        kaina: "19.99€"
    },
    {
        nuotrauka: `<img src="../2023-02-16_Gaming_Console/assets/games/forklift.jpg"></img>`,
        pavadinimas: "Forklift Simulator",
        kaina: "59.99€"
    },
]

const gamesList = () => {
    if (onOff == false) {
        return;
    }
    clear();
    document.querySelector('.screen').innerHTML = `
    <span>
    <table class="table table-striped table-dark" style="height: 100%">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Pavadinimas</th>
                            <th>Kaina</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
    </span>`
    games.forEach((produktas) => {
        document.querySelector('.screen tbody').innerHTML += `
            <tr>
                <td class="listImages">${produktas.nuotrauka}</td>
                <td class="tdAlign">${produktas.pavadinimas}</td>
                <td class="tdAlign">${produktas.kaina}</td>
            </tr>
        `;
    });
    
}

//A (žalias) mygtukas įjungia google.com puslapį.

const mainPage = () => {
    if (onOff == false) {
        return;
    }
    clear();
    document.querySelector('.screen').innerHTML = `<span><iframe width="100%" height="100%" src="http://www.google.com/search?igu=1"></iframe></span>`
}
