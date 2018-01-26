

export function dataReducer(state={}, action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      //sessionStorage.setItem('data', {11: {eins: 'bla'}});
      let data = action.data || {};
      //console.log({ ...state });
      console.log(action.data);
      //let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
      //let newData = { ...action.data, ...state }; //?? Geht nicht object spread
      let newData = Object.assign({}, state, action.data);
      
      return newData;
    default: return state;
  }
}

