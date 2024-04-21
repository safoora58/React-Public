import './NavbarBtn.css'

function NavbarBtn(props) {
    let {name, age, family, job} = props
    return (
        <div>
            <h1>{name}</h1>
            <h1>{family}</h1>
            <h2>{age}</h2>
            <h2>{job}</h2>
        </div>
        
    )
}

export default NavbarBtn

NavbarBtn.defaultProps = {
    name: "reza",
    family:'bazdaran',
    age:'99',
    job:'hame kare'
}