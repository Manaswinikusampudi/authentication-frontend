import { useState } from "react";
import { useNavigate, Link }
from "react-router-dom";

import {
    changeCredentials
} from "../services/userService";

function ChangeCredentials() {

    const navigate = useNavigate();

    const [formData, setFormData]
        = useState({

        currentUserId: "",
        password: "",

        newUserId: "",

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

            const response =
                await changeCredentials(formData);

            alert(response.data);

            navigate("/login");

        } catch (error) {

            alert("Failed");

            console.log(error);
        }
    };

    return (

        <div className="container">

            <div className="card">

                <h1>
                    Change User Credentials
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="currentUserId"
                        placeholder="Current User ID"
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

                    <input
                        type="text"
                        name="newUserId"
                        placeholder="New User ID"
                        onChange={handleChange}
                        required
                    />

                    {/* QUESTION 1 */}

                    <select
                        name="question1"
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Question 1
                        </option>

                        {
                            questions
                            .filter(
                                (q) =>
                                    q !== formData.question2
                            )
                            .map((q,index)=>(
                                <option
                                    key={index}
                                    value={q}
                                >
                                    {q}
                                </option>
                            ))
                        }

                    </select>

                    <input
                        type="text"
                        name="answer1"
                        placeholder="Answer 1"
                        onChange={handleChange}
                        required
                    />

                    {/* QUESTION 2 */}

                    <select
                        name="question2"
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Question 2
                        </option>

                        {
                            questions
                            .filter(
                                (q) =>
                                    q !== formData.question1
                            )
                            .map((q,index)=>(
                                <option
                                    key={index}
                                    value={q}
                                >
                                    {q}
                                </option>
                            ))
                        }

                    </select>

                    <input
                        type="text"
                        name="answer2"
                        placeholder="Answer 2"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Update Credentials
                    </button>

                </form>

                <div className="links">

                    <Link to="/login">
                        Back to Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default ChangeCredentials;