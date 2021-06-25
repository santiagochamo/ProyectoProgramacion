let listadoalbumes = document.querySelector('.listadoalbumes')
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums`)
.then(canciones =>{
    return canciones.json()
})
.then (dataalbumes =>{
    let albumes = dataalbumes.data
    let listadoalbumes = document.querySelector(".albumes")
    for(let i = 0; i <6; i++){
        listadoalbumes.innerHTML += 
        
                    `<div class="albumes">
                        
                        <div>
                        <a href="detalleAlbum.html?id=${dataalbumes.data[i].id}"target="_blank"> <img src=" ${albumes[i].cover_medium}"  alt="${albumes[i].title}"></a><a href="detalleAlbum.html?id="target="_blank">${albumes[i].title}</a>
                        </div>
                    </div> `
        
    }
})
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks`)
.then(canciones =>{
    return canciones.json()
})
.then (datacanciones =>{
    let canciones = datacanciones.data
    let listadocanciones = document.querySelector(".canciones")
    for(let i = 0; i < 6 ; i++){                                      //si quisiera ver todas las canciones es canciones.length
        listadocanciones.innerHTML += 
        
                    `<div class="canciones">
                        
                        <div>
                        <a href="canciones.html?id=${datacanciones.data[i].id}"target="_blank"> <img src=" ${canciones[i].album.cover_medium}"  alt="${canciones[i].title}"></a><a href="canciones.html?id="target="_blank">${canciones[i].title}</a>
                        </div>
                    </div> `
        
    }
})
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists`)
.then(canciones =>{
    return canciones.json()
})
.then (dataartistas =>{
    let artistas = dataartistas.data
    let listadoartistas = document.querySelector(".artistas")
    for(let i = 0; i <6; i++){
        listadoartistas.innerHTML += 
        
                    `<div class="artistas">
                        
                        <div>
                           <a href="detalleArtista.html?=${artistas[i].id}"target="_blank"> <img src=" ${artistas[i].picture_medium}"  alt="${artistas[i].name}"></a><a href="detalleArtista.html?id="target="_blank">${artistas[i].name}</a>
                        </div>
                    </div> `
        
    }
})
let form = document.querySelector('form')
let buscar = document.querySelector('[name=buscar]')
form.addEventListener('submit', function(e){
    e.preventDefault()
    if(buscar.value === ''){
        alert('El buscador no puede estar vacio')
    }else if (buscar.value.length < 3){
        alert('El termino buscado debe tener al menos 3 caracteres')

    }else {
        form.submit()
    }
})
