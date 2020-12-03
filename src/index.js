let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();
})

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images) {
    const imgs = images["message"]
    const imgContainer = document.querySelector('#dog-breeds')
    imgs.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        imgContainer.appendChild(img);
    });
}

function fetchBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json["message"]);
        updateBreedList(breeds);
        addBreedSelectListener();
    }); 
}

function updateBreedList(breeds) {
    let ulContainter = document.querySelector('#dog-breeds');
    removeChildren(ulContainter);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
  }
}

function addBreed(breed) {
    let ulContainter = document.querySelector('#dog-breeds');
    const li = document.createElement('li');
    li.innerHTML = breed;
    ulContainter.appendChild(li);
    li.addEventListener('click', addColor)
}

function addColor(event) {
    event.target.style.color = "magenta";
}

function addBreedSelectListener() {
    const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener('change', function(event) {
        filterBreeds(event.target.value);
    })
}

function filterBreeds(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}







