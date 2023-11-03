var i = 0;
var images = [];
var slideTime = 5000; // 3 seconds
var carousel = document.getElementsByClassName('first-section')[0];

images[0] = '../images/ismail/Carouselle1.png';
images[1] = '../images/ismail/Carouselle2.jpg';
images[2] = '../images/ismail/Carouselle4.jpg';
// ../images/ismail/Carouselle

function changePicture() {
    carousel.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;