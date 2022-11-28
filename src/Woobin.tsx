import React, {useState} from "react";

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
        <button onClick={() => setNameList(nameList.concat('김우빈'))}>
          김우빈 추가
        </button>

        <button onClick={() => setNameList(filtername)}>
          김우빈 삭제
        </button>

        <button onClick={() => setNameList(nameList.splice(1,1))}>
          두번째 있는 놈 출력
        </button>

        <button onClick={() => setNameList(slicename)}>
          라면 삭제
        </button>



      </div>


    </div>

  )

}

export default Woobin;
