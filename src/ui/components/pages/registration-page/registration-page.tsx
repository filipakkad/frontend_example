import React from 'react';
import styled from 'styled-components';
import { Navbar, RegistrationForm } from 'ui/components/organisms';
import { PageLayout } from 'ui/components/templates';

const StyledRegistrationForm = styled(RegistrationForm)`
  opacity: 90%;
`;

const RegistrationPage = () => (
  <PageLayout
    navbar={<Navbar />}
    content={(
      <div className="ml-auto mt-auto mb-auto mr-auto lg:mr-7 pt-4 pb-4">
        <StyledRegistrationForm />
      </div>
      )}
  />
);

export { RegistrationPage };
