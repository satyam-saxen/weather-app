// import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="ft">My Weather</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        <h3 id="foot">It could be better</h3>
      </footer>
    </div>
  );
}

export default App;
