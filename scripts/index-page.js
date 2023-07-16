// Default comments
comments = [
  {
    name: 'Connor Walton',
    text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    date: '02/17/2021',
    imgSrc: '',
  },
  {
    name: 'Emilie Beach',
    text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    date: '01/09/2021',
    imgSrc: '',
  },
  {
    name: 'Miles Acosta',
    text: 'I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.',
    date: '12/20/2020',
    imgSrc: '',
  },
];

//GLOBAL VARIABLES

const formEl = document.querySelector('form');
const cardList = document.querySelector('.comment-cards');
let commentInput = document.querySelector('.comment-section__comment-input');
let nameInput = document.querySelector('.comment-section__name-input');

//FUNCTIONS

//func to create a comment card and display a comment
function displayComment() {
  //for each on array object invoke func to create element  and append to cardList
  for (let i = 0; i < comments.length; i++) {
    const cardEl = createComment(comments[i]);
    cardList.appendChild(cardEl);
  }
}

//take a comment object, create a card element, append child elements and return card element
function createComment(comment) {
  //<article class="comment-card">
  const cardEl = document.createElement('article');
  cardEl.classList.add('comment-card');

  //<img class="comment-card__avatar">
  const avatarEl = document.createElement('img');
  if (comment.imgSrc !== ''){
  avatarEl.setAttribute('src', comment.imgSrc);
  }
  avatarEl.classList.add('comment-card__avatar');
  cardEl.appendChild(avatarEl);

  //<div class="comment-card__content">
  const contentEl = document.createElement('div');
  contentEl.classList.add('comment-card__content');
  cardEl.appendChild(contentEl);

  //<div class="comment-card__name-box">
  const nameBoxEl = document.createElement('div');
  nameBoxEl.classList.add('comment-card__name-box');
  contentEl.appendChild(nameBoxEl);

  //<h3 class="comment-card__name">Connor Walton</h3>
  const nameEl = document.createElement('h3');
  nameEl.classList.add('comment-card__name');
  nameEl.innerText = comment.name;
  nameBoxEl.appendChild(nameEl);

  //<p class="comment-card__date">02/17/2021</p>
  const dateEl = document.createElement('p');
  dateEl.classList.add('comment-card__date');
  dateEl.innerText = comment.date;
  nameBoxEl.appendChild(dateEl);

  //<p class="comment-card__text">
  const textEl = document.createElement('p');
  textEl.classList.add('comment-card__text');
  textEl.innerText = comment.text;
  contentEl.appendChild(textEl);

  return cardEl;
}

function AddNewComment(nameValue, dateValue, textValue, imgSrcValue) {
  const currentCards = document.querySelectorAll('.comment-card');

  //Delete current comments to avaoid duplicates

  for (let i = 0; i < currentCards.length; i++) {
    cardList.removeChild(currentCards[i]);
  }

  comments.unshift({
    name: nameValue,
    date: dateValue,
    text: textValue,
    imgSrc: imgSrcValue,
  });

  displayComment();
}

//EVENTS

  //Delete invalid class
  
  nameInput.addEventListener('focus', (event) => {
    if (nameInput.classList.contains('comment-section__input--invalid')){
      nameInput.classList.remove('comment-section__input--invalid');

    }
  })

  commentInput.addEventListener('focus', (event) => {
    if (commentInput.classList.contains('comment-section__input--invalid')){
      commentInput.classList.remove('comment-section__input--invalid');

    }
  })

  //Submit the form

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const date = new Date().toLocaleDateString('en-US');
  const text = e.target.comment.value;
  const imgSrc = document
    .querySelector('.comment-section__avatar-img')
    .getAttribute('src');

  
 
 //Validate name and comment
 let isinvalid = false;

  if (name.trim() === '') {
    isinvalid = true;
    nameInput.classList.add('comment-section__input--invalid');
    
  }

  if (text.trim() === '') {
    isinvalid = true;
    commentInput.classList.add('comment-section__input--invalid');
  }

  if (isinvalid === true){
    return;
  }

  AddNewComment(name, date, text, imgSrc);

  //Clear the input fields after submitting a new comment
  e.target.name.value = '';
  e.target.comment.value = '';

 

});

//Invoked funcs when loading

displayComment();

// test
console.log(Date.now()); 