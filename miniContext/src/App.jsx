
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'
Profile


function App() {
  

  return (
    <UserContextProvider>
      <h1 className= "text-3xl bg-gray-600" >Context API Sample Project</h1>
      <Login/>
      <Profile/>
     
       
    </UserContextProvider>
  )
}

export default App
