// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const main = document.querySelector('main')
const back = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
function buildList() {
    for (i = 0; i < blogposts.length; i++) {
    post = blogposts[i]
    const section = document.createElement('section')
    const h2e = document.createElement('h2')
    const p1e = document.createElement('p')
    const p2e = document.createElement('p')
    h2e.textContent= `${post.title}`
    p1e.textContent= `${post.content}`
    p2e.textContent= `posted by: ${post.username}`
    main.appendChild(section)
    section.appendChild(h2e)
    section.appendChild(p1e)
    section.appendChild(p2e)
    section.setAttribute('style', 'border: gray 3px solid; border-radius: 5px; margin: 5px 0')
    h2e.setAttribute('style', 'margin: 5px')
    p1e.setAttribute('style', 'margin: 5px')
    p2e.setAttribute('style', 'font-size: 80%; margin: 5px; font-style:italic')

    }

}
// TODO: Create a function that handles the case where there are no blog posts to display

function noposts() {
    main.textContent= "No Blog posts yet..."
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
    readLocalStorage()
    if (blogposts.length < 1) {
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