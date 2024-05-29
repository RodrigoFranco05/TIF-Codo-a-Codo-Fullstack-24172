const URL_ACCIONES = '../accionesArgentinas.json';
const tablaAcciones = document.querySelector('#tablaAcciones');

async function obtenerDatosJsonAcciones() {
    try {
        const response = await fetch(URL_ACCIONES);
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        const dataAcciones = await response.json();
        mostrarDatosEnTablaAcciones(dataAcciones);
        setInterval(() => {
            actualizarValoresJsonAcciones(dataAcciones);
            mostrarDatosEnTablaAcciones(dataAcciones);
        }, 5000); // Cambiar valores cada 5 segundos (5000 milisegundos)
    } catch (error) {
        console.error("Se ha producido un error:", error);
    }
}

function mostrarDatosEnTablaAcciones(dataAcciones) {
    tablaAcciones.innerHTML = ''; // Limpiar la tabla antes de actualizar
    dataAcciones.forEach(accion => {
        tablaAcciones.innerHTML += retornarTablaHTMLAcciones(accion);
    });
}

function actualizarValoresJsonAcciones(dataAcciones) {
    dataAcciones.forEach(accion => {
        // Generar cambios aleatorios en los valores de compra y venta
        const cambioCompraAccion = (Math.random() - 0.25) * 0.5; // Cambio entre -0.25 y 0.25
        const cambioVentaAccion = (Math.random() - 0.25) * 0.5; // Cambio entre -0.25 y 0.25

        // Aplicar cambios a los valores de compra y venta
        accion.precio_compra = parseFloat((accion.precio_compra + cambioCompraAccion).toFixed(2));
        accion.precio_venta = parseFloat((accion.precio_venta + cambioVentaAccion).toFixed(2));

        // Ajustar los demás valores proporcionalmente
        const factorAjusteAccion = 1 + (cambioVentaAccion - cambioCompraAccion) / accion.precio_dia_anterior;
        accion.precio_dia_anterior = parseFloat((accion.precio_dia_anterior * factorAjusteAccion).toFixed(2));
        accion.precio_variacion_dia = parseFloat((accion.precio_variacion_dia * factorAjusteAccion).toFixed(2));
        accion.valor_minimo_anterior = parseFloat((accion.valor_minimo_anterior * factorAjusteAccion).toFixed(2));
        accion.valor_maximo_anterior = parseFloat((accion.valor_maximo_anterior * factorAjusteAccion).toFixed(2));
        accion.volumen_nominal = parseFloat((accion.volumen_nominal * factorAjusteAccion).toFixed(2));
        accion.monto_operado = parseFloat((accion.monto_operado * factorAjusteAccion).toFixed(2));
        accion.cantidad_operaciones = parseFloat((accion.cantidad_operaciones * factorAjusteAccion).toFixed(2));
    });
}

function retornarTablaHTMLAcciones(accion) {
    return `
        <tr>
            <td>${accion.nombre}</td>
            <td>${accion.ticker}</td>
            <td>${accion.precio_variacion_dia.toFixed(2)}%</td>
            <td>${accion.precio_dia_anterior.toFixed(2)}</td>
            <td class="td_compra">${accion.cantidad_compra}</td>
            <td class="td_compra">${accion.precio_compra.toFixed(2)}</td>
            <td class="td_venta">${accion.cantidad_venta}</td>
            <td class="td_venta">${accion.precio_venta.toFixed(2)}</td>
            <td>${accion.valor_minimo_anterior.toFixed(2)}</td>
            <td>${accion.valor_maximo_anterior.toFixed(2)}</td>
            <td>${accion.volumen_nominal}</td>
            <td>${accion.monto_operado.toFixed(2)}</td>
            <td>${accion.cantidad_operaciones}</td>
        </tr>
    `;
}

obtenerDatosJsonAcciones();