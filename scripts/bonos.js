const URL = '../bonosArgentinos.json';
const tablaBonos = document.querySelector('#tablaBonos');

async function obtenerDatosJsonBonos() {
    try {
        const response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        const data = await response.json();
        mostrarDatosEnTabla(data);
        setInterval(() => {
            actualizarValoresJson(data);
            mostrarDatosEnTabla(data);
        }, 5000); 
    } catch (error) {
        console.error("Se ha producido un error:", error);
    }
}

function mostrarDatosEnTabla(data) {
    tablaBonos.innerHTML = '';
    data.forEach(bono => {
        tablaBonos.innerHTML += retornarTablaHTML(bono);
    });
}

function actualizarValoresJson(data) {
    data.forEach(bono => {
        
        const cambioCompra = (Math.random() - 0.25) * 0.5; 
        const cambioVenta = (Math.random() - 0.25) * 0.5; 

        bono.precio_compra = parseFloat((bono.precio_compra + cambioCompra).toFixed(2));
        bono.precio_venta = parseFloat((bono.precio_venta + cambioVenta).toFixed(2));

        const factorAjuste = 1 + (cambioVenta - cambioCompra) / bono.precio;
        bono.precio = parseFloat((bono.precio * factorAjuste).toFixed(2));
        bono.variacion_porcentual = parseFloat((bono.variacion_porcentual * factorAjuste).toFixed(2));
        bono.valor_minimo_anterior = parseFloat((bono.valor_minimo_anterior * factorAjuste).toFixed(2));
        bono.valor_maximo_anterior = parseFloat((bono.valor_maximo_anterior * factorAjuste).toFixed(2));
        bono.volumen_nominal = parseFloat((bono.volumen_nominal * factorAjuste).toFixed(2));
        bono.monto_operado_dia = parseFloat((bono.monto_operado_dia * factorAjuste).toFixed(2));
        bono.cantidad_operaciones_dia = parseFloat((bono.cantidad_operaciones_dia * factorAjuste).toFixed(2));
    });
}

function retornarTablaHTML(bono) {
    return `
        <tr>
            <td>${bono.nombre}</td>
            <td>${bono.abreviatura}</td>
            <td>${bono.variacion_porcentual.toFixed(2)}%</td>
            <td>${bono.precio_apertura.toFixed(2)}</td>
            <td class="td_compra">${bono.cantidad_compra}</td>
            <td class="td_compra">${bono.precio_compra.toFixed(2)}</td>
            <td class="td_venta">${bono.cantidad_venta}</td>
            <td class="td_venta">${bono.precio_venta.toFixed(2)}</td>
            <td>${bono.valor_minimo_anterior.toFixed(2)}</td>
            <td>${bono.valor_maximo_anterior.toFixed(2)}</td>
            <td>${bono.volumen_nominal}</td>
            <td>${bono.monto_operado_dia.toFixed(2)}</td>
            <td>${bono.cantidad_operaciones_dia}</td>
        </tr>
    `;
}

obtenerDatosJsonBonos();