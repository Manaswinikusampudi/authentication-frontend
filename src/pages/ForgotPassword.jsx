import { useState } from "react";
import API from "../services/api";

function ForgotPassword() {

    const [formData, setFormData] = useState({
        userId: "",
        answer1: "",
        answer2: ""
    });

    const [questions, setQuestions] = useState({
        question1: "",
        question2: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const fetchQuestions = async () => {

        try {

            const response = await API.get(
                `/user/${formData.userId}`
            );

            setQuestions({
                question1: response.data.question1,
                question2: response.data.question2
            });

        } catch (error) {

            alert("User not found");
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/forgotPassword",
                formData
            );

            alert(response.data);

        } catch (error) {

            alert("Failed");

            console.log(error);
        }
    };

    return (

        <div className="container">

            <div className="card">

                <h1>Forgot Password</h1>

                <input
                    type="text"
                    name="userId"
                    placeholder="User ID"
                    onChange={handleChange}
                />

                <button onClick={fetchQuestions}>
                    Load Questions
                </button>

                {questions.question1 && (

                    <form onSubmit={handleSubmit}>

                        <p className="question-text">
                            {questions.question1}
                        </p>

                        <input
                            type="text"
                            name="answer1"
                            placeholder="Answer 1"
                            onChange={handleChange}
                            required
                        />

                        <p className="question-text">
                            {questions.question2}
                        </p>

                        <input
                            type="text"
                            name="answer2"
                            placeholder="Answer 2"
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            Recover Password
                        </button>

                    </form>
                )}

            </div>

        </div>
    );
}

export default ForgotPassword;