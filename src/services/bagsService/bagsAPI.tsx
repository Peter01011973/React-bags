import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const bagsAPI = axios.create({
    baseURL: 'http://localhost:3000/bagsDB'
})

const axiosAPI = async (config: AxiosRequestConfig): Promise<{
    response: AxiosResponse<any>;
    success: boolean;
    message: string;
}> => {
    try {
        const response: AxiosResponse<any> = await bagsAPI(config);
        return {
            response,
            success: true,
            message: response.statusText,
        }
    } catch (error) {
        return {
            response: error.response,
            success: false,
            message: error.message,
        }
    }
};

export  default axiosAPI;