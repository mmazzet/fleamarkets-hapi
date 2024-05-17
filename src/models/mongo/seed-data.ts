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
    country_1: {
      countryname: "Ireland",
    },
    country_2: {
      countryname: "Italy",
    },
    country_3: {
      countryname: "France",
    },
    country_4: {
      countryname: "Germany",
    },
    country_5: {
      countryname: "Portugal",
    },
    country_6: {
      countryname: "Greece",
    },
    country_7: {
      countryname: "Spain",
    },
    country_8: {
      countryname: "Netherlands",
    },
    country_9: {
      countryname: "Belgium",
    },
  },
  fleamarkets: {
    _model: "Fleamarket",
    one: {
      marketname: "El Rastro",
      category: "Other",
      donor: "->users.bart",
      country: "Spain",
      lat: "52.161290",
      lng: "-7.51540",
    },
    two: {
      marketname: "Fiera di Sinigaglia",
      category: "Vintage Clothes",
      donor: "->users.marge",
      country: "Italy",
      lat: "52.261290",
      lng: "-7.231540",
    },
    three: {
      marketname: "Les Puces de Saint-Ouen",
      category: "Antiques",
      donor: "->users.homer",
      country: "France",
      lat: "52.361290",
      lng: "-7.241540",
    },
  },
};
