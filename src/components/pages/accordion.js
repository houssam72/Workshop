/* eslint-disable react/prop-types */
import React, { Component } from "react";
class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: this.props.defaultShowingState,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render = () => (
    <div className="accordion st-content-tab">
      <div onClick={() => this.toggle()} className="blc-title-accordion hover:cursor-pointer">
        <span
          className="title-accordion ph4 clr-black2 b fnt-14"
          style={{ color: "#03c9d7", fontSize: "20px" }}
        >
          {this.props.title}
        </span>
        <div className="relative  w-fit h-full  translate-y-[35%]">
          <span
            className={` ${
              this.state.isShow ? "ico-caret-down" : "ico-caret-up"
            }`}
          ></span>
        </div>
      </div>
      {this.state.isShow && (
        <div className="overflow-x-scroll p-8">
          {this.props.children}
        </div>
      )}
    </div>
  );
}
export default Accordion;
