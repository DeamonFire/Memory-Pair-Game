const foto = [
    'image/Djon_Snow.jpg',
    'image/Night_King.jpg',
    'image/tirion.jpg',
    'image/fria.jpg',
    'image/margery.jpg',
    'image/oberin.jpg',
    'image/serseya.jpg',
    'image/deyneris.jpg',
    'image/Djon_Snow.jpg',
    'image/Night_King.jpg',
    'image/tirion.jpg',
    'image/fria.jpg',
    'image/margery.jpg',
    'image/oberin.jpg',
    'image/serseya.jpg',
    'image/deyneris.jpg'
];

foto.sort(function() { return 0.5 - Math.random() });

const logo = 'image/logo.jpeg'

// -------------------ArrFoto-------------

function game() {

    const arrImg = foto.map(src => {
        return `<div class="flip-container"  onclick="this.classList.toggle('hover');">
                    <div class="flipper">
                        <div class="font"><img src="${logo}" alt="" class="img"></div>
                        <div class="back"><img src="${src}" alt="" class="img"></div>
                    </div>
                </div>`
    }).join('');

    document.getElementById("content").innerHTML = arrImg;
  }
  
  document.addEventListener("DOMContentLoaded", game);

// -----------------ClassMetod--------------


