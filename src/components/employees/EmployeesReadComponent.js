import { useEffect, useState } from "react"
import useCustomMove from "../../hooks/useCustomMove";
import { getBookList, getOne } from "../../api/employeesApi";
import { useParams } from "react-router-dom";

const initState = {
    empNo : 0 ,
    employeesDate : '',
    offHours : 0,
    empNo : 0
}

const EmployeesReadComponent = ({empNo})=>{
    const [employees, setEmployees] = useState(initState);
    let cnt = 0;

    const {page,moveToList, moveToModify} = useCustomMove();

    useEffect(()=>{
        getOne(empNo).then(res => {
            setEmployees(res);
        });
    },[cnt]);

    return <>
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Day Off No</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{employees.empNo}</div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Date</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{employees.employeesDate}</div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Off Hours</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{employees.offHours}</div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">Emp No</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{employees.empNo}</div>
                </div>
            </div>

            <div className="flex justify-end p-4">
                <button type="button" 
                className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                onClick={()=>moveToModify(empNo)}>
                    Modify
                </button>

                <button type="button"
                className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                onClick={()=>moveToList({page})}>
                    List
                </button>
            </div>
        </div>
    </>
}

export default EmployeesReadComponent;