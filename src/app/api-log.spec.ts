import { ApiLog } from './api-log';

describe('ApiLog', () => {
  it('should create an instance', () => {
    expect(new ApiLog(new Date('22.4.2020'), 'GET', 'http://localhost', 200)).toBeTruthy();
  });
});
