import './App.css';
import NavBar from './components/navbar/NavBar';
import IntroVedio from './components/intro_vedio/IntroVedio';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <IntroVedio/>
      <Body/>
      <Footer/>
    
    </div>
  );
}

export default App;
