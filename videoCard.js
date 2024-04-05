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

  const cardsContainer = document.querySelector(".cards");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  const thumbnailImg = document.createElement("img");
  thumbnailImg.src = video.thumbnail;
  thumbnailImg.classList.add("card-img");
  thumbnailImg.alt = "video image";
  thumbnailImg.setAttribute("data-video-url", video.linkToVideo);
  cardHeader.appendChild(thumbnailImg);

  const flexDiv = document.createElement("div");
  flexDiv.classList.add("flex-div");

  const youtuberIcon = document.createElement("img");
  youtuberIcon.src = video.profileImage;
  youtuberIcon.classList.add("youtuber-logo");
  youtuberIcon.alt = "youtuber icon";
  flexDiv.appendChild(youtuberIcon);

  const videoInfo = document.createElement("div");
  videoInfo.classList.add("video-info");

  const titleLink = document.createElement("a");
  titleLink.href = video.linkToVideo;
  titleLink.target = "_blank";
  titleLink.classList.add("chanel-title");
  titleLink.textContent = video.title;
  videoInfo.appendChild(titleLink);

  const creatorName = document.createElement("p");
  creatorName.classList.add("infoCard");
  creatorName.textContent = video.creator;
  videoInfo.appendChild(creatorName);

  const numberOfViews = document.createElement("p");
  numberOfViews.classList.add("infoCard");
  numberOfViews.textContent = video.viewNumber;
  videoInfo.appendChild(numberOfViews);

  flexDiv.appendChild(videoInfo);
  cardHeader.appendChild(flexDiv);
  card.appendChild(cardHeader);

  cardsContainer.appendChild(card);

  addEventListenersToVideoOnImages();
}
