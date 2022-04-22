import './App.css';
import Navbar from './components/navbar/navbar.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/signin.js'
import NotFound from './pages/notfound.js'
import Home from './pages/home.js'
import SignUp from './pages/signup.js'
import Schedule from './pages/schedule.js'

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="NotFound" element={<NotFound/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
   </> 
  );
}

export default App;
