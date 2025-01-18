import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import ScrollToTop from './components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop/>
    <App />
  </BrowserRouter>
)

