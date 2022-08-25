

const initialState = [];

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
        return [action.payload, ...state]
    default:
        return state;

  }
  
}
