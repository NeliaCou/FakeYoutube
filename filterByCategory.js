import { createVideoCards } from "./videoCard.js";
import { getData } from "./getData.js";

async function filterByCategory() {
  const typeOfVideo = await getData();
  console.log(typeOfVideo);

  const filterContainer = document.querySelector(".div-filter-by-category");
  filterContainer.classList.add("flex-div");

  function createElement(node, className) {
    const element = document.createElement(node);
    element.classList.add(className);
    return element;
  }

  const categories = [];

  const allFilter = createElement("p", "filter-by-category");
  allFilter.textContent = "All";
  filterContainer.appendChild(allFilter);

  typeOfVideo.youtubeVideo.forEach((videoCategory) => {
    if (!categories.includes(videoCategory.typeOfVideo)) {
      categories.push(videoCategory.typeOfVideo);
    }
  });

  let htmlContent = "";

  categories.forEach((category) => {
    const filterCategory = createElement("p", "filter-by-category");
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
  const videos = await getData();

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
