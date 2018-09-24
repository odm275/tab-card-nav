import React, { Component } from "react";
import PropTypes from "prop-types";
import { TabWrapper, TabIcon } from "./styled/Card";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired
  };

  onClick = () => {
    const { label, onSelect } = this.props;
    onSelect(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;

    return (
      <TabWrapper selected={activeTab === label} onClick={onClick}>
        <TabIcon src={this.props.src} />
        <p>{label}</p>
      </TabWrapper>
    );
  }
}

export default Tab;
