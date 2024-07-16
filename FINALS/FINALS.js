let i = 0; //start points
let images = [];
let time = 3000;

//image list
images[0] = 'pfp.png';
images[1] = 'pfp2.png';
images[2] = 'pfp3.png';


//change img function
function changeImg() {
    document.carousel.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

let typed = new Typed(".autotype",{
    strings: ["Erick", "Raiq", "Rikkeee", "Erickson"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
})
