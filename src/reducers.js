

export function dataReducer(state={}, action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      return { ...state, ...action.data };
    default: return state;
  }
}

