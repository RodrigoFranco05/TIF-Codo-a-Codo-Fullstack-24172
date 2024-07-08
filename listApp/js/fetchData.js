function  fetchData(url, method, callback, data_request = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data_request ? JSON.stringify(data_request) : null,  // Si hay datos, los convierte a JSON y los incluye en el cuerpo
    };
    console.log (url)
    console.log (options)
    fetch(url, options)
    .then(response => response.json())
    .then(data_response => {
        callback(data_response);
    })
    .catch(error => console.log("Ocurrió un error! " + error));
}