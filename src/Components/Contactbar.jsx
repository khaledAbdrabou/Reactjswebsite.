import {
  Facebook,
  Instagram,
  Phone,
  YouTube,
  Twitter,
} from "@material-ui/icons";
import mainlogo from './mainlogo.png';
import { mobile } from './responsive';
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 70px;
  ${mobile({height:"50px"})};
  
`;

const Wrapper = styled.div`
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({display:'none'})};
  
  
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
 
`;


const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  ${mobile({display:'none'})};
`;
const SocialContainer = styled.div`
  display: flex;
`;

const LogoRoot = styled.img`
  fit :auto;
  width: 166px;
  height: 32px;
  margin: auto;`
;

const Contactbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>    
          <Phone style={{marginRight:"10px", }}/> +022 319 821 967
        </Left>


        <Center>
        <LogoRoot src={mainlogo } />
        </Center>


        <Right>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="FF0000">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contactbar;
