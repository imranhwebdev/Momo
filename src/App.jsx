import { React } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import MomoMap from './components/Momomap';
import GetMomo from './components/GetMomo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <HowToBuy />
      <Tokenomics />
      <MomoMap />
      <GetMomo />
      <Footer />
    </>
  )
}

export default App
