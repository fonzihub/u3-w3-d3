// qua ce il robottino che legge le richieste e fa i cambiamenti

const initialState = {
  cart: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      // in caso il type non è stato riconosciuto
      return state;
    //   ritorniamo lo state iniziale
  }
};

export default mainReducer;
