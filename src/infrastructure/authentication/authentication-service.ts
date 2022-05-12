/* eslint-disable no-underscore-dangle */
import axios, { AxiosResponse } from 'axios';
import ErrorsHandler from 'infrastructure/errors-handling/errors-handler';
import AuthTokensProvider from './auth-tokens-provider';
import LogOutOnDifferentTabHandler from './log-out-on-different-tab-handler';
import AuthenticationTokensDto from './models/authentication-tokens-dto';
import LogInCommand from './models/log-in-command';
import LogOutCommand from './models/log-out-command';
import RefreshTokenCommand from './models/refresh-token-command';

class AuthenticationService {
  private inProgress: boolean = false;

  private _isLastAuthenticationTrialSucceeded: boolean | undefined = undefined;

  private authenticationPromise: Promise<AxiosResponse<AuthenticationTokensDto>> | undefined;

  public authenticate = async (email: string, password: string): Promise<unknown> => {
    try {
      this.inProgress = true;

      this.authenticationPromise = axios.post<AuthenticationTokensDto, AxiosResponse<AuthenticationTokensDto>, LogInCommand>('/user/log-in', {
        email,
        password,
      });

      const result = await this.authenticationPromise!;

      this._isLastAuthenticationTrialSucceeded = true;
      AuthTokensProvider.setTokens(result.data.authToken, result.data.refreshToken);
    } catch (error) {
      this._isLastAuthenticationTrialSucceeded = false;
      ErrorsHandler.handle(error);

      return Promise.reject(error);
    } finally {
      this.inProgress = false;
    }

    return Promise.resolve();
  };

  public refresh = async (): Promise<unknown> => {
    try {
      this.inProgress = true;

      const refreshToken = AuthTokensProvider.getRefreshToken();
      if (refreshToken === undefined) {
        return Promise.reject(new Error('Refresh token not found'));
      }

      // eslint-disable-next-line max-len
      this.authenticationPromise = axios.post<AuthenticationTokensDto, AxiosResponse<AuthenticationTokensDto>, RefreshTokenCommand>(this.refreshUrl, {
        refreshToken,
      });

      const result = await this.authenticationPromise!;

      this._isLastAuthenticationTrialSucceeded = true;
      AuthTokensProvider.setTokens(result.data.authToken, result.data.refreshToken);
    } catch (error) {
      this._isLastAuthenticationTrialSucceeded = false;
      ErrorsHandler.handle(error);

      try {
        // Nie udało się odświeżyć tokena uwierzytelniającego, więc się wylogowujemy
        await this.logout();
      } catch (err) {
        // Jeśli wylogowywanie się nie udało to trudno
        // - i tak token uwierzytelniający oraz odświeżający są nieważne
      }

      return Promise.reject(error);
    } finally {
      this.inProgress = false;
    }

    return Promise.resolve();
  };

  // eslint-disable-next-line class-methods-use-this
  public logout = async (): Promise<unknown> => {
    const refreshToken = AuthTokensProvider.getRefreshToken();

    if (refreshToken === undefined) {
      return Promise.resolve(new Error('Refresh token not found'));
    }

    try {
      await axios.post<void, AxiosResponse<void>, LogOutCommand>('/user/log-out', {
        refreshToken,
      });

      AuthTokensProvider.clearTokens();
      LogOutOnDifferentTabHandler.publishLogoutEvent();
    } catch (error) {
      ErrorsHandler.handle(error);

      return Promise.reject(error);
    }

    return Promise.resolve();
  };

  public refreshUrl: string = '/user/refresh-token';

  // eslint-disable-next-line class-methods-use-this
  public get isAuthenticated(): boolean {
    return AuthTokensProvider.getAuthToken() !== undefined;
  }

  public get isLastAuthenticationTrialSucceeded(): boolean {
    return this._isLastAuthenticationTrialSucceeded === true;
  }

  public get isAuthenticationInProgress(): boolean {
    return this.inProgress;
  }

  public waitForAuthenticationFinish = (): Promise<void> => {
    if (this.authenticationPromise === undefined) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      this.authenticationPromise!.then(() => {
        resolve();
      }, () => resolve());
    });
  };
}

export default new AuthenticationService();
