import { IHealthcheck, IResponse } from './interfaces';

export default class Api {

  public static async get(): Promise<IResponse> {
    const hc: IHealthcheck = {
      text: 'Health Check',
      date: '2018-10-20',
    };
    const res: IResponse = {
      status: 'OK',
      data: hc,
    };

    return await Promise.resolve(res);
  }

}
