import { usersData } from 'helpers/fakeData/usersData';
import { desksData } from 'helpers/fakeData/desksData';
import {
  requestsData,
  requestStatuses,
  requestTypes
} from 'helpers/fakeData/requestsData';
import { find } from 'lodash';
import { desksApi } from 'helpers/fakeBackend/desks';
import { usersApi } from 'helpers/fakeBackend/users';
import { requestsApi } from 'helpers/fakeBackend/requests';

let users = usersData;
let desks = desksData;
let requests = requestsData;
let requestUtils = {
  requestStatuses,
  requestTypes
};

const APIs = {
  users: {
    url: '/users',
    api: usersApi(users)
  },
  desks: {
    url: '/desks',
    api: desksApi(desks)
  },
  requests: {
    url: '/requests',
    api: requestsApi(requests, requestUtils)
  }
};

export const configureFakeBackend = () => {
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const validAPI = find(APIs, api =>  url.includes(api.url));
        !!validAPI ? validAPI.api(opts, url, resolve, reject) : null;
      }, 500);
    });
  };
};
