import { requestLogin } from "src/requests/loginRequests";

describe('requestLogin', () => {
  describe('structure', () => {
    test('should be a function', () => {
      expect(typeof requestLogin).toBe('function');
    });
    test('should return a promise', () => {
      expect(requestLogin()).toBeInstanceOf(Promise);
    });

    describe('execution', () => {
      test('should return status', async () => {
        const response = await requestLogin('foo', 'bar');
        expect(response).toHaveProperty('status');
      });
      test('should return data', async () => {
        const response = await requestLogin('foo', 'bar');
        expect(response).toHaveProperty('data');
      });
    });
  });
});
