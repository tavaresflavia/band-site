//Global variables

const SHOWS_ENDPOINT = 'https://project-1-api.herokuapp.com/showdates?api_key=';
const API_KEY = 'e0eea5f0-0f8c-4b54-9fc4-ff50843766d4';
const tableEl = document.querySelector('.shows__table');

axios
  .get(SHOWS_ENDPOINT + API_KEY)
  .then((response) => {
    displayShows(response.data);
  })
  .catch(() => {
    failMsg = document.createElement('p');
    failMsg.innerText = "We're sorry, but there was an issue loading the data for this section. Please refresh the page to try again.";
    tableEl.appendChild(failMsg);
  });

//FUNCTIONS

// Display elements  takes and array of objects, call creatCards and eventlistiner to select
function displayShows(array) {
  let cardsList = createHeaders();
  for (let i = 0; i < array.length; i++) {
    let cardEl = createCards(array[i], cardsList);

    cardEl.addEventListener('click', () => {
      let selShow = document.querySelector('.card--selected');
      if (selShow === null) {
        cardEl.classList.add('card--selected');
      } else {
        selShow.classList.remove('card--selected');

        if (cardEl !== selShow) {
          cardEl.classList.add('card--selected');
        }
      }
    });
  }
}

function createHeaders() {
  const headerEl = document.createElement('article');
  headerEl.classList.add('shows__header');
  tableEl.appendChild(headerEl);

  const headDateEl = document.createElement('p');
  headDateEl.innerText = 'DATE';
  headDateEl.classList.add('shows__header-label', 'labels');
  headerEl.appendChild(headDateEl);

  const headVenueEl = document.createElement('p');
  headVenueEl.innerText = 'VENUE';
  headVenueEl.classList.add('shows__header-label', 'labels');
  headerEl.appendChild(headVenueEl);

  const headLocEl = document.createElement('p');
  headLocEl.innerText = 'LOCATION';
  headLocEl.classList.add('shows__header-label', 'labels');
  headerEl.appendChild(headLocEl);

  const cardsList = document.createElement('div');
  cardsList.classList.add('shows__cards');
  tableEl.appendChild(cardsList);

  return cardsList;
}

function createCards(show, cardsList) {

  const cardEl = document.createElement('article');
  cardEl.classList.add('card');
  cardsList.appendChild(cardEl);

  const dateLblEl = document.createElement('p');
  dateLblEl.classList.add('card__label', 'labels');
  dateLblEl.innerText = 'DATE';
  cardEl.appendChild(dateLblEl);

  const dateValEl = document.createElement('p');
  dateValEl.classList.add('card__value', 'card__value--bold');
  dateValEl.innerText = new Date(show.date).toDateString();
  cardEl.appendChild(dateValEl);

  const venueLblEl = document.createElement('p');
  venueLblEl.classList.add('card__label', 'labels');
  venueLblEl.innerText = 'VENUE';
  cardEl.appendChild(venueLblEl);

  const venueValEl = document.createElement('p');
  venueValEl.classList.add('card__value');
  venueValEl.innerText = show.place;
  cardEl.appendChild(venueValEl);

  const locationLblEl = document.createElement('p');
  locationLblEl.classList.add('card__label', 'labels');
  locationLblEl.innerText = 'LOCATION';
  cardEl.appendChild(locationLblEl);

  const locationValEl = document.createElement('p');
  locationValEl.classList.add('card__value');
  locationValEl.innerText = show.location;
  cardEl.appendChild(locationValEl);

  const buttonEl = document.createElement('a');
  buttonEl.classList.add('card__button', 'button');
  buttonEl.setAttribute('href', '#');
  buttonEl.innerText = 'BUY TICKETS';
  cardEl.appendChild(buttonEl);

  return cardEl;
}

//EVENTS
