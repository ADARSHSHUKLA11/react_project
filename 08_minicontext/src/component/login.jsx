import React ,{useState, useContext} from 'react'
import userContext from '../context/userContext'

function Login(){
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const {setUser}= useContext(UserContext)

    const handleSubmit=()=>{
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2> login</h2>
            <input type='text' 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'/>
            <input type='text' 
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder='username' />
            <input type='text' placeholder='password' />

            <button onClick={handleSubmit }>Submit</button>

        </div>
       
    )
}

export default Login