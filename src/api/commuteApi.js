import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080';

const prefix = `${API_SERVER_HOST}/api/commute`;

export const getCommuteList = async (empNo,pageParam) => {
    const [page, size] = pageParam;
    const res = await axios.get(`${prefix}/list/${empNo}`,{
        params : {
            page : page,
            size : size
        }
    });

    return res.data;
}

export const putCheckOut = async(empNo)=>{
    const res = await axios.put(`${prefix}/checkout/${empNo}`);
    return res.data;
}

export const putOne = async(empNo, commute)=>{
    const res = await axios.put(`${prefix}/modify/${empNo}`, commute);
    return res.data;
}

export const setCheckIn = async(empNo)=>{
    const res = await axios.post(`${prefix}/set/${empNo}`);
    return res.data;
}

export const getOneCommute = async(commNo) => {
    const res = await axios.get(`${prefix}/read/${commNo}`);

    return res.data;
}