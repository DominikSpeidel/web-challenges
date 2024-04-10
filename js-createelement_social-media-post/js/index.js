console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

/*let newPost = document.querySelector("body");
let newPostChildren = newPost.children;
let newPostChildrenChildren = newPostChildren[1].children;

console.log(newPostChildren);
console.log(newPostChildrenChildren);
*/
const article = document.createElement("article");
article.classList.add("post");

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
p.classList.add("post__content");

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username")
span.textContent = "@username";

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = "♥ Like"

document.body.append(article);
article.append(p, footer);
footer.append(span, button);

console.log(article);