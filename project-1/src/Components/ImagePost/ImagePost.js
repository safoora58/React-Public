import React from 'react'
import './ImagePost.css'

export default function ImagePost(props) {
    let { imageSrc } = props;
    return (
        <div className='ImagePost'>
            <div className='ImagePost-img-container'>
                <img src={imageSrc} alt="" />
                <p>Project #1</p>
            </div>
        </div>
    )
}


ImagePost.defaultProps = {
    imageSrc: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1.jpg"
}