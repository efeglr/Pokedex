const area = document.querySelector("#pokemon-display");
const show_area = document.querySelector("#random-pokemon-display");
const button = document.querySelector("#search");
const input = document.querySelector("#input")
const test = input.value;
button.addEventListener("click",()=>getPokemonCard(input.value));

async function getPokemonList(){
    for (let ii = 0; ii < 3; ii++){
        const cardPlaceholder = document.createElement("div")
        cardPlaceholder.setAttribute("class","flex flex-col justify-center items-center border-2 min-w-50 bg-white");
        const imgPlaceholder = document.createElement("img");
        const namePlaceholder = document.createElement("p");
        namePlaceholder.setAttribute("class", "font-bold");
        const statsPlaceholder = document.createElement("p");
        statsPlaceholder.setAttribute("class", "text-center");
        const rdm = Math.floor(Math.random() * 400) + 1;
        try {
            //getting the Data for a random Pokemon
            const url = "https://pokeapi.co/api/v2/pokemon/"+ rdm;
            const response = await fetch(url);
            if (!response.ok) throw new Error;
            const data = await response.json();

            //displaying it on the screen 
            imgPlaceholder.setAttribute("src", data.sprites.front_default);
            imgPlaceholder.setAttribute("class", "min-w-35");
            namePlaceholder.innerText += data.name[0].toUpperCase() + data.name.slice(1);
            statsPlaceholder.innerHTML += data.stats[0].stat.name.toUpperCase() + " " +data.stats[0].base_stat 
                                        + "<br>"
                                        + data.stats[1].stat.name[0].toUpperCase() + data.stats[1].stat.name.slice(1) + " " +data.stats[1].base_stat
                                        + "<br>"
                                        + data.stats[2].stat.name[0].toUpperCase() + data.stats[2].stat.name.slice(1) + " " +data.stats[2].base_stat
                                        + "<br>"
                                        + data.stats[3].stat.name[0].toUpperCase() + data.stats[3].stat.name.slice(1) + " " +data.stats[3].base_stat
                                        + "<br>"
                                        + data.stats[4].stat.name[0].toUpperCase() + data.stats[4].stat.name.slice(1) + " " +data.stats[4].base_stat
                                        + "<br>"
                                        + data.stats[5].stat.name[0].toUpperCase() + data.stats[5].stat.name.slice(1) + " " +data.stats[5].base_stat;
            cardPlaceholder.append(namePlaceholder);
            cardPlaceholder.append(statsPlaceholder);
            cardPlaceholder.prepend(imgPlaceholder);
            show_area.prepend(cardPlaceholder);
        }
        catch(err) {
            console.log(err);
        }
    }

}

async function getPokemonCard(input){
        const cardPlaceholder = document.createElement("div")
        cardPlaceholder.setAttribute("class","flex flex-col justify-center items-center border-2 min-w-50 bg-white m-5");
        const imgPlaceholder = document.createElement("img");
        const namePlaceholder = document.createElement("p");
        namePlaceholder.setAttribute("class", "font-bold");
        const statsPlaceholder = document.createElement("p");
        statsPlaceholder.setAttribute("class", "text-center");
        try {
            //getting the Data for a random Pokemon
            const url = "https://pokeapi.co/api/v2/pokemon/"+ input;
            const response = await fetch(url);
            if (!response.ok) throw new Error;
            const data = await response.json();

            //displaying it on the screen 
            imgPlaceholder.setAttribute("src", data.sprites.front_default);
            imgPlaceholder.setAttribute("class", "min-w-35");
            namePlaceholder.innerText += data.name[0].toUpperCase() + data.name.slice(1);
            statsPlaceholder.innerHTML += data.stats[0].stat.name.toUpperCase() + " " +data.stats[0].base_stat 
                                        + "<br>"
                                        + data.stats[1].stat.name[0].toUpperCase() + data.stats[1].stat.name.slice(1) + " " +data.stats[1].base_stat
                                        + "<br>"
                                        + data.stats[2].stat.name[0].toUpperCase() + data.stats[2].stat.name.slice(1) + " " +data.stats[2].base_stat
                                        + "<br>"
                                        + data.stats[3].stat.name[0].toUpperCase() + data.stats[3].stat.name.slice(1) + " " +data.stats[3].base_stat
                                        + "<br>"
                                        + data.stats[4].stat.name[0].toUpperCase() + data.stats[4].stat.name.slice(1) + " " +data.stats[4].base_stat
                                        + "<br>"
                                        + data.stats[5].stat.name[0].toUpperCase() + data.stats[5].stat.name.slice(1) + " " +data.stats[5].base_stat;
            cardPlaceholder.append(namePlaceholder);
            cardPlaceholder.append(statsPlaceholder);
            cardPlaceholder.prepend(imgPlaceholder);
            area.prepend(cardPlaceholder);
    }
    catch(err) {
        console.log(err);
    }
}
getPokemonList();

/* Without async function 

fetch('https://pokeapi.co/api/v2/pokemon/pikach')
  .then(function(response) {
    if(!response.ok) throw new Error(response.status)
    return response.json();
  })
  .then(function(data) {
    console.log(data.sprites.front_default);
    picture.setAttribute("src",data.sprites.front_default);
  })
  .catch(function(err) {
    console.log(err);
  }); */