import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: gray;
  border-bottom: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
const HeaderSection = styled.div<{ isFirst: boolean, isLast: boolean }>`
  margin-left: ${props => props.isFirst && '12px'};
  margin-right: ${props => props.isLast && '12px'};
`;

enum ArtistList {
  P = '피카소',
  S = '세잔',
  R = '렘브란트',
}

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {Object.values(ArtistList).map((artist: string, index: number) => {
        return (
          <HeaderSection isFirst={index === 0} isLast={Object.values(ArtistList).length === index + 1} key={index}
                         onClick={() => navigate(`/${artist}`)}>{artist}</HeaderSection>
        )
      })}

    </Container>
  )
    ;
};

export default Header;