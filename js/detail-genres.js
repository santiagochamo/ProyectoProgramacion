let searchParams = new URLSearchParams(location.search); 
let id = searchParams.get ("id");
let nombreGen = searchParams.get ("name");
let nombreGenero = document.querySelector(".nombreDelGenero");
nombreGenero.innerText = nombreGen;
    //genera un nuevo objeto con el contenido de location.search, lo que viene con el QUERYString. parsea la cadena, convierte la codificacion en distintas variables.
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`) // de lo que vino en el search, dame el Id, que pase antes en la parte de genres.
    
    .then(response => {
        return response.json();
    })

    .then( dataGenres =>{
        console.log(dataGenres);

        let infoArtista = dataGenres.data;
        let listaArtistasDOM = document.querySelector(".generoDetalle");
        //emprolijar el HTML
        //EL FOR NO HACE FALTA PORQUE ES UN SOLO GENERO 
        //al tener que hacer solo una vez la asignacion, es innecesario utilizar el += para concatenar.
        //for()



        for(let i = 0; i < infoArtista.length; i++){

            listaArtistasDOM.innerHTML +=
                ` <h1> 
                    ${infoArtista[i].name}
                </h1>

                <img class=fotoArtistaG src="${infoArtista[i].picture_medium}" alt="${infoArtista[i].name}">


                `;
        }    

    })
    .catch(error=>{
       console.error (error);
        alert("Hubo un error!");
    });
    
    


