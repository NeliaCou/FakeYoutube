import { createVideoCards } from "./videoCard.js";
import { getData } from "./getData.js";

const data = await getData();

function createElement(node, className1, className2) {
  const element = document.createElement(node);
  element.classList.add(className1, className2);
  return element;
}

function setAttribute(element, attributes) {
  for (let attribute of attributes) {
    for (let key in attribute) {
      element.setAttribute(key, attribute[key]);
    }
  }
}

const navFilterVideo = createElement("div", "nav-middle", "flex-div");

const searchBox = createElement("div", "search-box", "flex-div");

const searchInputContainer = createElement("div", "search-input", "flex-div");

function createSearchInput() {
  const searchInput = document.createElement("input");
  setAttribute(searchInput, [
    { id: "searchInput" },
    { type: "text" },
    { placeholder: "Search" },
  ]);
  // searchInput.setAttribute("id", "searchInput");
  // searchInput.setAttribute("type", "text");
  // searchInput.setAttribute("placeholder", "Search");

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value;
      filterVideosByTitle(searchTerm);
    }
  });
  return searchInput;
}

const searchInput = createSearchInput();

function createSearchButton() {
  const searchButton = document.createElement("img");
  setAttribute(searchButton, [
    { src: "assets/navbar/magnifyingGlass.png" },
    { id: "searchButton" },
    { alt: "Magnifying glass" },
  ]);
  searchButton.classList.add("magnifying-glass");
  return searchButton;
}

const searchButton = createSearchButton();

searchInputContainer.appendChild(searchInput);
searchInputContainer.appendChild(searchButton);

const voiceSearch = document.createElement("img");
setAttribute(voiceSearch, [
  { src: "assets/navbar/voice-search.png" },
  { id: "micro" },
  { alt: "voice search logo" },
]);

searchBox.appendChild(searchInputContainer);
searchBox.appendChild(voiceSearch);

navFilterVideo.appendChild(searchBox);

const navFilterVideoDiv = document.querySelector(".nav-middle");

navFilterVideoDiv.replaceWith(navFilterVideo);

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value;
  filterVideosByTitle(searchTerm);
  console.log("Recherche :", searchTerm);
});

async function filterVideosByTitle(searchTerm) {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  const videos = data.youtubeVideo;

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(searchTerm);
  });

  injectVideos(filteredVideos);

  function injectVideos(filteredVideos) {
    filteredVideos.forEach((video) => {
      createVideoCards(video);
    });
  }
}
