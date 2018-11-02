import { HealthAction } from './actionTypes';
import Api from '../../api';
import { IHealthcheck, IResponse } from '../../interfaces/index';

const healthCheck = (health: IHealthcheck): HealthAction => ({
  type: 'HEALTH_SUCCESS',
  health,
});

export const getHealthCheck = () => async (dispatch: any) => {
  const res: IResponse = await Api.get();
  dispatch(healthCheck(res.data as IHealthcheck));
};
