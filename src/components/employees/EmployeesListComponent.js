import React, { useEffect, useState } from 'react';
import useCustomMove from '../../hooks/useCustomMove';

const initState = {
    empNo : 0,
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
    citizenId: ''
}

const EmployeesListComponent = () => {

    const [Employees,setEmployees] = useState([initState]);

    const { moveToJobRead } = useCustomMove();

    useEffect(() => {
      getList().then(res => {
        console.log(res); //서버에서 받아오는지 확인 ok
        setJob(res);
      });
    }, [cnt]);
    
    return (
        <div className="text-3xl">
            <div className='flex flex-wrap mx-auto p-6'>
                {job.map((res)=>{
                    return(
                    <div 
                    key = {res.jobNo} 
                    className='flex w-full min-w-[400px] p-2 m-2 rounded shadow-md' 
                    onClick = {() => moveToJobRead(res.jobNo)}
                    >
                        {res.jobNo}
                        {res.jobTitle}
                    </div>)
                })}
            </div>
        </div>
    )
}

export default JobListComponent;