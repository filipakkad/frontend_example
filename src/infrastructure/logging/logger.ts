/* eslint-disable no-console */
class Logger {
  public static info = (message?: unknown, ...optionalParams: unknown[]): void => {
    console.info(message, optionalParams);
  };

  public static warn = (message?: unknown, ...optionalParams: unknown[]): void => {
    console.warn(message, optionalParams);
  };

  public static error = (error: unknown): void => {
    // TODO logowanie błędów
    console.log(error);
  };
}

export default Logger;
