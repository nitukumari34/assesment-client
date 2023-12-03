import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Signup.scss';
import { axiosClient } from '../../utils/axiosClient';


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();


        const result = axiosClient.post("/auth/signup", {
            name,
            email,
            password,
        });


        console.log(result);


    }

    return (
        <div className='Signup'>
            <div className='signup-box'>
                <h2 className='heading'>Sign Up</h2>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="name">Name</label>
                    <input type="text" className='name' id='name'
                        onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input type="email" className='email' id='email'
                        onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" className='password' id='password'
                        onChange={(e) => setPassword(e.target.value)} />

                    <input type="submit" className='submit' />
                </form>

                <p className='subheading'>Already  have an account? <Link to="/login"> Log In</Link> </p>

            </div>
        </div>
    )
}

export default Signup


// src/components/SignUp.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SignUp = ({ history }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignUp = () => {
//         // Implement your signup logic here
//         // You may want to send a request to your backend for user registration
//         // For simplicity, let's assume a successful signup redirects to the login page
//         history.push('/login');
//     };

//     return (
//         <div>
//             <h2>Sign Up</h2>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <button onClick={handleSignUp}>Sign Up</button>
//             <p>
//                 Already have an account? <Link to="/login">Login</Link>
//             </p>
//         </div>
//     );
// };

// export default SignUp;
