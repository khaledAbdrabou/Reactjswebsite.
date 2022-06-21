import React from 'react'
import styled from "styled-components";
import { mobile } from './responsive';

const ImageRoot = styled.div`
  background-color: #fffff;
  padding-left:20%;
  padding-right:20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  ${mobile({margin:"0px"})};
  
  
`;
const Container = styled.div`
  height: 252px;
  background-color: #f86338;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 122px 311px 122px 312px;

  
`;
const Text1 = styled.div`
  text-align: center;
  width: 388px;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #ffffff;
  margin: 0px 0px 24px 0px;
`;
const Text2 = styled.div`
  text-align: center;
  width: 609px;
  font-size: 64px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.19px;
  line-height: 76.8px;
  color: #ffffff;
  margin: 0px 0px 56px 0px;
`;
const Button1 = styled.button`
  height: 56px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 16px 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const ClickHere = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #7a6005;
`;
const ArrowChevronRight = styled.img`
  width: 24px;
  height: 24px;
`;



const Salebanner = () => {
    const Button1Function = (e, name) => {
        alert(`${name} was clicked`);
      };

  return (
    <ImageRoot>
    <Container>
      <Text1>March Discount</Text1>
      <Text2>Up to 70% off</Text2>
      <Button1 onClick={(e) => Button1Function(e, "Button1")}>
        <FlexRow>
          <ClickHere>Got it</ClickHere>
          <ArrowChevronRight
            src={"https://file.rendit.io/n/4wWnyU4WQw95Oni8uQu0.svg"}
          />
        </FlexRow>
      </Button1>
    </Container>
  </ImageRoot>
  )
}

export default Salebanner