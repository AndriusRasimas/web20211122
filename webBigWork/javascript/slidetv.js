var slideIndexs = 0;
showSlidesTV();

function showSlidesTV() {
    var i;
    var slidess = document.getElementsByClassName("mySlidesTv");
    for (i = 0; i < slidess.length; i++) {
        slidess[i].style.display = "none";
    }
    slideIndexs++;
    if (slideIndexs > slidess.length) { slideIndexs = 1 }
    slidess[slideIndexs - 1].style.display = "block";
    setTimeout(showSlidesTV, 4000);
}