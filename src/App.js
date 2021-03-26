import GlobalStyles from './styles/GlobalStyles'

import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import AboutUs from './sections/AboutUs'



function App() {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <AboutUs/>
    </>
  );
}

export default App;
