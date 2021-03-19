import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import Types from './Types';
import Footer from './Footer'

function App (){
  return(
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Types />
      <Footer />
    </div>
  )
};

export default App;