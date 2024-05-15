export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  countries: {
    _model: "Country",
    lisa: {
      firstName: "Lisa",
      lastName: "Simpson",
      office: "President",
    },
    maggie: {
      firstName: "Maggie",
      lastName: "Simpson",
      office: "President",
    },
    ned: {
      firstName: "Ned",
      lastName: "Flanders",
      office: "President",
    },
  },
  fleamarkets: {
    _model: "Fleamarket",
    one: {
      marketname: 40,
      category: "paypal",
      donor: "->users.bart",
      country: "->countries.lisa",
      lat: "52.161290",
      lng: "-7.51540",
    },
    two: {
      marketname: 90,
      category: "direct",
      donor: "->users.marge",
      country: "->countries.lisa",
      lat: "52.261290",
      lng: "-7.231540",
    },
    three: {
      marketname: 430,
      category: "paypal",
      donor: "->users.homer",
      country: "->countries.ned",
      lat: "52.361290",
      lng: "-7.241540",
    },
  },
};
