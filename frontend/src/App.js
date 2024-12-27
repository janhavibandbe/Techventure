import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Event from './pages/Event';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return(
    <>
    <Navbar/>

    <Routes>
      <Route exact path='/techventure' element={<Home/>}/>
      <Route exact path='/techventure/about' element={<About/>}/>
      <Route exact path='/techventure/event/:id' element={<Event/>}/>
      <Route exact path='/techventure/gallery' element={<Gallery/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App

