import axiosClient from "./axiosClient";

export const registerUser = async (userData) => {

    const response =
        await axiosClient.post(
            "/auth/register",
            userData
        );

    return response.data;
};

export const loginUser = async (credentials) => {

    const response =
        await axiosClient.post(
            "/auth/login",
            credentials
        );

    return response.data;
};

export const refreshToken = async (refreshToken) => {

    const response =
        await axiosClient.post(
            "/auth/refresh",
            {
                refreshToken
            }
        );

    return response.data;
};

export const logoutUser = async () => {

    const response =
        await axiosClient.post(
            "/auth/logout"
        );

    return response.data;
};