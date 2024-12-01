const films = [];

for (i = 0; i < 3; i++) {
    const getFilmName = prompt("Введите название фильма");
    const getFilmYear = +prompt("Введите год выхода");
    const getFilmAuthor = prompt("Введите режиссера");

    const actors = []

    for (a = 0; a < 2; a++) {
        const getFilmActorName = prompt("Введите имя актера");
        const getFilmActorAge = +prompt("Введите возраст актера");

        const actor = {
            name: getFilmActorName,
            age: getFilmActorAge,
        }

        actors.push(actor)
    }

    const film = {
        name: getFilmName,
        year: getFilmYear,
        author: getFilmAuthor,
        actors: actors,
    }

    films.push(film);
}

console.log(films);