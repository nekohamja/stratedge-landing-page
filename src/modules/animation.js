import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class animate {
  static navBar() {
    const tl = gsap.timeline();
    tl.from("header>*", {
      y: 20,
      opacity: 0,
      stagger: 0.25,
      ease: "power4.out",
    })
      .from("nav ul li", { y: -20, stagger: 0.25 }, 0)
      .from(".brand-logo>img", { rotation: 360 }, 0);
  }

  static heroBanner() {
    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline();
    tl.from(".hero-footer>div>p", { text: "", duration: 3 });
  }

  static heroCarousel() {
    const tl = gsap.timeline({ defaults: {} });
    tl.from(".card.active", { x: -40, ease: "power4.out" })
      .from(".card.active>*", { x: 15, stagger: 0.2 }, 0)
      .from(".card.active .action-buttons>*", { x: 5, stagger: 0.2 }, 0);
  }

  static background() {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.set(".background", { backgroundPosition: "0px -100px" });
    // gsap.to(".background", {
    //   scrollTrigger: {
    //     trigger: ".background",
    //     start: "top top",
    //     end: "+=100%",
    //     scrub: true,
    //   },
    //   backgroundPosition: "0px 200px",
    // });
  }
}
