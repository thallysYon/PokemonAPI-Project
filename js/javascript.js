// JavaScript para a Pokédex

document.addEventListener('DOMContentLoaded', () => {
    const pokemonName = document.querySelector('.pokemon-name');
    const pokemonID = document.querySelector('.pokemon-id');
    const pokemonImg = document.querySelector('.pokemon-img');

    const form = document.querySelector('.form');
    const input = document.querySelector('.input-search');

    const btn = document.querySelector('.button');

    const fetchPokemon = async (pokemon) => {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await APIResponse.json();
        return data;
    }

    const renderPokemon = async (pokemon) => {

        pokemonName.innerHTML = 'Carregando...';
        pokemonID.innerHTML = '';

        try {
            const data = await fetchPokemon(pokemon);
            pokemonImg.style.display = 'block';
            pokemonName.textContent = data.name;
            pokemonID.textContent = data.id;
            pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        } catch (error) {
            pokemonName.textContent = 'Erro :(';
            pokemonID.textContent = '';
            pokemonImg.style.display = 'none';
        }
    }

    btn.addEventListener('click', async (event) => {
        event.preventDefault(); 
        renderPokemon(input.value.toLowerCase());
    });

    renderPokemon('1');
});
