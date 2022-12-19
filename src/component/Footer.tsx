import React from 'react';
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>
        처음으로가기
      </button>
    </div>
  );
};

export default Footer;