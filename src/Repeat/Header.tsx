import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: gray;
  border-bottom: 1px dotted #000000;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const HeaderSection = styled.div<{ isFirst: boolean, isLast: boolean }>`
  margin-left: ${props => props.isFirst && '12px'};
  margin-right: ${props => props.isLast && '12px'};
`;

enum ArtList {
  P = '피카소',
  C = '세잔',
  R = '렘브란트',
}

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {Object.values(ArtList).map((artist: String, index: number) => {
        return (
          <HeaderSection isFirst={index === 0} isLast={Object.values(ArtList).length === index + 1} key={index}
                         onClick={() => navigate(`/${artist}`)}>
            {artist}
          </HeaderSection>
        )
      })}

    </Container>
  );

};
export default Header;


