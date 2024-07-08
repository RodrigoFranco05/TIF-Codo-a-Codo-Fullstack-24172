let BASE_URL = "http://localhost:5000";

let params = new URLSearchParams(document.location.search);

let url = BASE_URL + "/api/portafolio";

async function fetchCryptoData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const filteredData = await response.json();

    //const specificIDs = ["90", "80", "1", "2710", "48543"];

    /*const filteredData = data.data.filter((crypto) =>
      specificIDs.includes(crypto.id)
    );*/

    //const cryptoDiv = document.getElementById('crypto-data');
    // cryptoDiv.innerHTML = '<pre>' + JSON.stringify(filteredData, null, 2) + '</pre>';

    filteredData.forEach((accion) => {
      tablaBonos.innerHTML += retornarTablaHTML(accion);
    });

    // Selecciona todos los botones de eliminar
    const botonesEliminar = document.querySelectorAll('.botonEliminar');

    // Itera sobre cada botón de eliminar y agrega un event listener
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            console.log('aaa' + event.currentTarget.getAttribute('data-id'))
            // Obtiene el ID de la acción desde el atributo data-id del botón
            let id = event.currentTarget.getAttribute('data-id');

            // Construye la URL para la solicitud DELETE
            let url = BASE_URL + '/api/portafolio/delete/' + id;

            // Envía la solicitud DELETE usando la función fetchData
            fetchData(url, "DELETE", () => {
                // Recarga la página después de eliminar la acción
                location.reload();
            });
        });
    });


  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

function retornarTablaHTML(accion) {
  return `<tr">
                        <th></th>
                        <th id="ticker">${accion.ticker}</th>
                        <th></th>
                        <th id="cantidad">${accion.cantidad}</th>
                        <th id="precio_compra">${accion.precio_compra}</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th class="botonEliminar" data-id="${accion.id}">x</th>
                    </tr>
    `;
}


fetchCryptoData();
/*
function archiveTask(event) {
    let id = event.currentTarget.task_id;

    let url = BASE_URL + '/api/tasks/archive/' + id;

    fetchData(url, "DELETE", () => {
        location.reload();
    });
}*/
