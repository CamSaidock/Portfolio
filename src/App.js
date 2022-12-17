import './App.css';
import Intro from './Components/Intro/Intro';
import './Fonts/KrossNeueGrotesk-Light copy.ttf'
import './Fonts/KrossNeueGrotesk-Book copy.ttf'
import './Fonts/KrossNeueGrotesk-Thin copy.ttf'
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Trees from './Components/Trees/Trees';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Trees/>
      <Intro/>
    </div>
  );
}

export default App;
