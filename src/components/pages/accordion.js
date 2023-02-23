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
    <div className="accordion st-content-tab" style={{ marginTop:this.props.i==1 ?'80px' : '0px',background:"#33373e"}} >
      <div className="blc-title-accordion  ">
        <span
          className="title-accordion clr-black2 b fnt-14"
          style={{ color: "#03c9d7", fontSize: "20px" }}
        >
          {this.props.title}
        </span>
        <button onClick={() => this.toggle()} className="btn">
          <span
            className={` ${
              this.state.isShow ? "ico-caret-up" : "ico-caret-down"
            }`}
            style={{ marginRight: "50px" }}
          ></span>
        </button>
      </div>
      {this.state.isShow ? (
        <div className="blc-contents-accordion " style={{background:"#33373e"}} >{this.props.children}</div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Accordion;
