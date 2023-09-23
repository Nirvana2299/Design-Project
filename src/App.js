import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import { useState, useEffect } from 'react';




function App() {
  // const [page, setPage] = useState('home');
  // const [darkMode, setDarkMode] = useState(true);
  // const [stickyMenu, setStickyMenu] = useState(false);
  // const [navigationOpen, setNavigationOpen] = useState(false);
  // const [scrollTop, setScrollTop] = useState(false);

  // useEffect(() => {
  //   // Load darkMode state from localStorage on component initialization
  //   const storedDarkMode = localStorage.getItem('darkMode');
  //   if (storedDarkMode !== null) {
  //     setDarkMode(JSON.parse(storedDarkMode));
  //   }

  //   // Watch for changes in darkMode and update localStorage
  //   localStorage.setItem('darkMode', JSON.stringify(darkMode));
  // }, [darkMode]);

  // // Add a scroll event listener to handle scrollTop
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollTop(window.scrollY > 20);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // // Set the className based on darkMode
  // const bodyClass = darkMode ? 'b eh' : '';

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
