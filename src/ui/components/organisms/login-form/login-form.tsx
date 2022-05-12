/* eslint-disable jsx-a11y/label-has-associated-control */
import { Credentials } from 'domain/value-objects';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AppIcon, ButtonSecondary } from 'ui/components/atoms';
import { FormInputGroup } from 'ui/components/molecues';

const userIcon = <AppIcon usage="user" />;
const passwordIcon = <AppIcon usage="password" />;

const LoginForm = () => {
  const { control } = useForm<Credentials>();
  const { t } = useTranslation();

  return (
    <form className="grid">
      <div className="col-12 md:col-12">
        <FormInputGroup
          id="username"
          control={control}
          name="username"
          placeholder={t('username')}
          start={userIcon}
          defaultValue=""
        />
      </div>
      <div className="col-12 md:col-12">
        <FormInputGroup
          id="password"
          control={control}
          name="password"
          placeholder={t('password')}
          start={passwordIcon}
          defaultValue=""
          type="password"
        />
      </div>
      <div className="col-12">
        <ButtonSecondary label={t('iWantToLogIn')} />
      </div>
    </form>
  );
};

export { LoginForm };
