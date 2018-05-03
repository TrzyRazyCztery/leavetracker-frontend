const users = [
  {
    email: "foo@bar.com",
    password: "123456",
    id: 1,
    name: "Foo",
    surname: "Bar"
  },
  {
    email: "temp@temp.pl",
    password: "zxcvbnm",
    id: 2,
    name: "Temp",
    surname: "Temp"
  },
  {
    email: "john.smith@yahoo.com",
    password: "password",
    id: 3,
    name: "John",
    surname: "Smith"
  }
];

export const configureFakeBackend = () => {
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/authenticate") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          console.log("body request", params);
          let filteredUsers = users.filter(user => {
            return (
              user.email === params.email && user.password === params.password
            );
          });
          console.log("dane: ", params.email, " ", params.password);
          if (filteredUsers.length) {
            let user = filteredUsers[0];
            let responseJson = {
              loginSuccess: true,
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
                loginSuccess: false,
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
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
          resolve({ ok: true, json: () => ({registerSuccess: true}) });
        }
      }, 2500);
    });
  };
};
