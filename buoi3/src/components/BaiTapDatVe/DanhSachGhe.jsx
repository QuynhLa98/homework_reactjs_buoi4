import React, { Component } from "react";
import { connect } from "react-redux";
import Ghe from "./Ghe";

class DanhSachGhe extends Component {
  renderContent = () => {
    return this.props.danhSachGhe.map((element, idx) => {
      if (element.hang === "") return;
      return (
        <tr key={idx}>
          <td>{element.hang}</td>
          {this.renderGhe(element.danhSachGhe,element.hang)}
        </tr>
      );
    });
  };
  renderGhe = (data,hang) => {
    return data.map((element, index) => {
      return (
        <td key={index}>
          <Ghe  element={element} hang={hang}/>
        </td>
      );
    });
  };

  render() {
    return (
      <div className="col-10">
        <h5 className="py-2 screen text-center text-white">SCREEN</h5>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            {this.renderContent()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datVeReducer.danhSachGhe,
  };
};

export default connect(mapStateToProps)(DanhSachGhe);
