import { useEffect, useState } from 'react';
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeaderFixed from './components/HeaderFixed/HeaderFixed'
import Main from './components/Main/Main'

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    observer.observe(document.querySelector("#carouselExampleIndicators"));
  }, [])

  return (
    <div>
      <Header />
      {isVisible ? null : <HeaderFixed isVisible={isVisible} />}
      <Main isVisible={isVisible} />
      <Footer />
    </div>
  )
}

export default App
