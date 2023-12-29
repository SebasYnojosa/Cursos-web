function tarea(done) {
    console.log("Mi primer tarea");

    done(); // Callback para anunciar que se ejecuto la funcion
}

exports.tarea = tarea;