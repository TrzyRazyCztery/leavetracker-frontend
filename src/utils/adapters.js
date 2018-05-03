import store from "store";

export const storageAdapter = {
  store: (name, data) => store.set(name, data),
  load: name => store.get(name),
  remove: name => store.remove(name)
};
