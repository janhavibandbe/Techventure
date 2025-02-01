import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Event from './pages/Event';
import Faq from './pages/Faq';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ACSEShome from './pages/ACSEShome';

function App() {
  return(
    <>
    <Navbar/>

    <Routes>
      <Route exact path='/' element={<ACSEShome/>}/>
      <Route exact path='/techventure' element={<Home/>}/>
      <Route exact path='/techventure/about' element={<About/>}/>
      <Route exact path='/techventure/event/:id' element={<Event/>}/>
      <Route exact path='/techventure/gallery' element={<Gallery/>}/>
      <Route exact path='/techventure/faq' element={<Faq />} /> 
    </Routes>

    <Footer/>

    <ToastContainer
      position="top-right"
      autoClose={2000}
      pauseOnHover={false}
      theme="colored"
    />
    </>
  )
}

export default App

