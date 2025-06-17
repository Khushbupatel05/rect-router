import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './assets/Components/Header'
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Services from './assets/Pages/Services';
import User from './assets/Pages/User';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
           <Route path='/' element={<Home />} ></Route>
           <Route path='/About' element={<About/>}></Route>
           <Route path='/Services' element={<Services/>}></Route>
           <Route path='/User/' element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;