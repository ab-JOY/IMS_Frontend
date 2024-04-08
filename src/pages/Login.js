import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
    let navigate = useNavigate()

    const [ourusers, setUser] = useState({
        email: "",
        password: ""
    })

    const { email, password } = ourusers

    const onInputChange = (e) => {
        setUser({ ...ourusers, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        try{
            e.preventDefault();
            const response = await axios.post(`http://localhost:8080/auth/signin`, ourusers);
            if(response.data && response.data.token){
                localStorage.setItem('token', response.data.token)
                navigate("/admin")
            } else{
                alert("Invalid username or password. Please try again.");
            } 
            
        }catch (error){
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    }

    return (
        <div className="container">
            <div className="form col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Login</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="email"
                            autoComplete="off"
                            required
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">
                            Password
                        </label>
                        <input
                            type={"password"}
                            className="form-control"
                            placeholder="password"
                            required
                            name="password"
                            value={password}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="space-x-10">
                    <button type="submit" className="btn btn-outline-primary" onSubmit>
                        Login
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                </div>
                </form>

            </div>
        </div>
    )
}
