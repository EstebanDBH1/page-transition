var blocks = document.getElementsByClassName("block");
var container = document.getElementsByClassName("container");
var hs = new HorizontalScroll.default({
  blocks: blocks,
  container: container,
  isAnimated: true,
  springEffect: 0.8,
});

/*=======BARBA.JS===================*/

let pageTran = () => {
  var tl = gsap.timeline();

  tl.to(".page-transition", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 0.8,
  });

  tl.to(".page-transition", {
    y: "-100%",
    delay: 0.5,
    duration: 0.3,
  });

  tl.set(".page-transition", {
    y: "-100%",
    opacity: 1,
  });
};

delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTran();
        await delay(1000);
        done();
      },

      async enter(data) {
        pageTran();
      },

      async once(data) {
        pageTran();
      },
    },
  ],
});
