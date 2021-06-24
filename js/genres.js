fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")

    .then(response => {
        return response.json();
    })  //encadenamiento de then, uno seguido por el otro.//marca el arranque del query string, es el mismo archivo pero le paso informacion extra.
    .then( dataGenres =>{
        console.log(dataGenres);

        let genres = dataGenres.data;
        let genre = document.querySelector(".genres");
        // el indice 0 es omitido porque es el genero "todos".
        for (let i=1; i<genres.length; i++){
            genre.innerHTML +=

                `<li class="genero">
                    
                    <a class="tituloGenres" href="detail-genres.html?id=${genres[i].id}&name=${genres[i].name}">
                        <h1>${genres[i].name}</h1>    
                        <img class="fotosGenres" src="${genres[i].picture_medium}" alt="">
                        

                    </a>
                </li>`;
        }
    })
    .catch(error=>{
       console.error (error);
        alert("Hubo un error!");
    });



// interpolar: insertar dentro de un string ; concatenar: un string atras del otro;
// no se introducen h cuando no se espera que dicho titulo sea seguido por texto. las h representan a un titulo y sub-titulos.display:block