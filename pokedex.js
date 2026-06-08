const pokedex_area = document.querySelector("#pokedex-display");

for (let ii = 0; ii<localStorage.length; ii++){
    const key = localStorage.key(ii);
    const dataString = localStorage.getItem(key);
    const data = JSON.parse(dataString);

    const cardPlaceholder = document.createElement("div")
        cardPlaceholder.setAttribute("class","flex flex-col justify-center items-center border-2 min-w-50 bg-white m-5");
        const imgPlaceholder = document.createElement("img");
        const namePlaceholder = document.createElement("p");
        namePlaceholder.setAttribute("class", "font-bold");
        const statsPlaceholder = document.createElement("p");
        statsPlaceholder.setAttribute("class", "text-center");
        const buttonPlaceholder = document.createElement("button");

/*         //Trying to make the notes
        buttonPlaceholder.setAttribute("class", "border-2 mb-2 rounded-md cursor-pointer pl-2 pr-2");
        buttonPlaceholder.setAttribute("type", "button");
        buttonPlaceholder.innerText = "Unfavorite"; */

    //display the data
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
            cardPlaceholder.append(buttonPlaceholder);
            pokedex_area.prepend(cardPlaceholder);
            const pokemonName = data.name;
            const pokemonData = JSON.stringify(data)

            //making it able to unfavorite it
            buttonPlaceholder.addEventListener("click",function (){
                localStorage.removeItem(pokemonName);
                cardPlaceholder.remove();
            });
}