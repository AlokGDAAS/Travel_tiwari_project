/* ---------------------
   [Master JavaScript]
   Template Name: Touria - Tour & Travel Booking HTML Template
   Version: 1.0.0
   Author: Nano Theme
--------------------- */

/* ---------------------
   [Table of Contents]

   1. Core Features
      1.1.0 Sticky Header (sticky-header)
      1.2.0 Mobile Dropdown Menu (mobile-menu)
      1.3.0 Anchor Prevent Default (anchor-prevent)
      1.4.0 Search Form (search-form)
   2. UI Enhancements
      2.1.0 Range Slider Price
      2.2.0 Range Slider Duration
      2.3.0 Venobox JS
      2.4.0 Countdown Timer
      2.5.0 Counter Up
      2.6.0 Accommodation Card
      2.7.0 Scroll to Top
      2.8.0 Video Popup
      2.9.0 Isotope
      2.10.0 Rotating Image
      2.11.0 Progress Bar
      2.12.0 Flatpickr Date Picker
      2.13.0 Nice Select Activation
      2.14.0 Copyright Year
      2.15.0 WOW
      2.16.0 Tooltip Activation
      2.17.0 Toast Activation
      2.18.0 Popover Activation
      2.19.0 Preloader
--------------------- */

"use strict";

