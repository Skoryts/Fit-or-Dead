import { actionTypes } from '../actionTypes';
import Api from '../api';
import { IHealthcheck, IResponse } from '../interfaces';

const healthCheck = (healthCheck: IHealthcheck) => ({
  payload: healthCheck,
  type: actionTypes.HEALTH_CHECK,
});

export const getHealthCheck = () => async (dispatch: any) => {
  const res: IResponse = await Api.get();
  dispatch(healthCheck(res.data as IHealthcheck));
};
