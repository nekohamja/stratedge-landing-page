import "../styles/index.scss";
import animate from "./animation";

export default class ui {
  static initialize() {
    ui.navBar();
    ui.menuBar();
    ui.carousel();
    animate.hero();
    animate.customersPanel();
    animate.stepsPanel();
    animate.reviewsPanel();
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
    const leftButtons = document.querySelectorAll(
      ".action-buttons>button:nth-last-child(2)"
    );
    const rightButtons = document.querySelectorAll(
      ".action-buttons>button:last-child"
    );

    let index = 1;
    const toggleCard = () => {
      cards.forEach((card) => {
        card.classList.remove("active");
      });
      cards[index].classList.add("active");
      animate.heroCarousel();
      index++;
      if (index === 3) index = 0;
    };
    setInterval(toggleCard, 4000);

    rightButtons.forEach((button) => {
      button.addEventListener("click", toggleCard);
    });

    leftButtons.forEach((button) => {
      button.addEventListener("click", toggleCard);
    });
  }
}

// initialize event listeners / animations
document.addEventListener("DOMContentLoaded", ui.initialize);
