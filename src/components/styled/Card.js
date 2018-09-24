import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  width: 430px;
  box-shadow: 0 0 3px 0 #d0d2d6, 0 1px 2px 0 #d0d2d6;
  padding: 25px;
  margin: 50px;
  border-radius: 10px;
`;

// Tab
export const TabsContainer = styled.nav`
  display: flex;
  background-color: #f8f8f8;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid #d0d2d6;
  border-radius: 10px;
`;

export const TabWrapper = styled.div`
  background-color: ${props => (props.selected ? "#D0D2D6" : "#FFF")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  padding-top: 10px;

  border-radius: 10px;
  cursor: pointer;
`;

export const TabIcon = styled.img`
  width: 24px;
  height: auto;
`;

// Body for all Tabs

//Default Body
export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoanTermBody = styled(Body)`
  align-items: center;
  border: 1px solid #d0d2d6;
  border-radius: 10px;
  padding-top: 10px;
`;
// Credit Card Body

export const Qualify = styled.div`
  background-color: ${props => (props.qualify ? "#2aa876" : "#e8554e")};
  border-radius: 10px;
  padding: 20px;
`;

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d0d2d6;
  &:last-child {
    border-bottom: 1px solid #d0d2d6;
  }
`;

//  Term Loan Tab
