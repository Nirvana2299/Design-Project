import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
