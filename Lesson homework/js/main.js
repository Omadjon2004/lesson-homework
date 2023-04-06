const col= document.querySelector('.movie-container')
const row= document.querySelector('.row')

const imagesUrl = 'https://image.tmdb.org/t/p/w500';
let url = 'https://api.themoviedb.org/3/discover/movie?api_key=814aac219f15a84adf56ac287148fc6e';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=814aac219f15a84adf56ac287148fc6e&query=';




const fragment = document.createDocumentFragment();

const loaderContainer = document.querySelector('.loader_container')
const loading = document.createElement('div');
loading.classList.add('loader');
// loaderContainer.appendChild(loading);

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

async function fetchData() {

    const searchTerm = search.value;

    if (searchTerm) {
        url = `${searchUrl}${searchTerm}`
    } else {
        url = 'https://api.themoviedb.org/3/discover/movie?api_key=814aac219f15a84adf56ac287148fc6e'
    }

    try {
        const response = await fetch(url);
        const data = await response.json();



        row.innerHTML = '';

        data.results.map((movie) => {

            
            const movieCard = document.createElement('div');
            movieCard.classList.add('col-lg-4' );
       
            
               const image = document.createElement('img');
            image.classList.add('card-img-top')
            image.src = `${imagesUrl}${movie.backdrop_path}`;
            image.alt = movie.title;

            const title = document.createElement('h2');
            title.classList.add('card-title')
            title.textContent = movie.title;

            // const idTitle = document.createElement('h2')
            // idTitle.classlist.add('id')
            // idTitle.textContent= movie.id

            const adult = document.createElement('h3')
            adult.textContent =`Language: ${ movie.original_language}` ; 
            const languages = document.createElement('h3')
            // langueges.textContent = movie.adult ;
            // fragment.appendChild(languages)
            fragment.appendChild(image);
            fragment.appendChild(title);
            fragment.appendChild(adult);
            // fragment.appendChild(idTitle)
            movieCard.appendChild(fragment);
            row.appendChild(movieCard);

            console.log(movie);
             
            

           

        })


    } catch (error) {
        console.log(error);
    }

 
}


fetchData();

btn.addEventListener('click', () => {
    fetchData();
})
search.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }
})
// const apiKey = '814aac219f15a84adf56ac287148fc6e';
// const baseUrl = 'https://api.themoviedb.org/3/';

// const imagesUrl = 'https://image.tmdb.org/t/p/w500';


// const fragment = document.createDocumentFragment();


// const loader_container = document.querySelector('.loader-container');
// const loader = document.createElement('div');
// loader.classList.add('loader');

// loader_container.appendChild(loader);


// async function myAsyncFunction() {

//     const searchTerm = document.querySelector('#search').value;

//     let url;

//     if (searchTerm) {
//         url = `${baseUrl}search/movie?api_key=${apiKey}&query=${searchTerm}`;
//     } else {
//         url = `${baseUrl}discover/movie?api_key=${apiKey}`;
//     }

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         const movie_container = document.querySelector('.movie-container');

//         movie_container.innerHTML = '';

//         data.results.map((movie) => {
            // const movieCard = document.createElement('div');
            // movieCard.classList.add('movie-card');


//             const movieImage = document.createElement('img');
//             movieImage.src = `${imagesUrl}${movie.backdrop_path}`;
//             movieImage.alt = movie.title;

//             const movieTitle = document.createElement('h3');
//             movieTitle.textContent = movie.title;

//             const movieRelease = document.createElement('span');
//             movieRelease.textContent = `Released: ${movie.release_date}`;



//             fragment.appendChild(movieImage);
//             fragment.appendChild(movieTitle);
//             fragment.appendChild(movieRelease);
//             movieCard.appendChild(fragment);
//             movie_container.appendChild(movieCard);

//         })

//     } catch (error) {
//         console.error(error.message);
//     } finally {
//         const loader = document.querySelector('.loader');
//         if (loader) {
//             loader_container.remove();
//         }
//     }
// }

// const searchInput = document.querySelector('#search')

// searchInput.addEventListener('input', () => {
//     myAsyncFunction();
// })

// myAsyncFunction();