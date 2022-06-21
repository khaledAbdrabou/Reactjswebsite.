import React from 'react'
import styled from "styled-components";

const BackgroundRoot = styled.div`
  background-color: #f86338;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
  min-width: 1232px;
  align-items: center;
  padding: 47px 104px 117px 104px;
`;
const Footer = styled.div`
  width: 1166px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: flex-start;
  margin: 0px 188px 0px 0px;
`;
const DummyLogo = styled.img`
  width: 240px;
  height: 96px;
  margin: 0px 0px 8px 0px;
`;
const Paragraph = styled.div`
  width: 440px;
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 144px 0px;
`;
const Text1 = styled.div`
  width: 272px;
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #ffffff;
`;
const OurSocialMedia1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  justify-content: center;
  align-items: center;
  margin: 0px 177px 28px 0px;
`;
const Contact1 = styled.div`
  height: 216px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Address = styled.div`
  height: 41px;
  display: flex;
  align-self: center;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 40px 0px;
`;
const Path2 = styled.div`
  width: 24px;
  background-image: url("undefined");
  background-size: cover;
  position: absolute;
  top: -16994px;
  left: -2855px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 9.1px 0px;
`;
const SecondaryColor = styled.img`
  width: 10px;
  height: 14.9px;
`;
const PrimaryColor = styled.img`
  width: 14px;
  height: 20px;
  position: absolute;
  top: 2px;
  left: 5px;
`;
const IconColor1 = styled.img`
  width: 20px;
  height: 16px;
  position: absolute;
  top: 4px;
  left: 2px;
`;
const IconColor = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 3px;
  left: 3px;
`;
const Text2 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 700;
  letter-spacing: 0.08px;
  line-height: 19.2px;
  color: #ffffff;
  margin: ${(props) => props.margin};
`;
const Text3 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #ffffff;
  align-self: ${(props) => props.alignSelf};
`;
const Element2 = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;
const Email = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Path1 = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: -2855px;
  top: ${(props) => props.top};
`;
const Text5 = styled.div`
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #ffffff;
  align-self: flex-start;
  margin: 1px 0px 0px 0px;
`;






const Footercomp = () => {
  return (
    <BackgroundRoot>
      <Footer>
        <FlexColumn>
          <DummyLogo
            src={"https://file.rendit.io/n/ixB3llsxJcNp3voM1Zoz.svg"}
          />
          <Paragraph>
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </Paragraph>
          <Text1>Copyright Tanah Air Studio</Text1>
        </FlexColumn>
        <OurSocialMedia1>
          <Text2 margin={"0"}>Our Social Media</Text2>
          <Text3 alignSelf={"flex-start"}>
            Facebook
            <br />
            <br />
            Twitter
            <br />
            <br />
            Instagram
            <br />
            <br />
            Youtube
          </Text3>
        </OurSocialMedia1>
        <Contact1>
          <Text2 margin={"0px 0px 35px 0px"}>Contact</Text2>
          <Address>
            <Element2>
              <Path2>
                <SecondaryColor src={""} />
              </Path2>
              <PrimaryColor
                src={"https://file.rendit.io/n/xSJeNFOPUS8ALvKNugnJ.svg"}
              />
            </Element2>
            <Text3 alignSelf={"flex-end"}>
              8819 Ohio St. South Gate,
              <br />
              California 90280
            </Text3>
          </Address>
          <Email margin={"0px 0px 33px 0px"}>
            <Element2>
              <Path1 src={""} top={"-17075px"} />
              <IconColor1
                src={"https://file.rendit.io/n/HTEnnGr7EaCrtCD7G1Cd.svg"}
              />
            </Element2>
            <Text5>ourstudio@hello.com</Text5>
          </Email>
          <Email margin={"0"}>
            <Element2>
              <Path1 src={""} top={"-17132px"} />
              <IconColor
                src={"https://file.rendit.io/n/DbY77d40BWfkXMfcxn37.svg"}
              />
            </Element2>
            <Text5>+271 386-647-3637</Text5>
          </Email>
        </Contact1>
      </Footer>
    </BackgroundRoot>
  )
}

export default Footercomp