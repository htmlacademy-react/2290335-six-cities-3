const USER_AUTH_DATA = 'user-auth-data';

enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
}

enum APIRoute {
  Offers = 'offers',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = 'comments'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum ClassNamesForMap {
  Root = 'cities__map',
  Offer = 'offer__map'
}

const MY_CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 12
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3702,
      longitude: 4.8952,
      zoom: 12
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 12
    }
  },
];


export {MY_CITIES, AppRoute, AuthorizationStatus, ClassNamesForMap, APIRoute, USER_AUTH_DATA};
