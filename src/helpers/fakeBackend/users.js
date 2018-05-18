import { find, reduce } from 'lodash';

export const usersApi = users => (opts, url, resolve, reject) => {
  if (url.endsWith('/users/authenticate')) {
    switch (opts.method) {
      case 'POST':
        const params = JSON.parse(opts.body);
        const user = find(
          users,
          user =>
            user.email === params.email && user.password === params.password
        );
        if (!!user) {
          const responseJson = {
            logInSuccess: true,
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
              surname: user.surname,
              token: 'fake-valid-token',
              permissions: user.permissions
            }
          };
          resolve({ json: () => responseJson });
        } else {
          resolve({
            json: () => ({
              logInSuccess: false,
              errors: ['Username or password is incorrect']
            })
          });
        }
    }
  }

  if (url.endsWith('/users')) {
    switch (opts.method) {
      case 'POST':
        const body = JSON.parse(opts.body);

        const duplicateUser = find(
          users,
          user => user.email === body.email
        );
        if (!!duplicateUser) {
          reject(`Email ${body.email} is already taken`);
        } else {
          const newUser = {
            ...body,
            id: reduce(users, (counter, user) => counter + 1, 0) + 1,
            permissions: [1]
          };
          users[newUser.id] = newUser;
          resolve({ ok: true, json: () => ({ registerSuccess: true, user: newUser })});
        }
        return;
      case 'GET':
        resolve({ json: () => ({ users }) });
    }
  }
};
