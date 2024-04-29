const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image'); // Corrigido o nome da variável
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonNext = document.querySelector('.btn-next');
const buttonPrev = document.querySelector('.btn-prev');

console.log("teste");

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    const data = await APIResponse.json();
    return data;
};

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.textContent = data.name;   "https://raw.githubuserco…r/official-artwork/1.png"
    pokemonNumber.textContent = data.id;
    pokemonImage.src = data.sprites.other['official-artwork'].front_default; // Corrigido o caminho para a imagem
};

// CRIEI
const renderNextPokemon = async () => {
    const currentPokemon = Number(pokemonNumber.textContent);
    let nextPokemon = currentPokemon+1;
    if(nextPokemon >= 1025){
        nextPokemon = 1;
    }
    renderPokemon(`${nextPokemon}`);
}

// CRIEI
const renderPrevPokemon = async () => {
    const currentPokemon = Number(pokemonNumber.textContent);
    let prevPokemon = currentPokemon-1;
    if(prevPokemon <= 0){
        prevPokemon = 1025;
    }
    renderPokemon(`${prevPokemon}`);
}

// CRIEI ESSE EVENTO (CARREGAR O PRIMEIRO POKEMON QUANDO A PÁGINA CARREGAR)
document.addEventListener("DOMContentLoaded", function() {
  renderPokemon("25");
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.trim()); // Adicionado trim para remover espaços em branco extras
    input.value = '';
    console.log(data)
});

// EVENTO PARA RENDERIZAR O PRÓXIMO PROKÉMON
buttonNext.addEventListener('click', function() {
    renderNextPokemon();
});

// EVENTO PARA RENDERIZAR O POKÉMON ANTERIOR
buttonPrev.addEventListener('click', function() {
    renderPrevPokemon();
});
