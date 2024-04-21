import './App.css';
import NavbarBtn from './Components/NavbarBtn/NavbarBtn';

function App() {
  const navbarBtnProps = { name: 'Shop' };
  return (
    <div className="app-container">
      <NavbarBtn {...navbarBtnProps}></NavbarBtn>
    </div>
  );
}

export default App;
