//let detalleAlbum = document.querySelector(".detalle")
//let foto = new URLSearchParams(Location.search)
//let fotaki = foto.get('cover_medium')

//let fotito = document.querySelector("#fotin");
//fotito.innerHTML =+ `la foto de la imagen es ${cover_medium}`
let artista = document.querySelector ('.artista')
let genero = document.querySelector ('.genero')
let imagen = document.querySelector ('.imagen')
let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums${id}`)

.then(respuesta=>{return respuesta.json()})
.then(album=>{
    artista.innerHTML = `${album.name}`
    genero.innerHTML = `${album.name}`
    for (let i=0; i<album.tracks.data.length; i++){
        listado.innerHTML =+ `<li> ${album.tracks.data[i].title} </li>`
     }
    imagen.innerHTML =`<img src= "${album.cover_big}"> `
}) 
.catch(function(error){console.log(error);})




