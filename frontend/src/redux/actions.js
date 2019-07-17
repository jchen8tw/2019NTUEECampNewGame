import {
  DISPLAY_COMMISSION,
  SUBMIT_OPERATION,
  DELETE_OPERATION
} from "./actionsTypes";
function display_commission(payload) {
  return { type: DISPLAY_COMMISSION, payload: payload };
}
function submit_operation(payload) {
  return { type: SUBMIT_OPERATION, payload: payload };
}
function delete_operation(payload) {
  return { type :DELETE_OPERATION,payload:payload};
}
export { display_commission, submit_operation ,delete_operation};
