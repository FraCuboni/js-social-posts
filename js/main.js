const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Milestone 1 - Leggiamo per bene il nostro array di oggetti che rappresentano ciascun post, così da capire bene i dati come sono strutturati;V
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.



// creo gli elmenti su cui poi stampare tutti i dati presenti nell'array
const container = document.getElementById('container');

let containerContent;
// rendo accessibili gli elementi contenuti negli array di oggettiV
posts.forEach(post => {
    // collego gli elementi del post con una variabileV
    let postID = post.id;
    let postContent = post.content;
    let postImage = post.media;
    let postAuthor = post.author;
        let profileName = postAuthor.name;
        let profilePic = postAuthor.image;
    let postLikes = post.likes;
    let postDate = post.created;


    containerContent += 
    `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${profilePic}" alt="${profileName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${profileName}</div>
                        <div class="post-meta__time">${postDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postContent}</div>
            <div class="post__image"> 
                <img src="${postImage}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" onclick="event.preventDefault()" data-postid="${postID}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `

    container.innerHTML= containerContent;
});

// Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// aggiungo il bottone
const likeButton = document.querySelector('.js-like-button');

// array per salvare i post a cui abbiamo messo like 
const likedPosts= [];

// aggiungo il like counter
const likeCounter = document.querySelector('.js-likes-counter');


// aggiungo l'add event listener
likeButton.addEventListener('click',
    function(){
        likeButton.classList.add('like-button--liked')
    }
)