const Settings = {
  NUMBER_OF_PLACES : 312,
};

enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const getAuthorizationStatus = () => AuthorizationStatus.Auth;

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export {Settings, cities, AppRoute, AuthorizationStatus, getAuthorizationStatus};
