import React from "react";
import {useNavigate} from "react-router-dom";

function Signup (){
    let navigate = useNavigate()
    
    function Logout(){
        navigate('/',true)
        }
    
return(
    <>
    <div className="sign-up-page" >Login sucessfull welcome to Dashboard.</div>
    <form>
        <button className="logout" onClick={Logout} > Logout </button>
    </form>
    </>
)    
}

export default Signup;