import React from 'react'

import styled from "styled-components";

const NewArrivalRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  justify-content: center;
  margin: auto;
  min-width: 1392px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
`;
const Text2 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #f86338;
  align-self: flex-end;
  margin: 0px 0px 10px 0px;
`;
const Element5 = styled.div`
  height: 449px;
  position: relative;
  min-width: 1392px;
`;
const SlideButton = styled.button`
  width: 1392px;
  height: 80px;
  position: absolute;
  top: 108px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const Navigation = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 20px;
  left: 1312px;
`;
const Navigation1 = styled.img`
  width: 900px;
  height: 80px;
  position: absolute;
  left: -420px;
  
  top: 20px;
`;
const Card = styled.div`
  height: 449px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.left};
`;
const Container = styled.div`
  height: 264px;
  background-color: #e2e2ea;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px 16px 240px;
  margin: 0px 0px 20px 0px;
`;
const Container1 = styled.div`
  height: 40px;
  background-image: url("https://file.rendit.io/n/mqOJjCF2sMYAOCP77Raj.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
`;
const Heart = styled.img`
  width: 24px;
  height: 24px;
`;
const Text3 = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 500;
  letter-spacing: 0.11px;
  line-height: 18.2px;
  color: #f3692e;
  margin: 0px 0px 8px 0px;
`;
const Text4 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: 0px 0px 17px 0px;
`;
const Text5 = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 14.4px;
  color: #505050;
  margin: 0px 0px 18px 0px;
`;
const Text6 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #f3692e;
`;





const Newarrivals = () => {
  const SlideButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <NewArrivalRoot>
      <FlexRow>
        <Text1>New Arrival</Text1>
        <Text2>See All</Text2>
      </FlexRow>
      <Element5>
        <Card left={"1016px"}>
          <Container>
            <Container1>
              <Heart
                src={"https://file.rendit.io/n/L0aDrqV1hpoNPqorRxtm.svg"}
              />
            </Container1>
          </Container>
          <Text3>Bags</Text3>
          <Text4>Queen’s Summer</Text4>
          <Text5>Medium Shoulder Bag</Text5>
          <Text6>$1000</Text6>
        </Card>
        <Card left={"704px"}>
          <Container>
            <Container1>
              <Heart
                src={"https://file.rendit.io/n/L0aDrqV1hpoNPqorRxtm.svg"}
              />
            </Container1>
          </Container>
          <Text3>Bags</Text3>
          <Text4>Queen’s Summer</Text4>
          <Text5>Medium Shoulder Bag</Text5>
          <Text6>$1000</Text6>
        </Card>
        <Card left={"392px"}>
          <Container>
            <Container1>
              <Heart
                src={"https://file.rendit.io/n/L0aDrqV1hpoNPqorRxtm.svg"}
              />
            </Container1>
          </Container>
          <Text3>Bags</Text3>
          <Text4>Queen’s Summer</Text4>
          <Text5>Medium Shoulder Bag</Text5>
          <Text6>$1000</Text6>
        </Card>
        <Card left={"80px"}>
          <Container>
            <Container1>
              <Heart
                src={"https://file.rendit.io/n/L0aDrqV1hpoNPqorRxtm.svg"}
              />
            </Container1>
          </Container>
          <Text3>Bags</Text3>
          <Text4>Queen’s Summer</Text4>
          <Text5>Medium Shoulder Bag</Text5>
          <Text6>$1000</Text6>
        </Card>
        <SlideButton onClick={(e) => SlideButtonFunction(e, "SlideButton")}>
          <Navigation
            src={"https://file.rendit.io/n/lSEQHAtuggnPOwpxc7pH.svg"}
          />
          <Navigation1
            src={"https://file.rendit.io/n/DjvtPV30qe6KlCrQKE5w.svg"}
          />
        </SlideButton>
      </Element5>
    </NewArrivalRoot>
  )
}

export default Newarrivals
