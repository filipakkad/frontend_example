/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  Card, Steps, ButtonSuccess, ButtonSecondary, AnimatedDiv,
} from 'ui/components/atoms';
import { useTranslation } from 'react-i18next';
import { Plenipotentiary, Staff } from 'domain/entities';
import { devices, deviceSize } from 'ui/utils';
import {
  StaffRegistrationForm,
} from '../staff-registration-form/staff-registration-form';
import {
  PlenipotentiaryRegistrationForm,
} from '../plenipotentiary-registration-form/plenipotentiary-registration-form';
import { DemandRegistrationForm } from '../demand-registration-form/demand-registration-form';
import { RegistrationConfirmation } from '../registration-confirmation/registration-confirmation';

const StyledSteps = styled(Steps)`
  margin-bottom: 2rem;
  .p-steps-item {
    width: 33.333%;
  }
`;

const Div = styled.div`
  max-height: 80%;
  @media ${devices.laptop} {
    height: 37.1em;
  }
  overflow-y: auto;
`;

enum registrationStep {
  staff = 0,
  delivery = 1,
  plenipotentiary = 2,
}

export interface RegistrationFormInput {
  staffData: Staff & {
    materialsDemand: {
      copyAddressFromStaffAddress: boolean
    }
  },
  plenipotentiary: Plenipotentiary & {
    gdprConsent: boolean,
  }
}

interface RegistrationFormProps {
  className?: string;
}

const ResponsiveDiv = styled.div`
  margin-right: 2vw;
  margin-left: 2vw;
  @media screen and (min-width: ${deviceSize.tablet}px) {
    max-width: 800px;
    margin-right: unset;
    margin-left: unset;
  }
`;

const RegistrationForm = (props: RegistrationFormProps) => {
  const { className } = props;
  const [currentStep, setCurrentStep] = useState<registrationStep>(
    registrationStep.staff,
  );
  const { t } = useTranslation();
  const staffMethods = useForm<RegistrationFormInput>({ mode: 'onChange' });

  const [
    isRegistrationConfirmationVisible,
    setIsRegistrationConfirmationVisible,
  ] = useState(false);

  const onSubmit = useCallback(() => {
    setIsRegistrationConfirmationVisible(true);
  }, []);

  const triggerSubmit = useCallback(() => {
    if (staffMethods.formState.isValid) {
      staffMethods.handleSubmit(onSubmit)();
    }
  }, [staffMethods.formState.isValid]);

  const goBack = useCallback(() => {
    setCurrentStep(Math.max(registrationStep.staff, currentStep - 1));
  }, [currentStep]);

  const goForward = useCallback(() => {
    setCurrentStep(Math.min(registrationStep.plenipotentiary, currentStep + 1));
  }, [currentStep]);

  const onAccepted = useCallback(() => {
    setIsRegistrationConfirmationVisible(false);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(staffMethods));
  }, []);

  const onRejected = useCallback(() => {
    setIsRegistrationConfirmationVisible(false);
  }, []);

  const steps = useMemo(() => [
    { label: t('staff') },
    { label: t('materials') },
    { label: t('plenipotentiary') },
  ], []);

  const renderStep = useCallback(
    (currentStep: registrationStep) => {
      switch (currentStep) {
        case registrationStep.staff:
          return (
            <StaffRegistrationForm />
          );
        case registrationStep.delivery:
          return (
            <DemandRegistrationForm />
          );
        case registrationStep.plenipotentiary:
          return (
            <PlenipotentiaryRegistrationForm />
          );
        default:
          return (
            <StaffRegistrationForm />
          );
      }
    },
    [currentStep],
  );

  const renderButtons = useCallback(
    (currentStep: registrationStep) => {
      switch (currentStep) {
        case registrationStep.plenipotentiary:
          return (
            <>
              <div id="goback" className="col-6 md:col-offset-6 md:col-3">
                <ButtonSecondary onClick={goBack}>{t('goBack')}</ButtonSecondary>
              </div>
              <div id="register" className="col-6 md:col-3">
                <ButtonSuccess onClick={triggerSubmit}>
                  {t('register')}
                </ButtonSuccess>
              </div>
            </>
          );
        case registrationStep.staff:
          return (
            <div className="col-6 col-offset-6 md:col-offset-9 md:col-3">
              <ButtonSuccess onClick={goForward}>{t('goForward')}</ButtonSuccess>
            </div>
          );
        default:
          return (
            <>
              <div className="col-6 md:col-offset-6 md:col-3">
                <ButtonSecondary onClick={goBack}>{t('goBack')}</ButtonSecondary>
              </div>
              <div className="col-6 md:col-3">
                <ButtonSuccess onClick={goForward}>{t('goForward')}</ButtonSuccess>
              </div>
            </>
          );
      }
    },
    [currentStep],
  );

  return (
    <ResponsiveDiv>
      <AnimatedDiv>
        <Card title={t('registration')} className={className}>
          <StyledSteps
            activeIndex={currentStep}
            model={steps}
            onSelect={(e) => setCurrentStep(e.index)}
            readOnly={false}
          />
          <div className="grid" id="cardbody">
            <Div id="form" className="col-12 md:col-12">
              <FormProvider {...staffMethods}>
                {renderStep(currentStep)}
                {isRegistrationConfirmationVisible && (
                <RegistrationConfirmation
                  isVisible={isRegistrationConfirmationVisible}
                  onAccepted={onAccepted}
                  onRejected={onRejected}
                />
                )}
              </FormProvider>
            </Div>
          </div>
          <div className="grid">
            {renderButtons(currentStep)}
          </div>
        </Card>
      </AnimatedDiv>
    </ResponsiveDiv>
  );
};

export { RegistrationForm };
