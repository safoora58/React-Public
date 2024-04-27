import React, { useEffect, useRef } from 'react'
import './Carousel.css'

export default function Carousel({ children, autoplay, speed }) {
    let items = null
    useEffect(() => {

        items = document.querySelectorAll('.carousel-item');

        // let index = 0

        // async function slider() {


        //     setInterval(() => {
        //         console.log(items[index].style.transform);
        //         items[index].style.transform = `translateX(-webkit-calc(-${index}*100%))`
        //         if (index === items.length - 1) {
        //             items.forEach(item => {
        //                 item.style.transform = `translateX(-webkit-calc(-${0}*100%))`
        //             });
        //             index = 0
        //         }
        //         index++

        //     }, 10000);
        //     await new Promise(resolve => setTimeout(resolve, 10000)); // صبر به مدت 1 ثانیه
        // }

        // slider()

        // async function createCarousel() {
        //     const carouselContainer = document.querySelector('.carousel-inner'); // کانتینر کروسل
        //     const slides = [...carouselContainer.querySelectorAll('.carousel-item')]; // اسلایدها
        //     const totalSlides = slides.length; // تعداد کل اسلایدها
        //     let currentSlideIndex = 0; // شاخص اسلاید فعلی

        //     // نمایش اسلاید اولیه
        //     showSlide(currentSlideIndex);

        //     // تابع برای نمایش اسلاید مشخص شده
        //     function showSlide(slideIndex) {
        //       slides.forEach((slide, index) => {
        //         slide.classList.remove('active'); // کلاس active رو از همه اسلایدها حذف کنید
        //         if (index === slideIndex) {
        //           slide.classList.add('active'); // به اسلاید فعلی کلاس active اضافه کنید
        //         }
        //       });
        //     }

        //     // تابع برای رفتن به اسلاید بعدی
        //     async function nextSlide() {
        //       currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // شاخص اسلاید بعدی رو محاسبه کنید
        //       await transitionSlides(currentSlideIndex - 1, currentSlideIndex); // ترنزیشن بین اسلایدها
        //       showSlide(currentSlideIndex); // اسلاید بعدی رو نمایش دهید
        //     }

        //     // تابع برای رفتن به اسلاید قبلی
        //     async function previousSlide() {
        //       currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; // شاخص اسلاید قبلی رو محاسبه کنید
        //       await transitionSlides(currentSlideIndex + 1, currentSlideIndex); // ترنزیشن بین اسلایدها
        //       showSlide(currentSlideIndex); // اسلاید قبلی رو نمایش دهید
        //     }

        //     // تابع برای ایجاد ترنزیشن بین اسلایدها
        //     async function transitionSlides(fromSlideIndex, toSlideIndex) {
        //       const fromSlide = slides[fromSlideIndex];
        //       const toSlide = slides[toSlideIndex];

        //       fromSlide.style.transition = 'transform 1s ease'; // تنظیم ترنزیشن برای اسلاید قبلی
        //       fromSlide.style.transform = 'translateX(-100%)'; // حرکت اسلاید قبلی به سمت چپ

        //       await new Promise(resolve => setTimeout(resolve, 1000)); // صبر به مدت 1 ثانیه

        //       toSlide.style.transition = 'transform 1s ease'; // تنظیم ترنزیشن برای اسلاید فعلی
        //       toSlide.style.transform = 'translateX(0)'; // نمایش اسلاید فعلی
        //     }

        // دکمه‌های بعدی و قبلی
        // const nextButton = document.querySelector('.next-button');
        // const previousButton = document.querySelector('.previous-button');

        // nextButton.addEventListener('click', nextSlide);
        // previousButton.addEventListener('click', previousSlide);

        // شروع کروسل به طور خودکار
        //     setInterval(nextSlide, 2000); // اسلایدها را هر 2 ثانیه به طور خودکار تغییر دهید
        //   }

        //   createCarousel();


        const carouselContainer = document.querySelector('.carousel-inner');
        const slides = [...carouselContainer.querySelectorAll('.carousel-item')];
        const totalSlides = slides.length;
        let currentSlideIndex = 0;

        function showSlide(slideIndex) {
            slides.forEach((slide, index) => {
                // slide.classList.remove('active');
                slide.style.opacity = 0;
                console.log(index);
                if (index === slideIndex) {
                    // slide.classList.add('active');
                    slide.style.opacity = 1;
                }
            });
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
            showSlide(currentSlideIndex);
        }

        function previousSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentSlideIndex);
        }

        setInterval(nextSlide, 2000); // اسلایدها را هر 2 ثانیه به طور خودکار تغییر دهید

       

        // کد برای اضافه کردن دکمه های next و previous (اختیاری)

        // const nextButton = document.querySelector('.next-button');
        // const previousButton = document.querySelector('.previous-button');

        // if (nextButton) {
        //     nextButton.addEventListener('click', nextSlide);
        // }

        // if (previousButton) {
        //     previousButton.addEventListener('click', previousSlide);
        // }




    })




    return (
        <div className="carousel">
            <ul className="carousel-inner">
                <li className="carousel-item  ">Item 1</li>
                <li className="carousel-item ">Item 2</li>
                <li className="carousel-item ">Item 3</li>
                <li className="carousel-item ">Item 4</li>
                <li className="carousel-item active">Item 5</li>
                {/* <li className="carousel-item ">Item 6</li>
                <li className="carousel-item ">Item 7</li>
                <li className="carousel-item ">Item 8</li> */}
            </ul>
        </div>


    );
}




