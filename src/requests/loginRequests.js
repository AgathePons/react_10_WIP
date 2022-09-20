import api from './api';

// eslint-disable-next-line import/prefer-default-export
export async function requestLogin(email, password) {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });
    return response;
  }
  catch (err) {
    return err.response;
  }
}
