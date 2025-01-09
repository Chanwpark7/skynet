import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080';

const prefix = `${API_SERVER_HOST}/api/annualleave`;

export const getALList = async (empNo,pageParam) => {
    const [page, size] = pageParam;
    const res = await axios.get(`${prefix}/list/${empNo}`,{
        params : {
            page : page,
            size : size
        }
    });

    return res.data;
}

export const getALOne = async (empNo) => {
    const res = await axios.get(`${prefix}/read/${empNo}`);
    
    return res.data;
}

export const putALOne = async(empNo, annualLeave)=>{
    const res = await axios.put(`${prefix}/${empNo}`,annualLeave);
    return res.data;
}

export const delALOne = async(empNo)=>{
    const res = await axios.delete(`${prefix}/${empNo}`);
    return res.data;
}

export const setALOne = async(empNo)=>{
    const res = await axios.post(`${prefix}/set`,empNo);
    return res.data;
}