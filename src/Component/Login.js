import React from 'react';
import login from '../login.json';
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


function Login() {

    let location = useLocation();
    let navigate = useNavigate();

    let [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    let { email, password } = formData;


    function handleChange(e) {

        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // **IMP** in this case setFormData({ ...formData, name: e.target.value});
        // the function would every time  change the value of the input field with the attribute  "name".

        //@??ask@ [name] is tracking key and value is tracking property of object.

        // console.log(formData);  // printing empty initial oobject of state

        //    Spread Operator : ... is for take all properties(with the values of course) of an array or object
        //    const arr = ["a", "b","c"]
        //    console.log(...arr)  //a,b,c
    }



    function handleSubmit(value) {
        // e.preventDefault();
        // console.log(e)
        console.log(value.target[0].value); //email
        console.log(value.target[1].value); //password

        if (login.email === value.email && login.password === value.password) {
            alert("Login successful!!")

            navigate("/Signup", true)

        }

    }

    return (
        <div className='main-form'>
            <form onSubmit={handleSubmit} className="login-form">
                <h2> Login </h2>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={email} />

                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={password} />

                </div>
                <button className="sign-in" type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Login