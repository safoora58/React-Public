import './NavbarBtn.css'

function NavbarBtn(props) {
    let { name, children } = props

    return (
        <div className="container">
            <button>{name}</button>
        </div>



    )
}

export default NavbarBtn

NavbarBtn.defaultProps = {}