let tg = window.Telegram.WebApp;

let CINEMA_LIBRARY = {
    "Barbie": {
        "year":    2023,
        "country": "USA",
        "genre":   ["Comedy", "Adventure", "Fantasy"]
    },
    
    "Oppenheimer": {
        "year":    2023,
        "country": ["USA", "Great Britan"],
        "genre":   ["Drama", "Biography Film", "Historical Film"]
    },

    "Spider-Man: Across the Spider-Verse": {
        "year":    2023,
        "country": "USA",
        "genre":   ["Cartoon", "Superhero Film", "Action Movie", "Fiction"]
    },
};

const Form = document.getElementById("Forma");

Form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(Form);
    data = Object.fromEntries(data.entries());

    if(data.name) {
        const name = data.name; 
        for (let key of Object.keys(CINEMA_LIBRARY)) {
            if (key == name)  {
                console.log(key, CINEMA_LIBRARY[key]);
                tg.sendData(JSON.stringify(key));
                document.getElementById("search").style.backgroundColor="red";
                break;
            } else if (key.includes(name)) {
                console,log(key, CINEMA_LIBRARY[key]);
                tg.sendData(JSON.stringify(key));
                document.getElementById("search").style.backgroundColor="green";
                break;
            }
        }
    }

    if(data.year) {
        const year = data.Year1;
        for (let key of Object.keys(CINEMA_LIBRARY)) {
            if (+CINEMA_LIBRARY[key]["year"] == +year)
                console.log(key, CINEMA_LIBRARY[key]);
                break;
            }
        }
    
});

// # поиск по названию
// """
// value = input("Укажите название фильма: ")
// for key in CINEMA_LIBRARY:
//     # если названия совпадают или значение пользователя частично есть в названии фильма
//     if key.lower() == value.lower() or value.lower() in key.lower():
//         print(key, CINEMA_LIBRARY[key])
//         break
// else:
//     print("По вашему запросу фильм не найден")
// """


// # поиск по жанру
// value = input("Укажите жанр фильма: ")

// index = 0  # количество совпадений

// for key in CINEMA_LIBRARY:
//     if value.capitalize() in CINEMA_LIBRARY[key]["genre"]:
//         print(key, CINEMA_LIBRARY[key])
//         index += 1

// if index == 0:
//     print("По вашему запросу фильм не найден")
