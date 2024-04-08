export async function createVideoCards(video) {
  function addEventListenersToVideoOnImages() {
    const videoThumbnails = document.querySelectorAll(".card-img");

    videoThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function (event) {
        event.preventDefault();
        const videoUrl = this.getAttribute("data-video-url");
        window.open(videoUrl, "_blank");
      });
    });
  }

  function createElement(node, className) {
    const element = document.createElement(node);
    element.classList.add(className);
    return element;
  }

  const cardsContainer = document.querySelector(".cards");

  const card = createElement("div", "card");

  const cardHeader = createElement("div", "card-header");

  const thumbnailImg = createElement("img", "card-img");
  thumbnailImg.src = video.thumbnail;
  thumbnailImg.alt = "video image";
  thumbnailImg.setAttribute("data-video-url", video.linkToVideo);
  cardHeader.appendChild(thumbnailImg);

  const flexDiv = createElement("div", "flex-div");

  const youtuberIcon = createElement("img", "youtuber-logo");
  youtuberIcon.src = video.profileImage;
  youtuberIcon.alt = "youtuber icon";
  flexDiv.appendChild(youtuberIcon);

  const videoInfo = createElement("div", "video-info");

  const titleLink = createElement("a", "chanel-title");
  titleLink.href = video.linkToVideo;
  titleLink.target = "_blank";
  titleLink.textContent = video.title;
  videoInfo.appendChild(titleLink);

  const creatorName = createElement("p", "info-card");
  creatorName.textContent = video.creator;
  videoInfo.appendChild(creatorName);

  const numberOfViews = createElement("p", "info-card");
  numberOfViews.textContent = video.viewNumber;
  videoInfo.appendChild(numberOfViews);

  flexDiv.appendChild(videoInfo);
  cardHeader.appendChild(flexDiv);
  card.appendChild(cardHeader);

  cardsContainer.appendChild(card);

  addEventListenersToVideoOnImages();
}
