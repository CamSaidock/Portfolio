import './App.css';
import './Fonts/KrossNeueGrotesk-Light copy.ttf'
import './Fonts/KrossNeueGrotesk-Book copy.ttf'
import './Fonts/KrossNeueGrotesk-Thin copy.ttf'
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Trees from './Components/Trees/Trees';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
