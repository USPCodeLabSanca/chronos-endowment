import GlobalStyles from './styles/GlobalStyles'

import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import AboutUs from './sections/AboutUs'
import Governance from './sections/Governance'
import Form from './sections/Form'



function App() {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <AboutUs/>
      <Governance/>
      <Form/>
    </>
  );
}

export default App;
