class AuthTokensProvider {
  private readonly AuthTokenKey = 'auth-token';

  private readonly RefreshTokenKey = 'refresh-token';

  public setTokens(authToken: string, refreshToken: string): void {
    localStorage.setItem(this.AuthTokenKey, authToken);
    localStorage.setItem(this.RefreshTokenKey, refreshToken);
  }

  public getAuthToken(): string | undefined {
    const token = localStorage.getItem(this.AuthTokenKey);
    return token !== null && token !== '' ? token : undefined;
  }

  public getRefreshToken(): string | undefined {
    const token = localStorage.getItem(this.RefreshTokenKey);
    return token !== null && token !== '' ? token : undefined;
  }

  public clearTokens(): void {
    localStorage.setItem(this.AuthTokenKey, '');
    localStorage.setItem(this.RefreshTokenKey, '');
  }
}

export default new AuthTokensProvider();
