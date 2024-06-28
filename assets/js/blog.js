// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const main = document.querySelector('main')
const back = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
function buildList() {
    for (i = 0; i < blogposts.length; i++) {
    post = readLocalStorage()[i]
    const arte = document.createElement('article')
    const h2e = document.createElement('h2')
    const bqe = document.createElement('blockquote')
    const p1e = document.createElement('p')
    h2e.textContent= `${post.title}`
    p1e.textContent= `posted by ${post.username}`
    bqe.textContent= `${post.content}`
    main.appendChild(arte)
    arte.appendChild(h2e)
    arte.appendChild(bqe)
    arte.appendChild(p1e)

    }

}
// TODO: Create a function that handles the case where there are no blog posts to display

function noposts() {
    main.textContent= "No Blog posts yet..."
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
    if (readLocalStorage().length < 1) {
        noposts()
    }
    else {
        buildList()
}}

// TODO: Call the `renderBlogList` function

renderBlogList()

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

back.addEventListener('click', function(event) {
    event.preventDefault
    redirectPage('./index.html')
})