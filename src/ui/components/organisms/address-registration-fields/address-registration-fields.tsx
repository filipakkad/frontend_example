/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FormDropdown, FormInputMask, FormInputText } from 'ui/components/molecues';
import { useFormContext } from 'react-hook-form';
import { VOIVODESHIPS } from 'domain/data';
import { useTranslation } from 'react-i18next';
import { Address } from 'domain/value-objects';

type AddressRegistrationFieldsProps = {
  name: string,
  disabled?: boolean
}

const voivodeships = Object.keys(VOIVODESHIPS)
  .filter((item) => Number.isNaN(Number(item)))
  .map((name) => ({
    value: VOIVODESHIPS[name as keyof typeof VOIVODESHIPS],
    name: name.toLowerCase(),
  }));

interface AddressFormInput {
  [name: string]: Address
}

const AddressRegistrationFields = (props: AddressRegistrationFieldsProps) => {
  const { name, disabled } = props;
  const { control } = useFormContext<AddressFormInput>();
  const { t } = useTranslation();

  return (
    <>
      <div className="field col-12 md:col-6">
        <FormInputText
          id={`${name}.streetName`}
          control={control}
          name={`${name}.streetName`}
          label={t('street')}
          disabled={disabled}
        />
      </div>
      <div className="field col-6 md:col-3">
        <FormInputText
          id={`${name}.streetNumber`}
          control={control}
          name={`${name}.streetNumber`}
          label={t('streetNumber')}
          disabled={disabled}
        />
      </div>
      <div className="field col-6 md:col-3">
        <FormInputText
          id={`${name}.apartmentNumber`}
          control={control}
          name={`${name}.apartmentNumber`}
          label={t('apartmentNumber')}
          disabled={disabled}
        />
      </div>
      <div className="field col-6 md:col-3">
        <FormInputMask
          id={`${name}.zipCode`}
          control={control}
          name={`${name}.zipCode`}
          label={t('zipCode')}
          mask="99-999"
          autoClear={false}
          disabled={disabled}
        />
      </div>
      <div className="field col-6 md:col-3">
        <FormInputText
          id={`${name}.city`}
          control={control}
          name={`${name}.city`}
          label={t('city')}
          disabled={disabled}
        />
      </div>
      <div className="field col-12 md:col-6">
        <FormDropdown
          id={`${name}.voivodeship`}
          control={control}
          name={`${name}.voivodeship`}
          label={t('voivodeship')}
          options={voivodeships}
          optionLabel="name"
          optionValue="value"
          disabled={disabled}
        />
      </div>
    </>
  );
};

export { AddressRegistrationFields };
