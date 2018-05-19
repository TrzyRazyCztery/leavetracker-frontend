export const desksApi = desks => (opts, url, resolve, reject) => {
  if (url.endsWith('/desks')) {
    switch (opts.method) {
      case 'GET':
        const responseJson = { desks };
        resolve({ json: () => responseJson });
        return;
      case 'POST':
        let params = JSON.parse(opts.body);
        if (params.hasOwnProperty('id') && params.hasOwnProperty('ownerId')) {
          if (!!desks[params.id]) {
            resolve({
              ok: false,
              json: () => ({ id: ['desk with given number already exists'] })
            });
            return;
          }
          const newDesk = {
            id: params.id,
            ownerId: params.ownerId !== 0 ? params.ownerId : null
          };

          desks[params.id] = newDesk;
          resolve({ ok: true, json: () => newDesk });
        } else {
          reject('No data provided');
        }
    }
  }

  if (url.match(/\/desks\/\d+$/)) {
    const id = parseInt(url.split('/').pop());
    if (!id && !desks[id]) {
      reject(`There is no desk with id ${id}`);
      return;
    }
    switch (opts.method) {
      case 'POST':
        const params = JSON.parse(opts.body);
        if (params.hasOwnProperty('ownerId')) {
          const updatedDesk = {
            id,
            ownerId: params.ownerId !== 0 ? params.ownerId : null
          };
          desks[id] = updatedDesk;
          resolve({ ok: true, json: () => updatedDesk });
        } else {
          reject('No data provided');
        }
        return;
      case 'DELETE':
        delete desks[id];
        resolve({ ok: true });
        return;
    }
  }
};
