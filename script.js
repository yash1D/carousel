const image = document.getElementById('image');

const img = document.querySelectorAll('#image img');

let index = 0;

function carousel(){
  index++;
  if(index> img.length - 1){
    index = 0;
  }
  image.style.transform = `translateY(${-index * 203}px)`;
}

setInterval(carousel,2000);