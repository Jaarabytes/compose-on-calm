import './App.css';
import Navbar from './components/navbar';
import Intro from "./components/intro";
import Cont from './components/cont';
import About from './components/about';
import Products from './components/products';
function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Products />
      <Cont />
      <About />
    </>
  )
}

export default App;