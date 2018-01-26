

export function dataReducer(state='', action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      //sessionStorage.setItem('data', {11: {eins: 'bla'}});

      //let newData = { ..action.data, ...state }; //?? Geht nicht object spread
      let newData = Object.assign({}, state, action.data);
      
      return newData;
    default: return state;
  }
}

