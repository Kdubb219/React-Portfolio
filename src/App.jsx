import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveSection(index);
  };

  return (
    <>
      <Header onMenuItemClick={handleMenuItemClick} />
      <div className="content">
        {activeSection ===0 && <About/>}
        {activeSection ===1 && <Portfolio/>}
        {activeSection ===2 && <Resume/>}
        {activeSection ===3 && <Contact/>}
      </div>

      <Footer/>
    </>
  )
}

export default App
