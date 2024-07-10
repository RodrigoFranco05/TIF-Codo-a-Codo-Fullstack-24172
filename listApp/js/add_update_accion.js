let BASE_URL = 'http://localhost:5000';

let submitButton = document.querySelector("#Crear");

let params = new URLSearchParams(document.location.search);
let id_accion = params.get("id_accion");


function add_new_accion(event) {
    let data = {
        'ticker': document.querySelector("#ticker").value,
        'cantidad': document.querySelector("#cantidad").value,
        'precio_compra': document.querySelector("#precio_compra").value
    }

    let url = BASE_URL + '/api/portafolio/create';

    fetchData(url, "POST", () => {
        window.location.replace("../pages/perfil.html");
    }, 
    data);
}

function add_or_update(){
    if(id_accion == null) {
        submitButton.addEventListener("click", add_new_accion);
    } else {
        
    }
}

add_or_update();