import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined,  } from "@material-ui/icons";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
  
`;





const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
 
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <MenuItem>Home </MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>FAQ </MenuItem>
        <MenuItem>Blog</MenuItem>
        </Left>


        


        <Right>
          <MenuItem>
            <FavoriteBorderIcon />
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={3} color="Primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>
            <PersonOutlineIcon/>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
