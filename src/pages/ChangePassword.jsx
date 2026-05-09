import { useState } from "react";
import API from "../services/api";

function ChangePassword() {

    const [formData, setFormData] = useState({
        userId: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
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

            const response = await API.post("/changePassword", formData);

            alert(response.data);

        } catch (error) {

            alert("Failed");

            console.log(error);
        }
    };

    return (

        <div className="container">

            <div className="card">

                <h1>Change Password</h1>

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
                        name="oldPassword"
                        placeholder="Old Password"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Change Password
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ChangePassword;