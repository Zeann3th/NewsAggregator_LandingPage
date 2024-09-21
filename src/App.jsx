import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main className='font-consolas text-[20px]'>
      <NavBar />
      <Hero />
      <Feature />
      <Footer />
    </main>
  )
}

export default App
