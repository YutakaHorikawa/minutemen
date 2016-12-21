import { TRANSITON_TO_ROOT_COMPONENT } from '../constants/';

export default function minutemenReducer(defaultComponent = 0) {
    const initialState = {
        uri: '/',
        component: defaultComponent 
    };

    return (state = initialState, action) => {
      switch (action.type) {
        case 'TRANSITION_BY_NAME':
            return {
                ...state,
                ...action.payload,
            };
        case TRANSITON_TO_ROOT_COMPONENT:
            return {
                ...state,
                ...action.payload,
                params: null,
            };
        default:
          return state
      }
    };
}
