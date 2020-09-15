import {
  sendRegistrationRequest,
  receiveRegistrationResponse,
} from "../requests/actions";
import { post } from "../../lib/Api";

export function performRegistration(url, body) {
  return (dispatch) => {
    dispatch(sendRegistrationRequest(body));
    return post(url, body).then(({ status }) => {
      dispatch(receiveRegistrationResponse(status));
    });
  };
}
