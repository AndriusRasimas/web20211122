var slideIndex = 0;
showSlidesFilm();

function showSlidesFilm() {
    var i;
    var slides = document.getElementsByClassName("mySlidesFilm");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlidesFilm, 4000);
}

