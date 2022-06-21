import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "./data";
import { mobile } from './responsive';


const Maincon = styled.div`
  
  padding: 2px 2px;
  text-align: center;
  
`;

const Container = styled.div`
  width: 50%;
  display: inline-block;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  float:left;
  ${mobile({ display: "none" })}
  

`;
const Container1 = styled.div`
  width: 50%;
  display: inline-block;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  float:left;
  ${mobile({ width: "100vh" })}
  
  

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;



const Title = styled.h1`
width: 663px;
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
  position: absolute;
  top: 89px;
  text-align:left;
  margin:20px;

`;

const Desc = styled.p`
width: 400px;
font-size: 16px;
font-family: DM Sans;
font-weight: 500;
letter-spacing: 0.08px;
line-height: 19.2px;
color: #9a9ab0;
position: absolute;
top: 237px;
text-align:left;
margin:20px;
${mobile({ width: "300px" })}
`;

const Button = styled.button`
height: 30px;
  background-color: #f86338;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 323px;
  border-radius: 8px;
  padding: 16px 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }  
  margin:20px;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  `
;
const Buttonlayout = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #ffffff;`
;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Maincon> 
      
    <Container1>
      <Title>
        Sort out Your <br />
        Spring Look
      </Title>
      <Desc>
      We will help to develop every smallest thing into a big one for your
      company.
      </Desc>
      <Button>
          <RowFlex>
            <Buttonlayout>Shop</Buttonlayout>
            <ChevronRightIcon style={{ color: 'white' }}/>
          </RowFlex>
      </Button>



    </Container1>  

    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
    
   
    </Maincon>
  );
};

export default Slider;
