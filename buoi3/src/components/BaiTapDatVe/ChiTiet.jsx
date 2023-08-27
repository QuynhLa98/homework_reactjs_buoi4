import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../store/actions/datGheAction";

class ChiTiet extends Component {
  calculateTotalAmount = () => {
    let total = 0;
    this.props.danhSachGhe.forEach((element) => {
      element.danhSachGhe.forEach((ghe) => {
        if (ghe.dangChon) {
          total += ghe.gia;
        }
      });
    });
    return total;
  };

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
            Ghế: {soGhe} - {formatNum.format(gia)} VND
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

  render() {
    const formatNum = new Intl.NumberFormat("VN-vn");
    const totalAmount = this.calculateTotalAmount();

    return (
      <div className="col-2">
        <button className="btn btn-success">Ghe Dang Chon</button>
        <button disabled={true} className="btn bg-secondary">
          Ghe Da Dat
        </button>
        <button className="btn btn-light">Ghe Chua Dat</button>
        <h5 className="text-warning">
          Danh sách ghế đã đặt ({this.props.danhSachGhe.length})
        </h5>
        {this.renderContent()}
        <p>Tổng tiền: {formatNum.format(totalAmount)} VND</p>
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

