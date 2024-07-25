document.addEventListener("DOMContentLoaded", function () {
  // Открытие/закрытие списков навигации

  const themesButtons = document.querySelectorAll(".navigation__item");
  const themesLists = document.querySelectorAll(".navigation__links-list");

  themesButtons?.forEach((themeButton, index) => {
    themeButton.addEventListener("click", () => {
      if (themesButtons[index].classList.contains("active")) {
        themeButton.classList.remove("active");
        themesButtons[index].classList.remove("active");
        themesLists[index].classList.remove("active");
      } else {
        themeButton.classList.add("active");
        themesButtons[index].classList.add("active");
        themesLists[index].classList.add("active");
      }
    });
  });

  // Увеличение размеров textarea при переполнении
  const textarea = document.querySelector("#text");

  textarea?.addEventListener("keyup", function () {
    if (this.scrollTop > 0) {
      this.style.height = this.scrollHeight + "px";
    }
  });

  // Hamburger меню

  const hamburger = document.querySelector(".header-hamburger__wrapper");
  navigationMenu = document.querySelector(".header-wrapper");
  header = document.querySelector(".navigation");
  body = document.querySelector("body");

  function workMobileMenu(e, navigationMenu, header, body) {
    if (e.target.closest(".header-hamburger__wrapper")) {
      navigationMenu.classList.add("active");
      header.classList.add("active");
      body.style.cssText = "overflow-y: hidden;";
      header.classList.contains("notactive") &&
        header.classList.remove("notactive");
    } else if (
      e.target != header &&
      !e.target.classList.contains("navigation__section") &&
      !e.target.classList.contains("navigation__input") &&
      !e.target.classList.contains("navigation___item") &&
      !e.target.classList.contains("site-name") &&
      !e.target.classList.contains("navigation__list") &&
      !e.target.classList.contains("navigation__link") &&
      !e.target.classList.contains("header-wrapper")
    ) {
      navigationMenu.classList.remove("active");
      body.style.cssText = "overflow-y: auto;";
      header.classList.contains("active") && header.classList.add("notactive");
      header.classList.remove("active");
    }
  }

  window.addEventListener("touchstart", (e) => workMobileMenu(e, navigationMenu, header, body));
  window.addEventListener("click", (e) => workMobileMenu(e, navigationMenu, header, body));
});
