import { DAT_GHE } from "../types/datGheType";
export const datGheAction =(data,hang)=>{
 return{
  type:DAT_GHE,
  payload: {data,hang}
 }
}