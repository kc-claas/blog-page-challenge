// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector('#toggle')
const body = document.querySelector('body')
const root = document.querySelector(':root')
let state
let blogposts

function lightDark() {
    state = localStorage.getItem('state')
    body.setAttribute('class', `${state}`)
    if (!(state === 'dark')) {
        toggle.textContent= `Dark Mode`
        root.setAttribute('style', '--circle-color: #ffb100')}
    else {
        toggle.textContent= `Light Mode`
        root.setAttribute('style', '--circle-color: green')}
        
}
lightDark()

toggle.addEventListener('click', function() {
    if (!(state === 'dark')) {
        localStorage.setItem('state', 'dark')
    }
    else {
        localStorage.setItem('state', 'light')
    }
    lightDark()

}

)

// TODO: Create a function that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
    if (localStorage.getItem('blogs') !== null){
        blogposts = JSON.parse(localStorage.getItem('blogs'))
        }
    else  {blogposts = []}
    return blogposts
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(object) {
    let post = readLocalStorage()
    post.push(object)
    localStorage.setItem('blogs', JSON.stringify(post))
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
