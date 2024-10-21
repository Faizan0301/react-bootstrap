import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {

    const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
    return (
        <>
            <div className="testimonial-section before-footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonials</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <Swiper 
                            spaceBetween={ 30 }
                            centeredSlides={ true }
                            autoplay={ {
                                delay: 2500,
                                disableOnInteraction: false,
                                
                            } }
                            pagination={{
                                clickable: true
                            }}
                            modules={ [Autoplay, Pagination, Navigation] }
                            className="testimonial-slider-wrap text-center"
                            >
                                <div id="testimonial-nav">
                                    <span className="prev ms-3" ><span className="fa fa-chevron-left" /></span>
                                    <span className="next" ><span className="fa fa-chevron-right" /></span>
                                </div>
                                <div className="testimonial-slider">
                                        <SwiperSlide className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">
                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                                        </blockquote>
                                                        <div className="author-info">
                                                            <div className="author-pic">
                                                                <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                            </div>
                                                            <h3 className="font-weight-bold">Maria Jones</h3>
                                                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    {/* END item */ }
                                        <SwiperSlide className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">
                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                                        </blockquote>
                                                        <div className="author-info">
                                                            <div className="author-pic">
                                                                <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                            </div>
                                                            <h3 className="font-weight-bold">Maria Jones</h3>
                                                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    {/* END item */ }
                                        <SwiperSlide className="item">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-8 mx-auto">
                                                    <div className="testimonial-block text-center">
                                                        <blockquote className="mb-5">
                                                            <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                                        </blockquote>
                                                        <div className="author-info">
                                                            <div className="author-pic">
                                                                <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                            </div>
                                                            <h3 className="font-weight-bold">Maria Jones</h3>
                                                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    {/* END item */ }
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Slider