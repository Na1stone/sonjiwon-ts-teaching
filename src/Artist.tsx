import React from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import Cezanne from "./Cezanne";
import Picasso from "./Picasso";
import Rembrandt from "./Rembrandt";


const Artist = () => {
const navigate = useNavigate();
console.log("나 등장")
return(
<div>
    <header>
        <div onClick={()=> navigate("/피카소")}>
        피카소
        </div>

        <div onClick={()=> navigate("/세잔")}>
        세잔
        </div>

        <div onClick={()=> navigate("/렘브란트")}>
        렘브란트
        </div>

    </header>
    <body>
        <Routes>
            <Route path="/" element={
                <div>
                    <p>
                    손지원의 뮤지엄에 오신 것을 환영합니다..
                    개발자는 아무나 하는 게 아닙니다.
                    정말 대단하군뇨.
                    </p>
                </div>
            }/>

        <Route path="피카소" element={
            <Picasso/>
        }/>

        <Route path="세잔" element={
            <Cezanne/>
        }/>

        <Route path="렘브란트" element={
            <Rembrandt/>
        }/>

    </Routes>
    </body>

    <footer>
        <button onClick={() => navigate('/')}>
            처음으로가기
        </button>
    </footer>
 
</div>

)
}

export default Artist;
