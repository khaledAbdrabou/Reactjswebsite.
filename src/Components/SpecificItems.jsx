import React from 'react'
import { DropdownButton } from 'react-bootstrap';
import styled from "styled-components";
import Dropdown  from 'react-bootstrap/Dropdown';


const ContentsRoot = styled.div`
  height: 1061px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 7%;
  min-width: 1232px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 79.5px 0px;
`;
const FlexColumn = styled.div`
  width: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Image3 = styled.div`
  width: 88px;
  height: 126px;
  background-color: #e2e2ea;
  margin: 0px 0px 20px 0px;
`;
const Image4 = styled.div`
  width: 88px;
  height: 126px;
  background-color: #e2e2ea;
`;
const Image1 = styled.div`
  width: 608px;
  height: 560px;
  background-color: #e2e2ea;
`;
const DetailCart = styled.div`
  height: 546px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text1 = styled.div`
  width: 426px;
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
  margin: 0px 0px 24px 0px;
`;
const Text2 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #505050;
  margin: 0px 0px 40px 0px;
`;
const FlexRow1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 40px 0px;
`;
const Text4 = styled.div`
  font-size: 39px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 46.8px;
  color: #f3692e;
  margin: 0px 21px 0px 0px;
`;
const Price = styled.div`
  width: 56px;
  height: 19px;
  position: relative;
  margin: 0px 203px 0px 0px;
`;
const Text5 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #9a9ab0;
  position: absolute;
  left: 3px;
`;
const Line = styled.img`
  width: 56px;
  height: 1px;
  position: absolute;
  top: 9.5px;
  left: 0.5px;
`;
const Text6 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  align-self: flex-start;
  margin: 2px 0px 0px 0px;
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;
const Share = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 4px;
  left: 4px;
`;
const Container2 = styled.div`
  border-width: 1px;
  border-color: #9a9ab0;
  border-style: solid;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 4px;
`;
const Type = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
  margin: 0px 0px 56px 0px;
`;
const Element6 = styled.div`
  align-self: stretch;
  height: 40px;
  position: relative;
  min-width: 480px;
`;
const Button1 = styled.button`
  height: 56px;
  background-color: #f86338;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 96px;
  border-radius: 8px;
  padding: 16px 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const ClickHere = styled.div`
  font-size: 16px;
  font-family: Mulish;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #ffffff;
`;
const FlexColumn1 = styled.button`
  border-width: 2px;
  border-color: #f86338;
  border-style: solid;
  height: 54px;
  display: flex;
  position: absolute;
  top: 95px;
  left: 186px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 15px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const Quantity2 = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  gap: 72px;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 7px 10px 6px 11px;
  margin: 3px 0px 0px 0px;
`;
const Quantity = styled.div`
  width: 89px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text17 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #f3692e;
`;
const Separator = styled.img`
  width: 1230.5px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 39.5px 0px;
`;
const Description1 = styled.div`
  width: 712px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
`;
const Paragraph = styled.div`
  width: 711px;
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #505050;
  align-self: flex-end;
`;
const FabricDetails1 = styled.div`
  width: 249px;
  height: 196px;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const List = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
const Image6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Image2 = styled.div`
  width: 88px;
  height: 126px;
  background-color: #e2e2ea;
  margin: 0px 0px 18px 0px;
`;
const AvaliabilityInStocks = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #11142d;
  display: contents;
  white-space: pre-wrap;
  font-weight: ${(props) => props.fontWeight};
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Text7 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #11142d;
  align-self: flex-start;
`;
const Text8 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: ${(props) => props.color};
`;
const ShoppingCart = styled.img`
  width: 24px;
  height: 24px;
`;
const Text14 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #11142d;
  margin: ${(props) => props.margin};
`;
const Text18 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: ${(props) => props.margin};
`;
const List3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 16px 16px;
`;


