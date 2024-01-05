import './App.css';
import Banner from './components/Banner';
import Features from './components/Features';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Features/>
    </div>
  );
}

export default App;
