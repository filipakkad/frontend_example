/* eslint-disable no-param-reassign */
import axios from 'axios';
import AuthenticationService from '../authentication-service';

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // eslint-disable-next-line max-len
    if (error.response?.status === 401 && originalRequest?.url !== AuthenticationService.refreshUrl) {
      try {
        if (!AuthenticationService.isAuthenticationInProgress) {
          await AuthenticationService.refresh();
        } else {
          await AuthenticationService.waitForAuthenticationFinish();
        }

        if (AuthenticationService.isLastAuthenticationTrialSucceeded) {
          return axios(originalRequest);
        }
      } catch (err) {
        // Uznajemy, że próba odświeżenia tokena się nie udała
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
