import React, { Component } from "react";
import Tabs from "./components/Tabs";
import { CardContainer } from "./components/styled/Card";
import { CreditCard, LoanTerm } from "./components/body";
import { creditCardInfo } from "./store";

class App extends Component {
  render() {
    const { qualify, info } = creditCardInfo;
    return (
      <CardContainer className="App">
        <Tabs>
          <div
            label="Credit Card"
            iconSrc="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-dark.svg"
          >
            <CreditCard qualify={qualify} info={info} />
          </div>
          <div
            label="Term Loan"
            iconSrc="https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-light.svg"
          >
            <LoanTerm />
          </div>
        </Tabs>
      </CardContainer>
    );
  }
}

export default App;
