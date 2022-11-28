import React, {useState} from "react";
import './Woobin.css';

const Woobin = () => {
  const [nameList, setNameList] = useState(['손지원', '나원석', '다람쥐', '라면'])
  const arrayLength: number = nameList.length
  const filtername: string[] = nameList.filter((value) => value !== "김우빈")
  const slicename:string[] = nameList.slice(0,3)


  return (
    <div style={{display: "flex", flexDirection: "column", gap:"25px"}}>
      <div style={{display: "flex", gap: "10px"}}>
        {nameList}
      </div>
      <div>
        <div className='buttons'>

        <div style={{backgroundColor:"black", color:"white"}} onClick={() => setNameList(nameList.concat('김우빈'))} >
          김우빈 추가
        </div>

        <div onClick={() => setNameList(filtername)}>
          김우빈 삭제
        </div>

        <div onClick={() => setNameList(nameList.splice(1,1))}>
          두번째 있는 놈 출력
        </div>

        <div onClick={() => setNameList(slicename)}>
          라면 삭제
        </div>
        </div>


      </div>


    </div>

  )

}

export default Woobin;
