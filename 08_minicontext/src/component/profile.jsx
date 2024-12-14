import React ,{useState, useContext} from 'react'
import userContext from '../context/userContext'

function profile(){
    const {user}= useContext(UserContext)
    
    if(!user) return <div>please login</div>
    return <div>welcome {user.username}</div>


}
export default profile