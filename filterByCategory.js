import { createVideoCards } from "./videoCard.js";

async function filterByCategory() {
  const response = await fetch("./data.json");
  const typeOfVideo = await response.json();

  const filterContainer = document.querySelector(".div-filter-by-category");
  filterContainer.classList.add("flex-div");

  const categories = [];

  const allFilter = document.createElement("p");
  allFilter.classList.add("filter-by-category");
  allFilter.textContent = "All";
  filterContainer.appendChild(allFilter);

  typeOfVideo.youtubeVideo.forEach((videoCategory) => {
    if (!categories.includes(videoCategory.typeOfVideo)) {
      categories.push(videoCategory.typeOfVideo);
    }
  });

  let htmlContent = "";

  categories.forEach((category) => {
    const filterCategory = document.createElement("p");
    filterCategory.classList.add("filter-by-category");
    filterCategory.textContent = category;
    htmlContent += filterCategory.outerHTML;
  });

  filterCards("");

  filterContainer.innerHTML += htmlContent;

  const filterCategories = document.querySelectorAll(".filter-by-category");
  filterCategories.forEach((category) => {
    category.addEventListener("click", () => {
      filterCards(category.textContent);
    });
  });

  allFilter.addEventListener("click", () => {
    filterCards("");
  });
}

async function filterCards(selectedCategory) {
  const response = await fetch("./data.json");
  const videos = await response.json();

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  videos.youtubeVideo.forEach((video) => {
    if (
      !selectedCategory ||
      selectedCategory === "All" ||
      video.typeOfVideo === selectedCategory
    ) {
      createVideoCards(video);
    }
  });
}

filterByCategory();
