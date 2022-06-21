import React from 'react'
import styled from "styled-components";





const CheckoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: space-between;
  margin: 7%;
  min-width: 1024px;
  align-items: center;
`;
const Text1 = styled.div`
  width: 355px;
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
  align-self: flex-start;
`;
const EmailAddress9 = styled.div`
  width: 1022px;
  height: 132px;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 26px;
  align-items: flex-start;
  padding: 0px 2px 0px 0px;
  margin: 0px 0px 24px 0px;
`;
const Text5 = styled.div`
  width: 404px;
  height: 31px;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #9a9ab0;
  margin: 0px 0px 0px 2px;
`;
const ShippingAddress1 = styled.div`
  height: 886px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AddressLine2 = styled.div`
  width: 1022px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 26px;
  align-items: flex-start;
  padding: 0px 2px 0px 0px;
  margin: 0px 0px 48px 0px;
`;
const Container3 = styled.div`
  border-width: 2px;
  border-color: #f86338;
  border-style: solid;
  width: 968px;
  height: 39px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 18px 26px 139px 26px;
`;
const Container2 = styled.div`
  border-width: 2px;
  border-color: #f86338;
  border-style: solid;
  height: 39px;
  display: flex;
  flex-direction: row;
  gap: 759px;
  align-items: center;
  border-radius: 8px;
  padding: 18px 18px 18px 26px;
`;
const Container1 = styled.div`
  border-width: 2px;
  border-color: #f86338;
  border-style: solid;
  width: 456px;
  height: 39px;
  display: flex;
  flex-direction: row;
  gap: 239px;
  align-items: center;
  border-radius: 8px;
  padding: 18px 18px 18px 26px;
`;
const Container = styled.div`
  border-width: 2px;
  border-color: #f86338;
  border-style: solid;
  width: 448px;
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 18px 26px;
`;
const Text19 = styled.div`
  font-size: 31px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.16px;
  line-height: 37.2px;
  color: #11142d;
  margin: 0px 0px 40px 0px;
`;
const BillingAddress = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 56px 0px;
`;
const CheckmarkCircle = styled.img`
  width: 40px;
  height: 40px;
`;
const Text20 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #f86338;
  align-self: flex-end;
  margin: 0px 0px 5px 0px;
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
  width: 976px;
  height: 20px;
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
const CustomerEmail1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: ${(props) => props.height};
`;
const Text2 = styled.div`
  font-size: 31px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.16px;
  line-height: 37.2px;
  color: #11142d;
  margin: 0px 0px 56px 0px;
  align-self: ${(props) => props.alignSelf};
`;
const Text3 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin-left:0px;
  align-self: ${(props) => props.alignSelf};
  
`;
const Container6 = styled.div`
  border-width: 2px;
  border-color: #f86338;
  border-style: solid;
  height: 39px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 18px 26px;
  width: ${(props) => props.width};
`;
const Text4 = styled.div`
  width: 185px;
  height: 31px;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #9a9ab0;
  
`;
const Cinput = styled.input`
    width: 500px;
    height: 40px;
    font-size: 24px;
    font-family: Merriweather;
    font-weight: 400;
    letter-spacing: 0.12px;
    line-height: 28.8px;
    border-style:hidden;
    
    ::placeholder {
    color: #9a9ab0;
    }
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const FirstName2 = styled.div`
  width: 502px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 26px;
  align-items: flex-start;
  padding: 0px 2px 0px 0px;
`;
const Country1 = styled.div`
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 26px;
  align-items: center;
  padding: 0px 2px;
  margin: ${(props) => props.margin};
`;
const ArrowChevronDown1 = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
`;



const Checkoutcomp = () => {
const ClickHereFunction = (e, name) => {
        alert(`${name} was clicked`);
    };
  return (
    <CheckoutRoot>
    <Text1>Checkout</Text1>
    <CustomerEmail1 height={"280px"}>
      <Text2 alignSelf={"inherit"}>Customer Email</Text2>
      <EmailAddress9>
        <Text3 alignSelf={"inherit"}>Email Address</Text3>
        <Container6 width={"968px"}>
        <Cinput placeholder={"Input your email here"} />
        </Container6>
      </EmailAddress9>
      <Text5>Already have an account? Sign in</Text5>
    </CustomerEmail1>
    <ShippingAddress1>
      <Text2 alignSelf={"flex-start"}>Shipping Address</Text2>
      <FlexRow margin={"0px 0px 48px 0px"}>
        <FirstName2>
          <Text3 alignSelf={"inherit"}>First Name</Text3>
          <Container6 width={"448px"}>
          <Cinput placeholder={"First Name"} />
          </Container6>
        </FirstName2>
        <FirstName2>
          <Text3 alignSelf={"inherit"}>Last Name</Text3>
          <Container6 width={"448px"}>
          <Cinput placeholder={"Last Name"} />
          </Container6>
        </FirstName2>
      </FlexRow>
      <AddressLine2>
        <Text3 alignSelf={"inherit"}>Address Line</Text3>
        <Container3>
        <Cinput placeholder={"Address Line"} />
        </Container3>
      </AddressLine2>
      <Country1 margin={"0px 0px 48px 0px"}>
        <Text3 alignSelf={"flex-start"}>Country</Text3>
        <Container2>
          <Text4>Indonesia</Text4>
          <ArrowChevronDown1
            src={"https://file.rendit.io/n/uzAeFPRW6HY6fjLPOysO.svg"}
          />
        </Container2>
      </Country1>
      <FlexRow margin={"0"}>
        <Country1 margin={"0"}>
          <Text3 alignSelf={"flex-start"}>Postal Code</Text3>
          <Container1>
          <Cinput placeholder={"Postal Code"} />
        
          </Container1>
        </Country1>
        <Country1 margin={"0"}>
          <Text3 alignSelf={"flex-start"}>Phone Number</Text3>
          <Container>
          <Cinput placeholder={"phone Number"} />
          </Container>
        </Country1>
      </FlexRow>
    </ShippingAddress1>
    <CustomerEmail1 height={"229px"}>
      <Text19>Billing Address</Text19>
      <BillingAddress>
        <CheckmarkCircle
          src={"https://file.rendit.io/n/hBQDqSI5vh4p3g2kVahH.svg"}
        />
        <Text20>Same as shipping address</Text20>
      </BillingAddress>
      <ClickHere onClick={(e) => ClickHereFunction(e, "ClickHere")}>
        Continue
      </ClickHere>
    </CustomerEmail1>
  </CheckoutRoot>
  )
}

export default Checkoutcomp
