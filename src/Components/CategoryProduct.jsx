import React from 'react'
import styled from "styled-components";

const CategoriesProductRoot = styled.div`
  height: 1562px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 7%;
  min-width: 1232px;
`;
const Categories = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 64px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 80px 2px;
`;
const ActiveMenu = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #f3692e;
  align-self: flex-start;
  margin: 0px 0px 0px 2px;
`;
const Active = styled.div`
  width: 32px;
  height: 4px;
  background-color: #f86338;
`;
const Text2 = styled.div`
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #9a9ab0;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Card11 = styled.div`
  height: 449px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container22 = styled.div`
  height: 264px;
  background-color: #e2e2ea;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px 16px 240px;
  margin: 0px 0px 20px 0px;
`;
const Container23 = styled.div`
  height: 40px;
  background-image: url("https://file.rendit.io/n/Bp7YBJnZ0RsioCRARp6X.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
`;
const Heart11 = styled.img`
  width: 24px;
  height: 24px;
`;
const Text10 = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 500;
  letter-spacing: 0.11px;
  line-height: 18.2px;
  color: #f3692e;
  margin: 0px 0px 8px 0px;
`;
const Text11 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: 0px 0px 17px 0px;
`;
const Text12 = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 14.4px;
  color: #505050;
  margin: 0px 0px 18px 0px;
`;
const Text13 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #f3692e;
`;






const CategoryProduct = () => {
  return (
    <CategoriesProductRoot>
      <Categories>
        <ActiveMenu>
          <Text1>All</Text1>
          <Active />
        </ActiveMenu>
        <Text2>Dresses</Text2>
        <Text2>Shirts and Tops</Text2>
        <Text2>Sweaters & Cardigans</Text2>
        <Text2>Outwears</Text2>
        <Text2>Bags</Text2>
        <Text2>Shoes</Text2>
        <Text2>Accessories</Text2>
        <Text2>More</Text2>
      </Categories>
      <FlexRow margin={"0px 0px 48px 0px"}>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
      </FlexRow>
      <FlexRow margin={"0px 0px 48px 0px"}>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
      </FlexRow>
      <FlexRow margin={"0"}>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
        <Card11>
          <Container22>
            <Container23>
              <Heart11
                src={"https://file.rendit.io/n/1Olm4x36fXiNmrP9VlWW.svg"}
              />
            </Container23>
          </Container22>
          <Text10>Bags</Text10>
          <Text11>Queen’s Summer</Text11>
          <Text12>Medium Shoulder Bag</Text12>
          <Text13>$1000</Text13>
        </Card11>
      </FlexRow>
    </CategoriesProductRoot>
  )
}

export default CategoryProduct