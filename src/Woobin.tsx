import React, {useState} from "react";

const Woobin=()=>{ 
    const [nameList, setNameList] = useState(['가','나','다','라'])
    const arrayLength: number = nameList.length
    const filtername:string[] = nameList.filter((value) => value !== "김우빈")
    const splicename = nameList.splice
    const slicename = nameList.slice(-1)


    return(
        <div>
            <button onClick={() => setNameList(nameList.concat('김우빈'))}>
            </button>

            <button onClick={() => filtername}>
            </button>


        </div>

    )

 }

 export default Woobin;
