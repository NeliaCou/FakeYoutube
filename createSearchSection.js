import { createVideoCards } from "./videoCard.js";
import { getData } from "./getData.js";

const data = await getData();

const navMiddle = document.createElement("div");
navMiddle.classList.add("nav-middle", "flex-div");

const searchBox = document.createElement("div");
searchBox.classList.add("search-box", "flex-div");

const searchInputContainer = document.createElement("div");
searchInputContainer.classList.add("search-input", "flex-div");

function createSearchInput() {
  const searchInput = document.createElement("input");
  searchInput.setAttribute("id", "searchInput");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Search");

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
  searchButton.setAttribute("src", "assets/navbar/magnifyingGlass.png");
  searchButton.setAttribute("id", "searchButton");
  searchButton.classList.add("magnifying-glass");
  searchButton.setAttribute("alt", "Magnifying glass");
  return searchButton;
}

const searchButton = createSearchButton();

searchInputContainer.appendChild(searchInput);
searchInputContainer.appendChild(searchButton);

const voiceSearch = document.createElement("img");
voiceSearch.setAttribute("src", "assets/navbar/voice-search.png");
voiceSearch.setAttribute("id", "micro");
voiceSearch.setAttribute("alt", "voice search logo");

searchBox.appendChild(searchInputContainer);
searchBox.appendChild(voiceSearch);

navMiddle.appendChild(searchBox);

const navMiddleDiv = document.querySelector(".nav-middle");

navMiddleDiv.replaceWith(navMiddle);

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
