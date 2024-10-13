const word = 'JavaScript'
function greet(word) {
return `Я учу, ${word}!`;
}
console.log(greet(word))

const img = document.getElementById('image-bear');
console.log(img);

function nextImage() {
    img.src = "./assets/img/QR4rSM55m1c.jpg";    
}

function backImage() {
    img.src = "./assets/img/p7sBU-YvymA.jpg";     
}


