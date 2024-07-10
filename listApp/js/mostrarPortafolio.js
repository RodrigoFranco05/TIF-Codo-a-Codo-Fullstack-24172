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

    filteredData.forEach((accion) => {
      tablaBonos.innerHTML += retornarTablaHTML(accion);
    });

    // Selecciona todos los botones de eliminar
    const botonesEliminar = document.querySelectorAll('.botonEliminar');

    // Itera sobre cada botón de eliminar y agrega un event listener
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            
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
  let precio_actual = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  let gan_perd = precio_actual - accion.precio_compra;
  let total= precio_actual * accion.cantidad;

  return `<tr">
                        <td>${accion.ticker}</td>
                        <td id="ticker">${accion.ticker}</td>
                        <td></td>
                        <td id="cantidad">${accion.cantidad}</td>
                        <td id="precio_compra">${accion.precio_compra}</td>
                        <td>${precio_actual}</td>
                        <td>${gan_perd}</td>
                        <td>${total}</td>
                        <td class="botonEliminar" data-id="${accion.id}">x</td>
                    </tr>
    `;
}


fetchCryptoData();