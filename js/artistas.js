let imagen = document.querySelector (".imagen")
let listado = document.querySelector (".listado")
let artista = document.querySelector (".artista")

let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
.then(respuesta => {
    return respuesta.json()
})
.then(artist => {
    artista.innerHTML = `${artist.name}`
    imagen.innerHTML += `<img src="${artist.picture_big}">` 
})
.catch(function(error){
    console.log(error)
})