import React from 'react'

const Home_contact = () => {
  return (
    <div>
               
         <section className="contact-section jarallax" style={{backgroundImage:"url('./assets/img/bg-img/34.jpg')"}} >

            <div className="divider"></div>

            <div className="container">
               <div className="row g-5">
                  <div className="col-12 col-lg-6 order-2 order-lg-0">
                     <div className="section-heading">
                        <span className="sub-title text-white">Get in touch</span>
                        <h2 className="mb-4 text-white">Do You Need Help For Your Next Projects?</h2>
                        <p className="text-white mb-5">At Express Travel, we believe in the transformative power of travel.
                           As
                           avid explorers ourselves, we understand the desire to uncover experiences, forge understand
                           the
                           desire meaningful.</p>
                     </div>

                     <form className="me-lg-5" action="#">
                        <div className="contact-form">
                           <div className="row g-4">
                              <div className="col-12">
                                 <div className="form-group">
                                    <label for="name">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          viewBox="0 0 24 24" fill="none">
                                          <path
                                             d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                                             stroke="#767676" stroke-width="1.5" />
                                          <path
                                             d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z"
                                             stroke="#767676" stroke-width="1.5" />
                                       </svg>
                                    </label>
                                    <input type="text" id="name" className="form-control bg-secondary" name="name"
                                       placeholder="First Name *"/>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="form-group">
                                    <label for="email">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          viewBox="0 0 24 24" fill="none">
                                          <path
                                             d="M5.856 6.83988C5.74176 6.77827 5.61348 6.74736 5.48371 6.75018C5.35395 6.753 5.22713 6.78944 5.11567 6.85596C5.00421 6.92247 4.91192 7.01677 4.84782 7.12964C4.78373 7.24251 4.75002 7.37008 4.75 7.49988V16.9999C4.75 17.1988 4.82902 17.3896 4.96967 17.5302C5.11032 17.6709 5.30109 17.7499 5.5 17.7499C5.69891 17.7499 5.88968 17.6709 6.03033 17.5302C6.17098 17.3896 6.25 17.1988 6.25 16.9999V8.75588L11.644 11.6599C11.866 11.7799 12.134 11.7799 12.356 11.6599L17.75 8.75588V16.9999C17.75 17.1988 17.829 17.3896 17.9697 17.5302C18.1103 17.6709 18.3011 17.7499 18.5 17.7499C18.6989 17.7499 18.8897 17.6709 19.0303 17.5302C19.171 17.3896 19.25 17.1988 19.25 16.9999V7.49988C19.25 7.37008 19.2163 7.24251 19.1522 7.12964C19.0881 7.01677 18.9958 6.92247 18.8843 6.85596C18.7729 6.78944 18.6461 6.753 18.5163 6.75018C18.3865 6.74736 18.2582 6.77827 18.144 6.83988L12 10.1479L5.856 6.83988Z"
                                             fill="#767676" />
                                          <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M17.3098 3.72139C13.7768 3.40537 10.2227 3.40537 6.68978 3.72139L5.17178 3.85639C4.38107 3.927 3.63724 4.26207 3.06042 4.8075C2.4836 5.35293 2.10748 6.07686 1.99278 6.86239C1.49459 10.2689 1.49459 13.7298 1.99278 17.1364C2.10772 17.9219 2.48409 18.6457 3.06109 19.191C3.63809 19.7362 4.38204 20.071 5.17278 20.1414L6.68878 20.2774C10.2228 20.5934 13.7768 20.5934 17.3108 20.2774L18.8278 20.1414C19.6183 20.0708 20.3621 19.7359 20.9389 19.1907C21.5157 18.6454 21.8919 17.9217 22.0068 17.1364C22.505 13.7298 22.505 10.2689 22.0068 6.86239C21.892 6.07671 21.5158 5.35265 20.9387 4.80721C20.3617 4.26176 19.6177 3.92678 18.8268 3.85639L17.3098 3.72139ZM6.82378 5.21539C10.2682 4.90671 13.7333 4.90671 17.1778 5.21539L18.6948 5.35139C19.1495 5.39178 19.5774 5.5843 19.9093 5.89784C20.2412 6.21138 20.4576 6.62765 20.5238 7.07939C21.0009 10.342 21.0009 13.6567 20.5238 16.9194C20.4576 17.3711 20.2412 17.7874 19.9093 18.1009C19.5774 18.4145 19.1495 18.607 18.6948 18.6474L17.1778 18.7834C13.7338 19.0914 10.2678 19.0914 6.82378 18.7834L5.30678 18.6474C4.85201 18.607 4.42413 18.4145 4.09227 18.1009C3.7604 17.7874 3.54391 17.3711 3.47778 16.9194C3.00063 13.6567 3.00063 10.342 3.47778 7.07939C3.54391 6.62765 3.7604 6.21138 4.09227 5.89784C4.42413 5.5843 4.85201 5.39178 5.30678 5.35139L6.82378 5.21539Z"
                                             fill="#767676" />
                                       </svg>
                                    </label>
                                    <input type="email" id="email" className="form-control bg-secondary" name="email"
                                       placeholder="Email Here *"/>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <select name="subject" id="subject" className="touria-select2 bg-secondary">
                                    <option value="" selected>Select Subject</option>
                                    <option value="tour-booking">Tour Booking</option>
                                    <option value="travel-plan">Travel Plan</option>
                                    <option value="travel-insurance">Travel Insurance</option>
                                    <option value="travel-tips">Travel Tips</option>
                                 </select>
                              </div>
                              <div className="col-12">
                                 <div className="form-group">
                                    <label for="message">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          viewBox="0 0 24 24" fill="none">
                                          <path
                                             d="M10.8751 12C10.8751 12.2984 10.9937 12.5845 11.2046 12.7955C11.4156 13.0065 11.7018 13.125 12.0001 13.125C12.2985 13.125 12.5846 13.0065 12.7956 12.7955C13.0066 12.5845 13.1251 12.2984 13.1251 12C13.1251 11.7016 13.0066 11.4155 12.7956 11.2045C12.5846 10.9935 12.2985 10.875 12.0001 10.875C11.7018 10.875 11.4156 10.9935 11.2046 11.2045C10.9937 11.4155 10.8751 11.7016 10.8751 12ZM15.5626 12C15.5626 12.2984 15.6812 12.5845 15.8921 12.7955C16.1031 13.0065 16.3893 13.125 16.6876 13.125C16.986 13.125 17.2721 13.0065 17.4831 12.7955C17.6941 12.5845 17.8126 12.2984 17.8126 12C17.8126 11.7016 17.6941 11.4155 17.4831 11.2045C17.2721 10.9935 16.986 10.875 16.6876 10.875C16.3893 10.875 16.1031 10.9935 15.8921 11.2045C15.6812 11.4155 15.5626 11.7016 15.5626 12ZM6.18763 12C6.18763 12.2984 6.30616 12.5845 6.51714 12.7955C6.72812 13.0065 7.01426 13.125 7.31263 13.125C7.611 13.125 7.89715 13.0065 8.10813 12.7955C8.31911 12.5845 8.43763 12.2984 8.43763 12C8.43763 11.7016 8.31911 11.4155 8.10813 11.2045C7.89715 10.9935 7.611 10.875 7.31263 10.875C7.01426 10.875 6.72812 10.9935 6.51714 11.2045C6.30616 11.4155 6.18763 11.7016 6.18763 12ZM21.6845 7.93125C21.1548 6.67266 20.3954 5.54297 19.4275 4.57266C18.4663 3.60798 17.3252 2.84117 16.0689 2.31563C14.7798 1.77422 13.4111 1.5 12.0001 1.5H11.9533C10.5329 1.50703 9.15716 1.78828 7.86341 2.34141C6.61786 2.87234 5.48749 3.64052 4.53529 4.60312C3.5767 5.57109 2.82435 6.69609 2.30404 7.95C1.76498 9.24844 1.4931 10.6289 1.50013 12.0492C1.50809 13.6769 1.89316 15.2806 2.62513 16.7344V20.2969C2.62513 20.5828 2.73872 20.857 2.94091 21.0592C3.1431 21.2614 3.41732 21.375 3.70326 21.375H7.2681C8.72192 22.107 10.3256 22.492 11.9533 22.5H12.0025C13.4064 22.5 14.7681 22.2281 16.0501 21.6961C17.3001 21.1768 18.4369 20.419 19.397 19.4648C20.365 18.5063 21.1267 17.3859 21.6587 16.1367C22.2119 14.843 22.4931 13.4672 22.5001 12.0469C22.5072 10.6195 22.2306 9.23438 21.6845 7.93125ZM18.1431 18.1969C16.5001 19.8234 14.3204 20.7188 12.0001 20.7188H11.9603C10.547 20.7117 9.1431 20.3602 7.90326 19.6992L7.70638 19.5938H4.40638V16.2938L4.30091 16.0969C3.63998 14.857 3.28841 13.4531 3.28138 12.0398C3.27201 9.70312 4.16498 7.50937 5.80326 5.85703C7.4392 4.20469 9.62591 3.29062 11.9626 3.28125H12.0025C13.1744 3.28125 14.3111 3.50859 15.3822 3.95859C16.4275 4.39687 17.365 5.02734 18.1712 5.83359C18.9751 6.6375 19.6079 7.57734 20.0462 8.62266C20.5009 9.70547 20.7283 10.8539 20.7236 12.0398C20.7095 14.3742 19.7931 16.5609 18.1431 18.1969Z"
                                             fill="#767676" />
                                       </svg>
                                    </label>
                                    <textarea name="message" id="message" className="form-control bg-secondary"
                                       placeholder="Your Comment *"></textarea>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="submit-btn">
                           <button type="submit" className="btn btn-light">Submit Message <i
                                 className="icon-arrow-right"></i></button>
                        </div>
                     </form>
                  </div>

                  <div className="col-12 col-lg-6">
                     <div className="row g-4 align-items-center">
                        <div className="col-12 col-sm-6">
                           <div className="d-flex gap-5 flex-column">
                              <div className="happy-counts fadeInUp" data-delay="0.2">
                                 <h3 className="counter">976<span>+</span></h3>
                                 <h5 className="mb-0">Happy Traveller</h5>
                              </div>

                              <div className="happy-counts fadeInUp" data-delay="0.4">
                                 <h3 className="counter">805<span>+</span></h3>
                                 <h5 className="mb-0">Positive Review</h5>
                              </div>
                           </div>
                        </div>

                        <div className="col-12 col-sm-6">
                           <div className="happy-counts fadeInUp" data-delay="0.6">
                              <h3 className="counter">745<span>+</span></h3>
                              <h5 className="mb-0">Award Wining</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}

export default Home_contact