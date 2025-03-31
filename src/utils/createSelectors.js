export const createSelectors = (store) => {
  const stateKeys = Object.keys(store.getState());
  store.use = {};

  for (const key of stateKeys) {
    store.use[key] = () => store((state) => state[key]);
  }

  return store;
};
