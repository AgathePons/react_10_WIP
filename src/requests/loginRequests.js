import serverInstance from './serverInstance';

// eslint-disable-next-line import/prefer-default-export
export async function requestLogin(email, password) {
  try {
    const response = await serverInstance.post('/login', {
      email,
      password,
    });
    return response;
  }
  catch (err) {
    return err.response;
  }
}
