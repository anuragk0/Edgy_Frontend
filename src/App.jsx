import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import SignUp from './screens/Sign/SignUp'
import Login from './screens/Sign/Login'
import SectionContainer from './layout/Section/SectionContainer'
import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../store/User/UserAction';
import Loading from './components/Loading'

function App() {
  const dispatch = useDispatch();
  const isAuthChecked = useSelector(state => state.user.authChecked);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!isAuthChecked) {
    return <Loading/>;
  }

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<SectionContainer />} />
          <Route path="/about" element={
            <div className="card">
              <h1>About Us</h1>
              <p>Learn more about our company and mission.</p>
            </div>
          } />
          <Route path='/signup'  element={<SignUp/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
