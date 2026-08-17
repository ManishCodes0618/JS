const url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector("#container");
let num = Number(prompt("Enter no. of Pokemons to display:"));
for (let i = 1; i <= num; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const img = document.createElement("img");
  img.src = url + i + ".png";
  pokemon.appendChild(img);
  pokemon.appendChild(label);
  container.append(pokemon);
}
