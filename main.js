const array = [1,2,3,4,5]

const img = document.createElement("img")

const post = {
    nome: "nome reale",
    film: "nome film",
    linkImmagine: "img",
}

console.log(post.titolo)

const arrayPosts = [
    {
        nome: "Vin Diesel",
        film: "Dominicic Toretto",
        linkImmagine: "img/VinDiesel.jpg",
    },
    {
        nome: "Paul Walker",
        film: "Brian O'Conner",
        linkImmagine: "img/PaulWalker.jpg",
    },
    {
        nome: "Michelle Rodriguez",
        film: "Letty Ortiz",
        linkImmagine: "img/MichelleRodriguez.jpg",
    },
    {
        nome: "Jordana Brewster",
        film: "Mia Toretto",
        linkImmagine: "img/JordanaBrewster.jpg",
    },
    {
        nome: "Matt Schulze",
        film: "Vince",
        linkImmagine: "img/MattSchulze.jpg",
    },
    {
        nome: "Johnny Strong",
        film: "Leon",
        linkImmagine: "img/JohnnyStrong.png",
    },
    {
        nome: "Chad Lindberg",
        film: "Jesse",
        linkImmagine: "img/ChadLindberg.jpg",
    },
    {
        nome: "Rick Yune",
        film: "Johnny Tran",
        linkImmagine: "img/RickYune.jpg",
    },

]

for (let i = 0; i < arrayPosts.length; i++){
    let elemento = arrayPosts[i]

    console.log(elemento.nome)
    console.log(elemento.film)
    console.log(elemento.linkImmagine)

    document.querySelector("main .row").innerHTML +=`
    <div class="col-3 text-light">
        <div>
            <img src="${elemento.linkImmagine}" alt="${elemento.nome}">
        </div>
        <div class="card-body">
            <h6 >
            ${elemento.nome}
            </h6>

            <p>
            ${elemento.film}
            </p>
        </div>
    </div>
    `
}  
