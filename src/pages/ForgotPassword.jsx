import { useState } from "react";
import API from "../services/api";

function ForgotPassword() {

    const [formData, setFormData] = useState({
        userId: "",
        answer1: "",
        answer2: ""
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

            const response = await API.post("/forgotPassword", formData);

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
                        name="answer1"
                        placeholder="Answer 1"
                        onChange={handleChange}
                        required
                    />

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

            </div>

        </div>
    );
}

export default ForgotPassword;