const SpecificItems = () => {
const Button1Function = (e, name) => {
        alert(`${name} was clicked`);
      };
const FlexColumn1Function = (e, name) => {
         alert(`${name} was clicked`);
  };  
return (
    <ContentsRoot>
      <FlexRow>
        <Image6 gap={"16px"}>
          <FlexColumn>
            <Image2 />
            <Image3 />
            <Image2 />
            <Image4 />
          </FlexColumn>
          <Image1 />
        </Image6>
        <DetailCart>
          <Text1>Classic Blouse IX</Text1>
          <Text2>
            Avaliability
            <AvaliabilityInStocks fontWeight={"400"}> : </AvaliabilityInStocks>
            <AvaliabilityInStocks fontWeight={"700"}>
              48 in stocks
            </AvaliabilityInStocks>
          </Text2>
          <FlexRow1>
            <Text4>$1000</Text4>
            <Price>
              <Text5>$1500</Text5>
              <Line src={"https://file.rendit.io/n/uU4Fv7Bww1HRuBfGecqG.svg"} />
            </Price>
            <Image6 gap={"8px"}>
              <Text6>Share</Text6>
              <Icon>
                <Share
                  src={"https://file.rendit.io/n/UIWU4lPvwfuqqGV7qMrr.svg"}
                />
                <Container2 />
              </Icon>
            </Image6>
          </FlexRow1>
          <Type>
            <FlexRow2 gap={"85px"}>
              <Text7>SKU</Text7>
              <Text8 color={"#666666"}>: AA0031</Text8>
            </FlexRow2>
            <FlexRow2 gap={"46px"}>
              <Text7>Category</Text7>
              <Text8 color={"#666666"}>: Dresses</Text8>
            </FlexRow2>
            <Image6 gap={"80px"}>
              <Text7>Tags</Text7>
              <Text8 color={"#666666"}>
                : Fashion, Classic, Blouses, Dresses
              </Text8>
            </Image6>
          </Type>
          <Element6>
            <Button1 onClick={(e) => Button1Function(e, "Button1")}>
              <Image6 gap={"8px"}>
                <ClickHere>Add to Cart</ClickHere>
                <ShoppingCart
                  src={"https://file.rendit.io/n/fndtLsmFL4xNDlEkUIC0.svg"}
                />
              </Image6>
            </Button1>
            <FlexColumn1 onClick={(e) => FlexColumn1Function(e, "FlexColumn1")}>
              <ShoppingCart
                src={"https://file.rendit.io/n/BWDsOuVdkxQ7LNrUNWrP.svg"}
              />
            </FlexColumn1>
            <Quantity2>
            <DropdownButton  title="Size">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
              <Container>
                <Quantity>
                  <Text14 margin={"0px 29px 0px 0px"}>-</Text14>
                  <Text14 margin={"0px 31px 0px 0px"}>2</Text14>
                  <Text8 color={"#11142d"}>+</Text8>
                </Quantity>
              </Container>
              <Text17>Add note</Text17>
            </Quantity2>
          </Element6>
        </DetailCart>
      </FlexRow>
      <Separator src={"https://file.rendit.io/n/kc9rfkntlHviVdV0ubgT.svg"} />
      <FlexRow2 gap={"40px"}>
        <Description1>
          <Text18 margin={"0"}>Description</Text18>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur
          </Paragraph>
        </Description1>
        <FabricDetails1>
          <Text18 margin={"0px 0px 23px 0px"}>Fabric Details</Text18>
          <List3>
            <ShoppingCart
              src={"https://file.rendit.io/n/o47uEVp9D72JE4tlHmB7.svg"}
            />
            <Text8 color={"#505050"}>100% Cotton</Text8>
          </List3>
          <List3>
            <ShoppingCart
              src={"https://file.rendit.io/n/o47uEVp9D72JE4tlHmB7.svg"}
            />
            <Text8 color={"#505050"}>Quick Dry</Text8>
          </List3>
          <List3>
            <ShoppingCart
              src={"https://file.rendit.io/n/o47uEVp9D72JE4tlHmB7.svg"}
            />
            <Text8 color={"#505050"}>Ties as Shoulder</Text8>
          </List3>
          <List>
            <ShoppingCart
              src={"https://file.rendit.io/n/o47uEVp9D72JE4tlHmB7.svg"}
            />
            <Text8 color={"#505050"}>Accusantium doloremque </Text8>
          </List>
        </FabricDetails1>
      </FlexRow2>
    </ContentsRoot>
  )
 
}

export default SpecificItems