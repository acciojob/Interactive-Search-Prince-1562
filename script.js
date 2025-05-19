const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  searchInput.focus();
});
