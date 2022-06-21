import React from 'react'
import styled from "styled-components";


const HeroRoot = styled.div`
  height: 400px;
  position: relative;
  margin-left: 7%;
  min-width: 1336px;
`;
const Image1 = styled.div`
  width: 1024px;
  height: 400px;
  background-color: #e2e2ea;
  position: absolute;
  left: 312px;
`;
const Text1 = styled.div`
  width: 384px;
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
  position: absolute;
  top: 205px;
`;
const Text2 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #333333;
  position: absolute;
  top: 136px;
`;

const Shopbanner = () => {
  return (
    <HeroRoot>
      <Image1 />
      <Text1>Shop</Text1>
      <Text2>Home &#62; Shop</Text2>
    </HeroRoot>
  )
}

export default Shopbanner