export enum ResMsg {
  Success = 'success',
  Fail = 'fail',
}

export interface UserInfo {
  id: string;
  name: string;
}

export interface LoginReq {
  id: string;
  pw: string;
}

export interface LoginRes {
  msg: ResMsg;
  payload: {
    user: UserInfo;
    token: string;
  } | null;
}
