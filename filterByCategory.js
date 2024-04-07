import { createVideoCards } from "./videoCard.js";

async function filterByCategory() {
  const response = await fetch("./data.json");
  const typeOfVideo = await response.json();

  const filterContainer = document.querySelector(".div-filter-by-category");
  filterContainer.classList.add("flex-div");

  const categories = [];

  typeOfVideo.youtubeVideo.forEach((videoCategory) => {
    if (!categories.includes(videoCategory.typeOfVideo)) {
      categories.push(videoCategory.typeOfVideo);
    }
  });

  let htmlContent = "";

  categories.forEach((category) => {
    htmlContent += `
      <p class="filter-by-category">${category}</p>
    `;
  });

  filterCards("");

  filterContainer.innerHTML = htmlContent;

  const filterCategories = document.querySelectorAll(".filter-by-category");
  filterCategories.forEach((category) => {
    category.addEventListener("click", () => {
      filterCards(category.textContent);
    });
  });
}

async function filterCards(selectedCategory) {
  const response = await fetch("./data.json");
  const videos = await response.json();

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  if (!selectedCategory) {
    videos.youtubeVideo.forEach((video) => {
      createVideoCards(video);
    });
  } else {
    videos.youtubeVideo.forEach((video) => {
      if (video.typeOfVideo === selectedCategory) {
        createVideoCards(video);
      }
    });
  }
}

filterByCategory();
