import Navbar from "./components/Navbar.jsx"
import MainBody from "./components/MainBody.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <MainBody />
      </main>
      <Footer />
    </div>
  )
}


export default App