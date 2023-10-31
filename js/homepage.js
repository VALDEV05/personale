function init() {
  introAnimation();
  scrolledHome();
  activeSound();
}

function introAnimation() {
  const introContainer = jQuery("body .intro-template");
  const body = jQuery("main.js-loop");
  const logo = jQuery(".top-bar__logo");
  const nav = jQuery(".top-bar");
  const soundActivator = jQuery(".top-bar_sound-activator");
  const footer = jQuery(".footer");
  const switcher = jQuery(".switcher-languages");
  body.css("opacity", "0");
  logo.css("opacity", "0");
  nav.css("opacity", "0");
  soundActivator.css("opacity", "0");
  footer.css("opacity", "0");
  switcher.css("opacity", "0");
  setTimeout(function () {
    gsap.fromTo(
      introContainer,
      {
        opacity: "1",
      },
      {
        opacity: "0",
        duration: 0.8,
      }
    );

    setTimeout(function () {
      gsap.fromTo(
        body,
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 4,
        }
      );
      gsap.fromTo(
        logo,
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 4,
        }
      );
      gsap.fromTo(
        nav,
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 4,
        }
      );
      gsap.fromTo(
        soundActivator,
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 4,
        }
      );
      gsap.fromTo(
        footer,
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 4,
        }
      );
      gsap.fromTo(
        switcher,
        {
          opacity: "0",
        },
        {
          opacity: "1",
          duration: 4,
        }
      );
    }, 1000);
  }, 2000);
  setTimeout(() => {
    introContainer.addClass("remove");
  }, 3000);
}

function scrolledHome() {
  var doc = window.document,
    context = doc.querySelector(".js-loop"),
    clones = context.querySelectorAll(".is-clone"),
    disableScroll = false,
    scrollHeight = 0,
    scrollPos = 0,
    clonesHeight = 0,
    i = 0;

  function getScrollPos() {
    return (
      (context.pageYOffset || context.scrollTop) - (context.clientTop || 0)
    );
  }

  function setScrollPos(pos) {
    context.scrollTop = pos;
  }

  function getClonesHeight() {
    clonesHeight = 0;

    for (i = 0; i < clones.length; i += 1) {
      clonesHeight = clonesHeight + clones[i].offsetHeight;
    }

    return clonesHeight;
  }

  function reCalc() {
    scrollPos = getScrollPos();
    scrollHeight = context.scrollHeight;
    clonesHeight = getClonesHeight();

    if (scrollPos <= 0) {
      setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
    }
  }

  function scrollUpdate() {
    if (!disableScroll) {
      scrollPos = getScrollPos();

      if (clonesHeight + scrollPos >= scrollHeight) {
        // Scroll to the top when you’ve reached the bottom
        setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
        disableScroll = true;
      } else if (scrollPos <= 0) {
        // Scroll to the bottom when you reach the top
        setScrollPos(scrollHeight - clonesHeight);
        disableScroll = true;
      }
    }

    if (disableScroll) {
      // Disable scroll-jumping for a short time to avoid flickering
      window.setTimeout(function () {
        disableScroll = false;
      }, 40);
    }
  }

  window.requestAnimationFrame(reCalc);

  context.addEventListener(
    "scroll",
    function () {
      window.requestAnimationFrame(scrollUpdate);
    },
    false
  );

  window.addEventListener(
    "resize",
    function () {
      window.requestAnimationFrame(reCalc);
    },
    false
  );

  // Just for this demo: Center the middle block on page load
  window.onload = function () {
    setScrollPos(
      Math.round(
        clones[0].getBoundingClientRect().top +
          getScrollPos() -
          (context.offsetHeight - clones[0].offsetHeight) / 2
      )
    );
  };

  /* Auto scrolling */

  var now;
  var elapsed;
  var fpsInterval;

  function startScrolling(fps) {
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    animate();
  }

  function animate(newtime) {
    window.requestAnimationFrame(animate);

    now = newtime;
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      if (scrollPos > 2) {
        // Added 2 pixel to make it able to scroll above top
        setScrollPos(getScrollPos() + 1);
      }
    }
  }

  startScrolling(40);
}

function activeSound() {
  const buttonToClick = jQuery(".top-bar_sound-activator");
  const rollSound = new Audio(
    "https://achille-pinto.valeriocorda.it/selected/sound/pintoAudio.mp3"
  );

  buttonToClick.click(() => {
    buttonToClick.toggleClass("active");
    if (buttonToClick.hasClass("active")) {
      rollSound.play();
    } else {
      rollSound.pause();
    }
  });
}
jQuery(document).ready(init);
