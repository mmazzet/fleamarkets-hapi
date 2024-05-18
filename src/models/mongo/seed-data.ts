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
      country: "->countries.country_7.countryname",
      lat: "40.408623",
      lng: "-3.707338",
    },
    two: {
      marketname: "Fiera di Sinigaglia",
      category: "Vintage Clothes",
      country: "->countries.country_2.countryname",
      lat: "45.464664",
      lng: "9.188540",
    },
    three: {
      marketname: "Les Puces de Saint-Ouen",
      category: "Antiques",
      country: "->countries.country_3.countryname",
      lat: "48.864716",
      lng: "2.349014",
    },
  },
};
