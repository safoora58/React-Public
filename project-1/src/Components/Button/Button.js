import React, { useEffect, useRef } from 'react'
import "./Button.css"



<button data-color="red"></button>

export default function Button(props) {
    let { text, bgColor, textColor, borderColor } = props


    return (
        <div className='Button'>

            <button className='btn1' style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}>{text}</button>

        </div>
    )
}


Button.defaultProps = {
    text: "DOWNLOAD NOW",
    textColor: "white",
    bgColor: "transparent",
    borderColor : "white"
}