function init() {

    introAnimation();
    activeSound();
}


function introAnimation() {
    const introContainer = jQuery("body .intro-template");
    setTimeout(function() {
        gsap.fromTo(
            introContainer, {
                opacity: "1",
            }, {
                opacity: "0",
                duration: 1.5,
            }
        );
        setTimeout(function() {
            gsap.fromTo(
                body, {
                    opacity: "0",
                }, {
                    opacity: "1",
                    duration: 4,
                }
            );
        }, 1000);

    }, 2500);
    setTimeout(() => {
        introContainer.addClass('remove');
    }, 3000)
    setTimeout(() => {
        scrolledAnimation();
    }, 4000);
}

function scrolledAnimation() {
    /*
     * typingEffect()
     * It types an array of texts in a random order. I like random stuff🙃
     */
    function typingEffect() {
        const contactTexts = shuffleArray(['Via Roma 9, 22070, Casnate Con Bernate (CO) Italy']);
        const typedtext = document.getElementsByClassName("typedtext")[0];
        let removing = false;
        let idx = char = 0;

        setInterval(() => { // We define the interval of the typing speed

            // If we do not reach the limit, we insert characters in the html
            if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

            // 15*150ms = time before starting to remove characters
            if (char == contactTexts[idx].length + 15) removing = false;

            // Removing characters, the last one always
            if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

            char++; // Next character

            // When there is nothing else to remove
            if (typedtext.innerHTML.length === 0) {

                // If we get to the end of the texts we start over
                if (idx === contactTexts.length - 1) idx = 0
                else idx++;

                char = 0; // Start the next text by the first character
                removing = false; // No more removing characters
            }

        }, 90); // Typing speed, 150 ms

    }
    typingEffect();

    function shuffleArray(array) {
        let currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }









    let marqueeX = 0
    let currentScroll = window.pageYOffset

    const marquee = document.querySelector("div.marquee")
    marquee.innerHTML += marquee.innerHTML
    marquee.innerHTML += marquee.innerHTML

    innerTags = marquee.querySelectorAll("div.inner")

    innerTags.forEach((inner, index) => {
        inner.style.left = (inner.offsetWidth * index) + "px"
    })

    const draw = function() {
        let newScroll = window.pageYOffset
        let diffScroll = newScroll - currentScroll
        let skew = diffScroll * 0.4

        marquee.style.transform = `skewX(${skew}deg)`

        currentScroll = newScroll

        marqueeX -= 1.4

        innerTags.forEach((inner, index) => {
            let width = inner.offsetWidth

            // code from https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
            let normalizedMarqueeX = ((marqueeX % width) + width) % width
            let pos = (width * (index - 1)) + normalizedMarqueeX

            inner.style.left = pos + "px"
        })

        requestAnimationFrame(draw)
    }

    draw()
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
