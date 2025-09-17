// Import CSS
import '../css/tabler-icons.min.css';
import '../css/flaticon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'nice-select2/dist/css/nice-select2.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'venobox/dist/venobox.min.css';
import 'nouislider/dist/nouislider.min.css';
import '../scss/styles.scss';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

// SlideToggle
import {
    slideToggle,
    slideUp,
    slideDown
} from './slideToggle.min.jsx';
window.slideToggle = slideToggle;
window.slideUp = slideUp;
window.slideDown = slideDown;

// Swiper JS
import Swiper from 'swiper/bundle';
window.Swiper = Swiper;

// Flatpickr
import flatpickr from 'flatpickr';
window.flatpickr = flatpickr;

// Nice Select
import NiceSelect from 'nice-select2';
window.NiceSelect = NiceSelect;

// CounterUp
import counterUp from 'counterup2';
window.counterUp = counterUp;

// Isotope
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';
window.imagesLoaded = imagesLoaded;
window.Isotope = Isotope;

// VenoBox
import VenoBox from 'venobox';
window.VenoBox = VenoBox;

// Nouislider
import noUiSlider from 'nouislider';
window.noUiSlider = noUiSlider;

// Jarallax
import {
    jarallax,
    jarallaxVideo
} from 'jarallax';
jarallaxVideo();
window.jarallax = jarallax;

//GSAP Animation
import gsap from "gsap";
window.gsap = gsap;
import './gsap-animation.jsx';

// Active
import './active.jsx';
import './swiper-active.jsx';

// CookieAlert
import './cookiealert.jsx';