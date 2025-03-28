export const createSelectors = (store) => {
  const useStore = store;
  useStore.use = {};
  for (const k of Object.keys(store.getState())) {
    Object.defineProperty(useStore.use, k, {
      get: () => () => useStore((s) => s[k]),
    });
  }
  return useStore;
};
