/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Plenipotentiary } from 'domain/entities';
import {
  FormCheckbox, FormInputMask, FormInputText,
} from 'ui/components/molecues';
import { useTranslation } from 'react-i18next';
import { AnimatedDiv, AppIcon, Divider } from 'ui/components/atoms';
import { AddressRegistrationFields } from '../address-registration-fields/address-registration-fields';
import { RegistrationFormInput } from '../registration-form/registration-form';

export type PlenipotentiaryFormInput = Plenipotentiary & {
  createAccountConsent: boolean,
  gdprConsent: boolean,
};

// eslint-disable-next-line max-len
const PlenipotentiaryRegistrationForm = () => {
  const { control } = useFormContext<RegistrationFormInput>();
  const { t } = useTranslation();

  return (
    <AnimatedDiv>
      <form className="formgrid grid">
        <Divider align="center">
          <AppIcon usage="plenipotentiary" className="pr-2" />
          {t('plenipotentiaryInfo')}
        </Divider>
        <div className="field col-12 md:col-6">
          <FormInputText
            id="plenipotentiary.fullName.firstName"
            control={control}
            name="plenipotentiary.fullName.firstName"
            label={t('firstName')}
            defaultValue=""
          />
        </div>
        <div className="field col-12 md:col-6">
          <FormInputText
            id="plenipotentiary.fullName.lastName"
            control={control}
            name="plenipotentiary.fullName.lastName"
            label={t('lastName')}
            defaultValue=""
          />
        </div>
        <div className="field col-12 md:col-3">
          <FormInputMask
            id="plenipotentiary.peselNumber"
            control={control}
            name="plenipotentiary.peselNumber"
            label={t('peselNumber')}
            mask="99999999999"
            autoClear={false}
            defaultValue=""
          />
        </div>
        <div className="field col-12 md:col-3">
          <FormInputText
            id="plenipotentiary.phoneNumber"
            control={control}
            name="plenipotentiary.phoneNumber"
            label={t('phoneNumber')}
            defaultValue=""
          />
        </div>
        <div className="field col-12 md:col-6">
          <FormInputText
            id="plenipotentiary.emailAddress"
            control={control}
            name="plenipotentiary.emailAddress"
            label={t('emailAddress')}
            defaultValue=""
          />
        </div>
        <Divider align="center">
          <AppIcon usage="address" className="pr-2" />
          {t('address')}
        </Divider>
        <AddressRegistrationFields name="plenipotentiary.address" />
        <div className="field col-12 md:col-12">
          <FormCheckbox
            inputId="plenipotentiary.gdprConsent"
            control={control}
            name="plenipotentiary.gdprConsent"
            label={t('gdprConsent')}
            defaultChecked={false}
            rules={{ required: true }}
            className="align-items-start"
          />
        </div>
      </form>
    </AnimatedDiv>
  );
};

export { PlenipotentiaryRegistrationForm };
