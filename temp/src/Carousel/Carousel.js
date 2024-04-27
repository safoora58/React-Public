import React, { useEffect, useRef } from 'react'
import './Carousel.css'

export default function Carousel({ children, autoplay, speed }) {
    let items = null
    useEffect(() => {

        items = document.querySelectorAll('.carousel-item');

        // setInterval(() => {
            items.forEach((item, index) => {
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.transform = `translateX(-webkit-calc(-${index}*100%))`
                        item.style.zIndex = `${index}`
                        item.style.backgroundColor = `#${Math.floor(Math.random() * 4654684654).toString(16)}`
                    }, 5000 * index); // 1 ثانیه مکث بین هر آیتم
                });
                item.style.transform = `translateX(-webkit-calc(-${0}*100%))`
                item.style.zIndex = `${0}`
            })
        // }, 1000 * items.length); // تغییر به زمان ک





    })




    return (
        <div className="carousel">
            <ul className="carousel-inner">
                <li className="carousel-item ">Item 1</li>
                <li className="carousel-item ">Item 2</li>
                <li className="carousel-item ">Item 3</li>
                <li className="carousel-item ">Item 4</li>
                <li className="carousel-item ">Item 5</li>
                <li className="carousel-item ">Item 6</li>
                <li className="carousel-item ">Item 7</li>
                <li className="carousel-item ">Item 8</li>
            </ul>
        </div>


    );
}




