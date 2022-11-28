import React, {useState} from "react";

const Woobin = () => {
  const [nameList, setNameList] = useState(['손지원', '나원석', '다람쥐', '라면'])
  const arrayLength: number = nameList.length
  const filtername: string[] = nameList.filter((value) => value !== "김우빈")
  const splicename = nameList.splice
  const slicename = nameList.slice(-1)


  return (
    <div style={{display: "flex", flexDirection: "column", gap:"25px"}}>
      <div style={{display: "flex", gap: "10px"}}>
        {nameList}
      </div>
      <div>
        <button onClick={() => setNameList(nameList.concat('김우빈'))}>
          김우빈 추가
        </button>
        <button onClick={() => filtername}>
          김우빈 삭제
        </button>
        <button onClick={() => filtername}>
        </button>
      </div>


    </div>

  )

}

export default Woobin;
