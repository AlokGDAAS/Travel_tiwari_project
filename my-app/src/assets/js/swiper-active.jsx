/* ---------------------
   [Master JavaScript]
   Template Name: Touria - Tour & Travel Booking HTML Template
   Version: 1.0.0
   Author: Nano Theme
--------------------- */

"use strict";

window.addEventListener("DOMContentLoaded", function () {

    // 1.1.0 Hero Swiper Slide

    const heroSwiper = document.getElementById('heroSwiper');

    if (heroSwiper) {
        const slides = heroSwiper.querySelectorAll('.swiper-slide');
        const thumbnailImages = Array.from(slides).map(slide => {
            const bg = slide.style.backgroundImage;
            return bg.slice(5, -2);
        });

        new Swiper(heroSwiper, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".hero-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}" style="background-image: url('${thumbnailImages[index]}');"></span>`;
                },
            },
            navigation: {
                nextEl: '.hero-button-next',
                prevEl: '.hero-button-prev',
            },
            speed: 500,
            on: {
                init: function (swiper) {
                    const firstSlide = swiper.slides[swiper.activeIndex];
                    firstSlide.classList.add('active-slide');
                    animateSlide(firstSlide);
                },
                slideChangeTransitionStart: function (swiper) {
                    swiper.slides.forEach(slide => {
                        const heroContent = slide.querySelector('.hero-animated-content');
                        if (heroContent) {
                            heroContent.classList.remove('hero-animate');
                            heroContent.querySelectorAll('[data-fade-in-up]').forEach(el => {
                                el.style.opacity = '0';
                                el.style.transform = 'translateY(40px)';
                            });
                        }
                    });
                },
                slideChangeTransitionEnd: function (swiper) {
                    const activeSlide = swiper.slides[swiper.activeIndex];
                    activeSlide.classList.add('active-slide');
                    animateSlide(activeSlide);
                }
            }
        });

        function animateSlide(slide) {
            const heroContent = slide.querySelector('.hero-animated-content');
            if (!heroContent) return;

            heroContent.classList.add('hero-animate');

            heroContent.querySelectorAll('[data-fade-in-up]').forEach(el => {
                const delay = parseInt(el.getAttribute('data-animation-delay'), 10) || 0;

                el.style.opacity = '0';
                el.style.transform = 'translateY(40px)';

                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                }, delay);
            });
        }
    }

    // 1.2.0 Background Swiper Slide

    const backgroundSwiper = document.getElementById('backgroundSwiper');

    if (backgroundSwiper) {
        new Swiper(backgroundSwiper, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.background-button-next',
                prevEl: '.background-button-prev',
            },
        });
    }

    // 1.3.0 Deals Swiper Slide

    const dealsSwiper = document.querySelector('.deals-swiper');

    if (dealsSwiper) {
        new Swiper(dealsSwiper, {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 16,
            navigation: {
                nextEl: '.deals-button-next',
                prevEl: '.deals-button-prev',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });
    }

    // 1.4.0 Testimonial Swiper Slide

    const testimonialSwiper = document.getElementById('testimonialSwiper');

    if (testimonialSwiper) {
        new Swiper(testimonialSwiper, {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            grabCursor: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
        });

        testimonialSwiper.querySelectorAll('.testimonial-card').forEach(slide => {
            slide.addEventListener('click', () => {
                testimonialSwiper.querySelectorAll('.testimonial-card').forEach(s => {
                    s.classList.remove('slide-expand');
                });
                slide.classList.add('slide-expand');
            });
        });
    }

    // 1.5.0 Premier Destination Swiper Slide

    const premierDestinationSwiper = document.getElementById('premierDestinationSwiper');

    if (premierDestinationSwiper) {
        new Swiper(premierDestinationSwiper, {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            grabCursor: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.premier-destination-button-next',
                prevEl: '.premier-destination-button-prev',
            },
        });

        premierDestinationSwiper.querySelectorAll('.premier-destination-card').forEach(slide => {
            slide.addEventListener('click', () => {
                premierDestinationSwiper.querySelectorAll('.premier-destination-card').forEach(s => {
                    s.classList.remove('slide-expand');
                });
                slide.classList.add('slide-expand');
            });
        });
    }

    // 1.6.0 Testimonial Swiper Slide Two

    const testimonialSwiperTwo = document.getElementById('testimonialSwiperTwo');

    if (testimonialSwiperTwo) {
        new Swiper(testimonialSwiperTwo, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.testimonial-button-next-two',
                prevEl: '.testimonial-button-prev-two',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }

    // 1.7.0 Testimonial Swiper Slide Three

    const testimonialSwiperThree = document.getElementById('testimonialSwiperThree');

    if (testimonialSwiperThree) {
        new Swiper(testimonialSwiperThree, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.testimonial-button-next-three',
                prevEl: '.testimonial-button-prev-three',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }

    // 1.8.0 Follow Instagram Swiper Slide

    const followInstagramSwiper = document.getElementById('followInstagramSwiper');

    if (followInstagramSwiper) {
        new Swiper(followInstagramSwiper, {
            loop: true,
            slidesPerView: 8,
            spaceBetween: 10,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                },
            },
        });
    }

    // 1.9.0 Top Catagory Swiper Slide

    const topCatagorySwiper = document.getElementById('topCatagorySwiper');

    if (topCatagorySwiper) {
        new Swiper(topCatagorySwiper, {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 6,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".top-catagory-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                },
            },
        });
    }

    // 1.10.0 Video Gallery Swiper Slide

    const videoGallerySwiper = document.getElementById('videoGallerySwiper');

    if (videoGallerySwiper) {
        const slides = videoGallerySwiper.querySelectorAll('.swiper-slide');
        const thumbnailImages = Array.from(slides).map(slide => {
            const bg = slide.style.backgroundImage;
            return bg.slice(5, -1).replace(/["']/g, "");
        });

        new Swiper(videoGallerySwiper, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".video-gallery-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}" style="background-image: url('${thumbnailImages[index]}');"></span>`;
                },
            },
        });
    }

    // 1.11.0 Destination Details Swiper Slide

    const destinationDetailsSwiper = document.getElementById('destinationDetailsSwiper');

    if (destinationDetailsSwiper) {
        new Swiper(destinationDetailsSwiper, {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
            centeredSlides: true,
            speed: 500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.destination-details-button-next',
                prevEl: '.destination-details-button-prev',
            },
        });
    }

    // 1.12.0 Hero Swiper Four

    const heroSwiperFour = document.getElementById('heroSwiperFour');

    if (heroSwiperFour) {
        new Swiper(heroSwiperFour, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.background-button-next',
                prevEl: '.background-button-prev',
            },
        });
    }

    // 1.13.0 Destination Swiper

    const destinationSwiper = document.querySelector('.destination-swiper');

    if (destinationSwiper) {
        new Swiper('.destination-swiper', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    // 1.14.0 Testimonial Slider

    const testimonialSwiperFive = document.querySelector('.testimonial-swiper-five');

    if (testimonialSwiperFive) {
        new Swiper(testimonialSwiperFive, {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 3,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".testimonial-dots",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });
    }

    // 1.15.0 Couple Destination Slider

    const coupleDestinationSlider = document.querySelector('.couple-destination-slider');

    if (coupleDestinationSlider) {
        new Swiper(coupleDestinationSlider, {
            loop: true,
            slidesPerView: 8,
            spaceBetween: 10,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.destination-details-button-next',
                prevEl: '.destination-details-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            },
        });
    }

    // 1.15.0 Packages Slider

    const packagesSlider = document.getElementById('packagesSwiper');

    if (packagesSlider) {
        new Swiper(packagesSlider, {
            loop: true,
            slidesPerView: 5,
            spaceBetween: 10,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.packages-button-next',
                prevEl: '.packages-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            },
        });
    }

    // 1.16.0 Banner Slider

    const bannerSwiper = document.getElementById('bannerSwiper');

    if (bannerSwiper) {
        new Swiper(bannerSwiper, {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 10,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    // 1.17.0 Popular Package Slider

    const popularPackageSwiper = document.getElementById('popularPackageSwiper');

    if (popularPackageSwiper) {
        new Swiper(popularPackageSwiper, {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: {
                nextEl: '.packages-button-next',
                prevEl: '.packages-button-prev',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }

});