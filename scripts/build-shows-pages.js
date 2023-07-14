//GLOBAL VARIABLES

shows = [{ 'date': 'Mon Sept 06 2021',
'venue': 'Ronald Lane',
'location': 'San Francisco, CA'},

{'date': 'Tue Sept 21 2021' ,
'venue': 'Pier 3 East',
'location': 'San Francisco, CA'},

{'date': 'Fri Oct 15 2021',
'venue': 'View Lounge',
'location': 'San Francisco, CA' },

{'date': 'Sat Nov 06 2021',
'venue': 'Hyatt Agency',
'location': 'San Francisco, CA'},

{'date': 'Fri Nov 26 2021',
'venue': 'Moscow Center',
'location': 'San Francisco, CA'},

{'date': 'Wed Dec 15 2021', 
'venue': 'Press Club',
'location': 'San Francisco, CA'}

]


cardsList = document.querySelector('.shows-section__cards');

//FUNCTIONS

// Display elements 
function displayShows (array){

for (let i = 0; i < shows.length; i++ ){

let cardEl = createCards(array[i]);


cardEl.addEventListener('click', (event) => {
    let selShow = document.querySelector('.card--selected')
    if (selShow === null){
        event.target.classList.add('card--selected');
    }else{
        selShow.classList.remove('card--selected');

        if (event.target !== selShow){
        event.target.classList.add('card--selected');
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
    dateValEl.innerText = show.date;
    cardEl.appendChild(dateValEl);
    
    //<p class='card__label labels card__label--top'>VENUE</p>
    const venueLblEl = document.createElement('p');
    venueLblEl.classList.add('card__label', 'labels');
    venueLblEl.innerText = 'VENUE';
    cardEl.appendChild(venueLblEl);
    
    
    //<p class='card__value'>Ronald Lane</p>
    const venueValEl = document.createElement('p');
    venueValEl.classList.add('card__value');
    venueValEl.innerText = show.venue;
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





 displayShows (shows);



