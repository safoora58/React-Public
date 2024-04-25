import './App.css';

function App() {

  const carouselItems = document.querySelector('.carousel-items');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentPosition = 0; // Track current scroll position

  prevBtn.addEventListener('click', () => {
    currentPosition -= 200; // Adjust based on item width
    carouselItems.scrollBy({ left: currentPosition, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    currentPosition += 200;
    carouselItems.scrollBy({ left: currentPosition, behavior: 'smooth' });
  });


  return (
    <div className="App">

      <div className="carousel">
        <div className="carousel-items">
          <div className="carousel-item">Item 1</div>
          <div className="carousel-item">Item 2</div>
          <div className="carousel-item">Item 3</div>
        </div>
        <button id="prevBtn">Previous</button>
        <button id="nextBtn">Next</button>

      </div>


    </div>
  );
}

export default App;
