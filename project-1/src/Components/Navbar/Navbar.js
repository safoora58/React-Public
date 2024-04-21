
import './Navbar.css'
import NavbarBtn from '../NavbarBtn/NavbarBtn'

export default function Navbar(props) {
    return (
        <div className='navbar-container'>
            <NavbarBtn text="HOME" />
            <NavbarBtn text="BLOG" />
            <NavbarBtn text="PORTFOLIO" />
            <NavbarBtn text="ABOUT THE TESTS">
                <div className='sub-menu'>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                </div>
            </NavbarBtn>
            <NavbarBtn text="LEVEL">
                <div className='sub-menu'>
                    <ul>
                        <li>item 1
                            <div className='sub-menu-2'>
                                <ul>
                                    <li>item 1-1</li>
                                    <li>item 1-2</li>
                                    <li>item 1-3</li>
                                    <li>item 1-4</li>
                                </ul>
                            </div>
                        </li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                </div>
            </NavbarBtn>
            <NavbarBtn text="SHOP" />


        </div>
    )
}


Navbar.defaultProps = {}