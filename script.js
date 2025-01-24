const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const photos = [
    "photos/foto7.webp", 
    "photos/foto8 (2).jpg",
    "photos/foto9.webp"
  ];
  
  let currentIndex = 0;
  const likes = [];
  
  const sliderImage = document.getElementById("slider-image");
  const likeButton = document.getElementById("like-button");
  const dislikeButton = document.getElementById("dislike-button");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  
 
  function updateSlider() {
    sliderImage.src = photos[currentIndex];
  }
  


  function likePhoto() {
    likes[currentIndex] = true;
    likeButton.style.color = "blue";
    dislikeButton.style.color = "black";
    console.log(`Photo ${currentIndex + 1} liked.`);
  }
  
  
  function dislikePhoto() {
    likes[currentIndex] = false;
    dislikeButton.style.color = "blue";
    likeButton.style.color = "black";
    console.log(`Photo ${currentIndex + 1} disliked.`);
  }
  
  
  function moveToPrevPhoto() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = photos.length - 1;
    }
    updateSlider();
  }
  

  function moveToNextPhoto() {
    currentIndex++;
    if (currentIndex >= photos.length) {
      currentIndex = 0;
    }
    updateSlider();
  }
  

  updateSlider();
  
 
  likeButton.addEventListener("click", likePhoto);
  dislikeButton.addEventListener("click", dislikePhoto);
  prevButton.addEventListener("click", moveToPrevPhoto);
  nextButton.addEventListener("click", moveToNextPhoto);
  

  document.querySelectorAll('.karta').forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent interference
    });
});



function addToWishlist(button) {
  const image = button.parentElement;
  const name = image.getAttribute('data-name');
  const img = image.getAttribute('data-img');

  const wishlist = document.getElementById('wishlist-items');
  const item = document.createElement('div');
  item.className = 'wishlist-item';
  item.innerHTML = `
      <img src="${img}" alt="${name}">
      <div class="info">
          <h4>${name}</h4>
      </div>
  `;

  wishlist.appendChild(item);
}




