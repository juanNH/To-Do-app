if ('serviceWorker' in navigator){

    navigator.serviceWorker.register('./sw.js').then(
        reg => console.log('Conexion exitosa')
    ).catch(
        err => console.log(error)
    )
}