import React, { Component, Fragment } from "react";
import Tab from "./Tab";
import { TabsContainer } from "./styled/Card";
import PropTypes from "prop-types";

//  Compound Component
class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label //default credit card tab
    };
  }

  handleOnClickTab = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    return (
      <div id="innerCard">
        <TabsContainer>
          {this.props.children.map(child => {
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={child.props.label}
                label={child.props.label}
                onSelect={this.handleOnClickTab}
                src={child.props.iconSrc}
              />
            );
          })}
        </TabsContainer>
        <Fragment>
          {this.props.children.map(
            child =>
              child.props.label === this.state.activeTab
                ? child.props.children
                : undefined
          )}
        </Fragment>
      </div>
    );
  }
}

export default Tabs;
