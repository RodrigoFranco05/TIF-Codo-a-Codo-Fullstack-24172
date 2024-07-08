let BASE_URL = 'http://localhost:5000';

let submitButton = document.querySelector("#Crear");

let params = new URLSearchParams(document.location.search);
let id_accion = params.get("id_accion");

/*ticker= data['ticker'],
        cantidad=data['cantidad'],
        precio_compra=data['precio_compra'], */

function add_new_accion(event) {
    let data = {
        'ticker': document.querySelector("#ticker").value,
        'cantidad': document.querySelector("#cantidad").value,
        'precio_compra': document.querySelector("#precio_compra").value
    }

    let url = BASE_URL + '/api/portafolio/create';

    fetchData(url, "POST", () => {
        //document.querySelector("#Formulario").reset();
        window.location.replace("../pages/perfil.html");
    }, 
    data);
}

function add_or_update(){
    if(id_accion == null) {
        submitButton.addEventListener("click", add_new_accion);
       /* document.querySelector(".actionTitle").innerHTML = "Editar tarea existente";

        set_form_readOnly(true);

        let url = BASE_URL + '/api/tasks/fetch/' + task_id;
        fetchData(url, "GET", (data) => {
            document.querySelector("#Titulo").value = data.nombre;
            document.querySelector("#Descripcion").value = data.descripcion;
            document.querySelector("#task_id").value = data.id;
            document.querySelector(".fecha").innerHTML = data.fecha_creacion;

            set_form_readOnly(false);
        });

        submitButton.addEventListener("click", update_task);*/
    } else {
        
    }
}

add_or_update();


/*function update_task(event) {
    let data = {
        'nombre': document.querySelector("#Formulario #Titulo").value,
        'descripcion': document.querySelector("#Formulario #Descripcion").value
    }

    let url = BASE_URL + '/api/tasks/update/' + task_id;

    fetchData(url, "PUT", () => {
        document.querySelector("#Formulario").reset();
        window.location.replace("../index.html#TareasPendientes");
    }, 
    data);
}

function set_form_readOnly(value) {
    let form = document.querySelector("#Formulario");
    var elements = form.elements;
    for (input of elements) { 
        input.readOnly = value;
    }
}*/
