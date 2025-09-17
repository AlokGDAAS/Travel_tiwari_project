import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

window.addEventListener("DOMContentLoaded", function () {
    // Register plugins
    gsap.registerPlugin(SplitText, ScrollTrigger);

    // Scroll Smoother
    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper) {
        ScrollSmoother.create({
            wrapper: smoothWrapper,
            content: smoothContent,
            smooth: 2,
            effects: true,
            smoothTouch: 0.2,
        });
    }

    document.fonts.ready.then(() => {
        // Heading Chars Animation
        const headingChars = document.querySelectorAll(".heading-chars");

        if (headingChars.length > 0) {
            gsap.utils.toArray(".heading-chars").forEach((el) => {
                const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;

                const split = new SplitText(el, {
                    type: "chars",
                    smartWrap: true,
                });

                gsap.from(split.chars, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    },
                    y: 50,
                    autoAlpha: 0,
                    stagger: 0.05,
                    delay: delay,
                    duration: 0.3,
                    ease: "power1"
                });
            });
        }

        // Heading Words Animation
        const headingWords = document.querySelectorAll(".heading-word");

        if (headingWords.length > 0) {
            gsap.utils.toArray(".heading-word").forEach((el) => {
                const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;

                const split = new SplitText(el, {
                    type: "words",
                });

                gsap.from(split.words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    },
                    y: 50,
                    autoAlpha: 0,
                    stagger: 0.1,
                    delay: delay,
                    duration: 0.3,
                    ease: "power1"
                });
            });
        }

        // Heading Line Animation
        const headingLines = document.querySelectorAll(".heading-line");

        if (headingLines.length > 0) {
            gsap.utils.toArray(".heading-line").forEach((el) => {
                const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;

                const split = new SplitText(el, {
                    type: "lines",
                });

                gsap.from(split.lines, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    },
                    y: 50,
                    autoAlpha: 0,
                    stagger: 0.2,
                    delay: delay,
                    duration: 0.4,
                    ease: "power1"
                });
            });
        }

        // Color Change Animation
        const colorChanges = document.querySelectorAll(".color-change");

        if (colorChanges.length > 0) {
            gsap.utils.toArray(".color-change").forEach(el => {
                const split = new SplitText(el, {
                    type: "chars",
                    smartWrap: true,
                });

                gsap.fromTo(
                    split.chars, {
                        color: "#132B49"
                    }, {
                        color: "#708738",
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            scrub: true
                        }
                    }
                );
            });
        }
    });

    // Fade In Up Animation
    const fadeInUp = document.querySelectorAll(".fadeInUp");

    if (fadeInUp.length > 0) {
        fadeInUp.forEach((el) => {
            const delay = parseFloat(el.dataset.delay) || 0;

            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                    toggleActions: "play none none none"
                },
                y: 50,
                autoAlpha: 0,
                duration: 0.4,
                delay: delay,
                ease: "power3"
            });
        });
    }

    // Scroll Image Animation
    const scrollImages = document.querySelectorAll(".scroll-image");

    if (scrollImages.length > 0) {
        gsap.utils.toArray(".scroll-image").forEach((img) => {
            gsap.to(img, {
                y: -140,
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "top 95%",
                    end: "bottom top",
                    scrub: true,
                }
            });
        });
    }

    // Image Right Animation
    const imageAnimRight = document.querySelectorAll(".img-anim-right");

    if (imageAnimRight.length > 0) {
        gsap.utils.toArray(".img-anim-right").forEach((el) => {
            const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;

            gsap.fromTo(
                el, {
                    xPercent: 5,
                    clipPath: "inset(0 0 0 100%)",
                    opacity: 0,
                }, {
                    xPercent: 0,
                    clipPath: "inset(0 0 0 0%)",
                    opacity: 1,
                    duration: 1,
                    ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                    delay: delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }

    // Image Left Animation
    const imageAnimLeft = document.querySelectorAll(".img-anim-left");

    if (imageAnimLeft.length > 0) {
        gsap.utils.toArray(".img-anim-left").forEach((el) => {
            const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;

            gsap.fromTo(
                el, {
                    xPercent: -5,
                    clipPath: "inset(0 100% 0 0)",
                    opacity: 0,
                }, {
                    xPercent: 0,
                    clipPath: "inset(0 0% 0 0)",
                    opacity: 1,
                    duration: 1,
                    ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                    delay: delay,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }

    // Image Zoom In Out Animation
    const imageZoomInOutEls = document.querySelectorAll(".imgZoomInOut");

    if (imageZoomInOutEls.length > 0) {
        imageZoomInOutEls.forEach((el) => {
            let initialWidth = el.offsetWidth;
            const maxScale = 1.5;
            let maxAllowedWidth = window.innerWidth * 0.95;

            window.addEventListener("resize", () => {
                maxAllowedWidth = window.innerWidth * 0.95;
                initialWidth = el.offsetWidth;
            });

            ScrollTrigger.create({
                ease: "none",
                trigger: el,
                start: "top 95%",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const adjustedProgress = Math.max(0, (progress - 0.3) / 0.7);
                    let newWidth = initialWidth * (1 + (maxScale - 1) * adjustedProgress);
                    if (newWidth < initialWidth) {
                        newWidth = initialWidth;
                    }
                    newWidth = Math.min(newWidth, maxAllowedWidth);
                    el.style.width = `${newWidth}px`;
                }
            });
        });
    }

});