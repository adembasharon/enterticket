import {useState} from "react";
import React from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { visuallyHidden } from "@mui/utils";
const Login=()=>{
    const [values, setValues]=useState({
password:"",
showPassword:false
    }
);


    const togglePassWordVissibility=()=>{
        setValues({showPassword:!values.showPassword})
    };
    return(
        <>

        <div>
        
            <div className='login-page'>
            <div className="login-container">
            <div className='login-content'>
<h1 className='login-heading'>LOGIN</h1>
<div className='login-email-adress'>
    
<input className="email-adress emailPassword" type="text" placeholder="" />
<label for="email" className='inputLabel'>Email</label>
</div>

<div className='login-email-adress'>
    
<input className="email-adress emailPassword" type="text" placeholder="" />
<label for="id number" className='inputLabel'>Id Number</label>
</div>


<div className='visibility'>
    <div className="password-container">
    
<input className='password emailPassword' type={values.showPassword ? "text":'password'} placeholder=''/>
<label className='inputLabel'>Password</label>
</div>
<div className='visibility-icon'>
<div className='view' onClick={togglePassWordVissibility}>
    {values.showPassword?<VisibilityIcon /> :<VisibilityOffIcon />}
</div>
</div>
</div>
<div className="loginbtn">
<input className='login' type="button" value="Login" />
</div>

<div className="check">
<div>
<input type="checkbox" />
<label>Remember me</label>
</div>
<div>
<p><a href="#"></a> Forgot Your Password</p>

</div>


<button>Create Account</button>
</div>
<div className='emptyDiv'></div>
</div>
</div>
</div>


           </div>
           </>
    )
}




export default Login