import './NavbarBtn.css'

function NavbarBtn(props) {
    let { text, children } = props

    return (
        <div className="nav-btn-container">
            <a href="#" className='nav-btn'>{text}</a>
            {children}
        </div>



    )
}

export default NavbarBtn

NavbarBtn.defaultProps = {}