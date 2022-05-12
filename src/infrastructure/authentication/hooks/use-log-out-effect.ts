import { EffectCallback, useEffect } from 'react';
import LogOutOnDifferentTabHandler from '../log-out-on-different-tab-handler';

/**
 * Hook obsługujący wylogowywanie się na innej zakładce
 * @param effect Funkcja wywoływana gdy na innej zakładce użytkownik zostanie wylogowany
 */
const useLogOutEffect = (effect: EffectCallback) => {
  useEffect(() => {
    const listener = LogOutOnDifferentTabHandler.subscribeToLogoutEvent(() => {
      effect();
    });

    return () => {
      LogOutOnDifferentTabHandler.unsubscribeFromLogoutEvent(listener);
    };
  }, []);
};

export default useLogOutEffect;
