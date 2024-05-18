export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}

export interface Country {
  countryname: string;
  _id: string;
}

export interface Fleamarket {
  marketname: string;
  category: string;
  country: Country | string;
  lat: number;
  lng: number;
}

export interface Db {
  userStore: any;
  countryStore: any;
  fleamarketStore: any;
}

