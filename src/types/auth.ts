export interface LoginResponse {
  access_token: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Employee {
  id: string;
  positionId: string,
  photoUrl: string,
  authUserId: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
  nik: string,
  name: string,
  phone: string,
  email: string,
  status: string,
}

export interface Position {
  id: string;
  name: string;
  codePosition: string;
  description: string;
}
