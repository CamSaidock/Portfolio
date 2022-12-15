import './App.css';
import Intro from './Components/Intro/Intro';
import './Fonts/KrossNeueGrotesk-Light copy.ttf'
import './Fonts/KrossNeueGrotesk-Book copy.ttf'
import './Fonts/KrossNeueGrotesk-Thin copy.ttf'
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
