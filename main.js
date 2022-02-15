
const readMoreBtn = document.querySelector(".more-news-btn");
const text = document.querySelector(".main");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Больше новостей") {
    readMoreBtn.innerText = "Меньше новостей";
  } else {
    readMoreBtn.innerText = "Больше новостей";
  }
});
