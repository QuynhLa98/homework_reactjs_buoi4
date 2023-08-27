import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../store/actions/datGheAction";

class ChiTiet extends Component {
  renderContent = () => {
    return this.props.danhSachGhe.map((element) => {
      return this.renderChiTiet(element.danhSachGhe, element.hang);
    });
  };
  renderChiTiet = (data, hang) => {
    const formatNum = new Intl.NumberFormat("VN-vn");
    return data.map((element) => {
      const { dangChon, soGhe, gia } = element;
      if (dangChon) {
        return (
          <p key={soGhe}>
            Ghế: {soGhe} - { formatNum.format(gia)} VND
            <span
              onClick={() => {
                this.props.dispatch(datGheAction(element, hang));
              }} 
              className="ml-3 cursor-pointer text-danger"
            >
              [HỦY]
            </span>
          </p>
        );
      }
    });
  };
  tongGheDat = ()=>{
    const data = this.props.danhSachGhe.map((element)=>{return element.danhSachGhe.filter((element)=>{return element.dangChon})})
    console.log(data);
  }
  tongTien = () => {
   
  };
  render() {
    return (
      <div className="col-2">
        <button className="btn btn-success">Ghe Dang Chon</button>
        <button disabled={true} className="btn bg-secondary">
          Ghe Da Dat
        </button>
        <button className="btn btn-light">Ghe Chua Dat</button>
        <h5 className="text-warning">Danh sách ghế đã đặt ({this.props.danhSachGhe.length})</h5>
        {this.renderContent()}
        {this.tongGheDat()}
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datVeReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps)(ChiTiet);
