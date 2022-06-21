import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { mobile } from './responsive';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: space-between;
  margin: 100px;
  min-width: 20em;
  ${mobile({diplay:'none'})};
  
  
`;
const Image1 = styled.div`
  height: 480px;
  background-color: #e2e2ea;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 40px 48px 40px 40px;
`;
const Textstyle = styled.div`
  width: 312px;
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
  align-self: center;
  margin: 0px 0px 24px 0px;
`;
const Paragraph = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #9a9ab0;
  margin: 0px 0px 56px 0px;
`;
const Buttonflex = styled.button`
  height: 40px;
  background-color: #f86338;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  padding: 0px 8px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const ArrowRight = styled.img`
  width: 24px;
  height: 24px;
`;
const FlexColumn = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  ${mobile({diplay:'none'})};
`;
const Image2 = styled.div`
  width: 400px;
  height: 560px;
  background-color: #e2e2ea;
`;



const Categorylist = () => {
  const[data1, setdata] = useState([]);
  console.log(data1);
  useEffect(() => {
    DataApi();
  },[]
  
  )
  
  const DataApi= async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsondata = await response.json();
    setdata(jsondata);
  
  
  }




const OutrageousOrangeFlexColumnFunction = (e, name) => {
        alert(`${name} was clicked`);
};
  return (
    <Container>
      
            <FlexColumn>
        <Image1>
          <Textstyle>Dresses</Textstyle>
          <Paragraph>
            Lorem Ipsum is simply dummy text <br />
            of the printing and typesetting industry.
          </Paragraph>
          <Buttonflex
            onClick={(e) =>
              OutrageousOrangeFlexColumnFunction(
                e,
                "Buttonflex"
              )
            }
          >
            <ArrowRight
              src={"https://file.rendit.io/n/ObrfUDkg8EkbpzK7Of3n.svg"}
            />
          </Buttonflex>
        </Image1>
        <Image2 />
      </FlexColumn>
      <FlexColumn>
        <Image2 />
        <Image2 />
      </FlexColumn>
      <FlexColumn>
        <Image2 />
        <Image2 />
      </FlexColumn>
            
            
            
            
            
            
  



      
    </Container>
  )
}

export default Categorylist