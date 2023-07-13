// Default comments 
comments = [
    {
        'name': 'Connor Walton',
        'text': 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
        'date': '02/17/2021'

    },
    {
        'name': 'Emilie Beach',
        'text': 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
        'date': '01/09/2021'

    },
    {
        'name': 'Miles Acosta',
        'text': 'I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.',
        'date': '12/20/2020'

    }
]



const cardList = document.querySelector('.comment-cards');
displayComment();


//func to create a comment card and display a comment
function displayComment(){
for (let i = 0; i < comments.length; i++) {
    const cardEl = createComment(comments[i]);
    cardList.appendChild(cardEl);
  }}
function createComment(comment){

    //<article class="comment-card">
    const cardEl = document.createElement('article');
    cardEl.classList.add('comment-card');

    //<div class="comment-card__avatar">
    const avatarEl = document.createElement('div');
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

const formEl = document.querySelector('form');


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const date = new Date().toLocaleDateString('en-US');
    const text = e.target.comment.value;

    AddNewComment(name, date, text);
})



function AddNewComment(nameValue, dateValue, textValue){

    const currentCards = document.querySelectorAll('.comment-card');

    for (let i = 0; i < currentCards.length; i++) {
        cardList.removeChild(currentCards[i])
    }

    comments.unshift({'name': nameValue, 'date': dateValue,'text': textValue});

    displayComment();

    



}


    




/*

    
        
            
            
            
              </div>
            <p class="comment-card__text">
                This is art. This is inexplicable magic expressed in the purest
                way, everything that makes up this majestic work deserves
                reverence. Let us appreciate this for what it is and what it
                contains.
            </p>
    </div>
</article>
*/


//form event, prevent deafult. 

// That submits using the addEventListener
// Prevents the page from reloading when submitting a new comment
// Constructs a new comment object
// Pushes a new comment object to an array of comments
// Clears all comments from the page
// Re-renders to the page all comments from the comment array
// Clears the input fields after submitting a new comment
