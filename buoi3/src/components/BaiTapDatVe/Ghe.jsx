import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../store/actions/datGheAction";
class Ghe extends Component {
  render() {
   // console.log(this.props.element);
    const { dangChon, soGhe, daDat } = this.props.element;
    return <button
          onClick={() => {
            this.props.dispatch(datGheAction(this.props.element,this.props.hang));
          }}
          disabled={daDat}
          className={`ghe  ${dangChon && "btn-success"}`}
        >
          {soGhe}
        </button>
  }
}
export default connect()(Ghe);
