export const SEND_CREATE_USER_REQUEST = "SEND_CREATE_USER_REQUEST";
export const RECEIVE_CREATE_USER_REQUEST = "RECEIVE_CREATE_USER_REQUEST";

export function receiveRegistrationResponse(status) {
  return { type: RECEIVE_CREATE_USER_REQUEST, status };
}

export function sendRegistrationRequest(body) {
  return { type: SEND_CREATE_USER_REQUEST, body };
}
