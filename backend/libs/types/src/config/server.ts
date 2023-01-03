export interface IServerConfigAdmin {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IServerConfig {
  port: number;
  admin: IServerConfigAdmin
}

export enum ServerConfigEnum {
  PORT = 'port',
  ADMIN = "admin"
}
