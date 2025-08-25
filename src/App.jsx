import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Counter from './pages/Counter'
// import Footer from './components/Footer'

function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Counter/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App