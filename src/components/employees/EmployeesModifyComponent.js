import { useEffect, useState } from "react"
import useCustomMove from "../../hooks/useCustomMove";
import { delOne, getOne, putOne } from "../../api/employeesApi";

const initState = {
    empNo : 0 ,
    firstName : '',
    lastName : '',
    hireDate : '',
    mailAddress : '',
    salary : 0,
    deptNo : 0,
    jobNo : 0,
    birthday : '',
    address : '',
    phoneNum : '',
    gender : '',
    citizenId : ''
}

const EmployeesModifyComponent = ({empNo}) => {
    const [employees, setEmployees] = useState({...initState});

    const {moveToList, moveToRead} = useCustomMove();

    useEffect(()=>{
        getOne(empNo).then(data=>setEmployees(data));
    },[empNo]);

    const handleClickDelete = () => {
        employees['offHours'] = 0;
        setEmployees({...employees});
        putOne(empNo,employees).then(()=>{
            delOne(empNo).then(()=>moveToList());
        });
    }

    const handleClickModify = () => {
        putOne(empNo,employees).then(()=>moveToRead(empNo));
    }

    const handleChangeEmployees = (evt) => {
        
        employees[evt.target.name] = evt.target.value;
        setEmployees({...employees});
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-center mt-10">
                <div className="w-1/5 p-6 text-right font-bold">EmployeesNo</div>
                <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{employees.empNo}</div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">EmployeesDate</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
                    name="employeesDate"
                    type={'date'} 
                    value={employees.employeesDate}
                    onChange={handleChangeEmployees}></input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">OffHours</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
                    name="offHours"
                    type={'number'} 
                    value={employees.offHours} 
                    onChange={handleChangeEmployees}></input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">EmpNo</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
                    name="empNo"
                    type={'number'} 
                    value={employees.empNo} 
                    onChange={handleChangeEmployees}></input>
                </div>
            </div>

            <div className="flex justify-end p-4">
                <button type="button"
                className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                onClick={handleClickModify}>
                    Modify
                </button>

                <button type="button"
                className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                onClick={handleClickDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default EmployeesModifyComponent;