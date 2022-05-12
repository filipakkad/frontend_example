import axios from 'axios';
import Logger from 'infrastructure/logging/logger';

class ErrorsHandler {
  public static handle = (error: unknown): void => {
    if (axios.isAxiosError(error)) {
      if (!error.response || !error.request) {
        Logger.error(error);
      }
    } else {
      Logger.error(error);
    }
  };
}

export default ErrorsHandler;
