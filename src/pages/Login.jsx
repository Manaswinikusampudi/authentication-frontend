import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Login() {

    const [formData, setFormData] = useState({
        userId: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/login", formData);

            alert(response.data);

        } catch (error) {

            alert("Login Failed");

            console.log(error);
        }
    };

    return (

        <div className="container">

            <div className="card">

                <h1>Login</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="userId"
                        placeholder="User ID"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="links">

                    <Link to="/changePassword">
                        Change Password
                    </Link>

                    <Link to="/forgotPassword">
                        Forgot Password
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Login;