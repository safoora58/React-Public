import React from 'react'
import './Carousel.css'

export default function Carousel() {
    const carousel = document.querySelector('.carousel');
    console.log(carousel);
    const slidesContainer = document.querySelector('.slides');
    const slide = document.querySelectorAll('.item')[0];
    console.log(slide);
    let currentSlide = 0;

    function moveToSlide(slideIndex) {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
    }

    setInterval(() => {
        // moveToSlide(1);
    }, 1000);
    return (
        <div className='Carousel-comp'>
            <div className='carousel'>
                <div className='slides'>
                    <div className='item'>
                        <img src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1448518184296-a22facb4446f-1-1.jpg" alt="" />
                    </div>
                    <div className='item'>
                        <img src="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1430329429612-babb42f88673-1-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
