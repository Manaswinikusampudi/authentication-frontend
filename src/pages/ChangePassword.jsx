import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { changePassword } from "../services/userService";

function ChangePassword() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

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

    const validatePassword = (password) => {

        const regex =
            /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        return regex.test(password);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!validatePassword(formData.newPassword)) {

            alert(
                "Password must contain:\n\n• 8-12 characters\n• 1 Capital Letter\n• 1 Special Character"
            );

            return;
        }

        try {

            const response = await changePassword(formData);

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

                <h1>Change Password</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="userId"
                        placeholder="User ID"
                        onChange={handleChange}
                        required
                    />

                    <div className="password-container">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="oldPassword"
                            placeholder="Old Password"
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

                    <div className="password-container">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            placeholder="New Password"
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

                    <div className="password-container">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
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

                    <button type="submit">
                        Change Password
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

export default ChangePassword;