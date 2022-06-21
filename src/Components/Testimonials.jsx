import React from 'react'
import styled from "styled-components";


const TestimonialsRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin:auto;
  justify-content: center;
  margin: auto;
  min-width: 1024px;
  align-items: center;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 48px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.24px;
  line-height: 57.6px;
  color: #11142d;
  margin-top:20px;
`;
const Testimonials = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 24px;
  align-items: flex-start;
  
 
`;
const Element1 = styled.div`
  align-self: stretch;
  width: 816px;
  height: 352px;
  position: relative;
  flex-grow: 1;
  align-items: center;
  margin:80px;
  
`;
const Card = styled.div`
  height: 250px;
  background-color: #ffefea;
  display: flex;
  position: absolute;
  top: 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  padding: 31px 125px;
  position
`;
const Paragraph = styled.div`
  text-align: center;
  width: 566px;
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #505050;
  margin: 0px 0px 56px 0px;
`;
const Text2 = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: Merriweather;
  font-weight: 700;
  letter-spacing: 0.12px;
  line-height: 28.8px;
  color: #11142d;
  margin: 0px 0px 8px 0px;
`;
const Text3 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 400;
  letter-spacing: 0.08px;
  line-height: 20px;
  color: #505050;
`;
const ImagePlaceholder = styled.img`
  width: 88px;
  height: 88px;
  position: absolute;
  left: 364px;
`;







const Testimonials1 = () => {
  
  return (
    <TestimonialsRoot>
      <Text1>What Our Customer Says</Text1>
      <Testimonials>
      
        <Element1>
          <Card>
            <Paragraph>
              Tanahair is the friendliest and most efficient company I have ever
              used. The whole thing takes time to introduce the product and as a
              result puts forward only the best opportunities that really suit
              you. they help from start to finish to create a great product
              identity for your company
            </Paragraph>
            <Text2>Shalima Hayden</Text2>
            <Text3>Product Designer</Text3>
          </Card>
          <ImagePlaceholder
            src={"https://file.rendit.io/n/zFmiX30OVpINuFmUaMsa.svg"}
          />
        </Element1>
        
      </Testimonials>
    </TestimonialsRoot>
  )
}

export default Testimonials1