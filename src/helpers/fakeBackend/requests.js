import { reduce } from 'lodash';
import moment from 'moment'
export const requestsApi = (requests, utils) => (opts, url, resolve, reject) => {
  if (url.endsWith('/requests')) {
    switch (opts.method) {
      case 'GET':
        const responseJson = { requests };
        resolve({ json: () => responseJson });
        return;
      case 'POST':

        const params = JSON.parse(opts.body);
        if (
          params.hasOwnProperty('requestTypeId') &&
          params.hasOwnProperty('startDate') &&
          params.hasOwnProperty('endDate') &&
          params.hasOwnProperty('days') &&
          params.hasOwnProperty('info')

        ) {
          const newRequest = {
            id: reduce(requests, (counter, request) => counter + 1, 0) + 1,
            ownerId: opts.headers['X-Authorization-Id'],
            requestTypeId: params.requestTypeId,
            requestStatusId: 3,
            startDate: params.startDate,
            endDate: params.endDate,
            days: params.days,
            info: params.info
          };
          requests[newRequest.id] = newRequest;
          resolve({ ok: true, json: () => newRequest });
        } else {
          reject('No data provided');
        }
    }
  }

  if (url.match(/\/requests\/\d+$/)) {
    const id = parseInt(url.split('/').pop());
    if (!id && !requests[id]) {
      reject(`There is no request with id ${id}`);
      return;
    }
    switch (opts.method) {
      case 'DELETE':
        delete requests[id];
        resolve({ ok: true });
        return;
      case "POST":
        const params = JSON.parse(opts.body);
        const request = requests[id];
        if (params.hasOwnProperty('statusId')) {
          const updatedRequest = {
            ...request,
            requestStatusId: params.statusId
          };
          requests[id] = updatedRequest;
          resolve({ ok: true, json: () => updatedRequest });
        } else {
          reject('No data provided');
        }
        return;
    }
  }

  if (url.match('/requests/utils')) {
    switch (opts.method) {
      case 'GET':
        const responseJson = { utils };
        resolve({ json: () => responseJson });
        return;
    }
  }
};
