export interface GraphQl {
  id: number;
  body: string;
  user: IUser;
  title: string;
  comments: IComments;
}
export interface IAddress {
  suite: string;
  street: string;
  geo: IGeo;
  city: string;
  zipcode: string;
}

export interface IAlbums {
  meta?: any;
}

export interface IGeo {
  lat: number;
}
export interface ICompany {
  name: string;
  catchPhrase: string;
}

export interface IUser {
  albums: IAlbums;
  address: IAddress;
  name: string;
  email: string;
  company: ICompany;
  username: string;
}

export interface IDatum2 {
  name: string;
  email: string;
}

export interface IComments {
  data: IDatum2[];
  meta?: any;
}

export interface IDatum {
  id: string;
  body: string;
  title: string;
  user: IUser;
  comments: IComments;
}

export interface IPosts {
  data: IDatum[];
  meta?: any;
}

export interface IData {
  posts: IPosts;
}

export interface RootObject {
  data: IData;
}
