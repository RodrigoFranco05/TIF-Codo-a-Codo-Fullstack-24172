const apiURL = 'https://api.coinlore.net/api/tickers/';
const idTicker = 0;

const tablaBonos = document.querySelector('#tablaBonos');


async function fetchCryptoData() {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();

        const specificIDs = ['90', '80','1','2710','48543'];

        const filteredData = data.data.filter(crypto => specificIDs.includes(crypto.id));

        //const cryptoDiv = document.getElementById('crypto-data');
       // cryptoDiv.innerHTML = '<pre>' + JSON.stringify(filteredData, null, 2) + '</pre>';
        

        filteredData.forEach(crypto => {
            
        tablaBonos.innerHTML += retornarTablaHTML(crypto);
        });
        
        filteredData.forEach(crypto => {
            console.log(crypto.name);
        });

        habilitarGrafica()

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function retornarTablaHTML(crypto) {
    let claseCryptoModal = "btn-abrir-modal" + crypto.symbol;
    return`<tr>
            <td id="${claseCryptoModal}">${crypto.symbol}</td>
            <td id="Price_usd">${crypto.price_usd}</td>
            <td id="percent_change_1h">${crypto.percent_change_1h}</td>
            <td id="rank">${crypto.rank}</td>
            <td id="csupply" class="td_compra">${crypto.csupply}</td>
            <td id="msupply" class="td_venta">${crypto.msupply}</td>
          </tr>`
}


function habilitarGrafica () {
    const btnAbrirModalBTC = document.querySelector("#btn-abrir-modalBTC");
const btnCerrarModalBTC = document.querySelector("#btn-cerrar-modalBTC");
const modalBTC = document.querySelector("#modalBTC");

btnAbrirModalBTC.addEventListener("click", () => {
  modalBTC.showModal();
});

btnCerrarModalBTC.addEventListener("click", () => {
  modalBTC.close();
});

const btnAbrirModalLTC = document.querySelector("#btn-abrir-modalLTC");
const btnCerrarModalLTC = document.querySelector("#btn-cerrar-modalLTC");
const modalLTC = document.querySelector("#modalLTC");

btnAbrirModalLTC.addEventListener("click", () => {
  modalLTC.showModal();
});

btnCerrarModalLTC.addEventListener("click", () => {
  modalLTC.close();
});

const btnAbrirModalSOL = document.querySelector("#btn-abrir-modalSOL");
const btnCerrarModalSOL = document.querySelector("#btn-cerrar-modalSOL");
const modalSOL = document.querySelector("#modalSOL");

btnAbrirModalSOL.addEventListener("click", () => {
  modalSOL.showModal();
});

btnCerrarModalSOL.addEventListener("click", () => {
  modalSOL.close();
});

const btnAbrirModalETH = document.querySelector("#btn-abrir-modalETH");
const btnCerrarModalETH = document.querySelector("#btn-cerrar-modalETH");
const modalETH = document.querySelector("#modalETH");

btnAbrirModalETH.addEventListener("click", () => {
  modalETH.showModal();
});

btnCerrarModalETH.addEventListener("click", () => {
  modalETH.close();
});

const btnAbrirModalBNB = document.querySelector("#btn-abrir-modalBNB");
const btnCerrarModalBNB = document.querySelector("#btn-cerrar-modalBNB");
const modalBNB = document.querySelector("#modalBNB");

btnAbrirModalBNB.addEventListener("click", () => {
  modalBNB.showModal();
});

btnCerrarModalBNB.addEventListener("click", () => {
  modalBNB.close();
});

}




fetchCryptoData();
