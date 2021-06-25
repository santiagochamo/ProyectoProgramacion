//let detalleAlbum = document.querySelector(".detalle")
//let foto = new URLSearchParams(Location.search)
//let fotaki = foto.get('cover_medium')

//let fotito = document.querySelector("#fotin");
//fotito.innerHTML =+ `la foto de la imagen es ${cover_medium}`
let objetoId = new URLSearchParams (location.search); 
let id = objetoId.get('id'); 

let artist = document.querySelector ('.artista')
let fans = document.querySelector ('.fans')
let image = document.querySelector ('.imagen')
let elid = document.querySelector('.id')


fetch (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`)

.then(respuesta=>
    {return respuesta.json()})
.then(album=>{
    console.log(album);
    artist.innerHTML = `${album.title}`
    fans.innerHTML += `${album.fans}`
    image.innerHTML =`<img src="${album.cover_xl}" >`
    elid.innerHTML +=`${album.id}`
    
   
}) 
.catch(function(error){console.log(error);})




