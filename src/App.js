import './App.css';
import './Loader.css'
import { Suspense, lazy } from 'react';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import MainContent from './Components/MainContent';
// import ScrollToTopButton from './Components/ScrollToTopButton';
const Header = lazy(() => import('./Components/Header'))
const Footer = lazy(() => import('./Components/Footer'))
const MainContent = lazy(() => import('./Components/MainContent'))
const ScrollToTopButton = lazy(() => import('./Components/ScrollToTopButton'))

function App() {
  return (
    <div>
      <Suspense fallback={
      <div className='loader'>
      <div className="boxes">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </div>
      }>
      <Header />
      <MainContent />
      <Footer />
      <ScrollToTopButton />
      </Suspense>
    </div>
  );
}

export default App;
