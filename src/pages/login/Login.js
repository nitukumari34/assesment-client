import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorage";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    async function handleSubmit(e) {
        e.preventDefault();


        const result = axiosClient.post("/auth/login", {
            email,
            password,
        });
       navigate('/');
        setItem(KEY_ACCESS_TOKEN, result.accessToken);

        console.log(result);



    }

    return (
        <div className="Login">
            <div className="login-box">
                <h2 className="heading">Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" className="submit" />
                </form>

                <p className="subheading">
                    Do not have an account? <Link to="/signup"> Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;


// // src/components/Login.js

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = ({ history }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         // Implement your login logic here
//         // You may want to send a request to your backend for user authentication
//         // For simplicity, let's assume a successful login redirects to the home page
//         history.push('/');
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <button onClick={handleLogin}>Login</button>
//             <p>
//                 Don't have an account? <Link to="/signup">Sign Up</Link>
//             </p>
//         </div>
//     );
// };

// export default Login;
