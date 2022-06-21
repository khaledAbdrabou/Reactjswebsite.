import React from 'react'
import styled from "styled-components";

const ContentsRoot = styled.div`
  height: 1699px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 7%;
  min-width: 1232px;

`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 33px 0px;
`;
const Price1 = styled.div`
  height: 97px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Filter = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
`;
const Filters1 = styled.img`
  width: 296px;
  height: 9px;
  align-self: center;
  margin: 0px 0px 16px 0px;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 920px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 33px;
  flex-grow: 1;
  align-items: center;
`;
const Container18 = styled.div`
  border-width: 1px;
  border-color: #f86338;
  border-style: solid;
  width: 892px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 13px;
`;
const Text4 = styled.input`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #9a9ab0;
  padding: 0px;
  border-width: 0px;
  background: none;
  width: 100%;
  :: placeholder {
    color: #9a9ab0;
  }
  display: inline-block;
  outline-width: 0px;
`;
const Filters = styled.div`
  width: 920px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const Text5 = styled.div`
  width: 168px;
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #9a9ab0;
  margin: 3px 443px 0px 0px;
`;
const Text6 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  margin: 5px 32px 0px 0px;
`;
const Dropdown = styled.div`
  width: 119px;
  height: 32px;
  align-self: center;
  position: relative;
  margin: 0px 32px 0px 0px;
`;
const Text7 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  position: absolute;
  top: 6px;
  left: 16px;
`;
const ArrowChevronDown = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  left: 87px;
`;
const Element18 = styled.div`
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  width: 117px;
  height: 30px;
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: 8px;
`;
const Menu = styled.img`
  width: 24px;
  height: 24px;
  margin: 3px 24px 0px 0px;
`;
const Menu1 = styled.img`
  width: 24px;
  height: 24px;
  margin: 3px 0px 0px 0px;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  margin: 0px 0px 80px 0px;
`;
const FlexColumn1 = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 56px;
  flex-grow: 1;
  align-items: center;
`;
const Colors = styled.div`
  width: 280px;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn2 = styled.div`
  width: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
  margin: 0px 14px 0px 0px;
`;
const Text8 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  align-self: center;
  margin: 0px 0px 24px 0px;
`;
const ColorPlaceholder = styled.img`
  width: 40px;
  height: 40px;
  margin: 0px 0px 16px 0px;
  
`;
const ProductCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
`;
const Text17 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #f3692e;
`;
const Container19 = styled.div`
  height: 327px;
  background-color: #f86338;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 48px 38px 48px 32px;
`;
const Text18 = styled.div`
  width: 226px;
  font-size: 39px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 46.8px;
  color: #ffffff;
  margin: 0px 0px 23px 0px;
`;
const Text19 = styled.div`
  width: 226px;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #ffffff;
  margin: 0px 0px 32px 0px;
`;
const Button1 = styled.button`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  border-radius: 8px;
  padding: 16px 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const ClickHere = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #7a6005;
`;
const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  margin: 0px 204px 0px 0px;
`;
const OutrageousOrangeText = styled.div`
  text-align: center;
  display: flex;
  font-size: 16px;
  font-family: Mulish;
  font-weight: 600;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #ffffff;
  width: 32px;
  height: 19px;
  background-color: #f86338;
  flex-direction: row;
  justify-content: center;
  border-radius: 16px;
  padding: 6px 0px 7px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text1 = styled.div`
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  align-self: ${(props) => props.alignSelf};
`;
const Text2 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #11142d;
  text-align: ${(props) => props.textAlign};
`;
const Search = styled.img`
  width: 24px;
  height: 24px;
`;
const ColorPlaceholder4 = styled.img`
  width: 40px;
  height: 40px;
`;
const FlexColumn3 = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  flex-grow: 1;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Grocery = styled.div`
  width: 296px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Text10 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 500;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #11142d;
`;
const ArrowChevronRight = styled.img`
  width: 16px;
  height: 16px;
  align-self: flex-start;
`;
const FlexColumn6 = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 32px;
  flex-grow: 1;
  align-items: center;
`;
const Card8 = styled.div`
  height: 449px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container16 = styled.div`
  height: 264px;
  background-color: #e2e2ea;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px 16px 240px;
  margin: 0px 0px 20px 0px;