window.addEventListener("DOMContentLoaded", function () {

    // 1.1.0 Sticky Header

    const navarToggler = document.querySelector('.navbar-toggler');
    const header = document.querySelector('.header-area');

    if (navarToggler) {
        navarToggler.addEventListener('click', () => {
            header.classList.toggle('mobile-menu-open');
        });
    }

    if (header) {
        function stickyNavigation() {
            if (window.pageYOffset > 10) {
                header.classList.add('sticky-on');
            } else {
                header.classList.remove('sticky-on');
            }
        }

        window.addEventListener('load', stickyNavigation);
        window.addEventListener('scroll', stickyNavigation);
    }

    // 1.2.0 Mobile Dropdown Menu

    function mobileDropdownMenu() {
        const sbdropdown = document.querySelectorAll('.touria-dd');
        if (sbdropdown.length > 0) {
            const navUrl = document.querySelectorAll('.navbar-nav li ul');
            navUrl.forEach(url => {
                url.insertAdjacentHTML('beforebegin', '<div class="dropdown-toggler"><i class="ti ti-caret-down-fill"></i></div>');
            });

            const ddtrogglers = document.querySelectorAll('.dropdown-toggler');
            ddtrogglers.forEach(ddtoggler => {
                ddtoggler.addEventListener('click', () => {
                    const ddNext = ddtoggler.nextElementSibling;
                    slideToggle(ddNext, 250);
                });
            });
        }
    }
    window.addEventListener('load', mobileDropdownMenu);

    // 1.3.0 Anchor Prevent Default

    const anchors = document.querySelectorAll('a[href="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', e => e.preventDefault());
    });

    // 1.4.0 Search Form

    const searchButton = document.getElementById('searchButton');
    const searchClose = document.getElementById('searchClose');
    const searchFormPopup = document.querySelector('.search-form-popup');
    const searchOverlay = document.getElementById('searchOverlay');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            searchFormPopup.classList.add('open');
            searchOverlay.classList.add('open');
        });
        searchClose.addEventListener('click', () => {
            searchFormPopup.classList.remove('open');
            searchOverlay.classList.remove('open');
        });
    }

    // 2.1.0 Range Slider Price

    var rangeSliderPrice = document.getElementById('range-slider-price');

    if (rangeSliderPrice) {
        noUiSlider.create(rangeSliderPrice, {
            start: [20, 800],
            connect: true,
            tooltips: [{
                    to: function (value) {
                        return value <= 0 ? '' : parseInt(value, 10);
                    },
                    from: Number
                },
                {
                    to: function (value) {
                        return value <= 0 ? '' : parseInt(value, 10);
                    },
                    from: Number
                }
            ],
            range: {
                'min': 0,
                'max': 1000
            }
        });
    }

    // 2.2.0 Range Slider Duration

    var rangeSliderDuration = document.getElementById('range-slider-duration');

    if (rangeSliderDuration) {
        noUiSlider.create(rangeSliderDuration, {
            start: [1, 7],
            connect: true,
            tooltips: [{
                    to: function (value) {
                        return value <= 0 ? '' : parseInt(value, 10);
                    },
                    from: Number
                },
                {
                    to: function (value) {
                        return value <= 0 ? '' : parseInt(value, 10);
                    },
                    from: Number
                }
            ],
            range: {
                'min': 0,
                'max': 16
            }
        });
    }

    // 2.3.0 Venobox JS

    const venoBox = document.querySelectorAll(".venobox");

    if (venoBox.length > 0) {
        new VenoBox({
            overlayColor: "rgba(22,25,32,0.8)",
            spinner: "flow"
        });
    }

    // 2.4.0 Countdown Timer

    const countdownClock = document.getElementById("countdownClock");

    if (countdownClock) {
        function updateCountdown() {
            const date = countdownClock.getAttribute("data-target-date");
            const time = countdownClock.getAttribute("data-target-time");
            const targetTime = new Date(`${date}T${time}`);
            const now = new Date();
            const distance = targetTime - now;

            if (distance < 0) {
                countdownClock.innerHTML = "<li>Countdown Ended</li>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdownClock.querySelector("#days").textContent = String(days).padStart(2, "0");
            countdownClock.querySelector("#hours").textContent = String(hours).padStart(2, "0");
            countdownClock.querySelector("#minutes").textContent = String(minutes).padStart(2, "0");
            countdownClock.querySelector("#seconds").textContent = String(seconds).padStart(2, "0");
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // 2.5.0 Counter Up

    const counterElements = document.querySelectorAll('.counter');

    if (counterElements.length > 0) {
        const counterUp = window.counterUp;

        const callback = (entries) => {
            entries.forEach(entry => {
                const counterElement = entry.target;
                if (entry.isIntersecting && !counterElement.classList.contains('is-visible')) {
                    counterUp(counterElement, {
                        duration: 3000,
                        delay: 100
                    });
                    counterElement.classList.add('is-visible');
                }
            });
        };

        const IO = new IntersectionObserver(callback, {
            threshold: 1
        });

        counterElements.forEach(element => IO.observe(element));
    }

    // 2.6.0 Accommodation Card

    const accommodationCards = document.querySelectorAll('.accommodation-card');

    if (accommodationCards.length > 0) {
        accommodationCards.forEach(card => {
            const hiddenContent = card.querySelector('.accommodation-hidden-content');
            if (card.classList.contains('open')) {
                hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
            }
        });

        accommodationCards.forEach(card => {
            card.addEventListener('click', () => {
                const isAlreadyOpen = card.classList.contains('open');

                accommodationCards.forEach(c => {
                    c.classList.remove('open');
                    const content = c.querySelector('.accommodation-hidden-content');
                    content.style.maxHeight = '0px';
                });

                if (!isAlreadyOpen) {
                    card.classList.add('open');
                    const hiddenContent = card.querySelector('.accommodation-hidden-content');
                    hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
                }
            });
        });
    }

    // 2.7.0 Scroll to Top

    const scrollButton = document.getElementById('scrollTopButton');
    const topDistance = 600;

    if (scrollButton) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > topDistance || document.documentElement.scrollTop > topDistance) {
                scrollButton.classList.add('scrolltop-show');
                scrollButton.classList.remove('scrolltop-hide');
            } else {
                scrollButton.classList.add('scrolltop-hide');
                scrollButton.classList.remove('scrolltop-show');
            }
        });

        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        });

        function updateScrollProgress() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
            scrollButton.style.setProperty('--scroll-progress', `${scrollPercent}%`);
        }

        window.addEventListener('scroll', updateScrollProgress);
    }

    // 2.8.0 Video Popup


    const videoPopup = document.getElementById("videoPopup");
    const videoFrame = document.getElementById("videoFrame");
    const closeBtn = document.getElementById("videoCloseButton");
    const videoBtns = document.querySelectorAll(".video-btn");

    if (closeBtn && videoBtns.length > 0) {
        videoBtns.forEach(button => {
            button.addEventListener("click", function () {
                let videoUrl = this.getAttribute("data-video");

                if (videoUrl) {
                    let separator = videoUrl.includes("?") ? "&" : "?";

                    if (videoUrl.includes("youtu.be")) {
                        let videoId = videoUrl.split("/").pop();
                        videoUrl = `https://www.youtube.com/embed/${videoId}`;
                    }

                    if (videoUrl.includes("youtube.com/watch")) {
                        let videoId = new URL(videoUrl).searchParams.get("v");
                        videoUrl = `https://www.youtube.com/embed/${videoId}`;
                    }

                    if (videoUrl.includes("youtube.com") || videoUrl.includes("vimeo.com")) {
                        videoUrl += `${separator}autoplay=1`;
                    }

                    videoFrame.src = videoUrl;
                    videoFrame.setAttribute("allow", "autoplay; encrypted-media");
                    videoPopup.style.display = "flex";
                }
            });
        });

        closeBtn.addEventListener("click", () => {
            videoPopup.style.display = "none";
            videoFrame.src = "";
        });

        window.addEventListener("click", (event) => {
            if (event.target === videoPopup) {
                videoPopup.style.display = "none";
                videoFrame.src = "";
            }
        });
    }

    // 2.9.0 Isotope

    const grids = document.querySelectorAll('.touria-filter');

    if (grids.length > 0) {
        grids.forEach(grid => {
            imagesLoaded(grid, () => {
                const iso = new Isotope(grid, {
                    itemSelector: '.filter-item',
                    percentPosition: true,
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.filter-item'
                    }
                });

                const container = grid.closest('.touria-container');
                const filtersElem = container ? container.querySelector('.touria-filter-nav') : null;

                if (filtersElem) {
                    filtersElem.addEventListener('click', (event) => {
                        if (!event.target.matches('button')) return;
                        const filterValue = event.target.getAttribute('data-filter');
                        iso.arrange({
                            filter: filterValue
                        });
                    });

                    const radioButtonGroup = (buttonGroup) => {
                        buttonGroup.addEventListener('click', (event) => {
                            if (!event.target.matches('button')) return;
                            buttonGroup.querySelector('.active').classList.remove('active');
                            event.target.classList.add('active');
                        });
                    };

                    radioButtonGroup(filtersElem);
                }
            });
        });
    }

    // 2.10.0 Rotating Image

    const rotatingImages = document.querySelectorAll('.rotatingImage');

    if (rotatingImages.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const rotateValue = scrollTop % 360;
            rotatingImages.forEach(image => {
                image.style.transform = `rotate(${rotateValue}deg)`;
            });
        });
    }

    // 2.11.0 Progress Bar

    const progressBars = document.querySelectorAll('.team-progress-bar');

    if (progressBars.length > 0) {
        progressBars.forEach(function (progressBar) {
            const value = parseInt(progressBar.getAttribute('data-value'), 10);
            progressBar.style.width = value + '%';
            const spanElements = progressBar.closest('.progress-item').querySelectorAll('.progress-info span');
            if (spanElements.length > 1) {
                const percentSpan = spanElements[1];
                percentSpan.textContent = value + '%';
                percentSpan.style.marginRight = (100 - value) + '%';
            }
        });
    }

    // 2.12.0 Flatpickr Date Picker

    const timeRangeInput = document.getElementById("time-range-picker");

    if (timeRangeInput) {
        function getCurrentWeekRange() {
            const today = new Date();
            const day = today.getDay();
            const diffToMonday = day === 0 ? -6 : 1 - day;
            const monday = new Date(today);
            monday.setDate(today.getDate() + diffToMonday);
            const sunday = new Date(monday);
            sunday.setDate(monday.getDate() + 6);
            return [monday, sunday];
        }

        const [start, end] = getCurrentWeekRange();

        timeRangeInput.placeholder = `${start.toLocaleDateString(undefined, {
          month: "short",
          day: "2-digit",
        })} - ${end.toLocaleDateString(undefined, {
          month: "short",
          day: "2-digit",
        })}`;

        flatpickr(timeRangeInput, {
            mode: "range",
            dateFormat: "M d",
            defaultDate: [start, end]
        });
    }

    // 2.13.0 Nice Select Activation

    let touriaSelect = document.querySelectorAll(".touria-select");
    if (touriaSelect.length > 0) {
        touriaSelect.forEach((el) => {
            new NiceSelect(el, {
                searchable: true,
            });
        });
    }

    let touriaSelect2 = document.querySelectorAll(".touria-select2");
    if (touriaSelect2.length > 0) {
        touriaSelect2.forEach((el) => {
            new NiceSelect(el, {
                searchable: false,
            });
        });
    }

    // 2.14.0 Jarallax

    const jarallaxElements = document.querySelectorAll('.jarallax');

    if (jarallaxElements.length > 0) {
        jarallax(jarallaxElements, {
            speed: 0.6,
        });
    }

    // 2.14.0 Copyright Year

    const year = document.getElementById("year");
    if (year) {
        const currentYear = new Date().getFullYear();
        year.textContent = currentYear;
    }

    // 2.16.0 Tooltip Activation

    let touriaTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = touriaTooltip.map(function (sbTooltip) {
        return new bootstrap.Tooltip(sbTooltip);
    });

    // 2.17.0 Toast Activation

    let touriaToast = [].slice.call(document.querySelectorAll('.toast'));
    let toastList = touriaToast.map(function (sbToast) {
        return new bootstrap.Toast(sbToast);
    });
    toastList.forEach(toast => toast.show());

    // 2.18.0 Popover Activation

    let touriaPopover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    let popoverList = touriaPopover.map(function (sbPopover) {
        return new bootstrap.Popover(sbPopover);
    });

    // 2.19.0 Preloader

    const preloader = document.getElementById('preloader');

    if (preloader) {
        window.addEventListener('load', function () {
            let fadeOut = setInterval(function () {
                if (!preloader.style.opacity) {
                    preloader.style.opacity = 1;
                }
                if (preloader.style.opacity > 0) {
                    preloader.style.opacity -= 0.1;
                } else {
                    clearInterval(fadeOut);
                    preloader.remove();
                }
            }, 10);
        });
    }

});