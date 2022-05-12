/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import {
  ButtonSuccess, Card, Divider,
} from 'ui/components/atoms';
import { useViewport } from 'ui/hooks';
import { deviceSize, iconsMap } from 'ui/utils';
import { LoginForm } from '../login-form/login-form';

const ResponsiveDiv = styled.div`
  margin-right: 2vw;
  margin-left: 2vw;
  @media screen and (min-width: ${deviceSize.tablet}px) {
    max-width: 800px;
    margin-right: unset;
    margin-left: unset;
  }
`;

const HomeCard = () => {
  const navigate = useNavigate();
  const size = useViewport();
  const { t } = useTranslation();

  return (
    <ResponsiveDiv>
      <Card className="p-1" title={t('papalDay')}>
        <div className="grid">
          <div className="col-12 sm:col-12 md:col-12 lg:col-5 flex align-items-center justify-content-center">
            <LoginForm />
          </div>
          <div className="col-12 sm:col-12 md:col-12 lg:col-2">
            <Divider layout={size.width < deviceSize.tablet ? 'horizontal' : 'vertical'} align="center">
              <b>{t('or')}</b>
            </Divider>
          </div>
          <div className="col-12 sm:col-12 md:col-12 lg:col-5 flex align-items-center justify-content-center">
            <ButtonSuccess label={t('iWantToRegisterNewStaff')} onClick={() => navigate('/rejestracja')} icon={`pi ${iconsMap.staff}`} />
          </div>
        </div>
      </Card>
    </ResponsiveDiv>
  );
};

export { HomeCard };
