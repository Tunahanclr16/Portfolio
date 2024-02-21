
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './components/navbar/Header'
import Footer from './components/footer/Footer'
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import ProjectsPage from './Pages/ProjectsPage'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        <BrowserRouter >
        <Header/>
        <div className="flex-grow">
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/contact' element={<Contact/>} />
          </Routes>
        
        </div>
        <Footer/>
        </BrowserRouter>
        <p>
        </p>
    </div>
  )
}

export default App
