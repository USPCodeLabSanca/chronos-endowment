import GlobalStyles from './styles/GlobalStyles'

import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import AboutUs from './sections/AboutUs'
import Form from './sections/Form'



function App() {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <AboutUs/>
      <Form/>
    </>
  );
}

export default App;
