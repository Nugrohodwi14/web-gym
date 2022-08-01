import './App.css';
import Hero from './components/Hero';
import Programs from './components/programs/programs';

function App() {
  return (
    <div className="App">
      {/* <span style={{ color: 'white' }}> Web Gym </span> */}
      <Hero />
      <Programs />
    </div>
  );
}

export default App;
