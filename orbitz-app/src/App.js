import logo from './logo.svg';
import './App.css';
import "./index.css"
import Nav from "./Components/Navbar"
import Footer from "./Components/Footer"
import MiddleSection from "./Home/Header"

import AllHomePage from './Home/HomePage';

function App() {
  return (
    <div className="App">
      <Nav />
      <MiddleSection/>
      
      <Footer />
      
    </div>
  );
}

export default App;
