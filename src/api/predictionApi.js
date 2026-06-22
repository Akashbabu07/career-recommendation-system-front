import axiosClient from "./axiosClient";

export const predictCareer = async (skills) => {

    const response =
        await axiosClient.post(
            "/predictions/predict",
            {
                skills: skills
            }
        );

    return response.data;
};

export const getPredictionHistory = async () => {

    const response =
        await axiosClient.get(
            "/predictions/history"
        );

    return response.data;
};