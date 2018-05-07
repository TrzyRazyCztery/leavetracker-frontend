import {fakeUsers, fakeDesks} from "helpers/fakeData"
let users = fakeUsers;
let desks = fakeDesks;

export const configureFakeBackend = () => {
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          let filteredUsers = users.filter(user => {
            return (
              user.email === params.email && user.password === params.password
            );
          });
          if (filteredUsers.length) {
            let user = filteredUsers[0];
            let responseJson = {
              logInSuccess: true,
              user: {
                id: user.id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                token: "fake-valid-token"
              }
            };
            resolve({ json: () => responseJson });
          } else {
            resolve({
              json: () => ({
                logInSuccess: false,
                errors: ["Username or password is incorrect"]
              })
            });
          }
          return;
        }

        if (url.endsWith("/users/register") && opts.method === "POST") {
          let newUser = JSON.parse(opts.body);
          let duplicateUser = users.filter(user => {
            return user.email === newUser.email;
          }).length;
          if (duplicateUser) {
            reject('Email "' + newUser.email + '" is already taken');
            return;
          }

          newUser.id = Math.max(...users.map(user => user.id)) + 1;
          users = users.concat(newUser);
          resolve({ ok: true, json: () => ({ registerSuccess: true }) });
        }
        if (url.endsWith("/desks") && opts.method === "GET") {
          const responseJson = {desks};
          resolve({ json: () => responseJson });
          return;
        }
        if (url.endsWith("/desks/changeowner") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          if(params.hasOwnProperty('deskId') &&  params.hasOwnProperty('newOwnerId') ) {
            const updatedDesk = {
              id: params.deskId,
              ownerId: params.newOwnerId !== 0? params.newOwnerId : null
            };
            desks = {...desks, [updatedDesk.id]: updatedDesk };
            resolve({ok: true, json: () => updatedDesk});
          }
          else {
            reject('No data provided');
          }
        }
        if (url.endsWith("/desks/removedesk") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          if(params.hasOwnProperty('deskId')) {
            //delete desks[params.deskId];
            resolve({ok: true, json: () => ({deskId: params.deskId})});
          }
          else {
            reject('No data provided');
          }
        }
        if (url.endsWith("/desks/newdesk") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          if(params.hasOwnProperty('id') &&  params.hasOwnProperty('ownerId') ) {
            if(!!desks[params.id]){
              resolve({ok: false, json: () => ({id: ['desk with given number already exists']})});
            }
            const newDesk = {
              id: params.id,
              ownerId: params.ownerId !== 0 ? params.ownerId : null
            };

            desks = {...desks, [newDesk.id]: newDesk };
            resolve({ok: true, json: () => newDesk});
          }
          else {
            reject('No data provided');
          }
        }
        if (url.endsWith("/users") && opts.method === "GET") {
          const responseJson = {users};
          resolve({ json: () => responseJson });
          return;
        }
      }, 500);
    });
  };
};
