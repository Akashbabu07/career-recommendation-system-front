import axiosClient from "./axiosClient";

export const getProfile = async () => {

    const response =
        await axiosClient.get(
            "/users/profile"
        );

    return response.data;
};