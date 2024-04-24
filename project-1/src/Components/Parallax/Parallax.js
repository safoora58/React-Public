import React from 'react'
import './Parallax.css'
import Button from '../Button/Button'

export default function Parallax(props) {
  let { title, caption, children } = props
  // title = "We Change Everything WordPress"
  // caption = "This is the only WordPress theme you will ever want to use."
  return (
    <div className='Parallax'>
      <div className='parallax-img'>
        <p className='parallax-title'>{title}</p>
        <p className='parallax-caption'>{caption}</p>
        <div className='buttons'>
          <Button text="READ MORE" bgColor="#745CF9" borderColor="#745CF9" />
          <Button />
        </div>
      </div>

    </div>
  )
}
