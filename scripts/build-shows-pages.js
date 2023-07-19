//Global variables

const SHOWS_ENDPOINT = "https://project-1-api.herokuapp.com/showdates?api_key="
const API_KEY = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
let cardsList = document.querySelector('.shows-section__cards');


axios
    .get(SHOWS_ENDPOINT + API_KEY)
    .then ((response) => {
        console.log(response);
        displayShows (response.data);

    })
    .catch(() => {
    failMsg = document.createElement('p');
    failMsg.innerText = "We're sorry, but there was an issue loading the data for this section.Please refresh the page to try again.";
    failMsg.classList.add('shows-section__error-msg');
    cardsList.appendChild(failMsg);
}
    )

//FUNCTIONS

// Display elements  takes and array of objects, call creatCards and eventlistiner to select 
function displayShows (array){

for (let i = 0; i < array.length; i++ ){

let cardEl = createCards(array[i]);


cardEl.addEventListener('click', (event) => {
    let selShow = document.querySelector('.card--selected')
    if (selShow === null){
        cardEl.classList.add('card--selected');
    }else{
        selShow.classList.remove('card--selected');

        if (cardEl !== selShow){
            cardEl.classList.add('card--selected');
        }


    }
    
    
})

}}


function createCards(show){
    //<article class='card'>
    const cardEl = document.createElement('article');
    cardEl.classList.add('card');
    cardsList.appendChild(cardEl);
    
    //<p class='card__label labels card__label--top'>DATE</p>
    const dateLblEl = document.createElement('p');
    dateLblEl.classList.add('card__label', 'labels');
    dateLblEl.innerText = 'DATE';
    cardEl.appendChild(dateLblEl);
    
    // <p class='card__value'>Mon Sept 06 2021</p>
    const dateValEl = document.createElement('p');
    dateValEl.classList.add('card__value', 'card__value--bold');
    dateValEl.innerText = new Date(show.date).toDateString();
    cardEl.appendChild(dateValEl);
    
    //<p class='card__label labels card__label--top'>VENUE</p>
    const venueLblEl = document.createElement('p');
    venueLblEl.classList.add('card__label', 'labels');
    venueLblEl.innerText = 'VENUE';
    cardEl.appendChild(venueLblEl);
    
    
    //<p class='card__value'>Ronald Lane</p>
    const venueValEl = document.createElement('p');
    venueValEl.classList.add('card__value');
    venueValEl.innerText = show.place;
    cardEl.appendChild(venueValEl);
    
    
    //<p class='card__label labels '>LOCATION</p>
    const locationLblEl = document.createElement('p');
    locationLblEl.classList.add('card__label', 'labels');
    locationLblEl.innerText = 'LOCATION';
    cardEl.appendChild(locationLblEl);
    
    //<p class='card__value'>San Francisco, CA</p>
    const locationValEl = document.createElement('p');
    locationValEl.classList.add('card__value');
    locationValEl.innerText = show.location;
    cardEl.appendChild(locationValEl);
    
    //<a href="" class="card__button button">BUY TICKETS</a>
    const buttonEl = document.createElement('a');
    buttonEl.classList.add('card__button', 'button');
    buttonEl.setAttribute('href','#')
    buttonEl.innerText = 'BUY TICKETS';
    cardEl.appendChild(buttonEl);

    return cardEl;
    
    }

//EVENTS






