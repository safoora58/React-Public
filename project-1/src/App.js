import './App.css';
import NavbarBtn from './Components/NavbarBtn/NavbarBtn';
import Header from './Components/Header/Header'
import Parallax from './Components/Parallax/Parallax'
import Main from './Components/Main/Main'
import Button from './Components/Button/Button';
import ImagePost from './Components/ImagePost/ImagePost'
import Clients from './Components/Clients/Clients'

function App() {
  const caption1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis."
  const caption2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis."
  const imgSrc = [
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447834353189-91c48abf20e1-1-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1430329429612-babb42f88673-1-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449057528837-7ca097b3520c-1-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449168013943-3a15804bb41c-1-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451186859696-371d9477be93-1-1.jpg',
    'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1448518184296-a22facb4446f-1-1.jpg'
  ]
  const person = [
    { name: 'Aigars Silkalns', img: 'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/Aigars-Silkalns-150x150.jpg', description: 'Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper.' },
    // { name: 'John Doe', img: 'https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/mike-muller-150x150.jpg', description: 'Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.' }

  ]
  const paralell2 = document.querySelector('.parallax-custom2')

  return (
    <div className="app-container">
      <Header></Header>
      <Parallax title="We Change Everything WordPress" caption={caption1} />
      <Main></Main>
      <Parallax title="Small Parallax Section" caption={caption2} />

      <div className='parallax-custom'>
        <p className='parallax-custom-title'>Limitless Options</p>
        <p className='parallax-custom-caption'>Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante</p>
        <div className='buttons'>
          <Button text="DOWNLOAD NOW" bgColor="#745CF9" borderColor="#745CF9" />
        </div>
      </div>


      <img className='image-res' src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1440557653082-e8e186733eeb-1.jpg" alt="" />

      <div className='projects'>
        <p className='projects-title'>Our Latest Projects</p>
        <p className='projects-caption'>Here is our latest projects. You'll love them!</p>
      </div>

      <div className='imagePost-all'>
        {imgSrc.map((item, index) => {
          return (<ImagePost imageSrc={item} />)
        })}
      </div>
      <div className='parallax2-container'>
        {
          person.map((item, index) => {
            return (
              <div className='parallax-custom2'>
                <p className='parallax-custom-title'>What Our Customers Say</p>
                <p className='parallax-custom-caption'>{item.description}</p>
                <div className='person'>
                  <div className='row'>
                    <span className='person-prev'>⟨</span>
                    <span className='person-img'><img src={item.img} alt="" /></span>
                    <span className='person-next'>⟩</span>
                  </div>
                  <span className='person-name'>{item.name}</span>
                </div>
              </div>
            )
          })
        }
      </div>
        <Clients/>

    </div>
  );
}

export default App;
