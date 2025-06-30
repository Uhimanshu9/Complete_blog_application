import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/authSlice.js'
import { authService } from './appwrite/auth.js'


function App() {
   //create a loading state
  const [loading ,setLoading] = useState(true)
  const dispatch = useDispatch()


  //check if user is database on app load
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{ 
      if(userData) dispatch(login({userData}))
      else dispatch(logout())
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header/>
      <h1>Welcome to the Blog</h1>
      <Footer/>
    </div>
  ):(<>Go to login</>)
 
}


export default App
