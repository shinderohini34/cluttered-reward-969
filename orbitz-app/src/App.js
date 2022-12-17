import logo from './logo.svg';
import './App.css';
import "./index.css"
import Nav from "./Components/Navbar"
import Footer from "./Components/Footer"
import AllHomePage from './Home/AllHomePage';

function App() {
  return (
    <div className="App">
      <Nav />
      <AllHomePage/>
      <Footer />
      
    </div>
  );
}

export default App;
