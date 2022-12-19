import React from "react"
import {Route, Routes} from "react-router-dom";
import Cezanne from "./artist/Cezanne";
import Picasso from "./artist/Picasso";
import Rembrandt from "./artist/Rembrandt";
import Header from "./Header";
import styled from "styled-components"
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;


const Artist = () => {
  return (
    <Container>
      <Header/>
      <Body>
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
      </Body>
      <Footer/>
    </Container>

  )
}

export default Artist;
