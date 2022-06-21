import React from 'react'
import styled from "styled-components";

const RecommendedForYouRoot = styled.div`
  height: 918px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 7%;
  min-width: 1232px;
`;
const Text1 = styled.div`
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #333333;
  align-self: flex-start;
  margin: 0px 0px 56px 0px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Card7 = styled.div`
  height: 382px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImagePlaceholder7 = styled.div`
  width: 296px;
  height: 294px;
  background-color: #e2e2ea;
  margin: 0px 0px 24px 0px;
`;
const Text2 = styled.div`
  text-align: center;
  width: 296px;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: 0px 0px 16px 0px;
`;
const Text3 = styled.div`
  text-align: center;
  width: 294px;
  font-size: 16px;
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #f3692e;
  align-self: flex-start;
`;




const Recommendedforyou = () => {
  return (
    <RecommendedForYouRoot>
      <Text1>Recommended for you</Text1>
      <FlexRow margin={"0px 0px 40px 0px"}>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
      </FlexRow>
      <FlexRow margin={"0"}>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
        <Card7>
          <ImagePlaceholder7 />
          <Text2>Classic Blouse IX</Text2>
          <Text3>$1000</Text3>
        </Card7>
      </FlexRow>
    </RecommendedForYouRoot>
  )
}

export default Recommendedforyou