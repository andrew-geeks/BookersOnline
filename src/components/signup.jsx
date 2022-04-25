import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup(){
    const [value,setValue] = useState("")
    const formData = {name:"",email:"",password:"",cpassword:""}
    const [formValues,setFormValues] = useState(formData);

    

    function formSubmit(){
        console.log(formValues)
        axios.post("http://localhost:4000/account/signup",formValues)
            .then(res =>{
                console.log(res.data)
            })
            .catch( error => {
                console.log('actionError', error )
                setValue("")
              });
        // const post = async()=>{
        //     try{
        //         const resp = await axios.post("http://localhost:4000/account/signup",formValues);
        //     }
        //     catch(err){
        //         console.log(err)
        //     }
        // }
        // post()
    }

    return(
        <div>
            <h2 className='signup-head'>Signup to BookersOnline!</h2>
            <p >{value}</p>
            {formValues.password!==formValues.cpassword?<p className='form-ps-wrong'>Password not matching⚠️!</p>:<p></p>}
            <div className='auth-block'>
                <form method='post'>
                    <input type="text" name='name' required placeholder='Full Name' size="40" value={formValues.name} onChange={(e) => setFormValues({...formValues, name: e.target.value})}></input>
                    <input type="email" name='email' required placeholder='Mail Id' size="40" value={formValues.email} onChange={(e) => setFormValues({...formValues, email: e.target.value})}></input>
                    <input type="password" name='password' required placeholder='Enter password' size="40" value={formValues.password} onChange={(e) => setFormValues({...formValues, password: e.target.value})}></input>
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
            </div>
        </div>
    )

}


export default Signup;