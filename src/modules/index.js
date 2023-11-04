import "../styles/index.scss";
import animate from "./animation";

export default class ui {
  static initialize() {
    ui.navBar();
    ui.menuBar();
    ui.carousel();
    animate.heroCarousel();
    animate.heroBanner();
  }

  static navBar() {
    const items = document.querySelectorAll("[nav-item]");

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
      });
    });
    animate.navBar();
  }

  static menuBar() {
    const menuBar = document.querySelector(".menu");
    const dialog = document.querySelector("dialog");

    menuBar.addEventListener("click", (e) => {
      e.stopPropagation();
      dialog.show();
    });
    document.body.addEventListener("click", () => {
      dialog.close();
    });
  }

  static carousel() {
    const cards = document.querySelectorAll("[carousel-item]");
    let count = 1;
    setInterval(() => {
      cards.forEach((card) => {
        card.classList.remove("active");
      });
      cards[count].classList.add("active");
      animate.heroCarousel();
      count++;
      if (count === 3) count = 0;
    }, 4000);
  }
}

document.addEventListener("DOMContentLoaded", ui.initialize);
