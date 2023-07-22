//GLOBAL VARIABLES
const COMMENTS_ENDPOINT = "https://project-1-api.herokuapp.com/comments";
const API_KEY = "?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";  

const formEl = document.querySelector("form");
const cardList = document.querySelector(".comment__cards");
const commentInput = document.querySelector(".comment__comment-input");
const nameInput = document.querySelector(".comment__name-input");

//FUNCTIONS
function loadComments() {
  axios
    .get(COMMENTS_ENDPOINT + API_KEY)
    .then((response) => {
      response.data.sort((a,b) => { 
        return b.timestamp - a.timestamp;} );
      displayComment(response.data);
    })
    .catch(() => {
      failMsg = document.createElement("p");
      failMsg.innerText =
        "We're sorry, but there was an issue loading the data for this section.Please refresh the page to try again.";
      failMsg.classList.add("comment__error-msg");
      cardList.appendChild(failMsg); // not showing
    });

}

//func to create a comment card and display a comment
function displayComment(comments) {
  //for each on array object invoke func to create element  and append to cardList
  for (let i = 0; i < comments.length; i++) {
    const cardElements = createComment(comments[i]);
    const cardEl = cardElements[0];
    const likeBoxEl = cardElements[1];
    cardList.appendChild(cardEl);

    //Heart button will add innerText to the likesCount to avoid flickering/delay 
    likeBoxEl.addEventListener("click", ()=>{
      axios.put(`${COMMENTS_ENDPOINT}/${comments[i].id}/like${API_KEY}`)
      .then( () => {
        let likesCountEl = cardElements[2];
        likesCountEl.innerText = Number(likesCountEl.innerText) + 1;

      })
      .catch( (error) => {
        console.log(error);}
      )

    });

  }
}

//take a comment object, create a card element, append child elements and return card element
function createComment(comment) {
 
  const cardEl = document.createElement("article");
  cardEl.classList.add("comment-card");

  const avatarEl = document.createElement("div");
  avatarEl.classList.add("comment-card__avatar");
  cardEl.appendChild(avatarEl);

  const contentEl = document.createElement("div");
  contentEl.classList.add("comment-card__content");
  cardEl.appendChild(contentEl);

  const nameBoxEl = document.createElement("div");
  nameBoxEl.classList.add("comment-card__name-box");
  contentEl.appendChild(nameBoxEl);

  const nameEl = document.createElement("h3");
  nameEl.classList.add("comment-card__name");
  nameEl.innerText = comment.name;
  nameBoxEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("comment-card__date");
  dateEl.innerText = new Date(comment.timestamp).toLocaleDateString("en-US");
  nameBoxEl.appendChild(dateEl);

  const textEl = document.createElement("p");
  textEl.classList.add("comment-card__text");
  textEl.innerText = comment.comment;
  contentEl.appendChild(textEl);

  const likesBoxEl = document.createElement("div");
  likesBoxEl.classList.add("comment-card__likesBox");
  contentEl.appendChild(likesBoxEl);

  const likeBoxEl = document.createElement("div");
  likeBoxEl.classList.add("comment-card__like-box");
  likesBoxEl.appendChild(likeBoxEl);

  const likeEl = document.createElement("img");
  likeEl.classList.add("comment-card__like-icon");
  likeEl.setAttribute("src", "./assets/icons/icon-like.svg")
  likeEl.innerText = "favorite"  
  likeBoxEl.appendChild(likeEl);

  const likesCountEl = document.createElement("p");
  likesCountEl.classList.add("comment-card__likes");
  likesCountEl.innerText = comment.likes;
  likesBoxEl.appendChild(likesCountEl);

  // return cardEl and likeBoxEl to be used in displayComment function
  return [cardEl, likeBoxEl, likesCountEl];
}

//Validate name and comment
function validateEntries(name, comment) {
  let isValid = true;

  if (!name.trim()) {
    isValid = false;
    nameInput.classList.add("comment__input--invalid");
  }

  if (!comment.trim()) {
    isValid = false;
    commentInput.classList.add("comment__input--invalid");
  }
  return isValid;
}

//EVENTS

//Delete invalid class

nameInput.addEventListener("focus", () => {
  if (nameInput.classList.contains("comment__input--invalid")) {
    nameInput.classList.remove("comment__input--invalid");
  }
});

commentInput.addEventListener("focus", () => {
  if (commentInput.classList.contains("comment__input--invalid")) {
    commentInput.classList.remove("comment__input--invalid");
  }
});

//Submit the form
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  // const date = new Date().toLocaleDateString('en-US');
  const comment = e.target.comment.value;

  isValid = validateEntries(name, comment);
  
  if (!isValid) {
    return false;
  }

  //Clear the input fields after submitting a new comment
  e.target.name.value = "";
  e.target.comment.value = "";

  const newComment = {
    name: name,
    comment: comment,
  };

  axios
    .post(COMMENTS_ENDPOINT + API_KEY, newComment, "Content-Type: application/json")
    .then(() => {
      cardList.innerHTML = '';
      loadComments();
    })

    .catch(() => {
      failMsg = document.createElement('p');
      failMsg.innerText = "We encountered a problem while submitting your comment. Please refresh the page and try again.";
      failMsg.classList.add('comment__error-msg');
      formEl.appendChild(failMsg);
  
    });
});

// //Invoked funcs when loading
loadComments();



