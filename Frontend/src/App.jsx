import './App.css'
import HeroSection from './components/HeroSection'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Footer from './Components/Footer';
import InstaLink from './Components/InstaLink';
import Blogs from './Components/Blogs';
function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <MainContent />
      <Blogs />
      <InstaLink />
      <Footer />
    </>
  )
}

export default App
