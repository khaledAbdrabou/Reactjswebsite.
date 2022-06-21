import React from 'react'
import styled from "styled-components";

const RelatedItemsRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  margin: 7%;
  min-width: 1232px;
  align-items: flex-end;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 608px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
`;
const Text1 = styled.div`
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #333333;
`;
const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  height: 449px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-image: url("https://file.rendit.io/n/LkqSTCOi6O522SNRRbFK.svg");
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
const Text2 = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 500;
  letter-spacing: 0.11px;
  line-height: 18.2px;
  color: #f3692e;
  margin: 0px 0px 8px 0px;
`;
const Text3 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: 0px 0px 17px 0px;
`;
const Text4 = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 14.4px;
  color: #505050;
  margin: 0px 0px 18px 0px;
`;
const Text5 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #f3692e;
`;




const RelatedItems = () => {
  return (
    <RelatedItemsRoot>
      <FlexColumn>
        <Text1>Related Items</Text1>
        <FlexRow>
          <Card>
            <Container>
              <Container1>
                <Heart
                  src={"https://file.rendit.io/n/rDhN6QsjErPPLEMJsN60.svg"}
                />
              </Container1>
            </Container>
            <Text2>Bags</Text2>
            <Text3>Queen’s Summer</Text3>
            <Text4>Medium Shoulder Bag</Text4>
            <Text5>$1000</Text5>
          </Card>
          <Card>
            <Container>
              <Container1>
                <Heart
                  src={"https://file.rendit.io/n/rDhN6QsjErPPLEMJsN60.svg"}
                />
              </Container1>
            </Container>
            <Text2>Bags</Text2>
            <Text3>Queen’s Summer</Text3>
            <Text4>Medium Shoulder Bag</Text4>
            <Text5>$1000</Text5>
          </Card>
        </FlexRow>
      </FlexColumn>
      <Card>
        <Container>
          <Container1>
            <Heart src={"https://file.rendit.io/n/rDhN6QsjErPPLEMJsN60.svg"} />
          </Container1>
        </Container>
        <Text2>Bags</Text2>
        <Text3>Queen’s Summer</Text3>
        <Text4>Medium Shoulder Bag</Text4>
        <Text5>$1000</Text5>
      </Card>
      <Card>
        <Container>
          <Container1>
            <Heart src={"https://file.rendit.io/n/rDhN6QsjErPPLEMJsN60.svg"} />
          </Container1>
        </Container>
        <Text2>Bags</Text2>
        <Text3>Queen’s Summer</Text3>
        <Text4>Medium Shoulder Bag</Text4>
        <Text5>$1000</Text5>
      </Card>
    </RelatedItemsRoot>
  )
}

export default RelatedItems
