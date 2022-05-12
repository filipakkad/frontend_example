/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect } from 'react';
import { Staff } from 'domain/entities';
import { AnimatedDiv, AppIcon, Divider } from 'ui/components/atoms';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormCheckbox, FormInputText } from 'ui/components/molecues';
import { CheckboxChangeParams } from 'primereact/checkbox';
import { AddressRegistrationFields } from '../address-registration-fields/address-registration-fields';
import { RegistrationFormInput } from '../registration-form/registration-form';

export type DeliveryFormInput = Staff & {
  createAccountConsent: boolean,
  gdprConsent: boolean,
};

const Div = styled.div`
  padding-top: 0px;
  margin-bottom: 1rem;
`;

// eslint-disable-next-line max-len
const DemandRegistrationForm = () => {
  const { t } = useTranslation();
  const { control, setValue, getValues } = useFormContext<RegistrationFormInput>();

  const copyAddressFromStaffAddress = useWatch({
    control,
    name: 'staffData.materialsDemand.copyAddressFromStaffAddress',
  });

  useEffect(() => {
    setValue('staffData.materialsDemand.copyAddressFromStaffAddress', true);
    setValue('staffData.materialsDemand.deliveryAddress', getValues('staffData.address'));
  }, []);

  const onCopyAddressFromStaffAddressChange = useCallback((e: CheckboxChangeParams) => {
    setValue('staffData.materialsDemand.copyAddressFromStaffAddress', e.checked);
    if (e.checked) {
      setValue('staffData.materialsDemand.deliveryAddress', getValues('staffData.address'));
    }
  }, []);

  return (
    <AnimatedDiv>
      <form className="formgrid grid">
        <Divider align="center">
          <AppIcon usage="demand" className="pr-2" />
          {t('demandMessage')}
        </Divider>
        <div className="field col-12 md:col-4">
          <FormInputText
            id="staffData.materialsDemand.cansAmount"
            control={control}
            name="staffData.materialsDemand.cansAmount"
            label={t('cansAmount')}
            defaultValue=""
            type="number"
          />
        </div>
        <div className="field col-12 md:col-4">
          <FormInputText
            id="staffData.materialsDemand.postersAmount"
            control={control}
            name="staffData.materialsDemand.postersAmount"
            label={t('postersAmount')}
            defaultValue=""
            type="number"
          />
        </div>
        <div className="field col-12 md:col-4">
          <FormInputText
            id="staffData.materialsDemand.volunteerGratitudeDocuments"
            control={control}
            name="staffData.materialsDemand.volunteerGratitudeDocuments"
            label={t('volunteerGratitudeDocuments')}
            defaultValue=""
            type="number"
          />
        </div>
      </form>
      <form className="formgrid grid">
        <Divider align="center">
          <AppIcon usage="delivery" className="pr-2" />
          {t('deliveryAddressMessage')}
        </Divider>
        <Div className="col-12 md:col-12">
          <FormCheckbox
            inputId="staffData.materialsDemand.copyAddressFromStaffAddress"
            control={control}
            name="staffData.materialsDemand.copyAddressFromStaffAddress"
            label={[t('deliverToStaffAddress'), t('deliverToOtherAddress')]}
            onChange={onCopyAddressFromStaffAddressChange}
            defaultChecked
          />
        </Div>
        <AddressRegistrationFields name="staffData.materialsDemand.deliveryAddress" disabled={copyAddressFromStaffAddress} />
      </form>
    </AnimatedDiv>
  );
};

export { DemandRegistrationForm };
