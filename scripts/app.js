window.addEventListener("DOMContentLoaded", (event) => {
  const toggle = document.querySelector(".header-toggle");
  const links = document.querySelector(".header-mobile-links");

  console.log(toggle);

  toggle.addEventListener("click", function () {
    links.classList.toggle("d-flex");
    links.classList.toggle("none");
    console.log("Test");
  });
});
