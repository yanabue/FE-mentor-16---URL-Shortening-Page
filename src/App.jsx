import Navbar from './components/Navbar'
import Top from './components/Top'
import InputField from './components/InputField'
import Info from './components/Info'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      <header className="header"> 
        <Navbar />
      </header>
      <main className="main">
        <Top />
        <section className="middle">
          <InputField />
          <Info />
        </section>
        <PreFooter />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

