import './App.css';
import NavbarBtn from './Components/NavbarBtn/NavbarBtn';

function App() {
  const navbarBtnProps = { name: 'reza', family: 'bazdaran', age: 40, job: 'web developer' };
  return (
    <div className="app-container">
      <NavbarBtn {...navbarBtnProps} />
    </div>
  );
}

export default App;
