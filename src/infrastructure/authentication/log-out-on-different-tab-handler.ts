const logoutEventKey = 'dp-logout';

// eslint-disable-next-line no-unused-vars
type Listener = (event: StorageEvent) => void;

const publishLogoutEvent = () => {
  window.localStorage.setItem(logoutEventKey, new Date().toISOString());
};

const subscribeToLogoutEvent = (onLogout: () => void): Listener => {
  const listener: Listener = (event: StorageEvent) => {
    if (event.key === logoutEventKey) {
      onLogout();
    }
  };

  window.addEventListener('storage', listener);

  return listener;
};

const unsubscribeFromLogoutEvent = (listener: Listener) => {
  window.removeEventListener('storage', listener);
};

export default {
  publishLogoutEvent,
  subscribeToLogoutEvent,
  unsubscribeFromLogoutEvent,
};
