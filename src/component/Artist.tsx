import React from "react"
import {Route, Routes} from "react-router-dom";
import Cezanne from "./artist/Cezanne";
import Picasso from "./artist/Picasso";
import Rembrandt from "./artist/Rembrandt";
import Header from "./Header";
import Footer from "./Footer";
import * as S from "./Artist.style"

const Artist = () => {
  return (
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

export default Artist;
