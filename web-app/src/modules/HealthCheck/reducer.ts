import { HealthAction } from './actionTypes';
import { IHealthcheck } from './interfaces';
import {Reducer} from 'redux';

interface IInitialState {
  health: IHealthcheck;
  isLoading: boolean;
  error: object;
}

const initialState: IInitialState = {
  health: null,
  isLoading: false,
  error: null,
};

const reducer: Reducer<IInitialState> = (state = initialState, action: HealthAction): IInitialState => {
  switch (action.type) {
    case 'HEALTH_SUCCESS':
      return {...state, isLoading: false, health: action.health};
    case 'HEALTH_REQUEST':
      return {...state, isLoading: true};
    case 'HEALTH_FAILED':
      return {...state, isLoading: false, error: action.error};
    default:
      return state;
  }
};

export { reducer as healthCheckReducer };
