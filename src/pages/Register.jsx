import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import API from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        userId: "",
        username: "",
        dob: "",
        password: "",
        question1: "",
        answer1: "",
        question2: "",
        answer2: ""
    });

    const questions = [
        "What is your nickname?",
        "What is your birthplace?",
        "What is your favourite food?",
        "What is your pet name?",
        "What is your favourite color?"
    ];

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validatePassword = (password) => {

        const regex =
            /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        return regex.test(password);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validatePassword(formData.password)) {

            alert(
                "Password must contain:\n\n• 8-12 characters\n• 1 Capital Letter\n• 1 Special Character"
            );

            return;
        }

        try {

            const response = await API.post("/register", formData);

            alert(response.data);

            navigate("/login");

        } catch (error) {

            alert("Registration Failed");

            console.log(error);
        }
    };

    return (

        <div className="container">

            <div className="card">

                <h1>User Registration</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="userId"
                        placeholder="User ID"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        required
                    />

                    <div className="password-container">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />

                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >

                            {showPassword ? <FaEyeSlash /> : <FaEye />}

                        </span>

                    </div>

                    <small className="password-text">
                        Password must contain 8-12 characters,
                        1 Capital Letter and 1 Special Character
                    </small>

                    <select
                        name="question1"
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Question 1
                        </option>

                        {questions.map((q,index)=>(
                            <option key={index} value={q}>
                                {q}
                            </option>
                        ))}

                    </select>

                    <input
                        type="text"
                        name="answer1"
                        placeholder="Answer 1"
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="question2"
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Question 2
                        </option>

                        {questions.map((q,index)=>(
                            <option
                                key={index}
                                value={q}
                                disabled={formData.question1 === q}
                            >
                                {q}
                            </option>
                        ))}

                    </select>

                    <input
                        type="text"
                        name="answer2"
                        placeholder="Answer 2"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <div className="links">

                    <Link to="/login">
                        Already have an account? Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;