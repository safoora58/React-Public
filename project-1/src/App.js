import './App.css';
import NavbarBtn from './Components/NavbarBtn/NavbarBtn';
import Header from './Components/Header/Header'
import Parallax from './Components/Parallax/Parallax'
import Main from './Components/Main/Main'
import Button from './Components/Button/Button';

function App() {
  const caption1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis."
  const caption2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis."
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



    </div>
  );
}

export default App;
