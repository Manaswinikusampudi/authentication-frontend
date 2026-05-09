import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userId: "",
        username: "",
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

    const handleSubmit = async (e) => {

        e.preventDefault();

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
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="question1"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Question 1</option>

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
                        <option value="">Select Question 2</option>

                        {questions.map((q,index)=>(
                            <option key={index} value={q}>
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

            </div>

        </div>
    );
}

export default Register;