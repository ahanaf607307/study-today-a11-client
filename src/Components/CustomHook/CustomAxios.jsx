import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const customAxiosSecure = axios.create({
baseURL :import.meta.env.VITE_API ,
withCredentials : true
})

const useCustomAxiosSecure = () => {
const {logOutUser} = useContext(AuthContext)
const navigate = useNavigate()

    useEffect(()=> {
        customAxiosSecure.interceptors.response.use(res => {
            return res
        } , async error => {
            if (error.response.status === 401 || error.response.status === 403) {
                logOutUser()
                navigate('/login')
              }
        })
    } , [logOutUser , navigate])
    return customAxiosSecure
}

export default useCustomAxiosSecure


