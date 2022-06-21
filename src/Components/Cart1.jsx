import React from 'react'
import styled from "styled-components";

const MyCartRoot = styled.div`
  height: 966px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 7%;
  min-width: 1024px;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
  align-self: flex-start;
  margin: 0px 0px 43px 0px;
`;
const Container1 = styled.div`
  width: 864px;
  background-color: #f86338;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 21px 80px 22px 80px;
  margin: 0px 0px 40px 0px;
`;
const Checkout = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  height: 209px;
  background-color: #ffefea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  padding: 72px 39px;
`;
const Text19 = styled.input`
  display: inline-block;
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #9a9ab0;
  align-self: center;
  border-width: 1px;
  border-color: #f86338;
  border-style: solid;
  width: 376px;
  height: 20px;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 17px 23px;
  margin: 0px 0px 39px 0px;
  background: none;
  :: placeholder {
    color: #9a9ab0;
  }
  outline-width: 0px;
`;
const ClickHere1 = styled.button`
  text-align: center;
  display: flex;
  font-size: 16px;
  font-family: Mulish;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #ffffff;
  height: 56px;
  background-color: #f86338;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 18px 24px;
  margin: 0px 0px 0px 1px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const PriceDetails = styled.div`
  height: 344px;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
`;
const Text20 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  align-self: flex-start;
  margin: 0px 0px 48px 0px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 78px;
  align-items: center;
  margin: 0px 0px 23px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 72px;
  align-items: center;
  margin: 0px 0px 22px 0px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 57px;
  align-items: center;
  margin: 0px 0px 31px 0px;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 103px;
  align-items: center;
  margin: 0px 0px 56px 0px;
`;
const ClickHere = styled.button`
  text-align: center;
  display: flex;
  font-size: 16px;
  font-family: Mulish;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #ffffff;
  align-self: center;
  width: 400px;
  height: 56px;
  background-color: #f86338;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 18px 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Text2 = styled.div`
  font-size: 24px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #ffffff;
  margin: ${(props) => props.margin};
`;
const List2 = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const WhiteSquare = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e2e2ea;
  border-radius: 4px;
  margin: 0px 40px 0px 0px;
`;
const Text6 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: ${(props) => props.margin};
`;
const TrashBin2 = styled.img`
  width: 32px;
  height: 32px;
`;
const Text21 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #11142d;
  align-self: ${(props) => props.alignSelf};
`;
const Text22 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: ${(props) => props.color};
`;





const Cart1 = () => {
const ClickHere1Function = (e, name) => {
        alert(`${name} was clicked`);
    };
 const ClickHereFunction = (e, name) => {
        alert(`${name} was clicked`);
};  
  return (
    <MyCartRoot>
      <Text1>Cart</Text1>
      <Container1>
        {[
          {
            childText: "Product Name",
            margin: "0px 176px 0px 0px",
          },
          {
            childText: "Price",
            margin: "0px 136px 0px 0px",
          },
          {
            childText: "Quantity",
            margin: "0px 120px 0px 0px",
          },
          {
            childText: "Total",
            margin: "0",
          },
        ].map((data) => (
          <Text2 margin={data.margin}>{data.childText}</Text2>
        ))}
      </Container1>
      <List2 margin={"0px 0px 48px 0px"}>
        <WhiteSquare />
        <Text6 margin={"0px 103px 0px 0px"}>Classic Blouse IX</Text6>
        <Text6 margin={"0px 184px 0px 0px"}>$ 99</Text6>
        <Text6 margin={"0px 160px 0px 0px"}>2</Text6>
        <Text6 margin={"0px 92px 0px 0px"}>$198</Text6>
        <TrashBin2 src={"https://file.rendit.io/n/faKOH90KGb2aSAb9i749.svg"} />
      </List2>
      <List2 margin={"0px 0px 48px 0px"}>
        <WhiteSquare />
        <Text6 margin={"0px 103px 0px 0px"}>Classic Blouse IX</Text6>
        <Text6 margin={"0px 184px 0px 0px"}>$ 99</Text6>
        <Text6 margin={"0px 160px 0px 0px"}>2</Text6>
        <Text6 margin={"0px 92px 0px 0px"}>$198</Text6>
        <TrashBin2 src={"https://file.rendit.io/n/faKOH90KGb2aSAb9i749.svg"} />
      </List2>
      <List2 margin={"0px 0px 64px 0px"}>
        <WhiteSquare />
        <Text6 margin={"0px 103px 0px 0px"}>Classic Blouse IX</Text6>
        <Text6 margin={"0px 184px 0px 0px"}>$ 99</Text6>
        <Text6 margin={"0px 160px 0px 0px"}>2</Text6>
        <Text6 margin={"0px 92px 0px 0px"}>$198</Text6>
        <TrashBin2 src={"https://file.rendit.io/n/faKOH90KGb2aSAb9i749.svg"} />
      </List2>
      <Checkout>
        <Container>
          <Text6 margin={"0px 0px 27px 1px"}>Have a Coupon?</Text6>
          <Text19 placeholder={"Input your email here"} />
          <ClickHere1 onClick={(e) => ClickHere1Function(e, "ClickHere1")}>
            Apply Coupon
          </ClickHere1>
        </Container>
        <PriceDetails>
          <Text20>Cart Totals</Text20>
          <FlexRow>
            <Text21 alignSelf={"flex-start"}>Subtotal</Text21>
            <Text22 color={"#505050"}>$150</Text22>
          </FlexRow>
          <FlexRow1>
            <Text21 alignSelf={"flex-start"}>Shipping</Text21>
            <Text22 color={"#505050"}>Free Shipping</Text22>
          </FlexRow1>
          <FlexRow2>
            <Text22 color={"#505050"}>Shipping to Sidney</Text22>
            <Text22 color={"#f3692e"}>Change</Text22>
          </FlexRow2>
          <FlexRow3>
            <Text21 alignSelf={"inherit"}>Total</Text21>
            <Text21 alignSelf={"inherit"}>$350</Text21>
          </FlexRow3>
          <ClickHere onClick={(e) => ClickHereFunction(e, "ClickHere")}>
            Checkout
          </ClickHere>
        </PriceDetails>
      </Checkout>
    </MyCartRoot>
  )
}

export default Cart1
