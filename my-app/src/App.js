import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Service from './component/Service';
import Project from './component/Project';
import About from './component/About';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <Project />
      <About />
      <Footer />        
    </div>
  );
}

export default App;
