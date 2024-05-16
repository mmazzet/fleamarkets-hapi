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
    },
    maggie: {
      firstName: "Maggie",
      lastName: "Simpson",
    },
    ned: {
      firstName: "Ned",
      lastName: "Flanders",
    },
  },
  fleamarkets: {
    _model: "Fleamarket",
    one: {
      marketname: "El Rastro",
      category: "Other",
      donor: "->users.bart",
      country: "->countries.lisa",
      lat: "52.161290",
      lng: "-7.51540",
    },
    two: {
      marketname: "Fiera di Sinigaglia",
      category: "Vintage Clothes",
      donor: "->users.marge",
      country: "->countries.lisa",
      lat: "52.261290",
      lng: "-7.231540",
    },
    three: {
      marketname: "Les Puces de Saint-Ouen",
      category: "Antiques",
      donor: "->users.homer",
      country: "->countries.ned",
      lat: "52.361290",
      lng: "-7.241540",
    },
  },
};
