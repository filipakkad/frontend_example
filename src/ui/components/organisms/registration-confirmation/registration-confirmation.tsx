import { VOIVODESHIPS } from 'domain/data';
import { Address } from 'domain/value-objects';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AppIcon, Divider } from 'ui/components/atoms';
import { ConfirmDialog, InfoRow } from 'ui/components/molecues';
import { RegistrationFormInput } from '../registration-form/registration-form';

interface RegistrationConfirmationProps {
  isVisible: boolean;
  onAccepted: () => void;
  onRejected: () => void;
}

const printAddress = (address: Address): JSX.Element => {
  const {
    streetName, streetNumber, apartmentNumber, zipCode, city,
  } = address;

  return (
    <>
      {`${streetName || ''} ${streetNumber || ''}${apartmentNumber ? `/${apartmentNumber}` : ''}`}
      <br />
      {`${zipCode || ''} ${city || ''}`}
      <br />
      {VOIVODESHIPS[address.voivodeship] || ''}
    </>
  );
};

const RegistrationConfirmation = (props: RegistrationConfirmationProps) => {
  const { getValues } = useFormContext<RegistrationFormInput>();

  const { isVisible, onAccepted, onRejected } = props;
  const plenipotentiary = getValues('plenipotentiary');
  const staff = getValues('staffData');
  const materialsDemand = getValues('staffData.materialsDemand');
  const { t } = useTranslation();

  return (
    <ConfirmDialog
      isVisible={isVisible}
      onAccepted={onAccepted}
      onRejected={onRejected}
      rejectButtonLabel={t('goBack')}
      acceptButtonLabel={t('iConfirm')}
      header={t('pleaseConfirmBelow')}
    >
      <Divider align="center">
        <AppIcon usage="staff" className="pr-2" />
        {t('staff')}
      </Divider>
      <InfoRow fieldName={t('staffName')} fieldValue={staff.name} />
      <InfoRow fieldName={t('emailAddress')} fieldValue={staff.emailAddress} />
      <InfoRow fieldName={t('phoneNumber')} fieldValue={staff.phoneNumber} />
      <InfoRow fieldName={t('volunteersAmount')} fieldValue={staff.volunteersAmount} />
      <InfoRow fieldName={t('area')} fieldValue={staff.area} />
      <InfoRow fieldName={t('staffAddress')} fieldValue={printAddress(staff.address)} />
      <Divider align="center">
        <AppIcon usage="delivery" className="pr-2" />
        {t('delivery')}
      </Divider>
      <InfoRow fieldName={t('cansAmount')} fieldValue={materialsDemand.cansAmount} />
      <InfoRow fieldName={t('postersAmount')} fieldValue={materialsDemand.postersAmount} />
      <InfoRow fieldName={t('volunteerGratitudeDocuments')} fieldValue={materialsDemand.volunteerGratitudeDocuments} />
      <InfoRow fieldName={t('deliveryAddress')} fieldValue={printAddress(materialsDemand.deliveryAddress)} />
      <Divider align="center">
        <AppIcon usage="plenipotentiary" className="pr-2" />
        {t('plenipotentiary')}
      </Divider>
      <InfoRow fieldName={`${t('firstName')} ${t('and')} ${t('lastName')}`} fieldValue={`${plenipotentiary.fullName.firstName} ${plenipotentiary.fullName.lastName}`} />
      <InfoRow fieldName={t('peselNumber')} fieldValue={plenipotentiary.peselNumber} />
      <InfoRow fieldName={t('emailAddress')} fieldValue={plenipotentiary.emailAddress} />
      <InfoRow fieldName={t('phoneNumber')} fieldValue={plenipotentiary.phoneNumber} />
      <InfoRow fieldName={t('plenipotentiaryAddress')} fieldValue={printAddress(plenipotentiary.address)} />
    </ConfirmDialog>
  );
};

export { RegistrationConfirmation };
