let currentIndex = 0; 
const images = document.querySelectorAll('.imagens img'); 
const totalImages = images.length; 
const prevButton = document.querySelector('.ante'); 
const nextButton = document.querySelector('.prox'); 

function changeImage() {
  const offset = -currentIndex * 106; 
  document.querySelector('.imagens').style.transform = `translateX(${offset}%)`;
}
function prevImage() {
  currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1; 
  changeImage();
}
function nextImage() {
  currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1; 
  changeImage();
}
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
