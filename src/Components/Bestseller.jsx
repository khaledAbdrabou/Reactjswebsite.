import React from 'react'

import styled from "styled-components";

const BestSellerRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  margin: 10px;
  min-width: 1232px;
  align-items: flex-end;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 190px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  flex-grow: 0.5;
  align-items: center;
  
`;
const Text1 = styled.div`
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #333333;
  align-self: flex-start;
  margin:10px;
  margin-left:70px;
`;
const Card3 = styled.div`
  height: 449px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container6 = styled.div`
  height: 264px;
  background-color: #e2e2ea;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px 16px 240px;
  margin: 0px 0px 20px 0px;
`;
const Container7 = styled.div`
  height: 40px;
  background-image: url("https://file.rendit.io/n/j3WhEAIKTPH0pqndHGxU.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
`;
const Heart3 = styled.img`
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





const Bestseller = () => {
  return (
     <BestSellerRoot>
      <FlexColumn>
        <Text1>Best Seller</Text1>
        <Card3>
          <Container6>
            <Container7>
              <Heart3
                src={"https://file.rendit.io/n/J0qWUbTIzEhNdGVKKqaI.svg"}
              />
            </Container7>
          </Container6>
          <Text2>Bags</Text2>
          <Text3>Queen’s Summer</Text3>
          <Text4>Medium Shoulder Bag</Text4>
          <Text5>$1000</Text5>
        </Card3>

      </FlexColumn>
      <Card3>
        <Container6>
          <Container7>
            <Heart3 src={"https://file.rendit.io/n/J0qWUbTIzEhNdGVKKqaI.svg"} />
          </Container7>
        </Container6>
        <Text2>Bags</Text2>
        <Text3>Queen’s Summer</Text3>
        <Text4>Medium Shoulder Bag</Text4>
        <Text5>$1000</Text5>
      </Card3>
      <Card3>
        <Container6>
          <Container7>
            <Heart3 src={"https://file.rendit.io/n/J0qWUbTIzEhNdGVKKqaI.svg"} />
          </Container7>
        </Container6>
        <Text2>Bags</Text2>
        <Text3>Queen’s Summer</Text3>
        <Text4>Medium Shoulder Bag</Text4>
        <Text5>$1000</Text5>
      </Card3>
      <Card3>
        <Container6>
          <Container7>
            <Heart3 src={"https://file.rendit.io/n/J0qWUbTIzEhNdGVKKqaI.svg"} />
          </Container7>
        </Container6>
        <Text2>Bags</Text2>
        <Text3>Queen’s Summer</Text3>
        <Text4>Medium Shoulder Bag</Text4>
        <Text5>$1000</Text5>
      </Card3>
    </BestSellerRoot>
  )
}

export default Bestseller