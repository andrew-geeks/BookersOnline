import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

function Signup(){

    const formData = {name:"",email:"",password:"",cpassword:""}
    const [formValues,setFormValues] = useState(formData);
    const [isdisabled,setDisabled] = useState(true);

    function formSubmit(){
        console.log("form test")
    }

    return(
        <div>
            <h2 className='signup-head'>Signup to BookersOnline!</h2>
            {formValues.password!==formValues.cpassword?<p className='form-ps-wrong'>Password not matching⚠️!</p>:<p></p>}
            <div className='auth-block'>
                <form method='POST' action='./signup'>
                    <input type="text" name='name' required placeholder='Full Name' size="40" value={formValues.name} onChange={(e) => setFormValues({...formValues, name: e.target.value})}></input>
                    <input type="email" name='email' required placeholder='Mail Id' size="40" value={formValues.email} onChange={(e) => setFormValues({...formValues, email: e.target.value})}></input>
                    <input type="password" name='password' required placeholder='Enter password' size="40" value={formValues.password} onChange={(e) => setFormValues({...formValues, password: e.target.value})}></input>
                    <input type="password" required placeholder='Confirm password' size="40" value={formValues.cpassword} onChange={(e) => setFormValues({...formValues, cpassword: e.target.value})}></input>
                    <button type='submit' onClick={formSubmit} disabled={isdisabled}>Sign Up</button>
                </form>
                <hr></hr>
            </div>
        </div>
    )

}


export default Signup;