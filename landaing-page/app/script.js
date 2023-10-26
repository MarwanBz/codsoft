//!variables selectors
const line = document.getElementById("line");
const lengthLine = line.getTotalLength();

const burger = document.querySelector(".burger");
const nav = document.querySelector("header .container .nav ul.nav-links");
const navLinks = document.querySelectorAll(
  "header .container .nav ul.nav-links li"
);

const processTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".process",
    start: "10%",
    end: "100%",
  },
});

processTl.fromTo(
  "#line",
  { strokeDashoffset: 5076, strokeDasharray: 5076, ease: "back.out(1.7)" },
  { strokeDashoffset: 0, duration: 10 }
);

const headerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
  },
});

headerTl
  .fromTo(
    ".header",
    { opacity: 0, y: "-50px" },
    { opacity: 1, y: 0, duration: 1 }
  )
  .fromTo(".logo", { opacity: 0, x: "-50px" }, { opacity: 1, x: 0 })
  .fromTo(".contact", { opacity: 0, x: "50px" }, { opacity: 1, x: 0 });



const landingTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    start: "4%",
    end: "100%",
  },
});

landingTl.fromTo(".svg", { opacity: 0 }, { opacity: 1, ease: "power2" });

landingTl.fromTo(
  ".landing-left h1",
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1, duration: 2, ease: "elastic" }
);
landingTl.fromTo(".btn-landing", { opacity: 0 }, { opacity: 1 });


const sectionTitleTl = gsap.timeline({scrollTrigger: {
  trigger: 'section',
  start: "10%",
  end: "100%",
  duration: 2,
}})
sectionTitleTl.fromTo(
  ".section-title",
  { opacity: 0 },
  { opacity: 1, duration: 1 }
);
sectionTitleTl.fromTo(".about-info .text", { opacity: 0 }, { opacity: 1 });
sectionTitleTl.fromTo(".about-info .about-img", { x: 500 }, { x: 0 });

const servicesTl = gsap.timeline({scrollTrigger: {
  trigger: 'section.services',
  start: "10%",
  end: "100%",
  duration: 2,
}})
servicesTl.fromTo(".section-title", { opacity: 0 }, { opacity: 1, duration: 1 });
servicesTl.fromTo('.services-info .text',{opacity:0},{opacity: 1})
servicesTl.fromTo('.services-info .services-img',{opacity:0},{opacity: 1})

// ! functions
// mobile nav 
function navSlide() {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
    // links animation fade
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
}

navSlide()


// Page loader 
//animate first circle
tl = new TimelineMax({repeat: -1});
tl.set("#c1", {autoAlpha:.7})
  .to("#c1", .5, {scale: .2, x: "+=5", transformOrigin:"50% 50%"})
  .to("#c1", .5, {scale:1, x: "-=5",transformOrigin:"50% 50%"} );

//animate second circle
tl2 = new TimelineMax({repeat: -1});
tl2.set("#c2", {autoAlpha:.7})
  .to("#c2", .5, {scale: .2, x: "-=5",transformOrigin:"50% 50%"})
  .to("#c2", .5, {scale:1, x: "+=5",transformOrigin:"50% 50%"} )

//split loading text
var split = new SplitText(".txt-loading", {type:"chars", position:"absolute"});
tlsplit = new TimelineMax({repeat: -1});
 
//now animate each character 
tlsplit.staggerFrom(split.chars, 1, { autoAlpha:0}, 0.07)
       .staggerTo(split.chars, .5, { autoAlpha:0}, 0.05);
