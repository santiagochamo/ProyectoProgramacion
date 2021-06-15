let busqueda = new URLSearchParams(location.search)
let buscar = busqueda.get('buscar')
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
.then