`;
const Container17 = styled.div`
  height: 40px;
  background-image: url("https://file.rendit.io/n/rS7mYC1mIzntspmvAYdC.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
`;
const Text20 = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: DM Sans;
  font-weight: 500;
  letter-spacing: 0.11px;
  line-height: 18.2px;
  color: #f3692e;
  margin: 0px 0px 8px 0px;
`;
const Text21 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: 0px 0px 17px 0px;
`;
const Text22 = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 14.4px;
  color: #505050;
  margin: 0px 0px 18px 0px;
`;
const Text23 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #f3692e;
`;
const Icon = styled.img`
  width: 13.12px;
  height: 13.41px;
`;
const Chevronleft = styled.img`
  width: 16px;
  height: 16px;
`;
const Text56 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Mulish;
  font-weight: 600;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #92929d;
`;




const Filtershop = () => {
    const Button1Function = (e, name) => {
        alert(`${name} was clicked`);
      };
    return (
    <ContentsRoot>
      <FlexRow>
        <Price1>
          <FlexRow1 margin={"0px 0px 24px 0px"}>
            <Text1 alignSelf={"inherit"}>Price</Text1>
            <Filter src={"https://file.rendit.io/n/scZaPM6jjCvaXDwSVuek.svg"} />
          </FlexRow1>
          <Filters1  />
          <FlexRow1 margin={"0"}>
            <Text2 textAlign={"left"}>Range</Text2>
            <Text2 textAlign={"right"}>$5-$20</Text2>
          </FlexRow1>
        </Price1>
        <FlexColumn>
          <Container18>
            <Text4 placeholder={"Search products"} />
            <Search src={"https://file.rendit.io/n/goLE0m0pKbCW6QhlhNrk.svg"} />
          </Container18>
          <Filters>
            <Text5>Showing 1-9 Results</Text5>
            <Text6>Sort by</Text6>
            <Dropdown>
              <Text7>Newest</Text7>
              <ArrowChevronDown
                src={"https://file.rendit.io/n/xjBel4CTdpFmuKqOm9IR.svg"}
              />
              <Element18 />
            </Dropdown>
            <Menu src={"https://file.rendit.io/n/euXLy8o8bnqBFRBXkR46.svg"} />
            <Menu1 src={"https://file.rendit.io/n/UVWdCAbsVu1prJ8j7S5e.svg"} />
          </Filters>
        </FlexColumn>
      </FlexRow>
      <FlexRow3>
        <FlexColumn1>
          <Colors>
            <FlexColumn2>
              <Text8>Color</Text8>
              <ColorPlaceholder  onClick={(e) => Button1Function(e, "Button1")}
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
              <ColorPlaceholder4
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
            </FlexColumn2>
            <FlexColumn3 margin={"0px 40px 0px 0px"}>
              <ColorPlaceholder4
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
              <ColorPlaceholder4
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
            </FlexColumn3>
            <FlexColumn3 margin={"0px 40px 0px 0px"}>
              <ColorPlaceholder4
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
              <ColorPlaceholder4
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
            </FlexColumn3>
            <FlexColumn3 margin={"0"}>
              <ColorPlaceholder4
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
              <ColorPlaceholder4
                src={"https://file.rendit.io/n/lto5Iowx6ZdTVeSTgUrJ.svg"}
              />
            </FlexColumn3>
          </Colors>
          <ProductCategories>
            <Text1 alignSelf={"flex-start"}>Categories</Text1>
            <Grocery>
              <Text10>Dresses</Text10>
              <ArrowChevronRight
                src={"https://file.rendit.io/n/TwM1brtHi2OmIujB2vWb.svg"}
              />
            </Grocery>
            <Grocery>
              <Text10>Shirt and Top</Text10>
              <ArrowChevronRight
                src={"https://file.rendit.io/n/TwM1brtHi2OmIujB2vWb.svg"}
              />
            </Grocery>
            <Grocery>
              <Text10>Sweater & Cardigans</Text10>
              <ArrowChevronRight
                src={"https://file.rendit.io/n/TwM1brtHi2OmIujB2vWb.svg"}
              />
            </Grocery>
            <Grocery>
              <Text10>Outwears</Text10>
              <ArrowChevronRight
                src={"https://file.rendit.io/n/TwM1brtHi2OmIujB2vWb.svg"}
              />
            </Grocery>
            <Grocery>
              <Text10>Bags</Text10>
              <ArrowChevronRight
                src={"https://file.rendit.io/n/TwM1brtHi2OmIujB2vWb.svg"}
              />
            </Grocery>
            <Grocery>
              <Text10>Shoes</Text10>
              <ArrowChevronRight
                src={"https://file.rendit.io/n/TwM1brtHi2OmIujB2vWb.svg"}
              />
            </Grocery>
            <Grocery>
              <Text10>Accesories</Text10>
              <ArrowChevronRight
                src={"https://file.rendit.io/n/TwM1brtHi2OmIujB2vWb.svg"}
              />
            </Grocery>
            <Text17>Load more</Text17>
          </ProductCategories>
          <Container19>
            <Text18>March Discount</Text18>
            <Text19>Up to 70% Off for All Items in March</Text19>
            <Button1 onClick={(e) => Button1Function(e, "Button1")}>
              <FlexRow4>
                <ClickHere>Got it</ClickHere>
                <Search
                  src={"https://file.rendit.io/n/wFEXxqLlfWVt2tiQWNco.svg"}
                />
              </FlexRow4>
            </Button1>
          </Container19>
        </FlexColumn1>
        <FlexColumn6>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
        </FlexColumn6>
        <FlexColumn6>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
        </FlexColumn6>
        <FlexColumn6>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
          <Card8>
            <Container16>
              <Container17>
                <Search
                  src={"https://file.rendit.io/n/yUl360gHKOiz0KkFohgx.svg"}
                />
              </Container17>
            </Container16>
            <Text20>Bags</Text20>
            <Text21>Queen’s Summer</Text21>
            <Text22>Medium Shoulder Bag</Text22>
            <Text23>$1000</Text23>
          </Card8>
        </FlexColumn6>
      </FlexRow3>
      <Pagination>
        <Icon src={"https://file.rendit.io/n/eH5QjvrA7fEYd3xtiAGa.svg"} />
        <Chevronleft
          src={"https://file.rendit.io/n/C7cm15gKKziYwM6l6nRf.svg"}
        />
        <OutrageousOrangeText>1</OutrageousOrangeText>
        <Text56>2</Text56>
        <Text56>3</Text56>
        <Text56>4</Text56>
        <Text56>5</Text56>
        <Text56>...</Text56>
        <Text56>10</Text56>
        <Chevronleft
          src={"https://file.rendit.io/n/CJozNlGCXARU52K8tp0N.svg"}
        />
        <Icon src={"https://file.rendit.io/n/NsdAaHKXf6UjD0kSsz5u.svg"} />
      </Pagination>
    </ContentsRoot>
  )
}

export default Filtershop