import { createVideoCards } from "./videoCard.js";

const navMiddle = document.createElement("div");
navMiddle.classList.add("nav-middle", "flex-div");

const searchBox = document.createElement("div");
searchBox.classList.add("search-box", "flex-div");

const searchInputContainer = document.createElement("div");
searchInputContainer.classList.add("search-input", "flex-div");

const searchInput = document.createElement("input");
searchInput.setAttribute("id", "searchInput");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Search");

const searchButton = document.createElement("img");
searchButton.setAttribute("src", "assets/navbar/magnifyingGlass.png");
searchButton.setAttribute("id", "searchButton");
searchButton.classList.add("magnifying-glass");
searchButton.setAttribute("alt", "Magnifying glass");

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
  inputFilter(searchTerm);
  console.log("Recherche :", searchTerm);
});

async function inputFilter(searchTerm) {
  const response = await fetch("./data.json");
  const data = await response.json();

  const videos = data.youtubeVideo;

  console.log(videos);

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(searchTerm);
    //   || video.creator.toLowerCase().includes(searchTerm)
  });

  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  filteredVideos.forEach((video) => {
    createVideoCards(video);
  });
}
