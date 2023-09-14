import './App.css';
import Navbar from './components/navbar';
import Intro from "./components/intro";
import Cont from './components/cont';
import About from './components/about';
import Products from './components/products';
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Products />
      <Cont />
      <About />
      <Footer />
    </>
  )
}

export default App;