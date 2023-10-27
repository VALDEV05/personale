function init() {
  introAnimation();
  activeSound();
}

function introAnimation() {
  const introContainer = jQuery("body .intro-template");
  const body = jQuery("main.js-loop");
  const logo = jQuery(".top-bar__logo");
  const nav = jQuery(".top-bar");
  const soundActivator = jQuery(".top-bar_sound-activator");
  const footer = jQuery(".footer");
  body.css("opacity", "0");
  logo.css("opacity", "0");
  nav.css("opacity", "0");
  footer.css("opacity", "0");
  soundActivator.css("opacity", "0");
  console.log("====================================");
  console.log(introContainer);
  console.log("====================================");
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
    }, 1000);
  }, 2000);
  setTimeout(() => {
    introContainer.addClass("remove");
  }, 3000);
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
