let objetoId = new URLSearchParams(location.search); //
let id =  objetoId.get('id');
console.log(id);

let titulo = document.querySelector(".nombre")

let info= document.querySelector(".infocancion");
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`)
.then(respuesta =>{
    return respuesta.json()
})
.then(Response =>{
    console.log(Response, "response");
    titulo.innerHTML += `${Response.album.title}`

    info.innerHTML += `<li> ${Response.artist.name}</li> <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}?tracklist=false" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write" class="video"></iframe>`

   
})
.catch(error =>console.log(error));
