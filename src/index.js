console.log('%c HI', 'color: firebrick')

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images) {
    const imgs = images["message"]
    const imgContainer = document.querySelector('#dog-breeds')
    imgs.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        imgContainer.appendChild(img)
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('The Dom has loaded')
    fetchImages()
})
