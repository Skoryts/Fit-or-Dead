import { IResponse } from './interfaces';

export default class Api {

  public static async get(): Promise<IResponse> {
    const res: IResponse = {
      status: 'ok',
      data: {},
    };

    return await Promise.resolve(res);
  }

}
