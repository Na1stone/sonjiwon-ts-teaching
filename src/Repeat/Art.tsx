import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cezanne from "./Cezanne";
import Picasso from "./Picasso";
import Rembrandt from "./Rembrandt";
import Header from "../Repeat/Header";
import Footer from "../Repeat/Footer";
import * as S from "./Art.style";


const Art =()=>{
    return(
        <S.Container>
            <Header/>
            <S.Body>
                <Routes>
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
            </S.Body>
            <Footer/>

            </S.Container>





    )

}

export default Art;