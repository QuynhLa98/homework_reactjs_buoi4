import data from "../../data/danhSachGhe.json";
const DEFAULT_STATE = {
  danhSachGhe: data,
};

export const datVeReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "DAT_GHE": {
     // console.log(action.payload);
      const data = JSON.parse(JSON.stringify(state.danhSachGhe))
      // console.log(data);
      const timHang = data.find((element)=>{return element.hang === action.payload.hang})
      // console.log(timHang);
      const index = timHang.danhSachGhe.findIndex((element)=>{return element.soGhe === action.payload.data.soGhe})
      timHang.danhSachGhe[index].dangChon = !timHang.danhSachGhe[index].dangChon;
      state.danhSachGhe = data
      break;
    }
  }
  return { ...state };
};
