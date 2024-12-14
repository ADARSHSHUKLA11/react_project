
import './App.css'
import login from './component/login'
import profile from './component/profile'


import UserContextProvider from "./context/usercontextprovider"

function App() {
 

  return (

    <UserContextProvider>
      <h1>
        react and chai with adarsh
      </h1>
      <login/>
      <profile/>
     
    </UserContextProvider>
  )
}

export default App
