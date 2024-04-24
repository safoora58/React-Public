import React from 'react'
import './Main.css'
import Button from '../Button/Button'

export default function Main(props) {
    let { children } = props
    return (
        <div className='Main'>
            <section>
                <div className='image'>
                    <img src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png" alt="photo2" />
                </div>
                <div>
                    <p className='title'>SEO Friendly</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies</p>
                    <Button text="READ MORE" bgColor="#745CF9" borderColor="#745CF9" />
                </div>
                <div>
                    <p className='title'>Portfolio Section</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies</p>
                    <Button text="SEE IT IN ACTION" bgColor="#745CF9" borderColor="#745CF9" />

                </div>
                <div className='image'>
                    <img src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png" alt="photo2" />
                </div>

            </section>

        </div>
    )
}
