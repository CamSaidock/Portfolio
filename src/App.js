import React, {useRef, useEffect, useState} from 'react';
import './styles.css'
import './App.css'
import './Fonts/KrossNeueGrotesk-Light copy.ttf'
import './Fonts/KrossNeueGrotesk-Book copy.ttf'
import './Fonts/KrossNeueGrotesk-Thin copy.ttf'
import './Fonts/KrossNeueGrotesk-BookItalic.ttf'
import './Fonts/KrossNeueGrotesk-Heavy.ttf'
import './Fonts/KrossNeueGrotesk-Bold.ttf'
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Trees from './Components/SkyLine/Trees';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import styles from './styles.css';
import AboutDesc from './Components/About-Desc/AboutDesc';
import MakersInfo from './Components/RoleInfo/MakersInfo';
import AIMInfo from './Components/RoleInfo/AIMInfo';
import TroylabsInfo from './Components/RoleInfo/TroylabsInfo';
import { Routes, Route, Link } from "react-router-dom";
import MainContent from './Components/MainContent/MainContent';
import ColumbiaInfo from './Components/RoleInfo/ColumbiaInfo';
import RHAInfo from './Components/RoleInfo/RHAInfo';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';

function App() {

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <div className='container'>
      <Trees/>
      {loading === false ? (
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/Makers" element={<MakersInfo />} />
        <Route path="/AIM" element={<AIMInfo />} />
        <Route path="/TroyLabs" element={<TroylabsInfo />} />
        <Route path="/RHA" element={<RHAInfo />} />
        <Route path="/Columbia" element={<ColumbiaInfo />} />
      </Routes>
      ) : (
        <LoadingScreen />
      )}

    </div>
  );
}

export default App;

/*

<Routes>
  <Route path="/" element={<MainContent />} />
  <Route path="/Makers" element={<MakersInfo />} />
  <Route path="/AIM" element={<AIMInfo />} />
  <Route path="/TroyLabs" element={<TroylabsInfo />} />
</Routes>

function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

*/