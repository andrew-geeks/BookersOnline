import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup(){
    const [value,setValue] = useState("") //for mail
    const formData = {name:"",email:"",password:"",cpassword:""}
    const [formValues,setFormValues] = useState(formData);

    
    const formSubmit = (e) =>{
        e.preventDefault()   //used to stop page refreshing
        console.log(formValues)
        axios.post("http://localhost:4000/account/signup",formValues)
            .then(res =>{
                console.log(res.data)
                setValue("")
            })
            .catch( error => {
                console.log('actionError', error )
                setValue("Mail already used⚠️!")
              });

    }

    return(
        <div>
            <h2 className='signup-head'>Signup to BookersOnline!</h2>
            <p className='mail-notify'>{value}</p>
            {formValues.password!==formValues.cpassword?<p className='form-ps-wrong'>Password not matching⚠️!</p>:<p></p>}
            <div className='auth-block'>
                <form method='post'>
                    <input type="text" name='name' required placeholder='Full Name' size="40" value={formValues.name} onChange={(e) => setFormValues({...formValues, name: e.target.value})}></input>
                    <br></br>
                    <input type="email" name='email' required placeholder='Mail Id' size="40" value={formValues.email} onChange={(e) => setFormValues({...formValues, email: e.target.value})}></input>
                    <br></br>
                    <input type="password" name='password' required placeholder='Enter password' size="40" value={formValues.password} onChange={(e) => setFormValues({...formValues, password: e.target.value})}></input>
                    <br></br>
                    <input type="password" required placeholder='Confirm password' size="40" value={formValues.cpassword} onChange={(e) => setFormValues({...formValues, cpassword: e.target.value})}></input>
                    <button 
                        type='submit'  
                        onClick={formSubmit}
                        disabled={
                            formValues.password!==formValues.cpassword?true:false ||
                            formValues.name===""?true:false ||
                            formValues.email===""?true:false || 
                            formValues.password===""?true:false
                        }>
                        Sign Up
                    </button>
                </form>
                <hr></hr>
                <h2>Or</h2>
            </div>
            <div className='auth-btns'>
                    <button><a href="https://www.freepnglogos.com/pics/google-logo" title="Image"><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="30" alt="google logo" /></a></button>
                    <button><img alt="" src="https://bn1304files.storage.live.com/y4mmGHusx-KkcAh_jjoOxJbNxLTAvS8ZJCi5J46cTlNB5yOUlCAD_TAVJCjtxx_2P3wjxXhEddIjqReIy-nWtmo9eFS1tquLKIpVgGRmM-jGtdocJ3tRgLqNWHikhHjXdxz19464-q26zhMDKRw12hLoiPXzPnOoGlYp1RHlMqJocbojcVNYKWPC4926P4QNw7u?width=2000&height=1400&cropmode=none" width="45" height="35" /></button>
            </div>
        </div>
    )

}


export default Signup;