import { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { API_SERVER_HOST, getOne, putOne } from "../../api/reportApi";


const initState = {//초기화 상대 객체 선언
    reportNo : 0,
    deadLine : '',
    reportStatus : '',
    reportingDate : '',
    sender : 0,
    receiver : 0,
    files : [],
    uploadFileNames : []
};

const ReceivedReportReadComponent = ({reportNo}) => {
  //useState 를 이용한 상태값 제어 선언
  const [report, setReport] = useState(initState);

  const [newReceiver,setNewReceiver] = useState();

  const {moveToReportReceived} = useCustomMove();

  useEffect(() => {
    //서버에 데이터 요청 보내기
    getOne(reportNo).then(data =>{
      setReport(data);
    });
    
  }, [reportNo]);

  const handleClickApprove = () => {
    if(report.receiver !== 1){
      report["sender"] = report.receiver;
      report["receiver"] = newReceiver;
      putOne(reportNo, report).then(()=>{
        moveToReportReceived(report.sender);
      })
    }else{
      report["sender"] = report.receiver;
      report["reportStatus"] = "완료";
      putOne(reportNo, report).then(()=>{
        moveToReportReceived(report.receiver);
      })
    }
    
  }

  const handleClickReturn = () => {
    report["reportStatus"] = "반려";
    putOne(reportNo, report).then(()=>{
      moveToReportReceived(report.receiver);
    })
  }

  const handleChangeNewReceiver = (evt) => {
    setNewReceiver(evt.target.value);
  }

  return (  

    <div className = "border-2 border-sky-200 mt-10 m-2 p-4"> 

      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Report No</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {report.reportNo}        
          </div>  
        </div>
      </div>

        <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Deadline</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {report.deadLine}        
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Status</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {report.reportStatus}        
          </div>
        </div>  
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Reported Date</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {report.reportingDate}        
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">receiver</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {report.receiver}        
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">Sender</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
            {report.sender}        
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex  flex-col m-auto items-center">
        {report.uploadFileNames.map( (fileName, i) => 
          <a 
          alt ="report"
          key={i}
          className="w-1/2 p-6 rounded-r border border-solid shadow-md mt-4" 
          href={`${API_SERVER_HOST}/api/report/view/${fileName}`}>
                {fileName}
            </a>
        )}
      </div>

      <div className="flex justify-end p-4">
      {report.receiver !== 1?<input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
          name="newReceiver"
          type={'number'} 
          value={newReceiver}
          onChange={handleChangeNewReceiver}/>:<></>}
        {report.reportStatus === "진행중"?<><button type="button" 
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={handleClickApprove}
        >
          승인
        </button>

        <button type="button" 
          className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={handleClickReturn}
        >
          반려
        </button></>:<></>}
        

        <button type="button" 
          className="rounded p-4 m-2 text-xl w-32 text-white bg-sky-200"
          onClick={()=>moveToReportReceived(report.receiver)}
        >
          List
        </button>  
      </div>
    </div>
      
  );
};

export default ReceivedReportReadComponent;