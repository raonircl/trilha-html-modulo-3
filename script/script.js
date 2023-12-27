const gamesData = [
    { name: 'Super Mario World', description: 'Aventura', price: 'Free', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/Super-Mario-World.jpg/270px-Super-Mario-World.jpg' },
    { name: 'The legend of zelda', description: 'RPG/Aventura', price: 'Free', image: 'https://upload.wikimedia.org/wikipedia/pt/3/31/The_Legenda_of_Zelda_A_Link_to_the_Past_capa.png' },
    { name: 'Dragon ball z', description: 'RPG/Aventura', price: 'Free', image: 'https://romsportugues.tk/wp-content/uploads/2018/07/Dragon-Ball-Z-Super-Saiya-Densetsu-300x230.jpg' },
];

document.addEventListener('DOMContentLoaded', function () {
    const gameList = document.getElementById('game-list');

    gamesData.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameImage.alt = game.name;

        const gameName = document.createElement('h3');
        gameName.innerText = game.name;

        const gameDescription = document.createElement('p');
        gameDescription.innerText = game.description;

        const gamePrice = document.createElement('p');
        gamePrice.innerText = `Price: ${game.price}`;

        gameCard.appendChild(gameImage);
        gameCard.appendChild(gameName);
        gameCard.appendChild(gameDescription);
        gameCard.appendChild(gamePrice);

        gameList.appendChild(gameCard);
    });
});

