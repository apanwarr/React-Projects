import { useContext } from "react";
import UserContext from "../context/UserContext";
import React from "react";

function Profile(){
    const {user} = useContext(UserContext)
    
    if(!user){
        return <div>Please Login!</div>
    }else{
        return <div>Welcome ! {user.username}</div>
    }
}

export default Profile;