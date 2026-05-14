import API from "./api";

// REGISTER
export const registerUser = async (data) => {

    return await API.post("/register", data);
};

// LOGIN
export const loginUser = async (data) => {

    return await API.post("/login", data);
};

// CHANGE PASSWORD
export const changePassword = async (data) => {

    return await API.post("/changePassword", data);
};

// FORGOT PASSWORD
export const forgotPassword = async (data) => {

    return await API.post("/forgotPassword", data);
};

// LOAD USER QUESTIONS
export const getUserQuestions = async (userId) => {

    return await API.get(`/user/${userId}`);
};