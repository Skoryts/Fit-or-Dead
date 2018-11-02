import { IHealthcheck } from './interfaces';

export type HealthAction =
  | { type: 'HEALTH_REQUEST' }
  | { type: 'HEALTH_SUCCESS', health: IHealthcheck }
  | { type: 'HEALTH_FAILED', error: Error };
