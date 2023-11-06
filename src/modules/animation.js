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
    animate.button("nav ul li");
    animate.button(".hero-buttons>button:first-child");
    animate.button(".action-buttons>button");
    animate.button(".hero-footer>div:last-child");
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
        repeat: 2,
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

  static heroCarousel() {
    const carousel = gsap.timeline();
    carousel
      .from(".card.active", { x: -40, ease: "power4.out" })
      .from(".card.active>*", { x: 15, stagger: 0.2 }, 0)
      .from(".card.active .action-buttons>*", { x: 5, stagger: 0.1 }, 0);
  }

  // all buttons animation
  static button(selector) {
    gsap.utils.toArray(selector).forEach((button) => {
      const arrow = button.querySelector("img");
      const hover = gsap.timeline({ paused: true });
      hover.to(arrow, { x: 5, yoyo: true, repeat: -1, duration: 0.2 });
      button.addEventListener("mouseenter", () => hover.play());
      button.addEventListener("mouseleave", () => hover.reverse());
    });
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
      ease: "power4.out",
    });

    const leftPanel = gsap.timeline({
      scrollTrigger: {
        trigger: ".customer-icons",
        toggleActions: "restart none none none",
      },
    });
    leftPanel.from(".left-side>*:not(.socmed)", {
      y: 40,
      stagger: 0.1,
    });

    const rightPanel = gsap.timeline({
      scrollTrigger: {
        trigger: ".tags",
        toggleActions: "restart none none none",
      },
    });
    rightPanel.from(".right-side>*", {
      y: 40,
      stagger: 0.1,
      ease: "power4.out",
    });
  }

  // 'steps' panel animations
  static stepsPanel() {
    animate.stepsCarousel(".brand-carousel", ".logos", -20, -100);
    animate.stepsCarousel(".traits-title", ".traits-title>h1", -20, -200);
    animate.stepsCarousel(".traits-subtext", ".traits-subtext>div", 10, 100);
    animate.button(".steps-grid>div:first-child>button");
  }

  static stepsCarousel(parent, child, initialSpeed, speed) {
    const cardContainer = document.querySelector(parent);
    const carousel = gsap.timeline({
      scrollTrigger: {
        trigger: parent,
        toggleActions: "restart none none none",
      },
    });
    carousel
      .to(child, {
        xPercent: initialSpeed,
        duration: 2,
        ease: "power4.out",
      })
      .to(
        child,
        { xPercent: speed, duration: 80, repeat: -1, ease: "none" },
        ">-1"
      );

    cardContainer.addEventListener("mouseenter", () => carousel.pause());
    cardContainer.addEventListener("mouseleave", () => carousel.resume());
  }
}
