import React, { Component } from "react";
import "../BaiTapDatVe/style.css";
import DanhSachGhe from "./DanhSachGhe";
import ChiTiet from "./ChiTiet";
export default class BaiTapDatVe extends Component {
 
  render() {
    return (
      <div className="bg-img">
        <h1 className="text-warning text-center">
          BÀI TẬP ĐẶT VẾ XEM PHIM
        </h1>
        <div className="row d-flex flex-wrap">
         <DanhSachGhe/>
          <ChiTiet/>
        </div>
      </div>
    );
  }
}
