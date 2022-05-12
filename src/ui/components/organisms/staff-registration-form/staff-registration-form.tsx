/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FormInputText } from 'ui/components/molecues';
import { useFormContext } from 'react-hook-form';
import { Staff } from 'domain/entities';
import { useTranslation } from 'react-i18next';
import { AnimatedDiv, AppIcon, Divider } from 'ui/components/atoms';
import { AddressRegistrationFields } from '../address-registration-fields/address-registration-fields';
import { RegistrationFormInput } from '../registration-form/registration-form';

export type StaffFormInput = Staff;

// eslint-disable-next-line max-len
const StaffRegistrationForm = () => {
  const { control } = useFormContext<RegistrationFormInput>();
  const { t } = useTranslation();

  return (
    <AnimatedDiv>
      <form className="formgrid grid">
        <Divider align="center">
          <AppIcon usage="staff" className="pr-2" />
          {t('staffInfo')}
        </Divider>
        <div className="field col-12 md:col-12">
          <FormInputText
            id="staffData.name"
            control={control}
            name="staffData.name"
            label={t('staffName')}
            defaultValue=""
          />
        </div>
        <div className="field col-12 md:col-6">
          <FormInputText
            id="staffData.phoneNumber"
            control={control}
            name="staffData.phoneNumber"
            label={t('phoneNumber')}
            defaultValue=""
          />
        </div>
        <div className="field col-12 md:col-6">
          <FormInputText
            id="staffData.emailAddress"
            control={control}
            name="staffData.emailAddress"
            label={t('emailAddress')}
            defaultValue=""
          />
        </div>
        <Divider align="center">
          <AppIcon usage="address" className="pr-2" />
          {t('staffAddress')}
        </Divider>
        <AddressRegistrationFields name="staffData.address" />
        <Divider align="center">
          <AppIcon usage="actionPlan" className="pr-2" />
          {t('actionMessage')}
        </Divider>
        <div className="field col-12 md:col-6">
          <FormInputText
            id="staffData.volunteersAmount"
            control={control}
            name="staffData.volunteersAmount"
            label={t('volunteersAmount')}
            defaultValue=""
            type="number"
          />
        </div>
        <div className="field col-12 md:col-6">
          <FormInputText
            id="staffData.area"
            control={control}
            name="staffData.area"
            label={t('area')}
            defaultValue=""
          />
        </div>
      </form>
    </AnimatedDiv>
  );
};

export { StaffRegistrationForm };
