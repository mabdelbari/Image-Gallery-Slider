var cards = Array.from(document.querySelectorAll('.slider-card img'));
var clickedImgIndex;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', openSlider)
}

document.querySelector('.closeIcon').addEventListener('click', closeSlider);

document.querySelector('.nextIcon').addEventListener('click', nextSlide);

document.querySelector('.prevIcon').addEventListener('click', prevSlide);

function closeSlider() {
    document.querySelector('#sliderContainer').style.display = "none";
}

function openSlider(e) {
    clickedImgIndex = cards.indexOf(e.target);
    var clickedImgSrc = e.target.getAttribute('src');
    document.querySelector('#sliderContainer').style.display = "flex";
    document.querySelector('#slide img').setAttribute('src', clickedImgSrc);
}

function nextSlide() {
    clickedImgIndex++;
    if (clickedImgIndex == cards.length) {
        clickedImgIndex = 0;
    }
    var nextImageSrc = cards[clickedImgIndex].getAttribute('src');
    document.querySelector('#slide img').setAttribute('src', nextImageSrc);
}

function prevSlide() {
    clickedImgIndex--;
    if (clickedImgIndex == -1) {
        clickedImgIndex = cards.length - 1;
    }
    var nextImageSrc = cards[clickedImgIndex].getAttribute('src');
    document.querySelector('#slide img').setAttribute('src', nextImageSrc);
}

document.body.addEventListener('keyup', function (e) {
    if (e.key == "Escape") {
        closeSlider();
    } else if (e.key == "ArrowRight") {
        nextSlide();
    } else if (e.key == "ArrowLeft") {
        prevSlide();
    }
})