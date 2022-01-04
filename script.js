// const projectList = document.querySelector(".projects_list");

// const projectsArr = [
//     {
//         name: "#AllTheBeers",
//         description: "A React project using the PunkAPI to display Brewdog's back catalogue of beers",
//         link: "https://spares393.github.io/brewdogAPI-project/",
//         image: "images/beer_icon.jpg"    
//     },
//     {
//         name: "Snakes and Ladders",
//         description: "A vanilla JS version of the classic board game",
//         link: "https://spares393.github.io/javascript-game/",
//         image: "images/snake_icon.png"
//     },
//     {
//         name: "Morse Code Translator",
//         description: "Uses JS array methods to translate English to Morse Code, and vice versa",
//         link: "https://spares393.github.io/morse-code-translator/",
//         image: "images/morse_icon.png"
//     }
// ]

// // Create HTML for cards
// const createCard = (obj) => {
//     return `
//         <div class="project_card">
//             <img src="${obj.image}" alt="project_icon" class="project_card_image">
//             <div class="project_text">
//                 <h3>${obj.name}</h3>
//                 <p>${obj.description}</p>
//             </div>
//         </div>`
//     };

// const fillProjectList = (objArr) => {
//     objArr.forEach(obj => {
//         projectList.innerHTML += createCard(obj)
//     });
// }

// fillProjectList(projectsArr);