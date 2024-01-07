export interface ExpModel {
  from: number;
  to: number;
  current: number;
}

export interface UserModel {
  fullName: string;
  firstName: string;
  lastName: string;
  id: number | string;
  photo: string;
  exp: ExpModel;
}

export interface UserLevelModel {
  level: number;
  percentage: string;
  exp: ExpModel;
}
