import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default class animate {
  // hero banner + header animations
  static hero() {
    animate.heroCarousel();
    animate.heroNav();
    animate.heroFooter();
    animate.heroButton("nav ul li");
    animate.heroButton(".hero-buttons>button:first-child");
    animate.heroButton(".action-buttons>button");
    animate.heroButton(".hero-footer>div:last-child>button");
  }

  static heroFooter() {
    const heroFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-footer",
        toggleActions: "restart none restart none",
      },
    });
    heroFooter
      .from(".hero-footer>div>p", { text: "", duration: 3 })
      .to(".hero-footer>div>p", { y: -10, stagger: 0.2, ease: "expo.out" })
      .to(".hero-footer>div>p", { y: 0, stagger: 0.2 })
      .to(".hero-footer>div:last-child>button>img", {
        x: 5,
        yoyo: true,
        repeat: 4,
        duration: 0.2,
      });
  }

  static heroNav() {
    const navBar = gsap.timeline();
    navBar
      .from("header>*", {
        y: 20,
        opacity: 0,
        stagger: 0.25,
        ease: "power4.out",
      })
      .from("nav ul li", { y: -20, stagger: 0.25 }, 0)
      .from(
        "nav ul li img",
        { x: 5, yoyo: true, repeat: 4, duration: 0.2 },
        ">"
      )
      .from(
        ".brand-logo>img",
        {
          rotation: 720,
          repeat: -1,
          repeatDelay: 2,
          duration: 3,
          ease: "power4.inOut",
        },
        0
      );

    const header = gsap.timeline({
      defaults: {
        duration: 0.1,
      },
      scrollTrigger: {
        trigger: ".background",
        start: "header>button +=100px",
        endTrigger: " .right-side",
        toggleActions: "play reverse play reverse",
      },
    });
    header
      .to("header, .menu , .menu>dialog", {
        backgroundColor: "#131316",
      })
      .to(
        "header p, header h3",
        {
          color: "white",
        },
        0
      )
      .to("header img", { filter: "brightness(0) invert(1)" }, 0);
  }

  static heroButton(selector) {
    gsap.utils.toArray(selector).forEach((button) => {
      const arrow = button.querySelector("img");
      const hover = gsap.timeline({ paused: true });
      hover.to(arrow, { x: 5, yoyo: true, repeat: -1, duration: 0.2 });
      button.addEventListener("mouseenter", () => hover.play());
      button.addEventListener("mouseleave", () => hover.timeScale(1).reverse());
    });
  }

  static heroCarousel() {
    const carousel = gsap.timeline();
    carousel
      .from(".card.active", { x: -40, ease: "power4.out" })
      .from(".card.active>*", { x: 15, stagger: 0.2 }, 0)
      .from(".card.active .action-buttons>*", { x: 5, stagger: 0.1 }, 0);
  }

  // 'our customers' panel animations
  static customersPanel() {
    const background = gsap.timeline();
    background.from(".background", { opacity: 0, duration: 1 });

    const indicator = gsap.timeline();
    indicator.to(".scroll-indicator>svg", {
      y: -8,
      scaleX: 1.2,
      yoyo: true,
      repeat: -1,
      duration: 0.2,
    });

    const leftPanel = gsap.timeline({
      scrollTrigger: {
        trigger: ".customer-icons",
        toggleActions: "restart none restart none",
      },
    });
    leftPanel.from(".left-side>*:not(.socmed)", {
      y: 40,
      stagger: 0.25,
    });

    const rightPanel = gsap.timeline({
      scrollTrigger: {
        trigger: ".tags",
        toggleActions: "restart none restart none",
      },
    });
    rightPanel.from(".right-side>*", {
      y: 40,
      stagger: 0.25,
    });
  }

  static logoCarousel() {
    const carousel = gsap.timeline();
    carousel.to(".logos", {
      xPercent: -100,
      duration: 60,
      repeat: -1,
      ease: "none",
    });
  }
}
