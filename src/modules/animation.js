import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class animate {
  static heroBanner() {
    gsap.registerPlugin(TextPlugin);
    const heroFooter = gsap.timeline();
    const navBar = gsap.timeline();

    heroFooter
      .from(".hero-footer>div>p", { text: "", duration: 3 })
      .to(".hero-footer>div>p", { y: -10, stagger: 0.2, ease: "expo.out" })
      .to(".hero-footer>div>p", { y: 0, stagger: 0.2 });

    navBar
      .from("header>*", {
        y: 20,
        opacity: 0,
        stagger: 0.25,
        ease: "power4.out",
      })
      .from("nav ul li", { y: -20, stagger: 0.25 }, 0)
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
  }

  static heroCarousel() {
    const carousel = gsap.timeline();
    carousel
      .from(".card.active", { x: -40, ease: "power4.out" })
      .from(".card.active>*", { x: 15, stagger: 0.2 }, 0)
      .from(".card.active .action-buttons>*", { x: 5, stagger: 0.1 }, 0);
  }

  static background() {
    const background = gsap.timeline();
    background.from(".background", { opacity: 0, duration: 1 });
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
